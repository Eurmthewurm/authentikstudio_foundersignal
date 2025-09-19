"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Mail, Download, Clock, ExternalLink } from "lucide-react"
import { trackQuizCompletion, trackLeadCapture } from "@/components/analytics"

// Founder Archetype System
interface FounderArchetype {
  name: string
  description: string
  strengths: string[]
  blindSpots: string[]
  recommendations: string[]
  successStory: {
    founder: string
    result: string
    description: string
  }
}

const founderArchetypes: FounderArchetype[] = [
  {
    name: "The Visionary Founder",
    description: "You're in the rare 8% of founders who possess the most powerful investor appeal: future-focused vision. Your Superpower: Investors chase you because they sense inevitable success. Your Hidden Challenge: You have 3 specific story blind spots that repel 60% of customers (most Visionary Founders don't realize this until it's too late).",
    strengths: ["High investor appeal", "Strong vision communication", "Future-focused thinking"],
    blindSpots: ["There's a €1M+ customer story hiding in your vision that you haven't accessed", "Your archetype has a specific accessibility pattern that repels 60% of customers", "You're missing the 'practical bridge' that converts vision into customer value"],
    recommendations: ["Your personalized roadmap reveals the exact customer story framework", "The audit shows your specific accessibility blind spots", "Your transformation timeline unlocks the practical bridge method"],
    successStory: {
      founder: "Elon Musk",
      result: "Multiple billion-dollar companies",
      description: "Mastered the art of making impossible visions feel inevitable"
    }
  },
  {
    name: "The Builder Founder", 
    description: "You're in the rare 15% of founders who possess the most powerful customer appeal: technical excellence. Your Superpower: Customers choose you because they trust your solutions. Your Hidden Challenge: You have 3 specific story blind spots that repel 70% of investors (most Builder Founders don't realize this until it's too late).",
    strengths: ["High product focus", "Technical excellence", "Customer satisfaction"],
    blindSpots: ["There's a €2M+ funding story hiding in your technical journey that you haven't accessed", "Your archetype has a specific vulnerability pattern that repels 70% of investors", "You're missing the 'human bridge' that converts technical excellence into investor appeal"],
    recommendations: ["Your personalized roadmap reveals the exact funding story framework", "The audit shows your specific vulnerability blind spots", "Your transformation timeline unlocks the human bridge method"],
    successStory: {
      founder: "Steve Jobs",
      result: "Apple's transformation",
      description: "Learned to connect technical excellence with emotional storytelling"
    }
  },
  {
    name: "The Transformer Founder",
    description: "You're in the rare 12% of founders who possess the most powerful story element: authentic transformation. Your Superpower: People trust you instantly because they sense your genuine journey. Your Hidden Challenge: You have 3 specific story blind spots that are costing you opportunities (most Transformer Founders don't realize this until it's too late).",
    strengths: ["High authenticity", "Personal connection", "Emotional resonance"],
    blindSpots: ["There's a €2M+ revenue story hiding in your transformation that you haven't accessed", "Your archetype has a specific vulnerability pattern that repels 40% of investors", "You're missing the 'bridge narrative' that converts your story into strategic business advantage"],
    recommendations: ["Your personalized roadmap reveals the exact revenue story framework", "The audit shows your specific vulnerability blind spots", "Your transformation timeline unlocks the bridge narrative method"],
    successStory: {
      founder: "Oprah Winfrey",
      result: "Media empire",
      description: "Transformed personal story into systematic business success"
    }
  },
  {
    name: "The Challenger Founder",
    description: "You're in the rare 10% of founders who possess the most powerful differentiation: unique perspective. Your Superpower: You stand out because you challenge conventional thinking. Your Hidden Challenge: You have 3 specific story blind spots that repel 50% of audiences (most Challenger Founders don't realize this until it's too late).",
    strengths: ["High differentiation", "Unique positioning", "Market disruption"],
    blindSpots: ["There's a €1.5M+ relatability story hiding in your uniqueness that you haven't accessed", "Your archetype has a specific accessibility pattern that repels 50% of audiences", "You're missing the 'connection bridge' that converts differentiation into universal appeal"],
    recommendations: ["Your personalized roadmap reveals the exact relatability story framework", "The audit shows your specific accessibility blind spots", "Your transformation timeline unlocks the connection bridge method"],
    successStory: {
      founder: "Richard Branson",
      result: "Virgin Group empire",
      description: "Made rebellious spirit accessible to mainstream audiences"
    }
  },
  {
    name: "The Connector Founder",
    description: "You're in the rare 18% of founders who possess the most powerful relationship building: multi-audience understanding. Your Superpower: You excel at building networks because you understand different perspectives. Your Hidden Challenge: You have 3 specific story blind spots that hide your individual value (most Connector Founders don't realize this until it's too late).",
    strengths: ["High relationship building", "Multi-audience understanding", "Network effects"],
    blindSpots: ["There's a €1.8M+ individual story hiding in your connections that you haven't accessed", "Your archetype has a specific positioning pattern that dilutes your unique value", "You're missing the 'identity bridge' that converts relationships into personal authority"],
    recommendations: ["Your personalized roadmap reveals the exact individual story framework", "The audit shows your specific positioning blind spots", "Your transformation timeline unlocks the identity bridge method"],
    successStory: {
      founder: "Reid Hoffman",
      result: "LinkedIn success",
      description: "Connected personal mission with systematic networking"
    }
  },
  {
    name: "The Executor Founder",
    description: "You're in the rare 20% of founders who possess the most powerful execution: systematic results. Your Superpower: You deliver because you focus on systematic implementation. Your Hidden Challenge: You have 3 specific story blind spots that hide your emotional depth (most Executor Founders don't realize this until it's too late).",
    strengths: ["High execution focus", "Proven results", "Systematic approach"],
    blindSpots: ["There's a €2.2M+ emotional story hiding in your results that you haven't accessed", "Your archetype has a specific inspiration pattern that limits your appeal", "You're missing the 'passion bridge' that converts execution into emotional connection"],
    recommendations: ["Your personalized roadmap reveals the exact emotional story framework", "The audit shows your specific inspiration blind spots", "Your transformation timeline unlocks the passion bridge method"],
    successStory: {
      founder: "Jeff Bezos",
      result: "Amazon's dominance",
      description: "Learned to balance systematic execution with visionary storytelling"
    }
  },
  {
    name: "The Catalyst Founder",
    description: "You're in the rare 17% of founders who possess the most powerful inspiration: change leadership. Your Superpower: You inspire action because you catalyze transformation. Your Hidden Challenge: You have 3 specific story blind spots that limit your strategic depth (most Catalyst Founders don't realize this until it's too late).",
    strengths: ["High inspiration ability", "Change leadership", "Action orientation"],
    blindSpots: ["There's a €1.7M+ strategic story hiding in your inspiration that you haven't accessed", "Your archetype has a specific depth pattern that limits your credibility", "You're missing the 'strategy bridge' that converts inspiration into systematic authority"],
    recommendations: ["Your personalized roadmap reveals the exact strategic story framework", "The audit shows your specific depth blind spots", "Your transformation timeline unlocks the strategy bridge method"],
    successStory: {
      founder: "Tony Robbins",
      result: "Personal development empire",
      description: "Systematized inspiration into scalable transformation"
    }
  }
]

