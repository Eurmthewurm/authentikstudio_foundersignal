import React from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, Clock, Gift } from "lucide-react"

export default function AuditBookingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Claim Your Free 1:1 Signal DNA Audit
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get personalized narrative feedback and a 90-day action plan to transform your founder story
            </p>
          </div>

          {/* What You'll Get */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">What You'll Get:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Personalized narrative feedback</h3>
                  <p className="text-sm text-muted-foreground">Deep analysis of your current story strengths and gaps</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Competitive differentiation insights</h3>
                  <p className="text-sm text-muted-foreground">How you compare to competitors and where to stand out</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">90-day action plan</h3>
                  <p className="text-sm text-muted-foreground">Step-by-step roadmap to amplify your signal</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Founder Playbook with templates</h3>
                  <p className="text-sm text-muted-foreground">Email scripts, pitch frameworks, and messaging templates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="bg-muted/5 border border-border/20 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Gift className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">Value €500 — Free for a Limited Time</h3>
            </div>
            <p className="text-muted-foreground">
              This comprehensive audit normally costs €500, but we're offering it free to qualified founders who are serious about transforming their story.
            </p>
          </div>

          {/* Booking CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-6">Book Your Audit Call</h2>
            <p className="text-muted-foreground mb-8">
              Click below to schedule your free 60-minute Signal DNA Audit call
            </p>
            <a 
              href="https://calendly.com/ermo/authentik-studio-audit-review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="text-lg px-8 py-6">
                Book My Audit Call Now →
              </Button>
            </a>
          </div>

          {/* Call Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted/5 border border-border/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold">Duration</h3>
              </div>
              <p className="text-muted-foreground">60 minutes of focused analysis and strategy</p>
            </div>
            <div className="bg-muted/5 border border-border/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold">Format</h3>
              </div>
              <p className="text-muted-foreground">Video call with screen sharing for real-time feedback</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
