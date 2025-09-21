"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Header } from "./header"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Premium Background with Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95"></div>
        {/* Subtle animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/1 rounded-full blur-3xl"></div>
      </div>

      {/* Header positioned at top */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>

      {/* Main Content - Ultra Premium Typography */}
      <div className="flex flex-col justify-center items-center text-center space-y-8 md:space-y-12 lg:space-y-16 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-32 pb-20">
        <div className="space-y-8 md:space-y-12">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            Signal DNA Discovery™ Framework
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-foreground leading-[1.05] tracking-tight">
            Transform from{" "}
            <span className="text-muted-foreground">Invisible Founder</span>
            <br />
            to{" "}
            <span className="gradient-text font-semibold">Industry Legend</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light mb-8">
            Reveal your founder archetype in just 2 minutes—and captivate customers, investors, and media.
          </p>
          
          {/* Hero-Testimonial Combo - Mobile Optimized */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-xl p-4 sm:p-6 shadow-lg w-full max-w-2xl">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 shadow-md flex-shrink-0">
                <Image
                  src="/images/j-griff-headshot.jpg"
                  alt="J-Griff, Tech Founder who achieved €6M revenue growth"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm sm:text-base font-medium text-foreground mb-2">
                  "Signal DNA transformed how I connect with my conscious entrepreneur audience."
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <p className="text-xs text-primary font-semibold">— J-Griff</p>
                  <div className="bg-green-500/20 px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-green-600">€6M Revenue Growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile-Optimized 3-Step Process Graphic */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 shadow-lg mx-4 sm:mx-0">
            <h3 className="text-center text-lg font-bold text-foreground mb-4 sm:mb-6">How It Works</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
              <div className="flex flex-col items-center gap-2 sm:gap-3 text-center w-full sm:w-auto">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                  1
                </div>
                <div className="space-y-1">
                  <span className="text-sm sm:text-base font-semibold text-foreground block">Take 2-minute Quiz</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">Answer 8 strategic questions</span>
                </div>
              </div>
              <div className="hidden sm:block w-8 lg:w-12 h-0.5 bg-gradient-to-r from-primary/50 to-primary/30"></div>
              <div className="flex flex-col items-center gap-2 sm:gap-3 text-center w-full sm:w-auto">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                  2
                </div>
                <div className="space-y-1">
                  <span className="text-sm sm:text-base font-semibold text-foreground block">Get Instant Archetype</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">AI-powered analysis</span>
                </div>
              </div>
              <div className="hidden sm:block w-8 lg:w-12 h-0.5 bg-gradient-to-r from-primary/50 to-primary/30"></div>
              <div className="flex flex-col items-center gap-2 sm:gap-3 text-center w-full sm:w-auto">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                  3
                </div>
                <div className="space-y-1">
                  <span className="text-sm sm:text-base font-semibold text-foreground block">Book Strategy Call</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">Free consultation</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Value Proposition Snapshot - Collapsible on Mobile */}
          <details className="mt-8 max-w-4xl mx-auto">
            <summary className="cursor-pointer text-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
              What you'll discover ↓
            </summary>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="text-center p-4 bg-card/50 border border-primary/10 rounded-xl">
              <h3 className="font-semibold text-foreground mb-2">Discover Your Archetype</h3>
              <p className="text-sm text-muted-foreground">AI-powered analysis reveals your unique founder story pattern</p>
            </div>
            <div className="text-center p-4 bg-card/50 border border-primary/10 rounded-xl">
              <h3 className="font-semibold text-foreground mb-2">Identify Strengths</h3>
              <p className="text-sm text-muted-foreground">Uncover storytelling advantages you never knew you had</p>
            </div>
            <div className="text-center p-4 bg-card/50 border border-primary/10 rounded-xl">
              <h3 className="font-semibold text-foreground mb-2">Spot Blind Spots</h3>
              <p className="text-sm text-muted-foreground">Find gaps that prevent you from connecting with key audiences</p>
            </div>
          </div>
          </details>
          
          {/* Mobile-Optimized Partner Logos Trust Strip */}
          <div className="bg-gradient-to-r from-background/50 to-background/30 border-t border-b border-primary/20 py-4 sm:py-6 mb-8 mx-4 sm:mx-0">
            <div className="max-w-6xl mx-auto px-2 sm:px-4">
              <p className="text-center text-xs sm:text-sm text-muted-foreground font-medium tracking-[0.1em] sm:tracking-[0.2em] uppercase mb-4 sm:mb-6">TRUSTED BY LEADING BRANDS</p>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 opacity-70">
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-red-600 to-red-700 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">B</span>
                  </div>
                  <span className="text-sm sm:text-xl font-bold text-foreground">BBC</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">N</span>
                  </div>
                  <span className="text-sm sm:text-xl font-bold text-foreground">NatGeo</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">D</span>
                  </div>
                  <span className="text-sm sm:text-xl font-bold text-foreground">Discovery</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">T</span>
                  </div>
                  <span className="text-sm sm:text-xl font-bold text-foreground">TED</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-600 to-green-700 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">F</span>
                  </div>
                  <span className="text-sm sm:text-xl font-bold text-foreground">Forbes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-Optimized CTA Button */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-lg mx-auto px-4 sm:px-0">
            <Link href="/quiz-optimized" rel="noopener noreferrer" className="w-full">
              <Button className="relative bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white hover:from-green-700 hover:via-green-600 hover:to-green-700 px-6 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-9 rounded-2xl font-bold text-lg sm:text-2xl lg:text-3xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 border-2 border-green-400/40 group overflow-hidden w-full min-h-[60px] sm:min-h-[80px] lg:min-h-[90px] animate-pulse">
                <span className="relative z-10 group-hover:scale-110 transition-transform duration-200 flex items-center justify-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl lg:text-3xl">🎯</span>
                  <span className="leading-tight">Get My Free Story Blueprint</span>
                </span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                {/* Enhanced pulsing ring animation */}
                <div className="absolute inset-0 rounded-2xl border-2 border-green-300/60 scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                {/* Micro-bounce on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/20 to-green-300/20 scale-0 group-hover:scale-100 transition-transform duration-200 ease-out"></div>
                {/* Success sparkle effect */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
              </Button>
            </Link>
            
            {/* Mobile-Optimized Trust Indicators */}
            <div className="text-center space-y-2">
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-medium">
                ✅ Free Assessment • No Credit Card Required • Instant Results
              </p>
              <p className="text-xs sm:text-sm text-primary font-semibold">
                200+ founders served this month
              </p>
            </div>
            
            {/* Mobile-Optimized Benefit Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full mt-4">
              <div className="text-center p-3 sm:p-4 bg-green-500/5 border border-green-500/20 rounded-lg">
                <div className="text-sm sm:text-base font-semibold text-green-600 mb-1">✓ 2 Minutes</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Discover Your Archetype</p>
              </div>
              <div className="text-center p-3 sm:p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                <div className="text-sm sm:text-base font-semibold text-blue-600 mb-1">✓ Instant Results</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Strengths & Blind Spots</p>
              </div>
              <div className="text-center p-3 sm:p-4 bg-purple-500/5 border border-purple-500/20 rounded-lg">
                <div className="text-sm sm:text-base font-semibold text-purple-600 mb-1">✓ Free Blueprint</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Personalized Strategy</p>
              </div>
          </div>
          
            {/* Secondary CTA for hesitant visitors */}
            <Link href="#how-it-works" className="text-sm text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors">
              See How It Works →
            </Link>
          </div>
          
        {/* Mobile-Optimized Dynamic Counter */}
        <div className="mt-6 sm:mt-8 mb-4 sm:mb-6 px-4 sm:px-0">
          <div className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-full shadow-lg">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-semibold text-primary">
              <span className="text-lg sm:text-xl font-bold text-green-600">1,247+</span> Founders Assessed This Month
            </span>
          </div>
        </div>
        
        
        
        </div>
        
        {/* Scroll Guidance */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-xs text-muted-foreground font-medium">Scroll to explore</p>
        </div>
      </div>
    </section>
  )
}
