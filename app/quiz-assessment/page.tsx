"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { FunnelHeader } from "@/components/funnel-header"
import { FunnelFooter } from "@/components/funnel-footer"
import { ArrowLeft, ArrowRight, Clock } from "lucide-react"

interface QuizQuestion {
  id: string
  question: string
  options: string[]
}

const quizQuestions: QuizQuestion[] = [
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
      
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Navigation */}
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
            
            <Button
              onClick={handleNext}
              disabled={!answers[quizQuestions[currentQuestion].id]}
              className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {currentQuestion === quizQuestions.length - 1 ? 'Get My Results' : 'Next'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </main>
      
      <FunnelFooter />
    </div>
  )
}
