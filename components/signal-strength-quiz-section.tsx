import React from "react"
import { Target, Zap, Shield, Rocket, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SignalStrengthQuizSection() {
  return (
    <section className="w-full overflow-hidden flex justify-center items-center">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              The Signal Strength Quiz
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Not sure where you stand? Start with the quiz.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              In just 2 minutes, you'll measure:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted/5 border border-border/20 rounded-xl p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Clarity</h3>
              </div>
              <p className="text-muted-foreground">
                How instantly people "get" your message
              </p>
            </div>
            
            <div className="bg-muted/5 border border-border/20 rounded-xl p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Resonance</h3>
              </div>
              <p className="text-muted-foreground">
                How strongly it connects emotionally
              </p>
            </div>
            
            <div className="bg-muted/5 border border-border/20 rounded-xl p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Differentiation</h3>
              </div>
              <p className="text-muted-foreground">
                Whether you truly stand out
              </p>
            </div>
            
            <div className="bg-muted/5 border border-border/20 rounded-xl p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Momentum</h3>
              </div>
              <p className="text-muted-foreground">
                Your readiness to scale your signal
              </p>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-primary">What You'll Get</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              At the end, you'll receive a personalized Signal DNA Report (worth €500), including blind-spot analysis and a 90-day action plan.
            </p>
            <div className="bg-background/50 border border-primary/10 rounded-lg p-4 mb-6">
              <p className="text-primary font-semibold">
                Your next step after the quiz?
              </p>
              <p className="text-muted-foreground">
                If your signal shows gaps, you'll be invited to book a free 1:1 audit.
              </p>
            </div>
            <Link href="/quiz">
              <Button size="lg" className="text-lg px-8 py-6">
                Take the Quiz Now →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
