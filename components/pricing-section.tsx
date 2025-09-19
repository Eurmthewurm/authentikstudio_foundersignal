"use client"

import { Check, Clock, Target, TrendingUp, Award } from "lucide-react"
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
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
            Most founders build great products but remain unknown. Legendary founders become the stories that investors chase, customers choose, and media profiles.
          </p>
          
          {/* Scarcity Banner */}
          <div className="inline-flex items-center px-6 py-3 bg-card border border-primary/20 rounded-full">
            <Clock className="w-4 h-4 text-primary mr-2" />
            <span className="text-primary font-semibold">Only 2 spots remaining this quarter</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Free Audit Card */}
          <div className="bg-primary rounded-2xl p-6 text-primary-foreground relative hover:scale-105 transition-all duration-300 hover:shadow-xl">
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

            <div className="mb-3">
              <h4 className="font-semibold mb-2">What's included:</h4>
              <ul className="space-y-1 text-sm">
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

            <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold py-3 rounded-xl border border-primary/20 transition-colors duration-300">
              Claim Your FREE Audit
            </Button>
          </div>

          {/* Main Offer Card */}
          <div className="bg-card border-2 border-primary rounded-2xl p-6 relative lg:scale-105 hover:scale-110 transition-all duration-300 hover:shadow-2xl">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                The Legendary Transformation
              </span>
            </div>
            
            <div className="mb-3 pt-1">
              <h3 className="text-2xl font-bold text-foreground mb-1">Signal DNA Discovery™</h3>
              <div className="text-4xl font-bold text-primary mb-1">€12,500</div>
              <p className="text-muted-foreground mb-1">Transform From Invisible Founder to Industry Legend in 90 Days</p>
              <p className="text-sm text-muted-foreground">The Complete Legendary Transformation Package</p>
            </div>

            <div className="mb-2">
              <h4 className="font-semibold text-foreground mb-1">The Legendary Transformation Method:</h4>
              
              <div className="space-y-1">
                <div className="p-2 bg-primary/5 rounded-lg border border-primary/20">
                  <h5 className="font-semibold text-primary mb-1">PHASE 1: Archaeological Story Excavation</h5>
                  <div className="text-xs font-semibold text-primary mb-1">€8,000 value</div>
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

                <div className="p-2 bg-primary/5 rounded-lg border border-primary/20">
                  <h5 className="font-semibold text-primary mb-1">PHASE 2: Cinematic Story Engineering</h5>
                  <div className="text-xs font-semibold text-primary mb-1">€15,000 value</div>
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

                <div className="p-2 bg-primary/5 rounded-lg border border-primary/20">
                  <h5 className="font-semibold text-primary mb-1">PHASE 3: Multi-Audience Signal Amplification</h5>
                  <div className="text-xs font-semibold text-primary mb-1">€12,000 value</div>
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

                <div className="p-2 bg-primary/10 rounded-lg border border-primary/30">
                  <h5 className="font-semibold text-primary mb-1">EXCLUSIVE BONUSES:</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">→</span>
                      <span>30-day story evolution support (€3,000 value)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">→</span>
                      <span>Real-time story refinement based on market response</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">→</span>
                      <span>Pitch coaching & presentation optimization sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">→</span>
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
          <div className="bg-card border border-border rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-primary/50">
            <div className="mb-3">
              <h3 className="text-2xl font-bold text-foreground mb-1">Full Journey Program</h3>
              <div className="text-3xl font-bold text-foreground mb-1">€5,000+</div>
              <p className="text-muted-foreground">Complete founder story transformation</p>
            </div>

            <div className="mb-3">
              <h4 className="font-semibold text-foreground mb-2">What's included:</h4>
              <ul className="space-y-1 text-sm">
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
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">The Triple Guarantee</h3>
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

        {/* Scarcity Section */}
        <div className="mb-6 p-6 bg-card border border-primary/20 rounded-2xl hover:border-primary/40 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-primary mb-4 text-center">The Legend Admission Process</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground mb-4 text-center">We accept only 12 founders per quarter into our Signal DNA intensive.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold text-primary mb-4">Why so selective?</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>1. John's documentary expertise requires deep collaboration (not scalable)</li>
                  <li>2. Ermo's founder psychology work demands intense focus per client</li>
                  <li>3. Our reputation depends on extraordinary transformations, not volume</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-primary mb-4">Current Quarter Status:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>→ Quarter Capacity: 12 founders maximum</li>
                  <li>→ Applications Received: 47</li>
                  <li>→ Accepted: 10</li>
                  <li>→ Remaining Spots: 2</li>
                  <li>→ Next Admission: January 15th, 2026</li>
                </ul>
              </div>
            </div>
            
            <p className="text-center text-primary font-medium italic mt-4">
              We turn down 60%+ of applicants. This process only works for founders ready to embrace authentic vulnerability as competitive advantage. Are you one of the legendary 12?
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mb-6 p-6 bg-card border border-primary/20 rounded-2xl hover:border-primary/40 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-primary mb-4 text-center">Legendary Founder Transformations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
              <h4 className="font-bold text-primary mb-1">J-GRIFF (Tech Founder)</h4>
              <p className="text-muted-foreground mb-1">Investment: €12,500 → Result: €6M revenue increase → ROI: 48,000%</p>
              <p className="text-sm italic text-muted-foreground">"The story framework didn't just help with investors - it transformed how we attract customers and talent."</p>
            </div>
            <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
              <h4 className="font-bold text-primary mb-1">AARON ABKE (Spiritual Entrepreneur)</h4>
              <p className="text-muted-foreground mb-1">Investment: €12,500 → Result: 1M+ authentic following → ROI: Immeasurable</p>
              <p className="text-sm italic text-muted-foreground">"Working with Ermo transformed how I communicate my message. The documentary approach created something I never could have achieved alone."</p>
            </div>
          </div>
          
          <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
            <h4 className="font-bold text-primary mb-2 text-center">Emerging Patterns From All Clients:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">89%</div>
                <div className="text-sm text-muted-foreground">Improved stakeholder engagement within 30 days</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">73%</div>
                <div className="text-sm text-muted-foreground">New business opportunities within 90 days</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">64%</div>
                <div className="text-sm text-muted-foreground">Measurable business growth within 6 months</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Say they'd invest again at double the price</div>
              </div>
            </div>
            <p className="text-center text-sm italic text-muted-foreground mt-4">
              *"The documentary approach creates stories that feel both deeply authentic AND cinematically compelling."*
            </p>
          </div>
        </div>

        {/* Investment Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-card border border-primary/20 rounded-2xl hover:border-primary/40 transition-colors duration-300">
            <h3 className="text-xl font-bold text-primary mb-6">The €12,500 Investment Breakdown:</h3>
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
          
          <div className="p-6 bg-card border border-primary/20 rounded-2xl hover:border-primary/40 transition-colors duration-300">
            <h3 className="text-xl font-bold text-primary mb-6">Compare this to:</h3>
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
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
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