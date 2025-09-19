"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { FunnelHeader } from "@/components/funnel-header"
import { FunnelFooter } from "@/components/funnel-footer"
import { CheckCircle, Clock, Users } from "lucide-react"
import Image from "next/image"

export default function QuizPage() {
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false)
  const [source, setSource] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const src = urlParams.get('src') || ''
    setSource(src)
  }, [])

  const getDynamicHeadline = () => {
    switch (source) {
      case 'youtube':
        return "As Seen on YouTube: Discover Your Founder Archetype"
      case 'reddit':
        return "r/startups Founders: What's Your Archetype?"
      case 'linkedin':
        return "LinkedIn Founders: Discover Your Signal DNA Archetype"
      case 'linkedin-campaign':
        return "Professional Founders: Unlock Your Leadership Story"
      default:
        return "Discover Your Founder Archetype in 2 Minutes"
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !consent) return

    setIsSubmitting(true)
    
    // Track the submission with source
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'quiz_started', {
        event_category: 'conversion',
        event_label: 'funnel_quiz',
        utm_source: source || 'direct',
        email: email
      })
    }

    // Redirect to the actual quiz with source tracking
    window.location.href = `/quiz-assessment?email=${encodeURIComponent(email)}&utm_source=${source || 'direct'}`
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <FunnelHeader />
      
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              {getDynamicHeadline()}
            </h1>
            
            <div className="text-lg sm:text-xl text-muted-foreground mb-8 space-y-4">
              <p>This 2-minute assessment reveals:</p>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Users className="w-4 h-4 text-primary" />
                <span>Over 1,000 founders completed this assessment.</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Most discover story advantages they never knew they had.</span>
              </div>
              <p className="text-sm">This helps us personalize your recommendations.</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-card border border-primary/20 rounded-2xl p-8 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-lg rounded-xl border-primary/20 focus:border-primary"
                  required
                />
              </div>
              
              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked as boolean)}
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                  I consent to receiving personalized Signal DNA insights and founder storytelling tips via email. 
                  I can unsubscribe anytime. <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                </label>
              </div>
              
              <Button
                type="submit"
                disabled={!email || !consent || isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-4 text-lg rounded-xl"
              >
                {isSubmitting ? "Starting Assessment..." : "Get My Score"}
              </Button>
            </form>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
              <Clock className="w-4 h-4" />
              <span>90 seconds to complete</span>
            </div>
          </div>

          {/* Social Proof Section */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="text-2xl font-bold text-muted-foreground">BBC</div>
              <div className="text-2xl font-bold text-muted-foreground">National Geographic</div>
            </div>
            
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <p className="text-lg italic text-foreground mb-2">
                "Signal DNA helped me quadruple revenue in 18 months."
              </p>
              <p className="text-sm text-primary font-semibold">— J-Griff</p>
            </div>
          </div>
        </div>
      </main>
      
      <FunnelFooter />
    </div>
  )
}
