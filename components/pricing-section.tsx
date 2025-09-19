"use client"

import React from "react"
import { Check, Clock, Target, TrendingUp, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Transform From{" "}
            <span className="text-muted-foreground">Invisible</span>{" "}
            Founder to{" "}
            <span className="text-primary">Industry Legend</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Most founders build great products but remain unknown. Legendary founders become the stories that investors chase, customers choose, and media profiles.
          </p>
        </div>

        {/* Scarcity Banner */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
            <Clock className="w-4 h-4 text-red-500" />
            <span className="text-red-500 font-semibold">Only 2 spots remaining this quarter</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Signal DNA Snapshot - Free Entry */}
          <div className="bg-card border border-primary/20 rounded-2xl p-4 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40 flex flex-col">
            <div className="text-center mb-4">
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold text-primary mb-3">
                FREE ENTRY
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Signal DNA Snapshot</h3>
              <div className="text-3xl font-bold text-primary mb-2">FREE</div>
              <p className="text-sm text-muted-foreground">Discover your founder archetype in 2 minutes</p>
            </div>

            <div className="mb-4 flex-grow">
              <h4 className="font-semibold text-foreground mb-2">What You Get:</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>2-minute founder archetype quiz</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Basic Signal DNA report</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Founder archetype identification</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>3 quick-win recommendations</span>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-foreground mb-2">Outcomes You Can Expect:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Understand your storytelling strengths</li>
                <li>• Identify your biggest blind spots</li>
                <li>• Get clarity on your founder archetype</li>
              </ul>
            </div>

            <Link href="/quiz">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 rounded-xl shadow-none">
                Take Free Quiz →
              </Button>
            </Link>
          </div>

          {/* Signal DNA Audit - Mid-Level Intensive */}
          <div className="bg-card border-2 border-primary rounded-2xl p-4 relative lg:scale-105 hover:scale-110 transition-all duration-300 hover:shadow-2xl flex flex-col">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                MOST POPULAR
              </span>
            </div>
            
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-foreground mb-2">Signal DNA Audit</h3>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-4xl font-bold text-primary">FREE</span>
                <span className="text-lg line-through text-muted-foreground">€500</span>
              </div>
              <p className="text-sm text-muted-foreground">Limited to first 50 founders this month</p>
              <div className="bg-red-500/20 px-3 py-1 rounded-full inline-block mt-2">
                <span className="text-xs font-semibold text-red-600">47 spots taken</span>
              </div>
            </div>

            <div className="mb-4 flex-grow">
              <h4 className="font-semibold text-foreground mb-2">What You Get:</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>15-minute AI-powered story analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Personalized Signal DNA report</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Competitive differentiation blueprint</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>90-day quick-win action plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Founder Signal Playbook (25+ templates)</span>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-foreground mb-2">Outcomes You Can Expect:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Clear roadmap for story improvement</li>
                <li>• Specific blind spots identified</li>
                <li>• Ready-to-use templates and frameworks</li>
              </ul>
            </div>

            <Link href="/audit">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 rounded-xl shadow-none">
                Claim Your FREE Audit →
              </Button>
            </Link>
          </div>

          {/* Signature Signal DNA Intensive - Flagship */}
          <div className="bg-card border border-primary/20 rounded-2xl p-4 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-primary/50 flex flex-col">
            <div className="text-center mb-4">
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold text-primary mb-3">
                FLAGSHIP PROGRAM
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Signature Signal DNA Intensive</h3>
              <div className="text-4xl font-bold text-primary mb-2">€12,500</div>
              <p className="text-sm text-muted-foreground">Transform from invisible to legendary in 90 days</p>
              <div className="bg-yellow-500/20 px-3 py-1 rounded-full inline-block mt-2">
                <span className="text-xs font-semibold text-yellow-600">Only 2 spots remaining</span>
              </div>
            </div>

            <div className="mb-4 flex-grow">
              <h4 className="font-semibold text-foreground mb-2">What You Get:</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>3 intensive founder psychology sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Documentary filmmaker collaboration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Multi-audience story optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>30-day story evolution support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Private founder legend community access</span>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-foreground mb-2">Outcomes You Can Expect:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• €6M+ revenue increase (like J-Griff)</li>
                <li>• 1M+ authentic following growth</li>
                <li>• Legendary founder status in your space</li>
              </ul>
            </div>

            <Link href="/audit">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 rounded-xl shadow-none">
                Apply for Intensive →
              </Button>
            </Link>
          </div>
        </div>

        {/* Signal Success Guarantee */}
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">Signal Success Guarantee</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-card border border-primary/20 rounded-2xl text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-primary mb-3">TRANSFORMATION GUARANTEE</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">If you don't feel your story has fundamentally transformed within 30 days, we'll continue working until it does - at no additional cost.</p>
            </div>
            <div className="p-6 bg-card border border-primary/20 rounded-2xl text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-primary mb-3">RESPONSE GUARANTEE</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">If key stakeholders (investors, customers, team) don't notice a dramatic difference in how they respond to your story, we'll refund 50% of your investment.</p>
            </div>
            <div className="p-6 bg-card border border-primary/20 rounded-2xl text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-primary mb-3">OPPORTUNITY GUARANTEE</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">If our process doesn't create measurable new opportunities (funding conversations, partnership discussions, media interest) within 90 days, we'll refund your full investment.</p>
            </div>
          </div>
        </div>

        {/* Legendary Founder Transformations with ROI Badges */}
        <div className="mb-6 p-6 bg-card border border-primary/20 rounded-2xl hover:border-primary/40 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Legendary Founder Transformations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold text-primary">J-GRIFF (Tech Founder)</h4>
                <div className="bg-green-500/20 px-2 py-1 rounded-full">
                  <span className="text-xs font-bold text-green-600">€6M Revenue ↑ 48,000% ROI</span>
                </div>
              </div>
              <p className="text-sm italic text-muted-foreground">"The Signal DNA framework didn't just help with investors - it transformed how we attract customers and talent."</p>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold text-primary">AARON ABKE (Spiritual Entrepreneur)</h4>
                <div className="bg-green-500/20 px-2 py-1 rounded-full">
                  <span className="text-xs font-bold text-green-600">1M+ Following ↑ Immeasurable ROI</span>
                </div>
              </div>
              <p className="text-sm italic text-muted-foreground">"Working with Ermo transformed how I communicate my message. The documentary approach created something I never could have achieved alone."</p>
            </div>
          </div>
          
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
            <h4 className="font-bold text-primary mb-4 text-center">Emerging Patterns From All Clients:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">89%</div>
                <div className="text-sm text-muted-foreground">Improved stakeholder engagement within 30 days</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">73%</div>
                <div className="text-sm text-muted-foreground">Faster funding conversations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">156%</div>
                <div className="text-sm text-muted-foreground">Increase in qualified leads</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">92%</div>
                <div className="text-sm text-muted-foreground">Client satisfaction rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-card border border-primary/20 rounded-2xl hover:border-primary/40 transition-colors duration-300">
            <h3 className="text-xl font-bold text-primary mb-4">Investment Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Signal DNA Snapshot</span>
                <span className="font-semibold text-primary">FREE</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Signal DNA Audit</span>
                <div className="text-right">
                  <span className="font-semibold text-primary">FREE</span>
                  <span className="text-sm line-through text-muted-foreground ml-2">€500</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Signature Signal DNA Intensive</span>
                <span className="font-semibold text-primary">€12,500</span>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-card border border-primary/20 rounded-2xl hover:border-primary/40 transition-colors duration-300">
            <h3 className="text-xl font-bold text-primary mb-4">Why Book Now?</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Only 2 spots remaining this quarter</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Next admission: January 15th, 2026</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">→</span>
                <span>We turn down 60%+ of applicants</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Limited-time FREE audit offer</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
