import React from "react"
import { CheckCircle, AlertTriangle, TrendingUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function QuizResultsSection() {
  return (
    <section className="w-full px-5 py-20 md:py-24 overflow-hidden flex justify-center items-center">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Your Founder Signal Score: [XX/50]
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Here's what it means—and how to strengthen it.
            </p>
          </div>

          {/* Score Bands */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Weak Signal */}
            <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                <h3 className="text-xl font-bold text-destructive">Weak Signal (0-20)</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                You're getting lost in the noise. Your story isn't cutting through, and people struggle to understand what makes you different.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Clarity:</strong> Your message is unclear and confusing</p>
                <p><strong>Resonance:</strong> No emotional connection with your audience</p>
                <p><strong>Differentiation:</strong> You sound like everyone else</p>
                <p><strong>Momentum:</strong> No clear path forward</p>
              </div>
            </div>

            {/* Fading Signal */}
            <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
                <h3 className="text-xl font-bold text-yellow-600">Fading Signal (21-30)</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Potential is there, but unclear. You have good ideas but struggle to communicate them effectively.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Clarity:</strong> Some clarity but inconsistent</p>
                <p><strong>Resonance:</strong> Occasional emotional connection</p>
                <p><strong>Differentiation:</strong> Some unique elements but not prominent</p>
                <p><strong>Momentum:</strong> Slow progress, unclear direction</p>
              </div>
            </div>

            {/* Clear Signal */}
            <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-600">Clear Signal (31-40)</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Solid foundation, but not unforgettable yet. You're clear but need more emotional impact and memorability.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Clarity:</strong> Clear message that people understand</p>
                <p><strong>Resonance:</strong> Good emotional connection</p>
                <p><strong>Differentiation:</strong> Stands out from competitors</p>
                <p><strong>Momentum:</strong> Steady progress with clear direction</p>
              </div>
            </div>

            {/* Strong Signal */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-primary">Strong Signal (41-50)</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                You stand out, but amplification can make you unstoppable. You're memorable and compelling, ready for scale.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Clarity:</strong> Crystal clear and instantly understood</p>
                <p><strong>Resonance:</strong> Deep emotional connection</p>
                <p><strong>Differentiation:</strong> Completely unique and memorable</p>
                <p><strong>Momentum:</strong> Rapid progress and unstoppable growth</p>
              </div>
            </div>
          </div>

          {/* Personalized Breakdown */}
          <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Your Personalized Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Clarity → Specific Feedback</h4>
                <p className="text-muted-foreground text-sm">
                  Based on your score, here's exactly what's working and what needs refinement in your message clarity.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Resonance → Specific Feedback</h4>
                <p className="text-muted-foreground text-sm">
                  Your emotional connection analysis with actionable steps to deepen audience engagement.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Differentiation → Specific Feedback</h4>
                <p className="text-muted-foreground text-sm">
                  How you compare to competitors and specific ways to stand out more effectively.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Momentum → Specific Feedback</h4>
                <p className="text-muted-foreground text-sm">
                  Your readiness assessment with a clear roadmap for scaling your signal.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to Transform Your Signal?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Get your complete Signal DNA Report and personalized action plan
            </p>
            <Link href="/audit">
              <Button size="lg" className="text-lg px-8 py-6">
                Book Your Free Signal DNA Audit (€500 Value) →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
