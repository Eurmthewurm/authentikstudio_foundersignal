import React from "react"
import { CheckCircle, Zap, Shield, TrendingUp, Brain, Clock } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Beyond Generic Storytelling",
      description: "While others recycle the same 'hero's journey' template, your Signal DNA is as unique as your fingerprint—impossible to copy, impossible to ignore."
    },
    {
      icon: Brain,
      title: "AI-Enhanced, Human-Crafted",
      description: "Our proprietary AI identifies patterns in your story that even you didn't notice, then our expert team crafts them into narratives that create instant emotional connection."
    },
    {
      icon: Zap,
      title: "Built for Speed",
      description: "No 6-month brand discovery processes. Get your complete Signal DNA framework in 72 hours, ready to deploy across every touchpoint."
    },
    {
      icon: Shield,
      title: "Future-Proof Against AI",
      description: "As AI content floods the market, authentic Signal DNA becomes your most valuable differentiator—because machines can't replicate lived experience."
    },
    {
      icon: TrendingUp,
      title: "Measurable Impact",
      description: "Track how your Signal DNA drives investor interest, customer acquisition, team alignment, and media coverage with our custom analytics dashboard."
    },
    {
      icon: Clock,
      title: "Immediate Implementation",
      description: "Start seeing results from day one. Your Signal DNA framework comes with ready-to-use templates, scripts, and strategies for every business touchpoint."
    }
  ]

  return (
    <section className="w-full px-5 py-16 md:py-20 overflow-hidden flex flex-col justify-center items-center">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Why Signal DNA Works When Everything Else Fails
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            While others struggle with generic templates, you'll have a story that's impossible to ignore
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group p-6 hover:bg-muted/20 transition-all duration-300 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
