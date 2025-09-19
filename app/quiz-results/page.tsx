"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { FunnelHeader } from "@/components/funnel-header"
import { FunnelFooter } from "@/components/funnel-footer"
import { CheckCircle, ArrowRight, Star, TrendingUp, Users, Target } from "lucide-react"
import Link from "next/link"

interface ArchetypeData {
  name: string
  title: string
  description: string
  strengths: string[]
  recommendations: string[]
  nextSteps: string[]
  icon: React.ReactNode
  color: string
}

const archetypeData: Record<string, ArchetypeData> = {
  visionary: {
    name: "The Visionary",
    title: "Big Picture Storyteller",
    description: "You excel at painting the future and inspiring others with your grand vision. Your strength lies in connecting dots others can't see and rallying people around transformative ideas.",
    strengths: [
      "Exceptional at articulating long-term vision",
      "Natural ability to inspire and motivate",
      "Strong at connecting disparate concepts",
      "Compelling when discussing impact and change"
    ],
    recommendations: [
      "Lead with your vision in investor pitches",
      "Use storytelling to make complex ideas accessible",
      "Share personal transformation moments",
      "Connect your vision to current market trends"
    ],
    nextSteps: [
      "Develop your vulnerability story",
      "Create visual representations of your vision",
      "Practice translating vision into concrete steps"
    ],
    icon: <Star className="w-8 h-8" />,
    color: "text-purple-600"
  },
  builder: {
    name: "The Builder",
    title: "Execution-Focused Leader",
    description: "You're the architect who turns ideas into reality. Your strength is in demonstrating progress, showcasing results, and building systems that work.",
    strengths: [
      "Excellent at showing concrete progress",
      "Strong track record of execution",
      "Natural problem-solver and systems thinker",
      "Compelling when discussing metrics and results"
    ],
    recommendations: [
      "Lead with your execution track record",
      "Use data and metrics to support your story",
      "Share specific examples of overcoming challenges",
      "Highlight your team-building capabilities"
    ],
    nextSteps: [
      "Develop your personal origin story",
      "Practice emotional storytelling",
      "Create case studies of your biggest wins"
    ],
    icon: <TrendingUp className="w-8 h-8" />,
    color: "text-blue-600"
  },
  scholar: {
    name: "The Scholar",
    title: "Expert Authority",
    description: "You're the deep thinker who brings intellectual rigor and expertise to your field. Your strength is in demonstrating deep knowledge and thought leadership.",
    strengths: [
      "Deep domain expertise and knowledge",
      "Strong analytical and research skills",
      "Natural thought leader and educator",
      "Compelling when discussing complex topics"
    ],
    recommendations: [
      "Lead with your expertise and credentials",
      "Use research and data to support arguments",
      "Share insights that others can't provide",
      "Position yourself as the go-to expert"
    ],
    nextSteps: [
      "Develop your personal learning journey",
      "Practice simplifying complex concepts",
      "Create educational content that showcases expertise"
    ],
    icon: <Target className="w-8 h-8" />,
    color: "text-green-600"
  },
  connector: {
    name: "The Connector",
    title: "Relationship Builder",
    description: "You're the networker who brings people together and builds meaningful relationships. Your strength is in understanding people and creating authentic connections.",
    strengths: [
      "Exceptional relationship-building skills",
      "Natural ability to understand people",
      "Strong network and community connections",
      "Compelling when discussing collaboration and partnerships"
    ],
    recommendations: [
      "Lead with your network and relationships",
      "Use personal stories to build connection",
      "Share examples of successful partnerships",
      "Highlight your community-building efforts"
    ],
    nextSteps: [
      "Develop your personal connection stories",
      "Practice vulnerability and authenticity",
      "Create content that showcases your network"
    ],
    icon: <Users className="w-8 h-8" />,
    color: "text-orange-600"
  }
}

export default function QuizResultsPage() {
  const [archetype, setArchetype] = useState("")
  const [email, setEmail] = useState("")
  const [utmSource, setUtmSource] = useState("")

  useEffect(() => {
    // Get parameters from URL
    const urlParams = new URLSearchParams(window.location.search)
    const archetypeParam = urlParams.get('archetype')
    const emailParam = urlParams.get('email')
    const sourceParam = urlParams.get('utm_source')
    
    if (archetypeParam) setArchetype(archetypeParam)
    if (emailParam) setEmail(emailParam)
    if (sourceParam) setUtmSource(sourceParam)

    // Track results view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'quiz_results_viewed', {
        event_category: 'conversion',
        event_label: 'funnel_quiz',
        utm_source: sourceParam || 'direct',
        archetype: archetypeParam,
        email: emailParam
      })
    }
  }, [])

  const data = archetypeData[archetype] || archetypeData.visionary

  const handleAuditClick = () => {
    // Track audit CTA click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'audit_cta_clicked', {
        event_category: 'conversion',
        event_label: 'funnel_quiz_to_audit',
        utm_source: utmSource || 'direct',
        archetype: archetype,
        email: email
      })
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <FunnelHeader />
      
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div className="text-center mb-12">
            <div className={`inline-flex items-center gap-3 px-6 py-3 bg-${data.color.split('-')[1]}-500/10 border border-${data.color.split('-')[1]}-500/20 rounded-full mb-6`}>
              <div className={data.color}>
                {data.icon}
              </div>
              <span className={`font-bold text-lg ${data.color}`}>
                Your Founder Archetype: {data.name}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {data.title}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {data.description}
            </p>
          </div>

          {/* Results Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Strengths */}
            <div className="bg-card border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                Your Storytelling Strengths
              </h3>
              <ul className="space-y-3">
                {data.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommendations */}
            <div className="bg-card border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                Recommended Approach
              </h3>
              <ul className="space-y-3">
                {data.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Your Next Steps
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.nextSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-lg">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-card border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want a Personalized Deep Dive?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Get a free 1:1 Signal DNA audit with personalized recommendations and a 90-day action plan.
            </p>
            
            <Link 
              href={`/audit-optimized?src=quiz&archetype=${archetype}&email=${encodeURIComponent(email)}`}
              onClick={handleAuditClick}
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-4 text-lg rounded-xl">
                Claim Your Free Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <p className="text-sm text-muted-foreground mt-4">
              Normally €500 — Free for qualified founders
            </p>
          </div>
        </div>
      </main>
      
      <FunnelFooter />
    </div>
  )
}
