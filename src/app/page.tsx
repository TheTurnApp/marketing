import { Hero } from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, ArrowRight, Users, TrendingUp, Clock } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Users,
      title: "Modern Service for Discerning Members",
      description: "Seamless on-course ordering experience with real-time tracking and premium member experience that matches your club's standards."
    },
    {
      icon: TrendingUp,
      title: "Sophisticated Revenue Growth",
      description: "Direct-to-consumer approach increases order frequency and average order values through strategic menu positioning."
    },
    {
      icon: Clock,
      title: "Effortless Implementation",
      description: "Minimal training required with quick 2-3 week setup process and ongoing support from our operational excellence team."
    }
  ];

  const benefits = [
    "Transform manual beverage cart operations",
    "Increase F&B revenue by up to 30%",
    "Implementation in just 2-3 weeks",
    "Real-time order tracking and analytics",
    "Seamless integration with existing systems",
    "Premium member experience enhancement"
  ];

  const testimonials = [
    {
      quote: "Regent transformed our beverage service from a manual chore into a sophisticated member amenity. The 35% increase in cart revenue speaks for itself.",
      author: "Sarah Mitchell",
      title: "General Manager, Pinehurst Country Club"
    },
    {
      quote: "Implementation was seamless, and our members love the convenience. Finally, technology that enhances our service standards rather than compromising them.",
      author: "David Chen",
      title: "F&B Director, Oakmont Golf Resort"
    },
    {
      quote: "The real-time analytics give us insights we never had before. We're making data-driven decisions about inventory and staffing for the first time.",
      author: "Jennifer Torres",
      title: "Owner, Riverside Golf Club"
    }
  ];

  return (
    <>
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-navy sm:text-4xl">
              Elevate Your Golf Facility's Service Standards
            </h2>
            <p className="mt-4 text-lg text-navy-600 max-w-3xl mx-auto">
              Transform your beverage cart operations with sophisticated technology 
              that matches the excellence your members expect.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-silver-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-navy-100 rounded-xl mb-6">
                    <feature.icon className="h-6 w-6 text-navy" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-navy-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy sm:text-4xl">
                Refined Operational Control
              </h2>
              <p className="mt-4 text-lg text-navy-600">
                Our platform provides golf facilities with the sophisticated tools 
                needed to elevate beverage service while maintaining the personal 
                touch your members value.
              </p>
              
              <div className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
                    <span className="ml-3 text-navy-600">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/how-it-works">
                    See How It Works
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <Card className="shadow-2xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-display font-bold text-navy">30%</div>
                      <div className="text-navy-600">Average Revenue Increase</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-navy">2-3</div>
                        <div className="text-sm text-navy-600">Weeks Implementation</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-navy">90%+</div>
                        <div className="text-sm text-navy-600">Member Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-navy sm:text-4xl">
              Trusted by Leading Golf Facilities
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              See how Regent has elevated operations for clubs nationwide.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-silver-200">
                <CardContent className="p-8">
                  <blockquote className="text-navy-600 mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-navy">{testimonial.author}</div>
                    <div className="text-sm text-navy-500">{testimonial.title}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white sm:text-4xl">
            Ready to Elevate Your Beverage Service?
          </h2>
          <p className="mt-4 text-lg text-silver-300 max-w-3xl mx-auto">
            Join leading golf facilities nationwide in delivering sophisticated 
            on-course service that matches your club's standards.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link href="/contact">
                Book Intro Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-navy">
              <Link href="/how-it-works">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
