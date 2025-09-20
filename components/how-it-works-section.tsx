"use client"

import React from "react"
import { CheckCircle, ArrowRight } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Take the 2-minute quiz",
      description: "Answer 3 quick questions about your business and challenges",
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    },
    {
      number: 2,
      title: "Get your personalized archetype report",
      description: "Receive instant insights about your storytelling strengths and blind spots",
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    },
    {
      number: 3,
      title: "Book a strategy session",
      description: "Transform your insights into client-winning content with expert guidance",
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    }
  ]

  return (
    <section id="how-it-works" className="py-16 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From overlooked founder to unforgettable storyteller in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Step Card */}
              <div className="text-center p-8 bg-card border border-primary/20 rounded-2xl hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-semibold">Ready to transform your story?</span>
          </div>
        </div>
      </div>
    </section>
  )
}
