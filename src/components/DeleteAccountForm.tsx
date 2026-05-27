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
import { CheckCircle, Mail } from "lucide-react";

const SUPPORT_EMAIL = "support@trytheturn.com";

export function DeleteAccountForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeleteAccountData>({
    resolver: zodResolver(deleteAccountSchema),
  });

  const onSubmit = (data: DeleteAccountData) => {
    const subject = "Account deletion request";
    const body = [
      `Name: ${data.name}`,
      `Account email: ${data.email}`,
      "",
      "Reason (optional):",
      data.reason || "(none provided)",
      "",
      "I am requesting deletion of my account and associated personal data.",
    ].join("\n");

    const mailtoUrl = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card>
        <CardContent className="p-8">
          <div className="flex items-start space-x-3 text-green-700 bg-green-50 p-4 rounded-lg">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Your email client should have opened.</p>
              <p className="text-sm text-green-700/80 mt-1">
                Send the message to complete your request. If nothing opened,
                email us directly at{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="underline hover:text-gold transition-colors"
                >
                  {SUPPORT_EMAIL}
                </a>
                .
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
            <Label htmlFor="email" className="text-ink font-medium">
              Account email *
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
              placeholder="The email tied to your account"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
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

          <Button type="submit" className="w-full text-lg py-3">
            <Mail className="mr-2 h-5 w-5" />
            Submit Deletion Request
          </Button>

          <p className="text-sm text-ink-500 text-center">
            Submitting will open your email client with a prefilled message to{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="underline hover:text-gold transition-colors"
            >
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
