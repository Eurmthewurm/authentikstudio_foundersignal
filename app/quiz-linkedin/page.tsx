"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { FunnelHeader } from "@/components/funnel-header"
import { FunnelFooter } from "@/components/funnel-footer"
import { CheckCircle, Clock, Users, Building2, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function QuizLinkedInPage() {
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false)
  const [source, setSource] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const src = urlParams.get('src') || 'linkedin'
    setSource(src)
  }, [])

  const getDynamicHeadline = () => {
    switch (source) {
      case 'linkedin':
        return "LinkedIn Founders: Discover Your Signal DNA Archetype"
      case 'linkedin-campaign':
        return "Professional Founders: Unlock Your Leadership Story"
      case 'linkedin-network':
        return "Network-Ready: Discover Your Founder Archetype"
      default:
        return "LinkedIn Founders: Discover Your Signal DNA Archetype"
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
        event_label: 'funnel_quiz_linkedin',
        utm_source: source || 'linkedin',
        email: email
      })
    }

    // Redirect to the actual quiz with source tracking
    window.location.href = `/quiz-assessment?email=${encodeURIComponent(email)}&utm_source=${source || 'linkedin'}`
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
              <p>This professional assessment reveals:</p>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Building2 className="w-4 h-4 text-primary" />
                <span>Over 1,000 LinkedIn founders completed this assessment.</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>Most discover leadership advantages they never knew they had.</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Perfect for investor conversations and talent acquisition.</span>
              </div>
              <p className="text-sm">This helps us personalize your professional recommendations.</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-card border border-primary/20 rounded-2xl p-8 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder="Enter your professional email address"
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
                  I consent to receiving professional Signal DNA insights and founder leadership tips via email. 
                  I can unsubscribe anytime. <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                </label>
              </div>
              
              <Button
                type="submit"
                disabled={!email || !consent || isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-4 text-lg rounded-xl"
              >
                {isSubmitting ? "Starting Assessment..." : "Get My Professional Score"}
              </Button>
            </form>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
              <Clock className="w-4 h-4" />
              <span>90 seconds to complete</span>
            </div>
          </div>

          {/* LinkedIn-Specific Social Proof Section */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5">BBC</div>
              <div className="text-muted-foreground font-semibold text-sm md:text-base hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:bg-primary/5">National Geographic</div>
            </div>
            
            <div className="bg-card border border-primary/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Professional Testimonial</h3>
                  <p className="text-sm text-muted-foreground">LinkedIn Founder Success Story</p>
                </div>
              </div>
              <blockquote className="text-lg italic text-foreground mb-4">
                "Signal DNA helped me quadruple revenue in 18 months and secure Series A funding. The framework transformed how I communicate with investors and attract top talent."
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-primary">J-Griff</p>
                  <p className="text-sm text-muted-foreground">Tech Founder & LinkedIn Thought Leader</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-green-600">€6M Revenue Growth</p>
                  <p className="text-xs text-muted-foreground">Series A Secured</p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Benefits */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-primary mb-4">Perfect for LinkedIn Professionals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Investor-ready storytelling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Talent attraction optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Professional network building</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Leadership positioning</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FunnelFooter />
    </div>
  )
}
