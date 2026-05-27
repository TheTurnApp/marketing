"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { deleteAccountSchema, type DeleteAccountData } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const SUPPORT_EMAIL = "support@trytheturn.com";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xykvlwzo";

export function DeleteAccountForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DeleteAccountData>({
    resolver: zodResolver(deleteAccountSchema),
  });

  const onSubmit = async (data: DeleteAccountData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "Account deletion request",
          name: data.name,
          phone: data.phone,
          email: data.email || "(not provided)",
          reason: data.reason || "(none provided)",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <Card>
        <CardContent className="p-8">
          <div className="flex items-start space-x-3 text-green-700 bg-green-50 p-4 rounded-lg">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Request received.</p>
              <p className="text-sm text-green-700/80 mt-1">
                We'll process your deletion request and confirm by email once
                it's complete. This typically takes up to 30 days.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-display text-ink">
          Request Account Deletion
        </CardTitle>
        <p className="text-ink-600">
          Submit the form below and we'll delete your account and associated
          personal data. We'll confirm by email once it's done.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot field for spam protection */}
          <input
            {...register("honeypot")}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="space-y-2">
            <Label htmlFor="name" className="text-ink font-medium">
              Name *
            </Label>
            <Input
              id="name"
              {...register("name")}
              className={errors.name ? "border-red-500" : ""}
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-ink font-medium">
              Phone number *
            </Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              className={errors.phone ? "border-red-500" : ""}
              placeholder="(555) 123-4567"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
            <p className="text-sm text-ink-500">
              The phone number tied to your account, so we can find and verify
              it.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-ink font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
            <p className="text-sm text-ink-500">
              Optional. We'll only use this if we can't locate your account by
              phone.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason" className="text-ink font-medium">
              Reason (optional)
            </Label>
            <Textarea
              id="reason"
              {...register("reason")}
              placeholder="Anything you'd like to share about why you're leaving — it helps us improve."
              rows={4}
            />
          </div>

          {submitStatus === "error" && (
            <div className="flex items-start space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
              <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <span className="text-sm">
                Something went wrong. Please try again or email us directly at{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="underline hover:text-red-800 transition-colors"
                >
                  {SUPPORT_EMAIL}
                </a>
                .
              </span>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-lg py-3"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Deletion Request"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
