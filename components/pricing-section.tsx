"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const pricingPlans = [
    {
      name: "Free Signal DNA Audit",
      price: "FREE",
      originalPrice: "€500",
      description: "Limited to first 50 founders this month",
      features: [
        "15-Minute AI-Powered Story Analysis",
        "Personalized Signal DNA Report",
        "Competitive Differentiation Blueprint", 
        "90-Day Quick-Win Action Plan",
        'Exclusive "Founder Signal Playbook" (25+ templates)',
      ],
      buttonText: "Claim Your FREE Audit",
      buttonClass: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg",
      popular: true,
      badge: "Worth €500",
      highlight: "47 spots taken"
    },
    {
      name: "Signal DNA Discovery™",
      price: "€2,500",
      description: "Complete 72-hour transformation program",
      features: [
        "Deep Story Archaeology (Day 1)",
        "AI-powered founder psychology assessment",
        "Signal Engineering (Day 2)",
        "Competitive differentiation mapping",
        "Signal Amplification (Day 3)",
        "Multi-platform content framework",
        "Crisis-proof messaging system",
        "30-day implementation support",
      ],
      buttonText: "Start Discovery Process",
      buttonClass: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    },
    {
      name: "Full Journey Program",
      price: "€5,000+",
      description: "Complete founder story transformation",
      features: [
        "Everything in Signal DNA Discovery™",
        "6-month ongoing optimization",
        "Pitch deck transformation",
        "Media training & positioning",
        "Investor introduction strategy",
        "Team alignment workshops",
        "Crisis communication protocols",
        "Dedicated success manager",
      ],
      buttonText: "Schedule Strategy Call",
      buttonClass: "bg-accent text-accent-foreground hover:bg-accent/90",
    },
  ]

  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start items-center my-0 py-8 md:py-14">
      <div className="self-stretch relative flex flex-col justify-center items-center gap-2 py-0">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-4xl md:text-5xl font-semibold leading-tight md:leading-[40px] text-balance">
            Choose Your Signal DNA Journey
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-base font-medium leading-tight max-w-2xl">
            From free discovery to complete transformation. Choose the Signal DNA program that matches your ambition.
          </p>
        </div>

        <div className="mt-4 px-4 py-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-full">
          <p className="text-sm font-medium text-amber-800 dark:text-amber-200">🔥 Only 3 spots remaining this month</p>
        </div>
      </div>

      <div className="self-stretch px-5 flex flex-col lg:flex-row justify-start items-start gap-4 md:gap-6 mt-6 max-w-[1100px] mx-auto">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`flex-1 p-4 overflow-hidden rounded-xl flex flex-col justify-start items-start gap-6 ${
              plan.popular
                ? "bg-primary shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.10)] ring-2 ring-primary/20"
                : "bg-gradient-to-b from-gray-50/5 to-gray-50/0"
            }`}
            style={plan.popular ? {} : { outline: "1px solid hsl(var(--border))", outlineOffset: "-1px" }}
          >
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="self-stretch flex flex-col justify-start items-start gap-8">
                <div className="w-full flex items-center justify-between">
                  <div
                    className={`text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}
                  >
                    {plan.name}
                  </div>
                  {plan.popular && (
                    <div className="px-2 py-0.5 bg-white/20 rounded-full">
                      <div className="text-center text-primary-foreground text-xs font-medium">Most Popular</div>
                    </div>
                  )}
                  {plan.badge && (
                    <div className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 rounded-full">
                      <div className="text-center text-green-800 dark:text-green-200 text-xs font-medium">
                        {plan.badge}
                      </div>
                    </div>
                  )}
                  {plan.highlight && (
                    <div className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 rounded-full">
                      <div className="text-center text-red-800 dark:text-red-200 text-xs font-medium">
                        {plan.highlight}
                      </div>
                    </div>
                  )}
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                  <div className="flex justify-start items-center gap-1.5">
                    <div
                      className={`relative h-10 flex items-center text-3xl font-medium leading-10 ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}
                    >
                      {plan.price}
                    </div>
                    {plan.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">{plan.originalPrice}</div>
                    )}
                  </div>
                  <div
                    className={`self-stretch text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"}`}
                  >
                    {plan.description}
                  </div>
                </div>
              </div>

              <Button
                className={`self-stretch px-5 py-2 rounded-[40px] flex justify-center items-center ${plan.buttonClass}`}
              >
                <div className="px-1.5 flex justify-center items-center gap-2">
                  <span className="text-center text-sm font-medium leading-tight">{plan.buttonText}</span>
                </div>
              </Button>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div
                className={`self-stretch text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"}`}
              >
                What's included:
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="self-stretch flex justify-start items-center gap-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <Check
                        className={`w-full h-full ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"}`}
                        strokeWidth={2}
                      />
                    </div>
                    <div
                      className={`leading-tight font-normal text-sm text-left ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"}`}
                    >
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-2xl mx-auto text-center p-6 bg-card border border-border rounded-2xl">
        <h3 className="text-lg font-semibold text-foreground mb-2">The Signal DNA Guarantee</h3>
        <p className="text-foreground text-sm">
          Try Signal DNA Discovery™ completely risk-free. If you don't see measurable improvement in how investors,
          customers, or team members respond to your story within 30 days, I'll refine your Signal DNA until you do.
        </p>
      </div>
    </section>
  )
}
