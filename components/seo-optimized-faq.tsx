"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

export function SEOOptimizedFAQ() {
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
      question: "What is the Signal DNA Method for founder storytelling?",
      answer: "The Signal DNA Method is an AI-powered framework that analyzes your unique founder story pattern to reveal your archetype, strengths, and blind spots. It helps you transform from an invisible founder to an industry legend by optimizing how you communicate with investors, customers, and talent."
    },
    {
      question: "How long does the founder archetype quiz take?",
      answer: "The Signal DNA founder archetype quiz takes just 2 minutes to complete. You'll answer strategic questions about your background, values, and communication style, then receive instant AI-powered analysis of your unique storytelling pattern."
    },
    {
      question: "What founder archetypes does the Signal DNA framework identify?",
      answer: "The Signal DNA framework identifies 8 core founder archetypes including The Visionary, The Builder, The Connector, The Innovator, The Strategist, The Catalyst, The Guardian, and The Pioneer. Each archetype has unique storytelling strengths and communication preferences."
    },
    {
      question: "Is the Signal DNA quiz really free with no credit card required?",
      answer: "Yes, the Signal DNA founder archetype quiz is completely free with no credit card required. You'll receive your personalized archetype report instantly after completing the 2-minute assessment."
    },
    {
      question: "How does AI narrative analysis work for founder storytelling?",
      answer: "Our AI analyzes your responses using advanced narrative psychology principles to identify patterns in how you naturally communicate. It compares your responses against thousands of successful founder stories to reveal your unique signal DNA and storytelling advantages."
    },
    {
      question: "What results can I expect from the Signal DNA Method?",
      answer: "Founders using the Signal DNA Method report 87% improved audience engagement, 73% new opportunities with investors and talent, and 91% faster business development cycles. The average revenue impact is €2.3M within 6 months of implementation."
    }
  ]

  return (
    <div className="w-full py-16 sm:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the Signal DNA Method
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border border-primary/20 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
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

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Ready to discover your Signal DNA?</p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg">
            <a href="/quiz">Start Free Quiz</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
