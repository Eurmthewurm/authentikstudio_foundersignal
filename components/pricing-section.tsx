"use client"

import { Check, Clock, Target, TrendingUp, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  return (
    <section className="w-full py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Transform From{" "}
            <span className="text-muted-foreground">Invisible</span>{" "}
            Founder to{" "}
            <span className="text-primary">Industry Legend</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
            Most founders build great products but remain unknown. Legendary founders become the stories that investors chase, customers choose, and media profiles.
          </p>
          
          {/* Scarcity Banner */}
          <div className="inline-flex items-center px-6 py-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-full">
            <Clock className="w-4 h-4 text-red-600 dark:text-red-400 mr-2" />
            <span className="text-red-700 dark:text-red-300 font-semibold">Only 2 spots remaining this quarter</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Free Audit Card */}
          <div className="bg-primary rounded-2xl p-6 text-primary-foreground relative">
            <div className="absolute top-4 right-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">Most Popular</span>
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-3">Free Signal DNA Audit</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl font-bold">FREE</span>
                <span className="text-lg line-through opacity-70">€500</span>
              </div>
              <p className="text-sm opacity-90 mb-2">Limited to first 50 founders this month</p>
              <div className="bg-red-500/20 px-3 py-1 rounded-full inline-block">
                <span className="text-xs font-semibold">47 spots taken</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-4">What's included:</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>15-Minute AI-Powered Story Analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Personalized Signal DNA Report</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Competitive Differentiation Blueprint</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>90-Day Quick-Win Action Plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Exclusive "Founder Signal Playbook" (25+ templates)</span>
                </li>
              </ul>
            </div>

            <Button className="w-full bg-white text-primary hover:bg-white/90 font-semibold py-3 rounded-xl">
              Claim Your FREE Audit
            </Button>
          </div>

          {/* Main Offer Card */}
          <div className="bg-card border-2 border-primary rounded-2xl p-6 relative lg:scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                The Legendary Transformation
              </span>
            </div>
            
            <div className="mb-6 pt-2">
              <h3 className="text-2xl font-bold text-foreground mb-3">Signal DNA Discovery™</h3>
              <div className="text-4xl font-bold text-primary mb-3">€12,500</div>
              <p className="text-muted-foreground mb-2">Transform From Invisible Founder to Industry Legend in 90 Days</p>
              <p className="text-sm text-muted-foreground">The Complete Legendary Transformation Package</p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-4">The Legendary Transformation Method:</h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h5 className="font-semibold text-primary mb-2">PHASE 1: Archaeological Story Excavation</h5>
                  <div className="text-xs font-semibold text-primary mb-2">€8,000 value</div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">→</span>
                      <span>3 intensive founder psychology sessions with Ermo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">→</span>
                      <span>Vulnerability mining & transformation moment identification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">→</span>
                      <span>Authentic narrative foundation development</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h5 className="font-semibold text-primary mb-2">PHASE 2: Cinematic Story Engineering</h5>
                  <div className="text-xs font-semibold text-primary mb-2">€15,000 value</div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">→</span>
                      <span>Documentary filmmaker collaboration (John's expertise)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">→</span>
                      <span>Documentary-level narrative architecture & emotional pacing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">→</span>
                      <span>Visual storytelling elements & presentation mastery</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h5 className="font-semibold text-primary mb-2">PHASE 3: Multi-Audience Signal Amplification</h5>
                  <div className="text-xs font-semibold text-primary mb-2">€12,000 value</div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">→</span>
                      <span>Investor pitch story optimization & emotional arc design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">→</span>
                      <span>Customer acquisition messaging & conversion psychology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">→</span>
                      <span>Talent attraction narrative & leadership positioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">→</span>
                      <span>Crisis communication framework & reputation management</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                  <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">EXCLUSIVE BONUSES:</h5>
                  <ul className="space-y-1 text-sm text-green-600 dark:text-green-400">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400 font-bold">→</span>
                      <span>30-day story evolution support (€3,000 value)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400 font-bold">→</span>
                      <span>Real-time story refinement based on market response</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400 font-bold">→</span>
                      <span>Pitch coaching & presentation optimization sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400 font-bold">→</span>
                      <span>Access to private founder legend community</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
                  <div className="text-center">
                    <p className="text-lg font-bold text-primary mb-1">TOTAL PACKAGE VALUE: €38,000</p>
                    <p className="text-sm text-muted-foreground mb-1">YOUR INVESTMENT: €12,500</p>
                    <p className="text-sm font-semibold text-green-600 dark:text-green-400">YOU SAVE: €25,500 (67% savings)</p>
                  </div>
                </div>
              </div>
            </div>

            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 rounded-xl">
              Apply for Legendary Transformation
            </Button>
          </div>

          {/* Full Journey Card */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-3">Full Journey Program</h3>
              <div className="text-3xl font-bold text-foreground mb-3">€5,000+</div>
              <p className="text-muted-foreground">Complete founder story transformation</p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-4">What's included:</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Everything in Signal DNA Discovery™</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>6-month ongoing optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Pitch deck transformation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Media training & positioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Investor introduction strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Team alignment workshops</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Crisis communication protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Dedicated success manager</span>
                </li>
              </ul>
            </div>

            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-3 rounded-xl">
              Schedule Strategy Call
            </Button>
          </div>
        </div>

        {/* Guarantees Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">The Triple Guarantee</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="text-lg font-bold text-green-700 dark:text-green-300 mb-3">TRANSFORMATION GUARANTEE</h4>
              <p className="text-green-600 dark:text-green-400 text-sm leading-relaxed">If you don't feel your story has fundamentally transformed within 30 days, we'll continue working until it does - at no additional cost.</p>
            </div>
            <div className="p-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-3">RESPONSE GUARANTEE</h4>
              <p className="text-blue-600 dark:text-blue-400 text-sm leading-relaxed">If key stakeholders (investors, customers, team) don't notice a dramatic difference in how they respond to your story, we'll refund 50% of your investment.</p>
            </div>
            <div className="p-6 bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-2xl text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="text-lg font-bold text-purple-700 dark:text-purple-300 mb-3">OPPORTUNITY GUARANTEE</h4>
              <p className="text-purple-600 dark:text-purple-400 text-sm leading-relaxed">If our process doesn't create measurable new opportunities (funding conversations, partnership discussions, media interest) within 90 days, we'll refund your full investment.</p>
            </div>
          </div>
        </div>

        {/* Scarcity Section */}
        <div className="mb-12 p-6 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl">
          <h3 className="text-2xl font-bold text-red-800 dark:text-red-200 mb-6 text-center">The Legend Admission Process</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-red-700 dark:text-red-300 mb-6 text-center">We accept only 12 founders per quarter into our Signal DNA intensive.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-red-800 dark:text-red-200 mb-4">Why so selective?</h4>
                <ul className="space-y-2 text-red-700 dark:text-red-300">
                  <li>1. John's documentary expertise requires deep collaboration (not scalable)</li>
                  <li>2. Ermo's founder psychology work demands intense focus per client</li>
                  <li>3. Our reputation depends on extraordinary transformations, not volume</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-red-800 dark:text-red-200 mb-4">Current Quarter Status:</h4>
                <ul className="space-y-2 text-red-700 dark:text-red-300">
                  <li>→ Quarter Capacity: 12 founders maximum</li>
                  <li>→ Applications Received: 47</li>
                  <li>→ Accepted: 10</li>
                  <li>→ Remaining Spots: 2</li>
                  <li>→ Next Admission: January 15th, 2026</li>
                </ul>
              </div>
            </div>
            
            <p className="text-center text-red-600 dark:text-red-400 font-medium italic mt-6">
              We turn down 60%+ of applicants. This process only works for founders ready to embrace authentic vulnerability as competitive advantage. Are you one of the legendary 12?
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mb-12 p-6 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl">
          <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-6 text-center">Legendary Founder Transformations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">J-GRIFF (Tech Founder)</h4>
              <p className="text-green-600 dark:text-green-400 mb-2">Investment: €12,500 → Result: €6M revenue increase → ROI: 48,000%</p>
              <p className="text-sm italic text-green-500 dark:text-green-400">"The story framework didn't just help with investors - it transformed how we attract customers and talent."</p>
            </div>
            <div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">AARON ABKE (Spiritual Entrepreneur)</h4>
              <p className="text-green-600 dark:text-green-400 mb-2">Investment: €12,500 → Result: 1M+ authentic following → ROI: Immeasurable</p>
              <p className="text-sm italic text-green-500 dark:text-green-400">"Working with Ermo transformed how I communicate my message. The documentary approach created something I never could have achieved alone."</p>
            </div>
          </div>
          
          <div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
            <h4 className="font-bold text-green-700 dark:text-green-300 mb-4 text-center">Emerging Patterns From All Clients:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">89%</div>
                <div className="text-sm text-green-500 dark:text-green-400">Improved stakeholder engagement within 30 days</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">73%</div>
                <div className="text-sm text-green-500 dark:text-green-400">New business opportunities within 90 days</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">64%</div>
                <div className="text-sm text-green-500 dark:text-green-400">Measurable business growth within 6 months</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">100%</div>
                <div className="text-sm text-green-500 dark:text-green-400">Say they'd invest again at double the price</div>
              </div>
            </div>
            <p className="text-center text-sm italic text-green-500 dark:text-green-400 mt-4">
              *"The documentary approach creates stories that feel both deeply authentic AND cinematically compelling."*
            </p>
          </div>
        </div>

        {/* Investment Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-card border border-border rounded-2xl">
            <h3 className="text-xl font-bold text-foreground mb-6">The €12,500 Investment Breakdown:</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">40+ hours of 1:1 story development</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">Documentary filmmaker collaboration (John's expertise)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">Proven methodology that generated €6M for J-Griff</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">Personal brand framework used by 1M+ follower creators</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">30-day story optimization guarantee</span>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-card border border-border rounded-2xl">
            <h3 className="text-xl font-bold text-foreground mb-6">Compare this to:</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">Traditional brand agencies:</span>
                <span className="font-semibold text-muted-foreground">€25K-50K</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">Executive coaches:</span>
                <span className="font-semibold text-muted-foreground">€15K-30K</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">Documentary production:</span>
                <span className="font-semibold text-muted-foreground">€50K-100K</span>
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm font-semibold text-primary text-center">
                  You get all three expertises for €12,500 - with a transformation guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}