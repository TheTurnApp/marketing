"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-ivory to-ivory-200 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-display font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Operational Excellence,{" "}
              <span className="text-gold">Perfected</span>
            </h1>
            <p className="mt-6 text-xl text-navy-700 lg:text-lg xl:text-xl">
              Transform your golf facility's beverage service from outdated cart 
              operations to sophisticated on-course ordering that matches your 
              club's standards.
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
                  className="text-lg px-8 py-3 border-navy text-navy hover:bg-navy hover:text-white"
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
                  <div className="text-2xl font-bold text-navy">30%</div>
                  <div className="text-sm text-navy-600">Average Revenue Boost</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy">2-3 weeks</div>
                  <div className="text-sm text-navy-600">Implementation Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy">90%+</div>
                  <div className="text-sm text-navy-600">Member Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md">
              {/* Placeholder for hero image - golf clubhouse or mobile app interface */}
              <div className="bg-gradient-to-br from-navy-100 to-gold-100 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-navy rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-display font-bold text-white">R</span>
                  </div>
                  <p className="text-navy-600 font-medium">Sophisticated Service</p>
                  <p className="text-navy-600 font-medium">Elevated Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}