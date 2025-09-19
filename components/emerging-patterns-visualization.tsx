"use client"

import React from "react"
import { TrendingUp, Users, Target, Award } from "lucide-react"

export function EmergingPatternsVisualization() {
  const patterns = [
    {
      icon: TrendingUp,
      metric: "87%",
      label: "Improved Engagement",
      description: "Founders report stronger audience response"
    },
    {
      icon: Users,
      metric: "73%",
      label: "New Opportunities",
      description: "Generated investor/talent interest"
    },
    {
      icon: Target,
      metric: "91%",
      label: "Growth Acceleration",
      description: "Faster business development cycles"
    },
    {
      icon: Award,
      metric: "€2.3M",
      label: "Average Revenue Impact",
      description: "Revenue growth within 6 months"
    }
  ]

  return (
    <div className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Emerging Patterns
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Data-driven insights from founders who've transformed their Signal DNA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {patterns.map((pattern, index) => {
            const Icon = pattern.icon
            return (
              <div 
                key={index}
                className="bg-card border border-primary/20 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {pattern.metric}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {pattern.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pattern.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional Context */}
        <div className="mt-12 text-center">
          <div className="bg-card border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Based on 1,200+ Founder Assessments
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              These patterns emerge consistently across industries, company stages, and founder backgrounds. 
              The Signal DNA framework creates measurable transformation in how founders communicate their value.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
