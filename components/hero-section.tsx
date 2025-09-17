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
      className="flex flex-col items-center text-center relative mx-auto rounded-3xl overflow-hidden my-6 md:my-8 py-0 px-4
         w-full h-[650px] sm:h-[700px] md:w-[1220px] md:h-[700px] lg:h-[800px] md:px-0"
    >
      {/* Ultra-Premium Background with Sophisticated Creative Elements */}
      <div className="absolute inset-0 z-0">
        {/* Refined grid pattern - more subtle */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.15" opacity="0.03"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Enhanced Signal DNA Visual Elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          {/* More sophisticated DNA helix pattern */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dna-helix" width="150" height="150" patternUnits="userSpaceOnUse">
                <path d="M 75 0 Q 95 37.5 75 75 Q 55 112.5 75 150" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.4" opacity="0.08"/>
                <path d="M 75 0 Q 55 37.5 75 75 Q 95 112.5 75 150" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.4" opacity="0.08"/>
                <circle cx="75" cy="37.5" r="1" fill="hsl(var(--primary))" opacity="0.1"/>
                <circle cx="75" cy="112.5" r="1" fill="hsl(var(--primary))" opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dna-helix)" />
          </svg>
        </div>
        
        {/* Refined Signal Line with gradient stops */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-px h-1/3 bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
        
        {/* Subtle corner accents */}
        <div className="absolute top-8 right-8 w-2 h-2 bg-primary/20 rounded-full"></div>
        <div className="absolute bottom-8 left-8 w-1 h-1 bg-primary/15 rounded-full"></div>
        <div className="absolute top-1/2 left-8 w-1.5 h-1.5 bg-primary/10 rounded-full"></div>
        <div className="absolute top-1/3 right-12 w-1 h-1 bg-primary/12 rounded-full"></div>
      </div>

      {/* Header positioned at top of hero container */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>

      {/* Main Content - Ultra Premium Typography */}
      <div className="flex flex-col justify-center items-center text-center space-y-8 md:space-y-10 lg:space-y-12 relative z-10 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto mt-24 md:mt-32 lg:mt-40 xl:mt-48">
        <div className="space-y-8 md:space-y-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-foreground leading-[1.05] tracking-tight">
            How Strong Is Your{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-medium">
              Founder Signal
            </span>
            ?
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-6xl mx-auto leading-relaxed font-light">
            Take the Signal Strength Quiz to see how clearly your story attracts investors, customers, and talent—then claim your free Signal DNA Audit to unlock the founder advantage no one can copy.
          </p>
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6 md:p-8 max-w-5xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
              "Imagine walking into any room—investors, customers, potential hires—and watching heads nod before you've even finished your first sentence. That's the power of a signal no one can ignore."
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 md:gap-8 mt-8 md:mt-10">
          <Link href="/quiz" rel="noopener noreferrer">
            <Button className="bg-primary text-primary-foreground hover:bg-primary-dark px-12 py-5 rounded-2xl font-medium text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-primary/20">
              Start the Free Quiz →
            </Button>
          </Link>
          <Link href="/audit" rel="noopener noreferrer">
            <Button variant="outline" className="border-2 border-primary/40 text-primary hover:bg-primary/5 hover:border-primary/60 px-12 py-5 rounded-2xl font-medium text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              Book My Free Signal DNA Audit →
            </Button>
          </Link>
        </div>
        
        {/* Trusted by Founders & Brands */}
        <div className="mt-8 md:mt-10 lg:mt-12">
          <p className="text-xs md:text-sm text-muted-foreground font-medium tracking-[0.2em] uppercase mb-6 md:mb-8">Trusted by Founders & Brands</p>
          <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 opacity-70 flex-wrap">
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5">BBC</div>
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5">Netflix</div>
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5">TED</div>
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5">National Geographic</div>
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5">Arte</div>
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5">Black Magic</div>
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5">Aaron Abke</div>
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5">J-Griff</div>
          </div>
        </div>
      </div>
    </section>
  )
}
