import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Target, Users, Award, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About - Regent Golf Operations Platform",
  description: "Learn about Regent's mission to bring operational excellence to modern golf facilities through sophisticated technology that enhances rather than replaces personal service.",
};

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Operational Excellence",
      description: "We believe golf facilities deserve technology as sophisticated as the experiences they provide. Every feature is designed with operational excellence in mind."
    },
    {
      icon: Users,
      title: "Member-Centric Design",
      description: "Understanding golf culture and service standards drives our approach. We enhance rather than replace the personal service members value."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Our platform delivers measurable results: 30% average revenue increases, 90%+ member satisfaction, and seamless 2-3 week implementations."
    },
    {
      icon: Zap,
      title: "Sophisticated Simplicity",
      description: "Complex backend technology powers simple, intuitive experiences. We handle the complexity so you can focus on exceptional service."
    }
  ];

  const stats = [
    { value: "50+", label: "Golf Facilities Served" },
    { value: "30%", label: "Average Revenue Increase" },
    { value: "90%+", label: "Member Satisfaction Rate" },
    { value: "2-3", label: "Weeks Implementation Time" }
  ];

  const team = [
    {
      name: "Leadership Team",
      description: "Former golf industry executives and technology leaders with deep understanding of facility operations and member expectations."
    },
    {
      name: "Implementation Specialists", 
      description: "Dedicated professionals who ensure smooth deployment and ongoing success at every facility we serve."
    },
    {
      name: "Customer Success",
      description: "Ongoing support team committed to maximizing your investment and ensuring continued operational excellence."
    }
  ];

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-navy to-navy-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold sm:text-5xl lg:text-6xl">
              Operational Excellence for{" "}
              <span className="text-gold">Modern Golf</span>
            </h1>
            <p className="mt-6 text-xl text-silver-300 max-w-3xl mx-auto">
              Regent was founded on the belief that golf facilities deserve 
              technology as sophisticated as the experiences they provide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-6 text-lg text-navy-600">
                We transform golf facility operations through sophisticated technology 
                that enhances rather than replaces the personal service that defines 
                premium golf experiences.
              </p>
              <p className="mt-4 text-lg text-navy-600">
                Founded by golf industry veterans who understand the unique challenges 
                of managing premium facilities, Regent bridges the gap between 
                operational efficiency and member satisfaction.
              </p>
              <p className="mt-4 text-lg text-navy-600">
                Every feature we build is guided by a deep understanding of golf 
                culture, service standards, and the operational realities of 
                running a successful facility.
              </p>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Elegant golf course and clubhouse representing operational excellence"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-navy mb-4">Why We're Different</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-navy-600 text-sm">
                          <strong>Golf Industry Heritage:</strong> Founded by former 
                          golf facility executives
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-navy-600 text-sm">
                          <strong>Service-First Approach:</strong> Technology that 
                          enhances member interactions
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-navy-600 text-sm">
                          <strong>Proven Implementation:</strong> Streamlined process 
                          with maximum results
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-navy sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-navy-600 max-w-3xl mx-auto">
              The principles that guide everything we build and every 
              relationship we foster.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-silver-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-navy rounded-xl mb-6">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-4">
                    {value.title}
                  </h3>
                  <p className="text-navy-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-navy sm:text-4xl">
              Results That Speak for Themselves
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-display font-bold text-navy mb-2">
                  {stat.value}
                </div>
                <div className="text-navy-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-navy sm:text-4xl">
              The Team Behind Regent
            </h2>
            <p className="mt-4 text-lg text-navy-600 max-w-3xl mx-auto">
              Golf industry veterans and technology experts dedicated to your success.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-silver-200">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-navy rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-4">
                    {member.name}
                  </h3>
                  <p className="text-navy-600">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-navy sm:text-4xl">
              Our Commitment to Excellence
            </h2>
            <p className="mt-6 text-lg text-navy-600 max-w-4xl mx-auto">
              We're not just a technology provider—we're your partner in operational 
              excellence. From implementation through ongoing optimization, we're 
              committed to ensuring Regent delivers measurable value to your facility 
              and exceptional experiences for your members.
            </p>
            <p className="mt-4 text-lg text-navy-600 max-w-4xl mx-auto">
              Every facility is unique, and our approach reflects that understanding. 
              We work closely with your team to ensure seamless integration with 
              your existing operations and service standards.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white sm:text-4xl">
            Ready to Experience Operational Excellence?
          </h2>
          <p className="mt-4 text-lg text-silver-300 max-w-3xl mx-auto">
            Join the growing community of golf facilities that have transformed 
            their beverage service with Regent.
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
                See How It Works
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}