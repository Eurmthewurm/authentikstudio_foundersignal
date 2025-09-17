"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Header } from "./header"
import Link from "next/link"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      className="flex flex-col items-center text-center relative mx-auto rounded-2xl overflow-hidden my-6 py-0 px-4
         w-full h-[500px] md:w-[1220px] md:h-[650px] lg:h-[750px] md:px-0"
    >
      {/* Ultra-Clean Background with Subtle Creative Touch */}
      <div className="absolute inset-0 z-0">
        {/* Minimal grid pattern */}
        <div className="absolute inset-0 opacity-3">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.2" opacity="0.02"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Signal DNA Visual Elements */}
        <div className="absolute inset-0 opacity-5">
          {/* DNA Helix Pattern */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dna-helix" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M 60 0 Q 80 30 60 60 Q 40 90 60 120" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.1"/>
                <path d="M 60 0 Q 40 30 60 60 Q 80 90 60 120" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dna-helix)" />
          </svg>
        </div>
        
        {/* Subtle Signal Line - Creative Touch */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-px h-1/2 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>

      {/* Header positioned at top of hero container */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>

      {/* Main Content - Ultra Premium Typography */}
      <div className="flex flex-col justify-center items-center text-center space-y-8 md:space-y-10 relative z-10 px-6 md:px-12 max-w-6xl mx-auto mt-28 md:mt-36 lg:mt-44">
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-foreground leading-[1.1] tracking-tight">
            How Strong Is Your Founder Signal?
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed font-light">
            Take the Signal Strength Quiz to see how clearly your story attracts investors, customers, and talent—then claim your free Signal DNA Audit to unlock the founder advantage no one can copy.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground italic">
              "Imagine walking into any room—investors, customers, potential hires—and watching heads nod before you've even finished your first sentence. That's the power of a signal no one can ignore."
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 md:gap-8 mt-8 md:mt-10">
          <Link href="/quiz" rel="noopener noreferrer">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Start the Free Quiz →
            </Button>
          </Link>
          <Link href="/audit" rel="noopener noreferrer">
            <Button variant="outline" className="border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105">
              Book My Free Signal DNA Audit →
            </Button>
          </Link>
        </div>
        
        {/* Trusted by Founders & Brands */}
        <div className="mt-8 md:mt-12">
          <p className="text-sm text-muted-foreground font-medium tracking-wide uppercase mb-6">Trusted by Founders & Brands</p>
          <div className="flex items-center justify-center gap-6 md:gap-8 opacity-60 flex-wrap">
            <div className="text-muted-foreground font-semibold text-sm hover:opacity-100 transition-opacity duration-300 cursor-default">BBC</div>
            <div className="text-muted-foreground font-semibold text-sm hover:opacity-100 transition-opacity duration-300 cursor-default">Netflix</div>
            <div className="text-muted-foreground font-semibold text-sm hover:opacity-100 transition-opacity duration-300 cursor-default">TED</div>
            <div className="text-muted-foreground font-semibold text-sm hover:opacity-100 transition-opacity duration-300 cursor-default">National Geographic</div>
            <div className="text-muted-foreground font-semibold text-sm hover:opacity-100 transition-opacity duration-300 cursor-default">Arte</div>
            <div className="text-muted-foreground font-semibold text-sm hover:opacity-100 transition-opacity duration-300 cursor-default">Black Magic</div>
            <div className="text-muted-foreground font-semibold text-sm hover:opacity-100 transition-opacity duration-300 cursor-default">Aaron Abke</div>
            <div className="text-muted-foreground font-semibold text-sm hover:opacity-100 transition-opacity duration-300 cursor-default">J-Griff</div>
          </div>
        </div>
      </div>
    </section>
  )
}
