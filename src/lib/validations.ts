import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  clubName: z.string().min(2, "Club name must be at least 2 characters"),
  title: z.string().optional(),
  clubSize: z.enum(["small", "medium", "large", "enterprise"]).optional(),
  challenges: z.string().optional(),
  honeypot: z.string().max(0, "Bot detected"), // Anti-spam honeypot
});

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  honeypot: z.string().max(0, "Bot detected"), // Anti-spam honeypot
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;