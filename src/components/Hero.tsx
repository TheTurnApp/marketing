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
            <div className="relative mx-auto w-full lg:max-w-md">
              {/* Mobile app interface illustration */}
              <div className="bg-gradient-to-br from-navy-50 to-gold-50 rounded-2xl p-12 flex items-center justify-center">
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
              </div>
              
              {/* Supporting text */}
              <div className="text-center mt-6">
                <p className="text-navy-600 font-medium">Intuitive Mobile Ordering</p>
                <p className="text-navy-500 text-sm">Seamless on-course experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}