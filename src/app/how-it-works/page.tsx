import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Settings, Menu, Smartphone, TrendingUp, Users, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works - The Turn",
  description: "Learn how The Turn transforms golf club beverage service in just 2-3 weeks with our modern on-course ordering platform.",
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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-ink to-ink-800 text-white">
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
            <h2 className="text-3xl font-display font-bold text-ink sm:text-4xl">
              Implementation Process
            </h2>
            <p className="mt-4 text-lg text-ink-600 max-w-3xl mx-auto">
              Our streamlined approach ensures rapid deployment without disrupting 
              your current operations.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {implementationSteps.map((step, index) => (
              <Card key={index} className="border-silver-200 shadow-lg relative">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-ink rounded-xl mb-6">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="bg-gold text-ink text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    {step.week}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-ink mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-ink-600 mb-6">
                    {step.description}
                  </p>

                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-ink-600">
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
      <section className="py-16 lg:py-24 bg-ink-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-ink sm:text-4xl">
              Member Experience Flow
            </h2>
            <p className="mt-4 text-lg text-ink-600 max-w-3xl mx-auto">
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
                        <div className="w-12 h-12 bg-ink rounded-xl flex items-center justify-center mr-4">
                          <experience.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                          <span className="text-ink font-bold text-sm">{experience.step}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-display font-bold text-ink mb-4">
                        {experience.title}
                      </h3>
                      
                      <p className="text-ink-600 text-lg">
                        {experience.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:flex-1">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    {experience.step === 1 ? (
                      // Browse & Order - Mobile app being used on golf course
                      <>
                        <img
                          src="https://images.unsplash.com/photo-1591019895022-be6d1696b9a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                          alt="Golfer using mobile phone on golf course"
                          className="w-full h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                            <p className="font-semibold text-ink text-sm">Mobile Ordering Interface</p>
                            <p className="text-xs text-ink-600">Browse menu & place orders</p>
                          </div>
                        </div>
                      </>
                    ) : experience.step === 2 ? (
                      // Real-Time Tracking - Golf cart with tracking technology
                      <>
                        <img
                          src="https://images.unsplash.com/photo-1566923765038-ce9e6f6c7d7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                          alt="Golf cart on professional golf course"
                          className="w-full h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                            <p className="font-semibold text-ink text-sm">Live Cart Tracking</p>
                            <p className="text-xs text-ink-600">Real-time location updates</p>
                          </div>
                        </div>
                      </>
                    ) : experience.step === 3 ? (
                      // Seamless Delivery - Professional service delivery
                      <>
                        <img
                          src="https://images.unsplash.com/photo-1593111774240-d529f12cf4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                          alt="Professional golf course service delivery"
                          className="w-full h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                            <p className="font-semibold text-ink text-sm">Premium Service</p>
                            <p className="text-xs text-ink-600">Professional delivery experience</p>
                          </div>
                        </div>
                      </>
                    ) : (
                      // Default for any other steps
                      <div className="bg-gradient-to-br from-ink-50 to-gold-50 p-8 flex items-center justify-center text-center">
                        <experience.icon className="w-16 h-16 text-ink mx-auto mb-4" />
                        <p className="text-ink-600 font-medium">Step {experience.step}</p>
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
            <h2 className="text-3xl font-display font-bold text-ink sm:text-4xl">
              Why Clubs Choose The Turn
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-silver-200">
              <CardContent className="p-8">
                <div className="text-4xl font-display font-bold text-ink mb-2">30%</div>
                <div className="text-ink-600 mb-4">Average Revenue Increase</div>
                <p className="text-sm text-ink-500">
                  Direct-to-consumer ordering increases frequency and order values
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-silver-200">
              <CardContent className="p-8">
                <div className="text-4xl font-display font-bold text-ink mb-2">2-3</div>
                <div className="text-ink-600 mb-4">Weeks Implementation</div>
                <p className="text-sm text-ink-500">
                  Rapid deployment without disrupting current operations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-silver-200">
              <CardContent className="p-8">
                <div className="text-4xl font-display font-bold text-ink mb-2">90%+</div>
                <div className="text-ink-600 mb-4">Member Satisfaction</div>
                <p className="text-sm text-ink-500">
                  Enhanced convenience without sacrificing personal service
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white sm:text-4xl">
            Ready to Transform Your Beverage Service?
          </h2>
          <p className="mt-4 text-lg text-silver-300 max-w-3xl mx-auto">
            Schedule a consultation to learn how The Turn can elevate your 
            facility's operations in just 2-3 weeks.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link href="/contact">
                Book Intro Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-ink">
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