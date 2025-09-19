import React from "react"
import { Clock, AlertTriangle, Users, TrendingUp } from "lucide-react"

export function UrgencySection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Why Now? Why This Matters More in 2025
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              The window for authentic differentiation is closing rapidly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-xl p-4 sm:p-6 border border-red-500/20 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">The AI Authenticity Crisis Is Here</h3>
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                  73% of consumers can now detect AI-generated content
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                  Investor fatigue with "templated" pitches at all-time high
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                  Authentic storytelling showing 4x higher engagement rates
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                  Window for authentic differentiation closing rapidly
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 sm:p-6 border border-primary/20 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Limited Spots Available</h3>
              </div>
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-muted-foreground">
                  Only <span className="font-bold text-primary">12 founders per month</span> receive full Signal DNA Discovery to ensure personalized attention and maximum impact.
                </p>
                
                <div className="bg-primary/20 rounded-lg p-3 sm:p-4 border border-primary/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-medium text-primary">Current Availability</span>
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-primary">3 spots remaining</div>
                  <div className="w-full bg-primary/20 rounded-full h-2 mt-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-4 sm:p-6 border border-primary/30 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center gap-3 mb-3">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">The Founders Who Dominate 2025</h3>
            </div>
            <p className="text-base sm:text-lg text-foreground font-medium">
              Will be the ones who act now. Every day you wait, another founder claims mindshare that should be yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
