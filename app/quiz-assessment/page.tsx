"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { FunnelHeader } from "@/components/funnel-header"
import { FunnelFooter } from "@/components/funnel-footer"
import { ArrowLeft, ArrowRight, Clock, Users, TrendingUp } from "lucide-react"

interface QuizQuestion {
  id: string
  question: string
  options: string[]
}

const quizQuestions: QuizQuestion[] = [
  {
    id: "revenue_range",
    question: "What's your current annual revenue range?",
    options: [
      "Under €100K",
      "€100K-500K", 
      "€500K-1M",
      "€1M-5M",
      "€5M+"
    ]
  },
  {
    id: "vision_clarity",
    question: "How do you typically communicate your company's vision?",
    options: [
      "Through detailed data and metrics",
      "With personal stories and anecdotes", 
      "Using company milestones and achievements",
      "I struggle to articulate it clearly"
    ]
  },
  {
    id: "investor_pitch",
    question: "What's your biggest challenge when pitching to investors?",
    options: [
      "They don't understand my vision",
      "My story feels generic",
      "I can't build emotional connection",
      "They focus on metrics over impact"
    ]
  },
  {
    id: "customer_acquisition",
    question: "How do you currently attract customers?",
    options: [
      "Product features and specifications",
      "Personal founder story",
      "Company achievements and credentials",
      "I'm not sure what works best"
    ]
  },
  {
    id: "team_building",
    question: "What motivates you most when building your team?",
    options: [
      "Finding the most qualified candidates",
      "Building a culture around shared values",
      "Creating innovative solutions together",
      "Achieving measurable business results"
    ]
  },
  {
    id: "crisis_handling",
    question: "How do you handle setbacks or crises?",
    options: [
      "Focus on data and solutions",
      "Share vulnerability and learnings",
      "Highlight past successes",
      "I prefer to handle things privately"
    ]
  },
  {
    id: "signal_dna_communication",
    question: "How do you currently communicate your Signal DNA?",
    options: [
      "Through data and metrics",
      "Personal anecdotes",
      "Company milestones",
      "I don't have a clear story"
    ]
  },
  {
    id: "storytelling_strength",
    question: "What's your strongest storytelling element?",
    options: [
      "Data-driven insights",
      "Personal journey",
      "Company achievements",
      "I'm not sure"
    ]
  },
  {
    id: "audience_connection",
    question: "Which audience do you connect with best?",
    options: [
      "Investors and VCs",
      "Customers and users",
      "Team members and employees",
      "Industry peers"
    ]
  },
  {
    id: "growth_challenge",
    question: "What's your biggest growth challenge?",
    options: [
      "Attracting investment",
      "Customer acquisition",
      "Team scaling",
      "Market positioning"
    ]
  }
]

export default function QuizAssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [email, setEmail] = useState("")
  const [utmSource, setUtmSource] = useState("")
  const [timeLeft, setTimeLeft] = useState(90)

  useEffect(() => {
    // Get email and source from URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const emailParam = urlParams.get('email')
    const sourceParam = urlParams.get('utm_source')
    
    if (emailParam) setEmail(emailParam)
    if (sourceParam) setUtmSource(sourceParam)

    // Start countdown timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Auto-submit when time runs out
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleAnswerSelect = (answer: string) => {
    const questionId = quizQuestions[currentQuestion].id
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))
    
    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1)
      } else {
        handleSubmit()
      }
    }, 500)
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      handleSubmit()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const calculateArchetype = () => {
    // Simple scoring logic based on answers
    const scores = {
      visionary: 0,
      builder: 0,
      scholar: 0,
      connector: 0
    }

    Object.entries(answers).forEach(([questionId, answer]) => {
      const questionIndex = quizQuestions.findIndex(q => q.id === questionId)
      const optionIndex = quizQuestions[questionIndex]?.options.indexOf(answer) || 0
      
      // Simple scoring based on answer patterns
      if (optionIndex === 0) scores.scholar += 1
      if (optionIndex === 1) scores.visionary += 1
      if (optionIndex === 2) scores.builder += 1
      if (optionIndex === 3) scores.connector += 1
    })

    return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b)
  }

  const handleSubmit = async () => {
    const archetype = calculateArchetype()
    
    // Track completion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'quiz_completed', {
        event_category: 'conversion',
        event_label: 'funnel_quiz',
        utm_source: utmSource || 'direct',
        archetype: archetype,
        email: email
      })
    }

    // Redirect to results page
    window.location.href = `/quiz-results?archetype=${archetype}&email=${encodeURIComponent(email)}&utm_source=${utmSource || 'direct'}`
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <FunnelHeader />
      
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Enhanced Intro - Only show on first question */}
          {currentQuestion === 0 && (
            <div className="text-center space-y-6 md:space-y-8 mb-12">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Discover Your Founder Archetype
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Take our 2-minute assessment to unlock your unique storytelling DNA
              </p>

              {/* Quiz Preview Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
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
              <div className="space-y-4 max-w-3xl mx-auto">
                <h3 className="text-lg font-semibold text-foreground">Sample Questions:</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-card border border-border rounded-lg text-left">
                    <p className="font-medium text-foreground mb-3">What's your biggest challenge when pitching to investors?</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                        <span>They don't understand my vision</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                        <span>My story feels generic</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                        <span>I can't build emotional connection</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-card border border-border rounded-lg text-left">
                    <p className="font-medium text-foreground mb-3">How do you currently communicate your Signal DNA?</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                        <span>Through data and metrics</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                        <span>Personal anecdotes</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                        <span>Company milestones</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What You'll Get */}
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/10 max-w-4xl mx-auto">
                <h3 className="text-lg font-semibold text-primary mb-4">What You'll Discover:</h3>
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

              <p className="text-center text-sm text-muted-foreground">
                100% Free • No Credit Card Required • Instant Results
              </p>
            </div>
          )}

          <div className="flex items-center justify-center">
            <div className="max-w-3xl w-full">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{timeLeft}s remaining</span>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="bg-card border border-primary/20 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
                  {quizQuestions[currentQuestion].question}
                </h2>
                
                <div className="space-y-4">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(option)}
                      className={`w-full p-4 text-left rounded-xl border transition-all duration-200 ${
                        answers[quizQuestions[currentQuestion].id] === option
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-border hover:border-primary/50 hover:bg-primary/5'
                      }`}
                    >
                      <span className="font-medium">{option}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation - Hide Next button since answers auto-advance */}
              <div className="flex items-center justify-between">
                <Button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>
                
                {/* Show progress indicator instead of Next button */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                  <div className="w-20 h-2 bg-primary/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FunnelFooter />
    </div>
  )
}
