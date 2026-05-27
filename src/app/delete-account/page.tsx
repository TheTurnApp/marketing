import { Metadata } from "next";
import Link from "next/link";
import { DeleteAccountForm } from "@/components/DeleteAccountForm";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ShieldCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Delete Your Account - The Turn",
  description:
    "Request deletion of your The Turn account and associated personal data.",
  alternates: {
    canonical: "/delete-account",
  },
};

export default function DeleteAccount() {
  const info = [
    {
      icon: Clock,
      title: "Processed within 30 days",
      description:
        "We'll confirm by email once your account and personal data have been deleted.",
    },
    {
      icon: ShieldCheck,
      title: "What gets deleted",
      description:
        "Your profile, order history, saved payment methods, and any other personal information tied to your account.",
    },
    {
      icon: Mail,
      title: "Prefer to email?",
      description: "Send your request directly to support@trytheturn.com.",
    },
  ];

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-ink to-ink-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold sm:text-5xl lg:text-6xl">
              Delete Your <span className="text-gold">Account</span>
            </h1>
            <p className="mt-6 text-xl text-silver-300 max-w-3xl mx-auto">
              Submit a request to remove your account and personal data from The
              Turn. We'll handle it promptly and confirm by email.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <DeleteAccountForm />
            </div>

            <div className="mt-12 lg:mt-0 space-y-6">
              {info.map((item, index) => (
                <Card key={index} className="border-silver-200">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 bg-ink-100 rounded-lg mr-4 mt-1">
                        <item.icon className="h-5 w-5 text-ink" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-ink">{item.title}</h4>
                        <p className="text-sm text-ink-600 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <p className="text-sm text-ink-500">
                For more on how we handle your data, see our{" "}
                <Link
                  href="/privacy"
                  className="text-ink underline hover:text-gold transition-colors"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