function determineArchetype(scores: { customer: number; talent: number; investor: number; consistency: number }): FounderArchetype {
  const { customer, talent, investor, consistency } = scores
  
  // Archetype determination logic based on score patterns
  if (investor > customer && investor > talent) {
    return founderArchetypes[0] // Visionary
  } else if (customer > investor && customer > talent) {
    return founderArchetypes[1] // Builder
  } else if (talent > customer && talent > investor) {
    return founderArchetypes[2] // Transformer
  } else if (consistency < 6) {
    return founderArchetypes[3] // Challenger
  } else if (customer > 7 && talent > 7) {
    return founderArchetypes[4] // Connector
  } else if (consistency > 7 && investor > 7) {
    return founderArchetypes[5] // Executor
  } else {
    return founderArchetypes[6] // Catalyst
  }
}

interface QuizQuestion {
  id: string
  section: string
  question: string
  scale: string
}

const quizQuestions: QuizQuestion[] = [
  // Customer Attraction
  {
    id: "customer_1",
    section: "Customer Attraction",
    question: "How often do prospects immediately understand your value proposition?",
    scale: "1 = never, 5 = always"
  },
  {
    id: "customer_2", 
    section: "Customer Attraction",
    question: "How easy is it to convert website visitors into qualified leads?",
    scale: "1 = very difficult, 5 = very easy"
  },
  // Talent Magnetism
  {
    id: "talent_1",
    section: "Talent Magnetism", 
    question: "How easy is it to attract senior-level candidates to your company?",
    scale: "1 = very difficult, 5 = very easy"
  },
  {
    id: "talent_2",
    section: "Talent Magnetism",
    question: "Do top performers reach out to you instead of you chasing them?",
    scale: "1 = never, 5 = always"
  },
  // Investor Appeal
  {
    id: "investor_1",
    section: "Investor Appeal",
    question: "How memorable are your investor presentations?",
    scale: "1 = not memorable, 5 = very memorable"
  },
  {
    id: "investor_2",
    section: "Investor Appeal", 
    question: "How often do investors reference your story in follow-up conversations?",
    scale: "1 = never, 5 = always"
  },
  // Story Consistency
  {
    id: "consistency_1",
    section: "Story Consistency",
    question: "How aligned is your message across sales, recruiting, and fundraising?",
    scale: "1 = inconsistent, 5 = very consistent"
  },
  {
    id: "consistency_2",
    section: "Story Consistency",
    question: "Do all three audiences (customers, talent, investors) hear the same compelling narrative?",
    scale: "1 = completely different, 5 = perfectly aligned"
  }
]

