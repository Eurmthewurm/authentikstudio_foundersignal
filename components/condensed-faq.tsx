"use client"

import React, { useState } from "react"
import { ChevronDown, ChevronUp, Clock, Shield, CheckCircle } from "lucide-react"

export function CondensedFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: "How long does the assessment take?",
      answer: "The quick assessment takes just 2 minutes with 3 questions. You get immediate insights, then can optionally complete the full 10-question profile for deeper analysis.",
      icon: <Clock className="w-5 h-5 text-primary" />
    },
    {
      question: "Is this really free with no credit card required?",
      answer: "Yes! The Signal DNA assessment is completely free. No credit card, no hidden fees, no strings attached. We only ask for your email to send your personalized report.",
      icon: <Shield className="w-5 h-5 text-green-600" />
    },
    {
      question: "What results can I expect?",
      answer: "Founders typically see 200-300% improvements in investor pitches, customer conversion rates, and talent attraction within 90 days of implementing their Signal DNA insights.",
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />
    },
    {
      question: "How is this different from other storytelling frameworks?",
      answer: "Signal DNA is based on documentary filmmaking principles and founder psychology research. It identifies your unique story pattern rather than forcing generic templates.",
      icon: <CheckCircle className="w-5 h-5 text-purple-600" />
    }
  ]

  return (
    <section className="py-12 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Common Questions
          </h2>
          <p className="text-muted-foreground">
            Quick answers to help you get started
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-primary/10 rounded-xl overflow-hidden hover:border-primary/20 transition-colors"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {faq.icon}
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </div>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
