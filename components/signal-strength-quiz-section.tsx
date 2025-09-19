import React from "react"
import { Users, Briefcase, TrendingUp, Target, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SignalStrengthQuizSection() {
  return (
    <section className="w-full overflow-hidden flex justify-center items-center">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Complete Founder Story Assessment
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              One story. Three audiences. Maximum impact.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how well your story attracts customers, talent, and investors in just 2 minutes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted/5 border border-border/20 rounded-xl p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Customer Magnetism</h3>
              </div>
              <p className="text-muted-foreground">
                How well your story converts prospects and reduces sales cycles
              </p>
            </div>
            
            <div className="bg-muted/5 border border-border/20 rounded-xl p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Talent Appeal</h3>
              </div>
              <p className="text-muted-foreground">
                How inspiring you are as a leader people want to work for
              </p>
            </div>
            
            <div className="bg-muted/5 border border-border/20 rounded-xl p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Investor Readiness</h3>
              </div>
              <p className="text-muted-foreground">
                How compelling your narrative is for fundraising and partnerships
              </p>
            </div>
            
            <div className="bg-muted/5 border border-border/20 rounded-xl p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Story Consistency</h3>
              </div>
              <p className="text-muted-foreground">
                How aligned your message is across all touchpoints
              </p>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-primary">What You'll Get</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Get three separate scores showing where your story creates the most magnetic pull across customers, talent, and investors.
            </p>
            <div className="bg-background/50 border border-primary/10 rounded-lg p-4 mb-6">
              <p className="text-primary font-semibold">
                Ready to discover your founder archetype?
              </p>
              <p className="text-muted-foreground">
                Take our free 2-minute assessment to unlock your story's potential.
              </p>
            </div>
            <Link href="/quiz">
              <Button size="lg" className="text-lg px-8 py-6">
                Take FREE Assessment →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}