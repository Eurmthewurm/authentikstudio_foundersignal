"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { X, Clock, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export function QuizPreviewPopup() {
  const [isOpen, setIsOpen] = useState(false)

  const sampleQuestions = [
    {
      question: "What's your biggest challenge when pitching to investors?",
      options: ["They don't understand my vision", "My story feels generic", "I can't build emotional connection", "They focus on metrics over impact"]
    },
    {
      question: "How do you currently communicate your Signal DNA?",
      options: ["Through data and metrics", "Personal anecdotes", "Company milestones", "I don't have a clear story"]
    }
  ]

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full hover:bg-primary/15 transition-colors duration-300 cursor-pointer group">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-primary font-semibold text-sm sm:text-base">Join 2,847 founders who discovered their Signal DNA</span>
          <div className="text-primary text-xs opacity-70">→ Start Quiz</div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl bg-background border border-primary/20 rounded-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center pb-6">
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            Discover Your Founder Archetype
          </DialogTitle>
          <p className="text-muted-foreground text-lg">
            Take our 2-minute assessment to unlock your unique storytelling DNA
          </p>
        </DialogHeader>

        {/* Quiz Preview Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
            <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="text-sm font-semibold text-primary">2 Minutes</div>
            <div className="text-xs text-muted-foreground">Completion Time</div>
          </div>
          <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
            <Users className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="text-sm font-semibold text-primary">2,847</div>
            <div className="text-xs text-muted-foreground">Founders Tested</div>
          </div>
          <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
            <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="text-sm font-semibold text-primary">89%</div>
            <div className="text-xs text-muted-foreground">See Results</div>
          </div>
        </div>

        {/* Sample Questions */}
        <div className="space-y-6 mb-8">
          <h3 className="text-lg font-semibold text-foreground text-center">Sample Questions:</h3>
          
          {sampleQuestions.map((item, index) => (
            <div key={index} className="p-4 bg-card border border-border rounded-lg">
              <p className="font-medium text-foreground mb-3">{item.question}</p>
              <div className="space-y-2">
                {item.options.map((option, optIndex) => (
                  <div key={optIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                    <span>{option}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* What You'll Get */}
        <div className="bg-primary/5 rounded-lg p-6 border border-primary/10 mb-8">
          <h3 className="text-lg font-semibold text-primary mb-4 text-center">What You'll Discover:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="font-medium text-foreground">Your Founder Archetype</div>
                <div className="text-sm text-muted-foreground">The storytelling pattern that resonates with your audience</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="font-medium text-foreground">Signal DNA Report</div>
                <div className="text-sm text-muted-foreground">Personalized insights for your unique Signal DNA</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="font-medium text-foreground">Competitive Edge</div>
                <div className="text-sm text-muted-foreground">How to differentiate from generic founders</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="font-medium text-foreground">Action Plan</div>
                <div className="text-sm text-muted-foreground">90-day roadmap to legendary status</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/quiz" className="flex-1" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground hover:from-primary-dark hover:to-primary py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Start Free Assessment →
            </Button>
          </Link>
          <Button 
            variant="outline" 
            onClick={() => setIsOpen(false)}
            className="px-8 py-4 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground rounded-xl font-semibold transition-all duration-300"
          >
            Maybe Later
          </Button>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          100% Free • No Credit Card Required • Instant Results
        </p>
      </DialogContent>
    </Dialog>
  )
}
