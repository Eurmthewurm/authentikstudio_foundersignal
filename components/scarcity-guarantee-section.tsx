import React from "react"
import { Users, Shield, Clock } from "lucide-react"

export function ScarcityGuaranteeSection() {
  return (
    <section className="w-full overflow-hidden flex justify-center items-center">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Scarcity & Guarantee
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Scarcity */}
            <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Limited Availability</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                We only work with 12 founders per month to keep the experience personalized.
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-primary font-semibold">
                  Current availability: 3 spots left this month.
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Next cohort starts in 2 weeks
                </p>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">The Signal Guarantee</h3>
              </div>
              <p className="text-muted-foreground">
                If you don't see measurable improvement in how people respond to your story within 30 days, we'll refine your Signal DNA until you do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
