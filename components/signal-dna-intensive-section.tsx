import React from "react"
import { Calendar, CheckCircle, Zap, Target, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SignalDNAIntensiveSection() {
  return (
    <section className="w-full overflow-hidden flex justify-center items-center">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              From Invisible to Irresistible in 72 Hours
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For founders who are ready, the next step is our Signal DNA Discovery™ Intensive. This is a 1:1 engagement where we uncover, engineer, and amplify your founder story so you can command attention everywhere.
            </p>
            <div className="bg-muted/5 border border-border/20 rounded-xl p-6 max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground italic">
                "Picture this: You're in a room full of investors, and instead of explaining what you do, you're sharing who you are. 
                The difference? They're not just listening—they're leaning in."
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Day 1 */}
            <div className="bg-muted/5 border border-border/20 rounded-xl p-8 hover:bg-muted/10 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Day 1: Deep Story Archaeology</h3>
                  <p className="text-muted-foreground">AI + psychology analysis</p>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-muted/5 border border-border/20 rounded-xl p-8 hover:bg-muted/10 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Day 2: Signal Engineering</h3>
                  <p className="text-muted-foreground">Narrative + positioning</p>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-muted/5 border border-border/20 rounded-xl p-8 hover:bg-muted/10 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Day 3: Signal Amplification</h3>
                  <p className="text-muted-foreground">Multi-platform + investor pitch upgrade</p>
                </div>
              </div>
            </div>
          </div>

          {/* Deliverables */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Deliverables You Leave With:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>A founder story as unique as your DNA</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Investor-ready pitch narrative</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Customer-focused messaging system</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Templates for immediate deployment</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>30-day follow-up session</span>
              </div>
            </div>
          </div>

          {/* Investment & Guarantee */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Investment</h3>
              <p className="text-2xl font-bold text-primary mb-2">Starting from €3,000</p>
              <p className="text-sm text-muted-foreground mb-4">(founder rate)</p>
              <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong className="text-primary">Most founders spend €50k+ to raise a round.</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  Your Signal DNA Intensive helps you unlock that funding faster, for a fraction of the cost.
                </p>
              </div>
            </div>
            
            <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Guarantee</h3>
              </div>
              <p className="text-muted-foreground">
                If you don't feel your story has transformed, we'll refine it free until it does.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/audit">
              <Button size="lg" className="text-lg px-8 py-6">
                Book My Free Signal DNA Audit →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
