import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

// Rate limiting store (in production, use Redis or a proper database)
const rateLimit = new Map<string, { count: number; timestamp: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

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
    const ip = request.headers.get("x-forwarded-for") || 
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
    const result = contactFormSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.issues },
        { status: 400 }
      );
    }

    const { name, email, phone, clubName, title, clubSize, challenges, honeypot } = result.data;

    // Check honeypot (should be empty)
    if (honeypot && honeypot.length > 0) {
      // Silent fail for bots
      return NextResponse.json({ success: true });
    }

    // In a real application, you would:
    // 1. Send email notification using a service like Postmark, SendGrid, etc.
    // 2. Store the contact in a database
    // 3. Add to CRM system
    // 4. Send auto-reply to the user

    // For demo purposes, we'll just log the contact form submission
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      clubName,
      title,
      clubSize,
      challenges,
      timestamp: new Date().toISOString(),
      ip: ip
    });

    // Simulate email sending
    const emailContent = `
New contact form submission from The Turn website:

Name: ${name}
Email: ${email}
Phone: ${phone}
Club/Facility: ${clubName}
Title: ${title || "Not provided"}
Club Size: ${clubSize || "Not provided"}
Challenges: ${challenges || "Not provided"}

Submitted at: ${new Date().toISOString()}
IP Address: ${ip}
    `;

    console.log("Email content that would be sent:", emailContent);

    // In production, you would send an email here:
    // await sendEmail({
    //   to: process.env.CONTACT_TO || "hello@trytheturn.com",
    //   from: process.env.CONTACT_FROM || "noreply@trytheturn.com",
    //   subject: `New Contact: ${name} from ${clubName}`,
    //   text: emailContent
    // });

    return NextResponse.json({ 
      success: true, 
      message: "Thank you for your message. We'll be in touch within 24 hours." 
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}