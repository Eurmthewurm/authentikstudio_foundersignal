import React from "react"
import { Brain, Zap, Target } from "lucide-react"

export function SignalDNAIntroSection() {
  return (
    <section className="w-full overflow-hidden flex justify-center items-center">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Introducing Signal DNA™
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your Signal DNA is the unique blend of your founding story, values, and vision that no competitor—or AI—can replicate.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              With the Signal DNA Discovery™ Method, we combine advanced AI analysis with narrative psychology to extract your most compelling elements—the ones that create trust, connection, and unstoppable momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-muted/5 border border-border/20 rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Analysis</h3>
              <p className="text-muted-foreground">
                Advanced pattern recognition identifies your most compelling narrative elements
              </p>
            </div>
            
            <div className="bg-muted/5 border border-border/20 rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Narrative Psychology</h3>
              <p className="text-muted-foreground">
                Deep human psychology principles create emotional connection and trust
              </p>
            </div>
            
            <div className="bg-muted/5 border border-border/20 rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Unstoppable Momentum</h3>
              <p className="text-muted-foreground">
                Your story becomes your unfair advantage in every interaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
