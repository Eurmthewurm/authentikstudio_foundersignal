import React from "react"
import { AlertTriangle, X } from "lucide-react"

export function ProblemSection() {
  const painPoints = [
    "Investors scroll past your pitch for flashier, story-driven startups",
    "Customers can't distinguish you from the AI-generated noise flooding their feeds",
    "Top talent joins competitors who \"feel more inspiring\"",
    "Your authentic vision gets lost in generic marketing templates"
  ]

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Headline */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            The Crisis Every Founder Faces in 2025
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-normal leading-relaxed max-w-3xl mx-auto">
            You're brilliant. Your product is game-changing. Your vision could reshape entire industries.
          </p>
        </div>

        {/* Rhetorical Question */}
        <div className="py-4">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary">
            So why does no one care?
          </p>
        </div>

        {/* Problem Statement */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-normal leading-relaxed max-w-3xl mx-auto">
          While you're buried in product development and metrics, your competitors are stealing the spotlight with stories that stick. Every day you stay invisible:
        </p>

        {/* Pain Points - Clean List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-3 p-4 hover:bg-muted/20 rounded-lg transition-colors duration-200">
              <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <X className="w-3 h-3 text-red-400" />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-normal leading-relaxed text-left">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Brutal Truth */}
        <div className="pt-8">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-muted/30 rounded-full border border-border/50 hover:bg-muted/40 transition-colors duration-200">
            <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
            <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground">
              The brutal truth? In the AI era, being the best isn't enough. You need to be the most memorable.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
