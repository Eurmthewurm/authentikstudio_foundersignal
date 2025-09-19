"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Header } from "./header"
import { QuizPreviewPopup } from "./quiz-preview-popup"
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
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-5xl mx-auto leading-relaxed font-light">
            The only founder storytelling framework that works across investors, customers, and talent. 
            <span className="text-foreground font-medium"> Discover your founder archetype in just 2 minutes.</span>
          </p>
          
          {/* Quiz Preview Banner */}
          <QuizPreviewPopup />
          
          {/* Premium Quote Card */}
          <div className="relative max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 border border-primary/10">
              <div className="absolute top-4 left-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-foreground italic leading-relaxed font-medium">
                "Walk into any room and watch heads nod before you finish your first sentence."
              </p>
              <div className="mt-4 text-sm sm:text-base text-primary font-semibold">
                — J-Griff, €2M to €8M Revenue Growth
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 md:gap-8 mt-8 md:mt-12 items-center justify-center">
          <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
            <Link href="/quiz" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="relative bg-gradient-to-r from-primary to-primary-dark text-primary-foreground hover:from-primary-dark hover:to-primary px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-primary/20 glow group overflow-hidden w-full sm:w-auto">
                <span className="relative z-10">Discover Your Founder Archetype</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground font-medium text-center">
              Free 2-Minute Assessment • No Credit Card Required
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
            <Link href="/audit" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="relative bg-gradient-to-r from-accent to-accent/80 text-accent-foreground hover:from-accent/90 hover:to-accent px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-accent/20 group overflow-hidden w-full sm:w-auto">
                <span className="relative z-10">Book FREE Strategy Call</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground font-medium text-center">
              Personalized Story Analysis
            </p>
          </div>
        </div>
        
        {/* Trusted by Founders & Brands */}
        <div className="mt-8 md:mt-10 lg:mt-12">
          <p className="text-xs md:text-sm text-muted-foreground font-medium tracking-[0.2em] uppercase mb-6 md:mb-8">TRUSTED BY FOUNDERS & BRANDS</p>
          <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 opacity-70 flex-wrap">
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5">BBC</div>
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5">National Geographic</div>
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5">Discovery</div>
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5">Black Magic</div>
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5">Arte</div>
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5">David Attenborough</div>
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5">Aaron Abke</div>
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5">J-Griff</div>
            <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5">Signal DNA</div>
          </div>
        </div>
      </div>
    </section>
  )
}
