import React from "react"
import { Brain, Zap, Target, TrendingUp, Users, MessageSquare } from "lucide-react"

export function DashboardPreview() {
  return (
    <div className="w-[calc(100vw-32px)] md:w-[1160px]">
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 shadow-2xl border border-primary/20">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">Signal DNA Framework</h3>
          <p className="text-muted-foreground">Your complete narrative transformation system</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Phase 1 */}
          <div className="bg-background/50 rounded-xl p-6 border border-border/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">Phase 1</h4>
            </div>
            <h5 className="font-medium text-foreground mb-2">Deep Story Archaeology</h5>
            <p className="text-sm text-muted-foreground">AI-powered founder psychology assessment and authentic voice discovery</p>
          </div>

          {/* Phase 2 */}
          <div className="bg-background/50 rounded-xl p-6 border border-border/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">Phase 2</h4>
            </div>
            <h5 className="font-medium text-foreground mb-2">Signal Engineering</h5>
            <p className="text-sm text-muted-foreground">Competitive differentiation mapping and audience resonance optimization</p>
          </div>

          {/* Phase 3 */}
          <div className="bg-background/50 rounded-xl p-6 border border-border/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">Phase 3</h4>
            </div>
            <h5 className="font-medium text-foreground mb-2">Signal Amplification</h5>
            <p className="text-sm text-muted-foreground">Multi-platform content framework and crisis-proof messaging system</p>
          </div>
        </div>

        {/* Results Bar */}
        <div className="bg-background/30 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-semibold text-foreground">Signal DNA Impact</h4>
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4x</div>
              <div className="text-sm text-muted-foreground">Revenue Growth</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">72h</div>
              <div className="text-sm text-muted-foreground">Transformation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">Founders Helped</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">€50M+</div>
              <div className="text-sm text-muted-foreground">Raised</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
