"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-ivory to-ivory-200 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-display font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              The modern way to{" "}
              <span className="text-primary-600">make the turn</span>
            </h1>
            <p className="mt-6 text-xl text-ink-700 lg:text-lg xl:text-xl">
              On-course ordering built for golf clubs. Members order in a tap.
              Staff deliver with calm, and the cart always knows where to go.
            </p>
            
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-3">
                  <Link href="/contact">
                    Book Intro Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-3 border-ink text-ink hover:bg-ink hover:text-white"
                >
                  <Link href="#download">
                    Download One-Pager
                    <Download className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Key stats */}
            <div className="mt-12">
              <div className="grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <div className="text-2xl font-bold text-ink">30%</div>
                  <div className="text-sm text-ink-600">Average Revenue Boost</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-ink">2-3 weeks</div>
                  <div className="text-sm text-ink-600">Implementation Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-ink">90%+</div>
                  <div className="text-sm text-ink-600">Member Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full lg:max-w-md">
              {/* Professional golf clubhouse image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Professional golf course clubhouse and facilities"
                  width={1000}
                  height={320}
                  className="w-full h-80 object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent"></div>
                
                {/* Overlay content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Image
                        src="/logo.png"
                        alt="The Turn"
                        width={40}
                        height={40}
                        className="rounded-lg"
                      />
                      <div>
                        <p className="font-semibold text-ink">The Turn</p>
                        <p className="text-sm text-ink-600">On-course ordering, simplified</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}