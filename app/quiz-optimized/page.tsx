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
  const [currentStep, setCurrentStep] = useState(0) // 0 = intro, 1 = first questions, 2 = email capture
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false)
  const [source, setSource] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [answers, setAnswers] = useState({})

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

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
    
    // Auto-advance after 3 questions to email capture
    if (Object.keys({...answers, [questionId]: value}).length >= 3) {
      setTimeout(() => setCurrentStep(2), 800)
    }
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
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

  const quickQuestions = [
    {
      id: 'revenue',
      question: "What's your current annual revenue?",
      options: [
        { value: 'under-100k', label: 'Under €100K', desc: 'Early stage' },
        { value: '100k-500k', label: '€100K-500K', desc: 'Growing' },
        { value: '500k-1m', label: '€500K-1M', desc: 'Established' },
        { value: '1m-5m', label: '€1M-5M', desc: 'Scaling' },
        { value: '5m-plus', label: '€5M+', desc: 'Enterprise' }
      ]
    },
    {
      id: 'biggest_challenge',
      question: "What's your biggest storytelling challenge?",
      options: [
        { value: 'investor_pitch', label: 'Investor Pitches', desc: 'Struggling to get funded' },
        { value: 'customer_conversion', label: 'Customer Conversion', desc: 'Long sales cycles' },
        { value: 'talent_attraction', label: 'Talent Attraction', desc: 'Hard to hire A-players' },
        { value: 'brand_differentiation', label: 'Brand Differentiation', desc: 'Look like everyone else' }
      ]
    },
    {
      id: 'timeline',
      question: "When do you need to see results?",
      options: [
        { value: '30_days', label: '30 Days', desc: 'Urgent transformation' },
        { value: '90_days', label: '90 Days', desc: 'Quick wins needed' },
        { value: '6_months', label: '6 Months', desc: 'Steady progress' },
        { value: '12_months', label: '12 Months', desc: 'Long-term planning' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <FunnelHeader />
      
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Step 0: Intro */}
          {currentStep === 0 && (
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                {getDynamicHeadline()}
              </h1>
              
              <div className="text-lg sm:text-xl text-muted-foreground mb-8 space-y-4">
                <p>This 2-minute assessment reveals:</p>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span>2,847 founders completed this assessment.</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Most discover story advantages they never knew they had.</span>
                </div>
                <p className="text-sm">Get instant insights before we personalize your recommendations.</p>
              </div>

              <Button
                onClick={() => setCurrentStep(1)}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-4 text-lg rounded-xl mb-4"
              >
                Start Assessment →
              </Button>
              
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>90 seconds to complete</span>
              </div>
            </div>
          )}

          {/* Step 1: Quick Questions */}
          {currentStep === 1 && (
            <div className="mb-12">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Quick Questions First
                </h2>
                <p className="text-muted-foreground">
                  Answer 3 quick questions to get instant insights about your founder archetype.
                </p>
              </div>

              {quickQuestions.map((q, index) => (
                <div key={q.id} className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {q.question}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {q.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(q.id, option.value)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          answers[q.id] === option.value
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-card border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="font-semibold">{option.label}</div>
                        <div className="text-sm opacity-80">{option.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              {/* Progress indicator */}
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-8">
                <span>Questions answered: {Object.keys(answers).length}/3</span>
                <div className="w-20 h-2 bg-primary/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${(Object.keys(answers).length / 3) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Email Capture */}
          {currentStep === 2 && (
            <div className="mb-12">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 mb-4">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-green-600 font-medium text-sm">Assessment Complete</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Get Your Complete Signal DNA Report
                </h2>
                <p className="text-muted-foreground mb-6">
                  Based on your answers, we've identified your founder archetype. Enter your email to receive your personalized report with actionable recommendations.
                </p>
              </div>

              {/* Form Section */}
              <div className="bg-card border border-primary/20 rounded-2xl p-8 mb-8">
                <form onSubmit={handleEmailSubmit} className="space-y-6">
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
                    {isSubmitting ? "Sending Your Report..." : "Get My Complete Report →"}
                  </Button>
                </form>
              </div>

              {/* What You'll Get */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-primary mb-4">What You'll Receive:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Your Founder Archetype</div>
                      <div className="text-muted-foreground">Based on your answers</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">3 Personalized Recommendations</div>
                      <div className="text-muted-foreground">Specific actions to improve your story</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Signal DNA Framework</div>
                      <div className="text-muted-foreground">Proven methodology for story optimization</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Next Steps Guide</div>
                      <div className="text-muted-foreground">Clear roadmap for implementation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

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
