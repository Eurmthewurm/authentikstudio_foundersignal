import React from "react"
import { X, AlertTriangle } from "lucide-react"

export function FounderCrisisSection() {
  return (
    <section className="w-full overflow-hidden flex justify-center items-center">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              The Founder Crisis
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground">
              <p className="font-medium">
                You're brilliant. Your product is game-changing. Your vision could reshape an industry.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-foreground">
                So why doesn't the world care?
              </p>
            </div>
          </div>

          <div className="bg-muted/5 border border-border/20 rounded-2xl p-8 md:p-12">
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Every day you stay invisible:
            </p>
            
            <div className="space-y-6 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-4">
                <X className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                <p className="text-lg">Investors scroll past your pitch for story-driven competitors</p>
              </div>
              <div className="flex items-start gap-4">
                <X className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                <p className="text-lg">Customers can't tell you apart from AI noise flooding their feeds</p>
              </div>
              <div className="flex items-start gap-4">
                <X className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                <p className="text-lg">Top talent joins founders who "feel" more inspiring</p>
              </div>
              <div className="flex items-start gap-4">
                <X className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                <p className="text-lg">Your authentic story gets buried under generic templates</p>
              </div>
            </div>
          </div>

          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              <h3 className="text-xl font-bold text-destructive">The Brutal Truth</h3>
            </div>
            <p className="text-lg text-destructive font-medium">
              In 2025, being the best isn't enough. You must be the most memorable.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
