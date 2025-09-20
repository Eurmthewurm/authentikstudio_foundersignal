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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/2 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/1 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            Transform From{" "}
            <span className="relative">
              <span className="text-muted-foreground">Invisible</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 to-primary/40 rounded-full"></div>
            </span>
            <br />
            Founder to{" "}
            <span className="gradient-text font-semibold">Industry Legend</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            The Signal DNA Method: Discover your founder archetype in 2 minutes.
          </p>
          
          {/* 3-Step Progress Visual */}
          <div className="flex items-center justify-center gap-4 md:gap-8 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">1</div>
              <span className="text-sm font-medium text-foreground">Take Quiz</span>
            </div>
            <div className="w-8 h-0.5 bg-primary/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm">2</div>
              <span className="text-sm font-medium text-muted-foreground">Get Report</span>
            </div>
            <div className="w-8 h-0.5 bg-primary/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm">3</div>
              <span className="text-sm font-medium text-muted-foreground">Book Call</span>
            </div>
          </div>
          
          {/* Value Proposition Snapshot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
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
          
          {/* Supporting Quote - Moved to Secondary Position */}
          <div className="relative max-w-3xl mx-auto mt-8">
            <div className="glass rounded-2xl p-6 md:p-8 border border-primary/10">
              <div className="absolute top-3 left-3 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-foreground italic leading-relaxed font-medium pl-4">
                "Walk into any room and watch heads nod before you finish your first sentence."
              </p>
              <div className="mt-3 text-sm text-primary font-semibold pl-4">
                — J-Griff, €2M to €8M Revenue Growth in 18 Months
              </div>
            </div>
          </div>
        </div>
          {/* Primary CTA - Quiz */}
          <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
            <Link href="/quiz" rel="noopener noreferrer" className="w-full">
              <Button className="relative bg-gradient-to-r from-primary to-primary-dark text-primary-foreground hover:from-primary-dark hover:to-primary px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-primary/20 glow group overflow-hidden w-full">
                <span className="relative z-10">Start Free Quiz</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground font-medium text-center">
              Free Assessment • No Credit Card Required • Instant Results
            </p>
          </div>
          
          {/* Secondary CTA - Audit */}
          <div className="flex flex-col items-center gap-3 w-full max-w-sm mx-auto mt-6">
            <Link href="/audit" rel="noopener noreferrer" className="w-full">
              <Button variant="outline" className="w-full bg-transparent border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 hover:scale-105">
                Book Free Audit
              </Button>
            </Link>
            <p className="text-xs text-muted-foreground font-medium text-center">
              Personalized Story Analysis & Strategy Session
            </p>
          </div>
          
          {/* Above-the-Fold Quiz CTA */}
          <div className="mt-8">
            <Link href="/quiz" rel="noopener noreferrer" className="inline-block">
              <Button className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground hover:from-accent/90 hover:to-accent px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-accent/20">
                Start Quiz Now →
              </Button>
            </Link>
          </div>
        
        {/* Trusted by Founders & Brands */}
        <div className="mt-8 md:mt-10 lg:mt-12">
          <p className="text-xs md:text-sm text-muted-foreground font-medium tracking-[0.2em] uppercase mb-6 md:mb-8">TRUSTED BY FOUNDERS & BRANDS</p>
          <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 opacity-70 flex-wrap">
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5" title="Documentary storytelling for BBC's flagship programs">BBC</div>
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5" title="Nature documentary narrative consulting">National Geographic</div>
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5" title="Science communication storytelling">Discovery</div>
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5" title="Cinematic storytelling techniques">Black Magic</div>
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5" title="European documentary production">Arte</div>
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5" title="Legendary nature storyteller collaboration">David Attenborough</div>
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5" title="1M+ follower growth through authentic storytelling">Aaron Abke</div>
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5" title="€6M revenue growth in 18 months">J-Griff</div>
          </div>
          
          {/* Specific Results */}
          <div className="mt-6 bg-primary/5 border border-primary/20 rounded-xl p-4 max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground text-center">
              <strong className="text-primary">Documentary storytelling expertise</strong> applied to founder narratives: 
              BBC documentaries, National Geographic series, Discovery Channel productions, and 
              <strong className="text-primary">€6M+ in founder revenue growth</strong> across our client portfolio.
            </p>
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
