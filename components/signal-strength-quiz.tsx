"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, CheckCircle } from "lucide-react"

interface QuizQuestion {
  id: string
  section: string
  question: string
  scale: string
}

const quizQuestions: QuizQuestion[] = [
  // Section 1: Clarity
  {
    id: "clarity_1",
    section: "Clarity",
    question: "When you pitch, how often do investors/customers \"get it\" immediately?",
    scale: "1 = never, 5 = always"
  },
  {
    id: "clarity_2", 
    section: "Clarity",
    question: "How easy is it for someone else to retell your company story correctly?",
    scale: "1 = very difficult, 5 = very easy"
  },
  // Section 2: Resonance
  {
    id: "resonance_1",
    section: "Resonance", 
    question: "How emotionally connected do people feel when you share your founder journey?",
    scale: "1 = not connected, 5 = very connected"
  },
  {
    id: "resonance_2",
    section: "Resonance",
    question: "Do people repeat your story back to you with enthusiasm or inspiration?",
    scale: "1 = never, 5 = always"
  },
  // Section 3: Differentiation
  {
    id: "differentiation_1",
    section: "Differentiation",
    question: "How unique does your story sound compared to competitors in your space?",
    scale: "1 = not unique, 5 = very unique"
  },
  {
    id: "differentiation_2",
    section: "Differentiation", 
    question: "How often do people describe you as different, not just your product?",
    scale: "1 = never, 5 = always"
  },
  // Section 4: Momentum
  {
    id: "momentum_1",
    section: "Momentum",
    question: "How consistent is your story across pitch decks, website, and social?",
    scale: "1 = inconsistent, 5 = very consistent"
  },
  {
    id: "momentum_2",
    section: "Momentum",
    question: "Do people share your story with others without you prompting them?",
    scale: "1 = never, 5 = always"
  }
]

export function SignalStrengthQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [isComplete, setIsComplete] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      // Calculate score
      const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0)
      setScore(totalScore)
      setIsComplete(true)
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

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  if (isComplete) {
    return <QuizResults score={score} level={getScoreLevel(score)} />
  }

  const currentQ = quizQuestions[currentQuestion]
  const currentAnswer = answers[currentQ.id] || 0

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="space-y-8">
        {/* Intro */}
        {currentQuestion === 0 && (
          <div className="text-center space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Signal Strength Quiz
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Answer these quick questions to see how strong your founder signal really is. Be honest—it's the only way to reveal your blind spots. Takes 2 minutes.
            </p>
          </div>
        )}

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question */}
        <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
          <div className="space-y-6">
            <div>
              <div className="text-sm font-medium text-primary mb-2">{currentQ.section}</div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
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

