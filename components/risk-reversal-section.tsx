import React from "react"
import { Shield, CheckCircle, Clock, Users } from "lucide-react"

export function RiskReversalSection() {
  return (
    <section className="w-full px-5 py-16 md:py-20 overflow-hidden flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30">
              <Shield className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 font-semibold text-sm">100% Risk-Free Guarantee</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              The Signal DNA Guarantee
            </h2>
            <p className="text-lg text-muted-foreground">
              Your success is our reputation. Period.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl p-8 border border-green-500/20">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Try Signal DNA Discovery™ completely risk-free.
                </h3>
                <p className="text-lg text-muted-foreground">
                  If you don't see measurable improvement in how investors, customers, or team members respond to your story within 30 days, I'll refine your Signal DNA until you do.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-lg font-semibold text-foreground">30-Day</div>
                    <div className="text-sm text-muted-foreground">Money-Back Guarantee</div>
                  </div>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-lg font-semibold text-foreground">Unlimited</div>
                    <div className="text-sm text-muted-foreground">Refinements</div>
                  </div>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-lg font-semibold text-foreground">Personal</div>
                    <div className="text-sm text-muted-foreground">Success Commitment</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500/20 to-green-500/10 rounded-lg p-6 border border-green-500/30">
                <p className="text-lg font-semibold text-foreground text-center">
                  "Your success is my reputation. Period."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
