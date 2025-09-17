import React from "react"
import { Calendar, Brain, Zap, Target, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function DeeperSection() {
  return (
    <section className="w-full px-5 py-20 md:py-24 overflow-hidden flex justify-center items-center">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              For Founders Ready to Go Deeper
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              The quiz is just the start. For founders who want to transform their story into their biggest asset, we offer the 3-Day Signal DNA Discovery™ Intensive:
            </p>
          </div>

          <div className="space-y-8">
            {/* Day 1 */}
            <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Day 1 – Deep Story Archaeology</h3>
                  <p className="text-muted-foreground">Foundation discovery</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-primary" />
                  <span>AI-powered psychology assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Vision & values extraction</span>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Day 2 – Signal Engineering</h3>
                  <p className="text-muted-foreground">Strategic positioning</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Competitive differentiation mapping</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>Message architecture development</span>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Day 3 – Signal Amplification</h3>
                  <p className="text-muted-foreground">Deployment & scaling</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>Multi-platform content framework</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Investor pitch upgrade & crisis-proof messaging</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Outcome</h3>
            <p className="text-xl text-muted-foreground mb-6">
              Your story becomes your unfair advantage—clear, emotional, and impossible to ignore.
            </p>
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
