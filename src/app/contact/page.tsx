import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact - Regent Golf Operations Platform",
  description: "Get in touch with Regent to learn how we can transform your golf facility's beverage service. Schedule a consultation or contact our team directly.",
};

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@regentops.com",
      description: "Get in touch for general inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "Available by appointment",
      description: "Schedule a call through our calendar"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      description: "We respond to all inquiries promptly"
    }
  ];

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-navy to-navy-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold sm:text-5xl lg:text-6xl">
              Let's Elevate Your{" "}
              <span className="text-gold">Beverage Service</span>
            </h1>
            <p className="mt-6 text-xl text-silver-300 max-w-3xl mx-auto">
              Ready to transform your golf facility's operations? Schedule a 
              consultation to learn how Regent can deliver results in just 2-3 weeks.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info & Calendar */}
            <div className="mt-12 lg:mt-0 space-y-8">
              {/* Calendar Booking */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mr-4">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy">
                        Schedule a Consultation
                      </h3>
                      <p className="text-navy-600">
                        Book a 30-minute call to discuss your facility's needs
                      </p>
                    </div>
                  </div>
                  
                  {/* Calendly embed placeholder */}
                  <div className="bg-navy-50 rounded-lg p-8 text-center">
                    <Calendar className="w-16 h-16 text-navy mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-navy mb-2">
                      Calendar Integration
                    </h4>
                    <p className="text-navy-600 mb-4">
                      Calendly integration would be embedded here
                    </p>
                    <div className="text-sm text-navy-500">
                      Environment variable: NEXT_PUBLIC_MEETING_URL
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-silver-200">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="flex items-center justify-center w-10 h-10 bg-navy-100 rounded-lg mr-4 mt-1">
                          <info.icon className="h-5 w-5 text-navy" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy">{info.title}</h4>
                          <p className="text-navy-600 font-medium">{info.value}</p>
                          <p className="text-sm text-navy-500 mt-1">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-navy sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-silver-200">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold text-navy mb-4">
                  How long does implementation take?
                </h3>
                <p className="text-navy-600">
                  Most facilities are up and running within 2-3 weeks. This includes 
                  staff training, menu configuration, and member rollout.
                </p>
              </CardContent>
            </Card>

            <Card className="border-silver-200">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold text-navy mb-4">
                  What kind of results can we expect?
                </h3>
                <p className="text-navy-600">
                  Our clients typically see a 30% increase in beverage cart revenue 
                  within the first quarter, along with improved member satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="border-silver-200">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold text-navy mb-4">
                  Do you integrate with existing POS systems?
                </h3>
                <p className="text-navy-600">
                  Yes, Regent integrates with most major POS systems used in golf 
                  facilities. We handle the technical integration during setup.
                </p>
              </CardContent>
            </Card>

            <Card className="border-silver-200">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold text-navy mb-4">
                  What ongoing support do you provide?
                </h3>
                <p className="text-navy-600">
                  We provide ongoing customer success support, regular system updates, 
                  and performance optimization to ensure continued success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-navy sm:text-4xl">
              What Happens Next?
            </h2>
            <p className="mt-4 text-lg text-navy-600 max-w-3xl mx-auto">
              Our consultation process is designed to understand your unique needs 
              and demonstrate exactly how Regent can benefit your facility.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-navy rounded-xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">
                Initial Consultation
              </h3>
              <p className="text-navy-600">
                30-minute call to understand your facility's current operations 
                and specific challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-navy rounded-xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">
                Custom Proposal
              </h3>
              <p className="text-navy-600">
                Detailed proposal showing projected results, implementation 
                timeline, and investment details.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-navy rounded-xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">
                Implementation
              </h3>
              <p className="text-navy-600">
                If we're a good fit, we begin the 2-3 week implementation 
                process with your dedicated success team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}