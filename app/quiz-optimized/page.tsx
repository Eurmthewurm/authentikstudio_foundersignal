"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { FunnelHeader } from "@/components/funnel-header"
import { FunnelFooter } from "@/components/funnel-footer"
import { CheckCircle, Clock, Users } from "lucide-react"
import Image from "next/image"
import { trackQuizStart, trackQuizProgress, trackQuizCompletion, trackLeadCapture, trackCTAClick } from "@/components/analytics"

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0) // 0 = intro, 1 = quick questions, 2 = mini-insight, 3 = email capture, 4 = optional deep dive
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false)
  const [source, setSource] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [answers, setAnswers] = useState({})
  const [showDeepDive, setShowDeepDive] = useState(false)

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
    const newAnswers = { ...answers, [questionId]: value }
    setAnswers(newAnswers)
    
    // Track quiz progress
    const currentQuestion = Object.keys(newAnswers).length
    trackQuizProgress(currentQuestion, 7)
    
    // Auto-advance after 7 questions to mini-insight
    if (Object.keys(newAnswers).length >= 7) {
      // Track quiz completion
      const insight = getMiniInsight()
      trackQuizCompletion(insight.archetype, newAnswers)
      
      setTimeout(() => setCurrentStep(2), 800)
    }
  }

  const getMiniInsight = () => {
    const revenue = answers.revenue
    const challenge = answers.biggest_challenge
    const timeline = answers.timeline
    const companyStage = answers.company_stage
    const teamSize = answers.team_size
    const communicationStyle = answers.communication_style
    const targetAudience = answers.target_audience
    
    // Determine archetype based on comprehensive answers
    let archetype = "The Visionary Founder"
    let strength = "Future-focused vision"
    let blindSpot = "Customer accessibility"
    
    // Enhanced archetype logic based on all 7 questions
    if (revenue === 'under-100k' && challenge === 'investor_pitch' && teamSize === 'solo') {
      archetype = "The Builder Founder"
      strength = "Technical excellence and product focus"
      blindSpot = "Investor appeal and emotional connection"
    } else if (revenue === '1m-5m' && challenge === 'talent_attraction' && teamSize === '6-20') {
      archetype = "The Executor Founder"
      strength = "Systematic results and proven execution"
      blindSpot = "Emotional depth and inspiration"
    } else if (challenge === 'brand_differentiation' && communicationStyle === 'story_driven') {
      archetype = "The Challenger Founder"
      strength = "Unique perspective and market disruption"
      blindSpot = "Universal relatability and accessibility"
    } else if (companyStage === 'idea' && targetAudience === 'investors') {
      archetype = "The Pioneer Founder"
      strength = "Innovation and market creation"
      blindSpot = "Market validation and customer feedback"
    } else if (teamSize === '20-plus' && communicationStyle === 'data_driven') {
      archetype = "The Strategist Founder"
      strength = "Analytical thinking and systematic approach"
      blindSpot = "Human connection and emotional intelligence"
    }
    
    return {
      archetype,
      strength,
      blindSpot,
      timeline: timeline || '90 days'
    }
  }

  const getImmediateFeedback = () => {
    const answerCount = Object.keys(answers).length
    if (answerCount === 0) return null
    
    const revenue = answers.revenue
    const challenge = answers.biggest_challenge
    
    if (answerCount === 1 && revenue) {
      const strength = revenue === '5m-plus' ? 'Enterprise-level thinking' : 
                      revenue === '1m-5m' ? 'Scaling mindset' : 
                      revenue === '500k-1m' ? 'Growth orientation' : 'Early-stage agility'
      return `Interesting—this reveals you favor ${strength.toLowerCase()} storytelling.`
    }
    
    if (answerCount === 2 && challenge) {
      const insight = challenge === 'investor_pitch' ? 'You excel at technical details but need emotional connection' :
                     challenge === 'customer_conversion' ? 'You understand your product deeply but struggle with customer pain points' :
                     challenge === 'talent_attraction' ? 'You have vision but need to communicate culture and growth' :
                     'You have unique insights but need to differentiate from competitors'
      return `Key insight: ${insight}`
    }
    
    return null
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !consent) return

    setIsSubmitting(true)
    
    try {
      // Track lead capture
      trackLeadCapture(email, 'quiz')
    
    // Track the submission with source
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'quiz_started', {
        event_category: 'conversion',
        event_label: 'funnel_quiz',
        utm_source: source || 'direct',
        email: email
      })
    }

      // Get user's archetype data
      const insight = getMiniInsight()
      const firstName = email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

      // Send immediate quiz results email
      const emailResponse = await fetch('/api/send-quiz-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName,
          archetype: insight.archetype,
          strength: insight.strength,
          blindSpot: insight.blindSpot,
          source: source || 'direct'
        }),
      })

      if (emailResponse.ok) {
        // Schedule nurture sequence emails
        await fetch('/api/schedule-nurture-sequence', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            firstName,
            archetype: insight.archetype,
            strength: insight.strength,
            blindSpot: insight.blindSpot,
            source: source || 'direct'
          }),
        })
      }

    // Redirect to the actual quiz with source tracking
    window.location.href = `/quiz-assessment?email=${encodeURIComponent(email)}&utm_source=${source || 'direct'}`
      
    } catch (error) {
      console.error('Email sending error:', error)
      // Still redirect even if email fails
      window.location.href = `/quiz-assessment?email=${encodeURIComponent(email)}&utm_source=${source || 'direct'}`
    }
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
    },
    {
      id: 'company_stage',
      question: "What stage is your company in?",
      options: [
        { value: 'idea', label: 'Idea Stage', desc: 'Pre-launch, validating concept' },
        { value: 'mvp', label: 'MVP Stage', desc: 'Building first product' },
        { value: 'growth', label: 'Growth Stage', desc: 'Scaling existing product' },
        { value: 'expansion', label: 'Expansion Stage', desc: 'Entering new markets' }
      ]
    },
    {
      id: 'team_size',
      question: "How many people are on your team?",
      options: [
        { value: 'solo', label: 'Just Me', desc: 'Solo founder' },
        { value: '2-5', label: '2-5 People', desc: 'Small core team' },
        { value: '6-20', label: '6-20 People', desc: 'Growing team' },
        { value: '20-plus', label: '20+ People', desc: 'Established company' }
      ]
    },
    {
      id: 'communication_style',
      question: "How do you prefer to communicate your vision?",
      options: [
        { value: 'data_driven', label: 'Data & Metrics', desc: 'Facts and numbers' },
        { value: 'story_driven', label: 'Stories & Examples', desc: 'Narratives and cases' },
        { value: 'vision_driven', label: 'Vision & Future', desc: 'Big picture thinking' },
        { value: 'problem_driven', label: 'Problems & Solutions', desc: 'Pain points and fixes' }
      ]
    },
    {
      id: 'target_audience',
      question: "Who is your primary audience?",
      options: [
        { value: 'investors', label: 'Investors', desc: 'VCs, angels, funding' },
        { value: 'customers', label: 'Customers', desc: 'End users, buyers' },
        { value: 'partners', label: 'Partners', desc: 'Strategic alliances' },
        { value: 'employees', label: 'Team Members', desc: 'Internal stakeholders' }
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
              
              {/* Clear Framing */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-8">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-4 text-lg font-semibold text-foreground">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">Just 7 Questions</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="bg-green-500/20 text-green-600 px-3 py-1 rounded-full text-sm">Under 2 Minutes</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="bg-blue-500/20 text-blue-600 px-3 py-1 rounded-full text-sm">Instant Results</span>
                  </div>
                  
                  <p className="text-lg text-muted-foreground">
                    Receive a tailored founder-story blueprint that reveals your unique archetype and storytelling strengths
                  </p>
                </div>
              </div>
            
            <div className="text-lg sm:text-xl text-muted-foreground mb-8 space-y-4">
              <div className="flex items-center justify-center gap-2 text-sm">
                <Users className="w-4 h-4 text-primary" />
                  <span>2,847+ founders completed this assessment</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Most discover story advantages they never knew they had</span>
                </div>
              </div>

              <Button
                onClick={() => {
                  trackQuizStart()
                  setCurrentStep(1)
                }}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-4 text-lg rounded-xl mb-4"
              >
                Start Your Free Story Assessment →
              </Button>
              
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Takes under 2 minutes • No credit card required</span>
              </div>
            </div>
          )}

          {/* Step 1: Quick Questions */}
          {currentStep === 1 && (
            <div className="mb-12">
              {/* Progress Bar - Enhanced for Mobile */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-medium text-muted-foreground">Progress</span>
                  <span className="text-base font-bold text-primary">
                    Question {Object.keys(answers).length + 1} of 7
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500 shadow-sm"
                    style={{ width: `${((Object.keys(answers).length + 1) / 7) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Quick Questions First
                </h2>
                <p className="text-muted-foreground">
                  Answer 7 quick questions to get instant insights about your founder archetype.
                </p>
              </div>

              {quickQuestions.map((q, index) => (
                <div key={q.id} className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {q.question}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {q.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(q.id, option.value)}
                        className={`p-5 sm:p-4 rounded-xl border text-left transition-all min-h-[80px] sm:min-h-[70px] ${
                          answers[q.id] === option.value
                            ? 'bg-primary text-primary-foreground border-primary shadow-lg'
                            : 'bg-card border-border hover:border-primary/50 hover:shadow-md'
                        }`}
                      >
                        <div className="font-semibold text-base sm:text-sm">{option.label}</div>
                        <div className="text-sm opacity-80 mt-1">{option.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              {/* Immediate Feedback */}
              {getImmediateFeedback() && (
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6 mt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-green-600 font-semibold text-sm">Instant Insight</span>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300 font-medium">{getImmediateFeedback()}</p>
                  <div className="mt-3 text-xs text-green-600/80">
                    💡 This is just a preview—your full archetype report will reveal much more
                  </div>
                </div>
              )}

              {/* Progress indicator */}
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-8">
                <span>Questions answered: {Object.keys(answers).length}/7</span>
                <div className="w-20 h-2 bg-primary/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${(Object.keys(answers).length / 7) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Mini-Insight */}
          {currentStep === 2 && (
            <div className="mb-12">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 mb-4">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-green-600 font-medium text-sm">Quick Win Complete!</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  🎉 You're a <span className="text-primary">{getMiniInsight().archetype}</span>!
                </h2>
                <p className="text-muted-foreground text-lg">
                  This is just a preview—get your complete story blueprint emailed instantly
                </p>
              </div>

              {/* Mini-Insight Card */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 mb-8">
                {(() => {
                  const insight = getMiniInsight()
                  return (
                    <div className="text-center space-y-6">
                      <div className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
                        <span className="text-primary font-semibold text-lg">{insight.archetype}</span>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-green-600 mb-2">Your Superpower</h3>
                          <p className="text-green-700 dark:text-green-300">{insight.strength}</p>
                        </div>
                        
                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-yellow-600 mb-2">Your Blind Spot</h3>
                          <p className="text-yellow-700 dark:text-yellow-300">{insight.blindSpot}</p>
                        </div>
                      </div>
                      
                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                        <p className="text-sm text-primary font-semibold">
                          Based on your timeline ({insight.timeline}), we'll prioritize quick wins in your personalized report.
                        </p>
                      </div>
                    </div>
                  )
                })()}
              </div>

              {/* Next Steps */}
              <div className="mb-6">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Choose your next step:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="space-y-2">
                  <Button
                    onClick={() => setCurrentStep(3)}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-4 text-lg rounded-xl"
                  >
                    Get My Complete Report →
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Based on your 3 answers
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    onClick={() => setShowDeepDive(true)}
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-4 text-lg rounded-xl"
                  >
                    Optional: Full Signal DNA Profile (10 Questions)
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Deeper analysis & detailed recommendations
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground text-center">
                Get your personalized insights delivered to your email in 2 minutes
              </p>
            </div>
          )}

          {/* Step 3: Email Capture */}
          {currentStep === 3 && (
            <div className="mb-12">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 mb-4">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-green-600 font-medium text-sm">Assessment Complete</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Get Your Complete Story Blueprint
                </h2>
                <p className="text-muted-foreground mb-6">
                  You're a <span className="font-semibold text-primary">{getMiniInsight().archetype}</span>! 
                  Enter your email to receive your personalized report with actionable recommendations delivered instantly.
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
                  
                  {/* Privacy Note */}
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      <strong>We respect your privacy.</strong> We'll only send you valuable insights and tips. 
                      Unsubscribe anytime with one click.
                    </p>
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