function QuizResults({ score, level }: { score: number; level: string }) {
  const getResultContent = () => {
    switch (level) {
      case "weak":
        return {
          icon: "⚠️",
          headline: "Your Signal Is Getting Lost in the Noise",
          copy: "Right now, your founder story isn't cutting through. Investors, customers, and talent likely see you as \"just another startup.\" The good news? This isn't permanent. With the right narrative architecture, we can transform your hidden strengths into a story that commands attention.",
          blindSpots: [
            "Your message isn't clear in the first 10 seconds",
            "Audiences can't emotionally connect", 
            "You sound too much like competitors"
          ],
          specificInsights: [
            "Most founders with weak signals lose 70% of potential investor meetings in the first 2 minutes",
            "Your current story likely confuses rather than convinces your audience",
            "Without emotional connection, even great products struggle to gain traction"
          ],
          cta: "Don't let your vision go unheard. Book your free Signal DNA Audit today and let's uncover the authentic story that makes you unforgettable.",
          urgency: "Every day you wait, another founder with a stronger story claims the attention that should be yours."
        }
      case "fading":
        return {
          icon: "⚡",
          headline: "You're on the Radar, But Not Memorable Yet",
          copy: "You've got pieces of a compelling story—but they're not fully aligned. Some people get it, but many don't feel emotionally hooked. This puts you at risk of blending into the noise.",
          strengths: [
            "A clear product vision",
            "Some story resonance with audiences"
          ],
          weaknesses: [
            "Lack of differentiation vs. competitors",
            "Inconsistent messaging across channels"
          ],
          specificInsights: [
            "Founders with fading signals typically convert 40% fewer leads than those with clear signals",
            "Your story has potential but lacks the emotional 'hook' that makes people remember and share",
            "Inconsistent messaging confuses your audience and dilutes your brand impact"
          ],
          cta: "You're closer than you think. Book your free Signal DNA Audit to sharpen your narrative and position yourself as the founder people remember.",
          urgency: "You're one refinement away from breakthrough—don't let inconsistency hold you back."
        }
      case "clear":
        return {
          icon: "✅",
          headline: "You're Clear, But Not Unstoppable Yet",
          copy: "You've got a strong foundation. People often understand your story, and you already resonate with parts of your audience. But there's still untapped potential: your story isn't yet unforgettable—and that's what gets founders funded, followed, and featured.",
          strengths: [
            "Clarity in your core message",
            "Some strong resonance with key audiences"
          ],
          opportunities: [
            "Build a story \"moat\" that competitors can't copy",
            "Amplify across platforms for consistency",
            "Elevate to elite, investor-grade positioning"
          ],
          specificInsights: [
            "Clear signals convert 3x better than weak signals, but unstoppable signals convert 10x better",
            "You're missing the 'wow factor' that makes investors remember you months later",
            "Your story needs amplification to reach its full potential across all touchpoints"
          ],
          cta: "You're ready for amplification. Book your free Signal DNA Audit to unlock the next level and make your story impossible to ignore.",
          urgency: "You're 80% there—the final 20% makes all the difference in competitive markets."
        }
      case "strong":
        return {
          icon: "🚀",
          headline: "You're Already Strong—Now Let's Make You Unstoppable",
          copy: "Congratulations—you're already standing out. People resonate with your story, and your narrative carries clarity and differentiation. But there's a difference between strong and magnetic—and that's what investors and markets reward most.",
          strengths: [
            "Clear narrative people remember",
            "Authentic resonance with your audience"
          ],
          opportunities: [
            "Sharpen your investor pitch for maximum impact",
            "Future-proof your narrative against AI noise",
            "Scale your story across every touchpoint"
          ],
          specificInsights: [
            "Strong signals already outperform 90% of founders, but magnetic signals dominate entire markets",
            "You're ready for elite positioning that attracts top-tier investors and partnerships",
            "Your story can become your unfair advantage in scaling and fundraising"
          ],
          cta: "You're already ahead of the curve. Book your free Signal DNA Audit to amplify your signal into unstoppable momentum.",
          urgency: "Don't settle for strong when you can be magnetic—the market rewards the exceptional."
        }
    }
  }

  const content = getResultContent()

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="space-y-8">
        {/* Score Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl">{content.icon}</div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            {content.headline}
          </h1>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 inline-block">
            <span className="text-2xl font-bold text-primary">Your Score: {score}/50</span>
          </div>
        </div>

        {/* Main Copy */}
        <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {content.copy}
          </p>
        </div>

        {/* Specific Insights */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
          <h3 className="text-xl font-bold text-primary mb-6">What This Means for Your Business</h3>
          <div className="space-y-4">
            {content.specificInsights.map((insight, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">{insight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths/Weaknesses/Opportunities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.strengths && (
            <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-600 mb-4">Strengths</h3>
              <ul className="space-y-2">
                {content.strengths.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {content.weaknesses && (
            <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-yellow-600 mb-4">Weaknesses</h3>
              <ul className="space-y-2">
                {content.weaknesses.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {content.opportunities && (
            <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-600 mb-4">Opportunities</h3>
              <ul className="space-y-2">
                {content.opportunities.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {content.blindSpots && (
            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-600 mb-4">Key Blind Spots</h3>
              <ul className="space-y-2">
                {content.blindSpots.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Social Proof */}
        <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-6">What Other Founders Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-muted-foreground italic">"The audit call was eye-opening. I thought my story was clear, but I was missing the emotional connection that makes people remember you."</p>
              <p className="text-sm font-semibold">— Sarah Chen, CEO TechFlow AI</p>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground italic">"Within 2 weeks of implementing the insights from my audit, we closed our Series A. The story framework was the missing piece."</p>
              <p className="text-sm font-semibold">— Marcus Rodriguez, GreenLogistics</p>
            </div>
          </div>
        </div>

        {/* Urgency */}
        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 text-center">
          <p className="text-destructive font-semibold text-lg">
            ⚠️ {content.urgency}
          </p>
        </div>

        {/* Enhanced CTA */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">Ready to Transform Your Signal?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            👉 {content.cta}
          </p>
          
          <div className="bg-background/50 border border-primary/10 rounded-lg p-4 mb-6">
            <h4 className="font-bold text-primary mb-2">What You'll Get in Your Free Audit:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
              <div>✓ Personalized narrative analysis</div>
              <div>✓ Competitive differentiation map</div>
              <div>✓ 90-day action plan</div>
              <div>✓ Founder playbook templates</div>
            </div>
            <p className="text-primary font-semibold mt-2">Value: €500 — Free Today</p>
          </div>

          <a 
            href="https://calendly.com/ermo/authentik-studio-audit-review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button size="lg" className="text-lg px-8 py-6">
              Book My Free Audit →
            </Button>
          </a>
          
          <p className="text-xs text-muted-foreground mt-4">
            Limited spots available this month. Book now to secure your session.
          </p>
        </div>
      </div>
    </div>
  )
}
