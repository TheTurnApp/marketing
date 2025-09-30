"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterData } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

export function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
      <div className="flex items-center space-x-2 text-green-400">
        <CheckCircle className="h-5 w-5" />
        <span>Thank you for subscribing!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Honeypot field for spam protection */}
      <input
        {...register("honeypot")}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />
      
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="flex-1">
          <Input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className={`bg-white ${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="secondary"
          className="whitespace-nowrap"
        >
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Subscribe"
          )}
        </Button>
      </div>

      {submitStatus === "error" && (
        <div className="flex items-center space-x-2 text-red-400 text-sm">
          <AlertCircle className="h-4 w-4" />
          <span>Something went wrong. Please try again.</span>
        </div>
      )}
    </form>
  );
}