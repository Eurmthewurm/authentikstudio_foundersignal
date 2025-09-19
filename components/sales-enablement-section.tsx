import React from "react"
import { Target, Users, BookOpen, MessageCircle, CheckCircle, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SalesEnablementSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sales Team{" "}
            <span className="text-primary">Enablement</span>{" "}
            & Training
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Equip your sales team with archetype-specific scripts and objection handling strategies
          </p>
        </div>

        {/* Archetype-Specific Scripts */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Archetype-Specific Call Scripts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-3 text-center">The Visionary</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Focus on big-picture impact and industry transformation potential
              </p>
              <div className="text-xs text-muted-foreground bg-primary/5 p-2 rounded">
                "Your vision is powerful, but investors need to feel the emotional journey..."
              </div>
            </div>
            
            <div className="bg-card border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-3 text-center">The Builder</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Emphasize execution excellence and team-building capabilities
              </p>
              <div className="text-xs text-muted-foreground bg-primary/5 p-2 rounded">
                "Your execution is flawless, but customers need to connect with your 'why'..."
              </div>
            </div>
            
            <div className="bg-card border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-3 text-center">The Scholar</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Highlight expertise and intellectual authority in your domain
              </p>
              <div className="text-xs text-muted-foreground bg-primary/5 p-2 rounded">
                "Your expertise is undeniable, but talent needs to feel inspired by your journey..."
              </div>
            </div>
            
            <div className="bg-card border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-3 text-center">The Connector</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Leverage relationship-building and network effects
              </p>
              <div className="text-xs text-muted-foreground bg-primary/5 p-2 rounded">
                "Your network is impressive, but investors need to see your personal transformation..."
              </div>
            </div>
          </div>
        </div>

        {/* Objection Handling Workshop */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Objection Handling Workshop
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card border border-primary/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <h4 className="text-xl font-bold text-primary mb-6">Common Objections by Archetype</h4>
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="font-semibold text-foreground mb-2">"I don't have time for storytelling"</div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Response:</strong> "The Signal DNA framework actually saves you time by making every pitch more effective. J-Griff reduced his pitch time by 40% while increasing conversion by 300%."
                  </div>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="font-semibold text-foreground mb-2">"My product speaks for itself"</div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Response:</strong> "Great products need great stories. Apple's products are amazing, but it's Steve Jobs' story that made them legendary. Your Signal DNA amplifies your product's impact."
                  </div>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="font-semibold text-foreground mb-2">"I'm not comfortable being vulnerable"</div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Response:</strong> "Strategic vulnerability is different from personal vulnerability. We help you share the right story elements that build trust without compromising your privacy."
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-primary/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <h4 className="text-xl font-bold text-primary mb-6">Role-Play Scenarios</h4>
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="font-semibold text-foreground mb-2">Scenario 1: Technical Founder</div>
                  <div className="text-sm text-muted-foreground">
                    Practice handling a data-driven founder who dismisses storytelling as "fluff"
                  </div>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="font-semibold text-foreground mb-2">Scenario 2: Serial Entrepreneur</div>
                  <div className="text-sm text-muted-foreground">
                    Navigate objections from someone who thinks they already know their story
                  </div>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="font-semibold text-foreground mb-2">Scenario 3: First-Time Founder</div>
                  <div className="text-sm text-muted-foreground">
                    Help a new founder understand the importance of Signal DNA before they launch
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Training Modules */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Sales Training Modules
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-primary/20 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-3">Module 1: Signal DNA Fundamentals</h4>
              <p className="text-sm text-muted-foreground mb-4">
                2-hour deep dive into the framework, case studies, and value proposition
              </p>
              <div className="text-xs text-primary font-semibold">Duration: 2 hours</div>
            </div>
            
            <div className="bg-card border border-primary/20 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-3">Module 2: Discovery Call Mastery</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Archetype identification, objection handling, and closing techniques
              </p>
              <div className="text-xs text-primary font-semibold">Duration: 3 hours</div>
            </div>
            
            <div className="bg-card border border-primary/20 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-3">Module 3: Advanced Closing</h4>
              <p className="text-sm text-muted-foreground mb-4">
                High-value deal strategies, negotiation tactics, and success metrics
              </p>
              <div className="text-xs text-primary font-semibold">Duration: 2 hours</div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-card border border-primary/20 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Sales Team Performance Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">73%</div>
              <div className="text-sm text-muted-foreground">Discovery Call Conversion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">€45K</div>
              <div className="text-sm text-muted-foreground">Average Deal Size</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">89%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">156%</div>
              <div className="text-sm text-muted-foreground">YoY Revenue Growth</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Ready to Equip Your Sales Team?
          </h3>
          <p className="text-muted-foreground mb-6">
            Schedule a 1-hour sales enablement workshop for your team
          </p>
          <Link href="/audit">
            <Button className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg rounded-xl">
              Schedule Workshop
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
