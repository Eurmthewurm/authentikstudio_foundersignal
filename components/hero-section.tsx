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
            Go from{" "}
            <span className="text-muted-foreground">Overlooked Founder</span>
            <br />
            to{" "}
            <span className="gradient-text font-semibold">Unforgettable Storyteller</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Uncover your unique founder archetype in 2 minutes—then turn that story into client-winning content.
          </p>
          
          {/* 3-Step Progress Visual */}
          <div className="flex items-center justify-center gap-4 md:gap-8 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">1</div>
              <span className="text-sm font-medium text-foreground">Take 3-Question Quick Quiz</span>
            </div>
            <div className="w-8 h-0.5 bg-primary/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm">2</div>
              <span className="text-sm font-medium text-muted-foreground">See Your Top Insight</span>
            </div>
            <div className="w-8 h-0.5 bg-primary/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm">3</div>
              <span className="text-sm font-medium text-muted-foreground">Book Your Strategy Call</span>
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
          {/* Primary CTA - Quiz Only - Mobile Optimized */}
          <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
            <Link href="/quiz-optimized" rel="noopener noreferrer" className="w-full">
              <Button className="relative bg-gradient-to-r from-primary to-primary-dark text-primary-foreground hover:from-primary-dark hover:to-primary px-6 sm:px-12 py-5 sm:py-6 rounded-2xl font-semibold text-lg sm:text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-primary/20 glow group overflow-hidden w-full min-h-[60px] sm:min-h-[70px]">
                <span className="relative z-10">Start Your Free Story Assessment</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
            </Link>
            <p className="text-sm sm:text-base text-muted-foreground font-medium text-center px-4">
              Backed by 200+ founders • No credit card required • Instant results
            </p>
            
            {/* Secondary CTA for hesitant visitors */}
            <Link href="#how-it-works" className="text-sm text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors">
              Learn How It Works →
            </Link>
          </div>
        
        {/* Dynamic Counter */}
        <div className="mt-6 mb-4">
          <div className="flex items-center justify-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-primary">
              <span className="text-lg font-bold">1,247+</span> Founders Assessed This Month
            </span>
          </div>
        </div>
        
        {/* Three-Column Benefits with Icons */}
        <div className="mt-8 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-card/50 border border-primary/10 rounded-xl">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Clarity</h3>
              <p className="text-sm text-muted-foreground">Identify your signature founder archetype instantly</p>
            </div>
            
            <div className="text-center p-6 bg-card/50 border border-primary/10 rounded-xl">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Connection</h3>
              <p className="text-sm text-muted-foreground">Speak in a way that resonates with your ideal audience</p>
            </div>
            
            <div className="text-center p-6 bg-card/50 border border-primary/10 rounded-xl">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Conversion</h3>
              <p className="text-sm text-muted-foreground">Craft narratives that compel prospects to act</p>
            </div>
          </div>
        </div>
        
        {/* Enhanced Social Proof */}
        <div className="mt-8 md:mt-10 lg:mt-12">
          <p className="text-xs md:text-sm text-muted-foreground font-medium tracking-[0.2em] uppercase mb-6 md:mb-8">TRUSTED BY FOUNDERS & BRANDS</p>
          
          {/* Media Partners with Context */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-card/50 border border-primary/10 rounded-xl">
              <div className="text-2xl font-bold text-primary mb-2">BBC</div>
              <p className="text-xs text-muted-foreground mb-3">Documentary storytelling for flagship programs</p>
              <p className="text-sm italic text-foreground">"Ermo helped us craft compelling narratives that connected with millions of viewers."</p>
              <p className="text-xs text-primary font-semibold mt-2">2023</p>
            </div>
            
            <div className="text-center p-4 bg-card/50 border border-primary/10 rounded-xl">
              <div className="text-2xl font-bold text-primary mb-2">National Geographic</div>
              <p className="text-xs text-muted-foreground mb-3">Nature documentary narrative consulting</p>
              <p className="text-sm italic text-foreground">"The storytelling framework transformed how we present complex scientific concepts."</p>
              <p className="text-xs text-primary font-semibold mt-2">2022</p>
            </div>
            
            <div className="text-center p-4 bg-card/50 border border-primary/10 rounded-xl">
              <div className="text-2xl font-bold text-primary mb-2">Discovery</div>
              <p className="text-xs text-muted-foreground mb-3">Science communication storytelling</p>
              <p className="text-sm italic text-foreground">"Our audience engagement increased 40% after implementing the Signal DNA method."</p>
              <p className="text-xs text-primary font-semibold mt-2">2023</p>
            </div>
          </div>
          
          {/* Founder Success Stories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">J</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">J-Griff</h4>
                  <p className="text-sm text-muted-foreground">Tech Founder</p>
                </div>
              </div>
              <p className="text-sm italic text-foreground mb-3">"Signal DNA helped me quadruple revenue in 18 months and secure Series A funding."</p>
              <div className="bg-green-500/20 px-3 py-1 rounded-full inline-block">
                <span className="text-xs font-bold text-green-600">€6M Revenue Growth</span>
              </div>
            </div>
            
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">A</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Aaron Abke</h4>
                  <p className="text-sm text-muted-foreground">Spiritual Entrepreneur</p>
                </div>
              </div>
              <p className="text-sm italic text-foreground mb-3">"The Signal DNA method gave me clarity on my unique story pattern for my 1M+ audience."</p>
              <div className="bg-green-500/20 px-3 py-1 rounded-full inline-block">
                <span className="text-xs font-bold text-green-600">1M+ Followers</span>
              </div>
            </div>
          </div>
          
          {/* Success Stories Block */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image
                      src="/images/j-griff-headshot.jpg"
                      alt="J-Griff, Tech Founder who achieved €6M revenue growth"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">J-Griff</h4>
                    <p className="text-sm text-muted-foreground">Tech Founder</p>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Before:</span>
                    <span className="text-sm font-semibold text-red-600">€2M Revenue</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">After:</span>
                    <span className="text-sm font-semibold text-green-600">€8M Revenue</span>
                  </div>
                </div>
                <p className="text-sm italic text-foreground mb-3">"Signal DNA helped me quadruple revenue in 18 months and secure Series A funding."</p>
                <div className="bg-green-500/20 px-3 py-1 rounded-full inline-block">
                  <span className="text-xs font-bold text-green-600">300% Revenue Growth</span>
                </div>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image
                      src="/images/aaron-abke-headshot.jpg"
                      alt="Aaron Abke, Spiritual Entrepreneur who grew to 1M+ followers"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Aaron Abke</h4>
                    <p className="text-sm text-muted-foreground">Spiritual Entrepreneur</p>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Before:</span>
                    <span className="text-sm font-semibold text-red-600">500K Followers</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">After:</span>
                    <span className="text-sm font-semibold text-green-600">1M+ Followers</span>
                  </div>
                </div>
                <p className="text-sm italic text-foreground mb-3">"The Signal DNA method gave me clarity on my unique story pattern for authentic growth."</p>
                <div className="bg-green-500/20 px-3 py-1 rounded-full inline-block">
                  <span className="text-xs font-bold text-green-600">100% Follower Growth</span>
                </div>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center border-2 border-primary/20">
                    <span className="text-primary font-bold text-lg">S</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Sarah Chen</h4>
                    <p className="text-sm text-muted-foreground">SaaS Founder</p>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Before:</span>
                    <span className="text-sm font-semibold text-red-600">30% Close Rate</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">After:</span>
                    <span className="text-sm font-semibold text-green-600">90% Close Rate</span>
                  </div>
                </div>
                <p className="text-sm italic text-foreground mb-3">"I went from struggling to explain my vision to closing deals in 15 minutes."</p>
                <div className="bg-green-500/20 px-3 py-1 rounded-full inline-block">
                  <span className="text-xs font-bold text-green-600">200% Close Rate ↑</span>
                </div>
              </div>
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
