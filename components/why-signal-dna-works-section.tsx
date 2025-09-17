import React from "react"
import { Target, Bot, Zap, Shield } from "lucide-react"

export function WhySignalDNAWorksSection() {
  return (
    <section className="w-full overflow-hidden flex justify-center items-center">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Why Signal DNA Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Beyond Templates</h3>
              </div>
              <p className="text-muted-foreground">
                No cookie-cutter "hero's journey" – your Signal DNA is as unique as your fingerprint
              </p>
            </div>
            
            <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI + Human Psychology</h3>
              </div>
              <p className="text-muted-foreground">
                Proprietary analysis meets lived founder experience for maximum impact
              </p>
            </div>
            
            <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Fast Results</h3>
              </div>
              <p className="text-muted-foreground">
                Full framework in 72 hours – no 6-month brand discovery processes
              </p>
            </div>
            
            <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Future-Proof</h3>
              </div>
              <p className="text-muted-foreground">
                Authenticity is the last differentiator in an AI-driven world
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
