import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Settings, Menu, Smartphone, TrendingUp, Users, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works - Regent Golf Operations Platform",
  description: "Learn how Regent transforms golf facility beverage service in just 2-3 weeks with our sophisticated on-course ordering platform.",
};

export default function HowItWorks() {
  const implementationSteps = [
    {
      week: "Week 1",
      title: "Setup & Training",
      icon: Settings,
      description: "Brief staff training session, menu configuration assistance, and system integration.",
      details: [
        "30-minute staff training session",
        "System configuration and setup",
        "Integration with existing POS systems",
        "Initial menu upload and pricing"
      ]
    },
    {
      week: "Week 2", 
      title: "Menu Configuration",
      icon: Menu,
      description: "Custom menu creation, pricing optimization, testing and refinement.",
      details: [
        "Custom menu design and categorization",
        "Strategic pricing optimization",
        "Cart location and route mapping",
        "System testing and refinement"
      ]
    },
    {
      week: "Week 3",
      title: "Member Launch",
      icon: Users,
      description: "Soft launch with select members, full rollout, and performance monitoring.",
      details: [
        "Soft launch with VIP members",
        "Feedback collection and adjustments",
        "Full member rollout",
        "Performance monitoring and optimization"
      ]
    }
  ];

  const memberExperience = [
    {
      step: 1,
      title: "Browse & Order",
      icon: Smartphone,
      description: "Members use the intuitive mobile interface to browse available beverages and place orders directly from the course."
    },
    {
      step: 2,
      title: "Real-Time Tracking",
      icon: MapPin,
      description: "Live cart location updates and order status notifications keep members informed throughout the delivery process."
    },
    {
      step: 3,
      title: "Seamless Delivery",
      icon: TrendingUp,
      description: "Professional cart staff deliver orders with the same high-touch service your members expect."
    }
  ];

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-navy to-navy-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold sm:text-5xl lg:text-6xl">
              Sophisticated On-Course Ordering,{" "}
              <span className="text-gold">Simplified</span>
            </h1>
            <p className="mt-6 text-xl text-silver-300 max-w-3xl mx-auto">
              Transform your beverage cart operations with a proven implementation 
              process that delivers results in just 2-3 weeks.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-navy sm:text-4xl">
              Implementation Process
            </h2>
            <p className="mt-4 text-lg text-navy-600 max-w-3xl mx-auto">
              Our streamlined approach ensures rapid deployment without disrupting 
              your current operations.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {implementationSteps.map((step, index) => (
              <Card key={index} className="border-silver-200 shadow-lg relative">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-navy rounded-xl mb-6">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="bg-gold text-navy text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    {step.week}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-navy mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-navy-600 mb-6">
                    {step.description}
                  </p>

                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-navy-600">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Member Experience Flow */}
      <section className="py-16 lg:py-24 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-navy sm:text-4xl">
              Member Experience Flow
            </h2>
            <p className="mt-4 text-lg text-navy-600 max-w-3xl mx-auto">
              A seamless ordering experience that enhances rather than replaces 
              the personal service your members value.
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {memberExperience.map((experience, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:flex-1">
                  <Card className="shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mr-4">
                          <experience.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                          <span className="text-navy font-bold text-sm">{experience.step}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-display font-bold text-navy mb-4">
                        {experience.title}
                      </h3>
                      
                      <p className="text-navy-600 text-lg">
                        {experience.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:flex-1">
                  <div className="bg-gradient-to-br from-navy-50 to-gold-50 rounded-2xl p-8 flex items-center justify-center">
                    {experience.step === 1 ? (
                      // Custom SVG for Browse & Order step
                      <div className="w-48 h-48">
                        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                          <defs>
                            <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style={{stopColor:"#1B2951", stopOpacity:1}} />
                              <stop offset="100%" style={{stopColor:"#3A4F83", stopOpacity:1}} />
                            </linearGradient>
                          </defs>
                          
                          {/* Minimal phone outline */}
                          <rect x="35" y="20" width="50" height="80" rx="8" ry="8" fill="none" stroke="#1B2951" strokeWidth="2"/>
                          
                          {/* Screen area */}
                          <rect x="40" y="28" width="40" height="64" rx="4" ry="4" fill="#F8F6F0"/>
                          
                          {/* Simple interface elements */}
                          <rect x="44" y="35" width="32" height="2" rx="1" fill="#1B2951"/>
                          <rect x="44" y="40" width="24" height="1.5" rx="0.5" fill="#A8B2C1"/>
                          
                          <rect x="44" y="48" width="32" height="2" rx="1" fill="#1B2951"/>
                          <rect x="44" y="53" width="20" height="1.5" rx="0.5" fill="#A8B2C1"/>
                          
                          <rect x="44" y="61" width="32" height="2" rx="1" fill="#1B2951"/>
                          <rect x="44" y="66" width="28" height="1.5" rx="0.5" fill="#A8B2C1"/>
                          
                          {/* Subtle action indicator */}
                          <circle cx="72" cy="80" r="4" fill="#D4A574"/>
                          <path d="M70 80 L72 82 L75 78" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    ) : experience.step === 2 ? (
                      // Custom SVG for Real-Time Tracking step
                      <div className="w-48 h-48">
                        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                          {/* Phone outline */}
                          <rect x="35" y="20" width="50" height="80" rx="8" ry="8" fill="none" stroke="#1B2951" strokeWidth="2"/>
                          
                          {/* Screen area */}
                          <rect x="40" y="28" width="40" height="64" rx="4" ry="4" fill="#F8F6F0"/>
                          
                          {/* Location pin icon */}
                          <path d="M60 45 C55 45, 51 49, 51 54 C51 59, 60 70, 60 70 S69 59, 69 54 C69 49, 65 45, 60 45 Z" fill="#D4A574"/>
                          
                          {/* Pin center dot */}
                          <circle cx="60" cy="54" r="3" fill="#1B2951"/>
                          
                          {/* Status indicator at bottom */}
                          <rect x="45" y="78" width="30" height="3" rx="1.5" fill="#1B2951"/>
                        </svg>
                      </div>
                    ) : experience.step === 3 ? (
                      // Custom SVG for Seamless Delivery step
                      <div className="w-48 h-48">
                        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                          {/* Simple checkmark in circle */}
                          <circle cx="60" cy="60" r="25" fill="none" stroke="#1B2951" strokeWidth="3"/>
                          <path d="M45 60 L55 70 L75 50" stroke="#D4A574" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    ) : (
                      // Default icon for any other steps
                      <div className="text-center">
                        <experience.icon className="w-16 h-16 text-navy mx-auto mb-4" />
                        <p className="text-navy-600 font-medium">Step {experience.step} Illustration</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-navy sm:text-4xl">
              Why Golf Facilities Choose Regent
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-silver-200">
              <CardContent className="p-8">
                <div className="text-4xl font-display font-bold text-navy mb-2">30%</div>
                <div className="text-navy-600 mb-4">Average Revenue Increase</div>
                <p className="text-sm text-navy-500">
                  Direct-to-consumer ordering increases frequency and order values
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-silver-200">
              <CardContent className="p-8">
                <div className="text-4xl font-display font-bold text-navy mb-2">2-3</div>
                <div className="text-navy-600 mb-4">Weeks Implementation</div>
                <p className="text-sm text-navy-500">
                  Rapid deployment without disrupting current operations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-silver-200">
              <CardContent className="p-8">
                <div className="text-4xl font-display font-bold text-navy mb-2">90%+</div>
                <div className="text-navy-600 mb-4">Member Satisfaction</div>
                <p className="text-sm text-navy-500">
                  Enhanced convenience without sacrificing personal service
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white sm:text-4xl">
            Ready to Transform Your Beverage Service?
          </h2>
          <p className="mt-4 text-lg text-silver-300 max-w-3xl mx-auto">
            Schedule a consultation to learn how Regent can elevate your 
            facility's operations in just 2-3 weeks.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link href="/contact">
                Book Intro Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-navy">
              <Link href="/about">
                Learn About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}