function EmailCaptureForm({ 
  email, 
  setEmail, 
  firstName, 
  setFirstName, 
  lastName, 
  setLastName, 
  linkedinProfile, 
  setLinkedinProfile, 
  twitterHandle, 
  setTwitterHandle, 
  onSubmit, 
  isSending 
}: { 
  email: string; 
  setEmail: (email: string) => void; 
  firstName: string; 
  setFirstName: (firstName: string) => void; 
  lastName: string; 
  setLastName: (lastName: string) => void; 
  linkedinProfile: string; 
  setLinkedinProfile: (linkedinProfile: string) => void; 
  twitterHandle: string; 
  setTwitterHandle: (twitterHandle: string) => void; 
  onSubmit: (e: React.FormEvent) => void; 
  isSending: boolean 
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="space-y-6 md:space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 md:space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <CheckCircle className="w-4 h-4 text-primary mr-2" />
            <span className="text-primary font-medium text-sm">Assessment Complete</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Get Your Complete Signal DNA Assessment Report
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Your personalized analysis is ready! Enter your email to receive your complete Signal DNA Assessment Report with actionable recommendations.
          </p>
        </div>

        {/* Value Proposition */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
          <h3 className="text-lg md:text-xl font-bold text-primary mb-4 md:mb-6">What You'll Receive:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Download className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Complete Assessment Report</p>
                <p className="text-sm text-muted-foreground">Detailed analysis across all three audiences</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">3 Personalized Recommendations</p>
                <p className="text-sm text-muted-foreground">Specific actions to improve your story</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Signal DNA Framework</p>
                <p className="text-sm text-muted-foreground">Proven methodology for story optimization</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Next Steps Guide</p>
                <p className="text-sm text-muted-foreground">Clear roadmap for implementation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Capture Form */}
        <form onSubmit={onSubmit} className="bg-muted/5 border border-border/20 rounded-xl p-6 md:p-8">
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                  First Name *
                </label>
                <Input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Your first name"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                  Last Name *
                </label>
                <Input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Your last name"
                  className="w-full"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@company.com"
                className="w-full"
                required
              />
            </div>
            
            <div>
              <label htmlFor="linkedinProfile" className="block text-sm font-medium text-foreground mb-2">
                LinkedIn Profile *
              </label>
              <Input
                id="linkedinProfile"
                type="url"
                value={linkedinProfile}
                onChange={(e) => setLinkedinProfile(e.target.value)}
                placeholder="https://linkedin.com/in/yourprofile"
                className="w-full"
                required
              />
              <p className="text-xs text-muted-foreground mt-1">We'll use this to connect and follow up personally</p>
            </div>
            
            <div>
              <label htmlFor="twitterHandle" className="block text-sm font-medium text-foreground mb-2">
                Twitter/X Handle (Optional)
              </label>
              <Input
                id="twitterHandle"
                type="text"
                value={twitterHandle}
                onChange={(e) => setTwitterHandle(e.target.value)}
                placeholder="@yourhandle"
                className="w-full"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary-dark px-8 py-6 rounded-xl font-medium text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-primary/20"
              disabled={!email || !email.includes('@') || !firstName || !lastName || !linkedinProfile || isSending}
            >
              {isSending ? (
                <>
                  <div className="w-5 h-5 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  Sending Your Report...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  Get My Complete Assessment Report →
                </>
              )}
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              We respect your privacy. No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

function EmailSuccessState({ email }: { email: string }) {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="space-y-6 md:space-y-8">
        {/* Success Header */}
        <div className="text-center space-y-4 md:space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 mb-4">
            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-green-600 font-medium text-sm">Email Sent Successfully!</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            🎉 Your Report is on the Way!
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            We've sent your complete Signal DNA Assessment Report to <strong className="text-primary">{email}</strong>
          </p>
        </div>

        {/* What's Next */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
          <h3 className="text-lg md:text-xl font-bold text-primary mb-4 md:mb-6">What Happens Next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Check Your Email</p>
                <p className="text-sm text-muted-foreground">Your personalized report should arrive within 2-3 minutes</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Download className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Review Your Results</p>
                <p className="text-sm text-muted-foreground">Get your scores and personalized recommendations</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <ExternalLink className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Book Your Free Audit</p>
                <p className="text-sm text-muted-foreground">Get a complete story assessment (€500 value)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-muted/5 border border-border/20 rounded-xl p-6 md:p-8">
          <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 md:mb-6">While You Wait...</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/ermo/authentik-studio-audit-review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary-dark px-8 py-4 rounded-xl font-medium text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-primary/20">
                <ExternalLink className="w-5 h-5 mr-2" />
                Book Your Free Audit →
              </Button>
            </a>
            <Button 
              variant="outline" 
              onClick={() => window.location.reload()}
              className="border-2 border-primary/40 text-primary hover:bg-primary/5 hover:border-primary/60 px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <Clock className="w-5 h-5 mr-2" />
              Take Quiz Again
            </Button>
          </div>
        </div>

        {/* Email Troubleshooting */}
        <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-6 md:p-8">
          <h3 className="text-lg font-bold text-yellow-600 mb-4">Don't See Your Email?</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• Check your spam/junk folder</p>
            <p>• Make sure {email} is correct</p>
            <p>• Wait 2-3 minutes for delivery</p>
            <p>• Contact us if you still don't receive it</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SignalStrengthQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [isComplete, setIsComplete] = useState(false)
  const [showEmailCapture, setShowEmailCapture] = useState(false)
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [linkedinProfile, setLinkedinProfile] = useState("")
  const [twitterHandle, setTwitterHandle] = useState("")
  const [isSendingEmail, setIsSendingEmail] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [scores, setScores] = useState({ customer: 0, talent: 0, investor: 0, consistency: 0 })

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      // Calculate scores for each audience
      const customerScore = (answers.customer_1 || 0) + (answers.customer_2 || 0)
      const talentScore = (answers.talent_1 || 0) + (answers.talent_2 || 0)
      const investorScore = (answers.investor_1 || 0) + (answers.investor_2 || 0)
      const consistencyScore = (answers.consistency_1 || 0) + (answers.consistency_2 || 0)
      
      const totalScores = { 
        customerAttraction: customerScore, 
        talentAttraction: talentScore, 
        investorAttraction: investorScore, 
        consistency: consistencyScore,
        total: customerScore + talentScore + investorScore + consistencyScore
      }
      setScores({ customer: customerScore, talent: talentScore, investor: investorScore, consistency: consistencyScore })
      
      // Track quiz completion
      trackQuizCompletion(totalScores)
      
      setShowEmailCapture(true)
    }
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email && email.includes('@')) {
      setIsSendingEmail(true)
      try {
        // Send email with quiz results using Resend API
        const response = await fetch('/api/send-quiz-results', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            firstName,
            lastName,
            linkedinProfile,
            twitterHandle,
            scores,
            name: `${firstName} ${lastName}`.trim() || email.split('@')[0]
          }),
        })

        if (response.ok) {
          console.log('Email sent successfully')
          setEmailSent(true)
          // Track lead capture
          trackLeadCapture(email)
          // Show success state for 3 seconds, then show results
          setTimeout(() => {
            setIsComplete(true)
          }, 3000)
        } else {
          console.error('Failed to send email')
          // Still show results even if email fails
          setIsComplete(true)
        }
      } catch (error) {
        console.error('Error sending email:', error)
        // Still show results even if email fails
        setIsComplete(true)
      } finally {
        setIsSendingEmail(false)
      }
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const getScoreLevel = (score: number) => {
    if (score <= 20) return "weak"
    if (score <= 30) return "fading" 
    if (score <= 40) return "clear"
    return "strong"
  }

  const generateRecommendations = (scores: { customer: number; talent: number; investor: number; consistency: number }) => {
    const recommendations = []

    // Customer recommendations
    if (scores.customer < 7) {
      recommendations.push({
        title: 'Strengthen Customer Value Proposition',
        description: 'Your customer messaging could be clearer. Focus on specific benefits and outcomes.',
        action: 'Create a one-sentence value proposition that any prospect can understand immediately.'
      })
    }

    // Talent recommendations  
    if (scores.talent < 7) {
      recommendations.push({
        title: 'Enhance Employer Brand Story',
        description: 'Your talent attraction could be stronger. Top performers want to join meaningful missions.',
        action: 'Develop stories about your team culture, growth opportunities, and impact.'
      })
    }

    // Investor recommendations
    if (scores.investor < 7) {
      recommendations.push({
        title: 'Sharpen Investor Narrative',
        description: 'Your investor story needs more impact. VCs remember compelling founder journeys.',
        action: 'Craft a clear problem-solution story with specific market opportunity and traction.'
      })
    }

    // Consistency recommendations
    if (scores.consistency < 7) {
      recommendations.push({
        title: 'Unify Your Message Across Audiences',
        description: 'Your story varies too much between audiences. Consistency builds trust and recognition.',
        action: 'Create core messaging pillars that work for customers, talent, and investors alike.'
      })
    }

    // Default recommendation if all scores are high
    if (recommendations.length === 0) {
      recommendations.push({
        title: 'Amplify Your Signal DNA',
        description: 'Your story is strong across all audiences. Focus on scaling and amplifying your message.',
        action: 'Develop content strategies to reach more people with your compelling narrative.'
      })
    }

    return recommendations.slice(0, 3) // Limit to 3 recommendations
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  if (showEmailCapture && !emailSent) {
    return <EmailCaptureForm 
      email={email} 
      setEmail={setEmail} 
      firstName={firstName}
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
      linkedinProfile={linkedinProfile}
      setLinkedinProfile={setLinkedinProfile}
      twitterHandle={twitterHandle}
      setTwitterHandle={setTwitterHandle}
      onSubmit={handleEmailSubmit} 
      isSending={isSendingEmail} 
    />
  }

  if (emailSent && !isComplete) {
    return <EmailSuccessState email={email} />
  }

  if (isComplete) {
    return <QuizResults scores={scores} email={email} />
  }

  const currentQ = quizQuestions[currentQuestion]
  const currentAnswer = answers[currentQ.id] || 0

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="space-y-6 md:space-y-8">
        {/* Intro */}
        {currentQuestion === 0 && (
          <div className="text-center space-y-4 md:space-y-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Discover Your Founder Archetype:
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
              Are You Legendary or Invisible?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto px-4">
              This 2-minute assessment reveals:
            </p>
            
            <div className="max-w-2xl mx-auto space-y-3">
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Which of the 7 Founder Archetypes you embody</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Your story's hidden strengths (that investors notice)</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">The exact blind spots keeping you invisible</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Your personalized roadmap to legendary status</span>
              </div>
            </div>
            
            <div className="bg-muted/5 border border-border/20 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-sm text-muted-foreground mb-2">
                <strong className="text-foreground">Over 1,000 founders</strong> completed this assessment.
              </p>
              <p className="text-sm text-muted-foreground">
                Most discover story advantages they never knew they had.
              </p>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>90 seconds to complete</span>
            </div>
          </div>
        )}

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground px-2">
            <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question */}
        <div className="bg-muted/5 border border-border/20 rounded-xl p-6 md:p-8">
          <div className="space-y-4 md:space-y-6">
            <div>
              <div className="text-sm font-medium text-primary mb-2">{currentQ.section}</div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2">
                {currentQ.question}
              </h2>
              <p className="text-sm text-muted-foreground">{currentQ.scale}</p>
            </div>

            {/* Scale */}
            <div className="space-y-4">
              <div className="grid grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleAnswer(currentQ.id, value)}
                    className={`p-4 rounded-lg border transition-all ${
                      currentAnswer === value
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="text-2xl font-bold">{value}</div>
                  </button>
                ))}
              </div>
              
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1</span>
                <span>5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={currentAnswer === 0}
            className="flex items-center gap-2"
          >
            {currentQuestion === quizQuestions.length - 1 ? (
              <>
                <CheckCircle className="w-4 h-4" />
                Get My Results
              </>
            ) : (
              <>
                Next
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

function QuizResults({ scores, email }: { scores: { customer: number; talent: number; investor: number; consistency: number }; email: string }) {
  const getScoreLevel = (score: number) => {
    if (score <= 4) return "weak"
    if (score <= 6) return "fading" 
    if (score <= 8) return "clear"
    return "strong"
  }

  const getScoreLabel = (score: number, category: string) => {
    const level = getScoreLevel(score)
    
    if (category === "customer") {
      switch (level) {
        case "weak": return "CRITICAL GAP - Missing €500K+ revenue"
        case "fading": return "CRITICAL GAP - Missing €500K+ revenue"
        case "clear": return "GOOD - But missing €200K+ opportunities"
        case "strong": return "EXCEPTIONAL - Customer magnet status"
        default: return "Unknown"
      }
    }
    
    if (category === "talent") {
      switch (level) {
        case "weak": return "TALENT CRISIS - Losing top performers"
        case "fading": return "TALENT CRISIS - Losing top performers"
        case "clear": return "GOOD - But missing A-players"
        case "strong": return "EXCEPTIONAL - Talent magnet status"
        default: return "Unknown"
      }
    }
    
    if (category === "investor") {
      switch (level) {
        case "weak": return "FUNDING RISK - Leaving €2M+ on table"
        case "fading": return "FUNDING RISK - Leaving €2M+ on table"
        case "clear": return "GOOD - But missing €1M+ opportunities"
        case "strong": return "EXCEPTIONAL - Investor magnet status"
        default: return "Unknown"
      }
    }
    
    if (category === "consistency") {
      switch (level) {
        case "weak": return "MESSAGE CHAOS - Confusing all audiences"
        case "fading": return "MESSAGE CHAOS - Confusing all audiences"
        case "clear": return "GOOD - But missing unified impact"
        case "strong": return "EXCEPTIONAL - Unified message mastery"
        default: return "Unknown"
      }
    }
    
    return "Unknown"
  }

  const getScoreColor = (score: number) => {
    const level = getScoreLevel(score)
    switch (level) {
      case "weak": return "text-red-500"
      case "fading": return "text-yellow-500"
      case "clear": return "text-blue-500"
      case "strong": return "text-green-500"
      default: return "text-gray-500"
    }
  }
  const totalScore = scores.customer + scores.talent + scores.investor + scores.consistency
  const averageScore = totalScore / 4
  const archetype = determineArchetype(scores)

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="space-y-6 md:space-y-8">
        {/* Score Header */}
        <div className="text-center space-y-3 md:space-y-4">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 mb-4">
            <Mail className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-green-600 font-medium text-sm">Report Sent to {email}</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Your Founder Archetype Results
          </h1>
          
          {/* Archetype Card */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
                <span className="text-primary font-semibold text-lg">{archetype.name}</span>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {archetype.description}
              </p>
              
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 md:p-4 inline-block">
                <span className="text-xl md:text-2xl font-bold text-primary">Overall Score: {totalScore}/40</span>
              </div>
            </div>
          </div>
        </div>

        {/* Individual Scores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-muted/5 border border-border/20 rounded-xl p-4 md:p-6 text-center">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Customer Magnetism</h3>
            <div className={`text-2xl md:text-3xl font-bold ${getScoreColor(scores.customer)}`}>
              {scores.customer}/10
            </div>
            <div className="text-xs text-muted-foreground mt-1">{getScoreLabel(scores.customer, "customer")}</div>
          </div>
          
          <div className="bg-muted/5 border border-border/20 rounded-xl p-4 md:p-6 text-center">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Talent Appeal</h3>
            <div className={`text-2xl md:text-3xl font-bold ${getScoreColor(scores.talent)}`}>
              {scores.talent}/10
            </div>
            <div className="text-xs text-muted-foreground mt-1">{getScoreLabel(scores.talent, "talent")}</div>
          </div>
          
          <div className="bg-muted/5 border border-border/20 rounded-xl p-4 md:p-6 text-center">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Investor Readiness</h3>
            <div className={`text-2xl md:text-3xl font-bold ${getScoreColor(scores.investor)}`}>
              {scores.investor}/10
            </div>
            <div className="text-xs text-muted-foreground mt-1">{getScoreLabel(scores.investor, "investor")}</div>
          </div>
          
          <div className="bg-muted/5 border border-border/20 rounded-xl p-4 md:p-6 text-center">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Story Consistency</h3>
            <div className={`text-2xl md:text-3xl font-bold ${getScoreColor(scores.consistency)}`}>
              {scores.consistency}/10
            </div>
            <div className="text-xs text-muted-foreground mt-1">{getScoreLabel(scores.consistency, "consistency")}</div>
          </div>
        </div>

        {/* Main Copy */}
        <div className="bg-muted/5 border border-border/20 rounded-xl p-6 md:p-8">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center">
            Your story's impact varies across audiences. See where you create the most magnetic pull.
          </p>
        </div>

        {/* Key Insights */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
          <h3 className="text-lg md:text-xl font-bold text-primary mb-4 md:mb-6">What Each Score Means</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground">
                <strong>Customer:</strong> Converts prospects, reduces sales cycle
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground">
                <strong>Talent:</strong> Attracts top performers, reduces hiring time
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground">
                <strong>Investor:</strong> Memorable pitches, strategic partnerships
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground">
                <strong>Consistency:</strong> Unified message across all touchpoints
              </p>
            </div>
          </div>
        </div>

        {/* Crisis Decision Point */}
        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6 md:p-8">
          <h3 className="text-lg md:text-xl font-bold text-red-800 dark:text-red-200 mb-4 md:mb-6">⚠️ THE {archetype.name.toUpperCase()} CRISIS</h3>
          <p className="text-sm text-red-700 dark:text-red-300 mb-6">
            Based on your scores, you're at a critical decision point:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg p-4">
              <h4 className="font-bold text-red-800 dark:text-red-200 mb-3">OPTION 1: Status Quo Path</h4>
              <div className="space-y-2 text-sm text-red-700 dark:text-red-300">
                <div className="flex items-start gap-2">
                  <span className="text-red-500">→</span>
                  <span>Continue with current approach</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500">→</span>
                  <span>Watch competitors claim your legendary positioning</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500">→</span>
                  <span>Miss the €2M+ revenue hidden in your story</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500">→</span>
                  <span>Remain "authentic but invisible" for another 2-3 years</span>
                </div>
              </div>
            </div>
            
            <div className="bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg p-4">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">OPTION 2: Legendary Transformation Path</h4>
              <div className="space-y-2 text-sm text-green-700 dark:text-green-300">
                <div className="flex items-start gap-2">
                  <span className="text-green-500">→</span>
                  <span>Unlock your {archetype.name} advantages in 90 days</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500">→</span>
                  <span>Apply the documentary storytelling method that created J-Griff's €6M increase</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500">→</span>
                  <span>Become the founder story that investors chase, customers choose, talent joins</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm font-bold text-yellow-800 dark:text-yellow-200 mb-2">The Window Is Closing:</p>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              Every month you wait, another founder claims legendary status in your space. In 18 months, there will be clear industry legends and invisible founders.
            </p>
            <p className="text-sm font-bold text-yellow-800 dark:text-yellow-200 mt-2">
              Which {archetype.name} will you be?
            </p>
          </div>
        </div>

        {/* Emergency Audit CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary mb-2">🚀 EMERGENCY {archetype.name.toUpperCase()} AUDIT</h3>
          <p className="text-lg font-semibold text-primary mb-4">(Worth €2,500)</p>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Exclusive for {archetype.name} Archetype:
          </p>
          
          <div className="bg-background/50 border border-primary/10 rounded-lg p-6 mb-6 text-left max-w-3xl mx-auto">
            <h4 className="font-bold text-primary mb-4">Your 45-Minute Legendary Status Roadmap Session Includes:</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Your €2M+ Revenue Story Discovery (the transformation moment you haven't monetized)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>The 3 Investor Story Fixes That Get {archetype.name}s Funded 73% Faster</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Your Personal "Vulnerability Bridge Method" Blueprint</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Crisis-Proof Communication Framework (protect your reputation during challenges)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>90-Day Legendary Transformation Timeline</span>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-primary/10 rounded-lg">
              <p className="text-sm font-semibold text-primary">This Deep-Dive Session Normally Costs €2,500</p>
              <p className="text-sm font-bold text-primary">Today: Completely Free for Quiz Completers</p>
            </div>
          </div>
          
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
            <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">⏰ LIMITED AVAILABILITY:</h4>
            <div className="space-y-1 text-sm text-red-700 dark:text-red-300">
              <p>→ Only 3 {archetype.name} Audit slots remaining this month</p>
              <p>→ Next availability: January 2026</p>
              <p>→ These sessions book out 4-6 weeks in advance</p>
            </div>
            <p className="text-sm font-bold text-red-800 dark:text-red-200 mt-3">
              WARNING: This audit will reveal uncomfortable truths about your current story. Only book if you're ready to become legendary.
            </p>
          </div>
          
          <a 
            href="https://calendly.com/ermo/authentik-studio-audit-review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-lg mb-4">
              CLAIM MY EMERGENCY {archetype.name.toUpperCase()} AUDIT
            </Button>
          </a>
          
          <p className="text-sm text-muted-foreground mb-2">(Not "Book Call" - "Claim Your Audit")</p>
          <p className="text-sm font-bold text-primary">Spots remaining: 3/12 monthly capacity</p>
        </div>
      </div>
    </div>
  )
}
