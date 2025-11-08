import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations";

// Rate limiting store (in production, use Redis or a proper database)
const rateLimit = new Map<string, { count: number; timestamp: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 3; // Lower limit for newsletter signup

  const current = rateLimit.get(ip);

  if (!current) {
    rateLimit.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (now - current.timestamp > windowMs) {
    // Reset window
    rateLimit.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (current.count >= maxRequests) {
    return false;
  }

  current.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate the request body
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const { email, honeypot } = result.data;

    // Check honeypot (should be empty)
    if (honeypot && honeypot.length > 0) {
      // Silent fail for bots
      return NextResponse.json({ success: true });
    }

    // In a real application, you would:
    // 1. Add email to newsletter service (ConvertKit, Mailchimp, etc.)
    // 2. Send welcome email
    // 3. Store in database with subscription preferences

    // For demo purposes, we'll just log the newsletter signup
    console.log("Newsletter signup:", {
      email,
      timestamp: new Date().toISOString(),
      ip: ip,
    });

    // In production, you would integrate with your email service:
    // if (process.env.CONVERTKIT_API_KEY && process.env.CONVERTKIT_FORM_ID) {
    //   await fetch(`https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       api_key: process.env.CONVERTKIT_API_KEY,
    //       email: email,
    //       tags: ['regent-website']
    //     })
    //   });
    // }

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing to our newsletter!",
    });
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
