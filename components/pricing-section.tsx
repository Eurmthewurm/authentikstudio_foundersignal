"use client"

import { Check, Clock, DollarSign, Target, TrendingUp, Users, Award, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  return (
    <section className="w-full py-20 md:py-24 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Transform From{" "}
            <span className="text-muted-foreground">Invisible</span>{" "}
            Founder to{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Industry Legend
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Most founders build great products but remain unknown. Legendary founders become the stories that investors chase, customers choose, and media profiles.
          </p>
          
          {/* Scarcity Banner */}
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-full backdrop-blur-sm">
            <Clock className="w-5 h-5 text-red-500 mr-3" />
            <span className="text-red-600 dark:text-red-400 font-semibold text-lg">Only 2 spots remaining this quarter</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Free Audit Card */}
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-primary-foreground relative overflow-hidden shadow-2xl">
            <div className="absolute top-6 right-6">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4">Free Signal DNA Audit</h3>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl font-bold">FREE</span>
                <span className="text-xl line-through opacity-70">€500</span>
              </div>
              <p className="text-base opacity-90 mb-4">Limited to first 50 founders this month</p>
              <div className="bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                <span className="text-sm font-semibold">47 spots taken</span>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-bold text-lg mb-6">What's included:</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-base">15-Minute AI-Powered Story Analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-base">Personalized Signal DNA Report</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-base">Competitive Differentiation Blueprint</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-base">90-Day Quick-Win Action Plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-base">Exclusive "Founder Signal Playbook" (25+ templates)</span>
                </li>
              </ul>
            </div>

            <Button className="w-full bg-white text-primary hover:bg-white/90 font-bold py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              Claim Your FREE Audit
            </Button>
          </div>

          {/* Main Offer Card */}
          <div className="bg-gradient-to-br from-card to-card/80 border-2 border-primary/30 rounded-3xl p-8 relative lg:scale-105 shadow-2xl backdrop-blur-sm">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground px-8 py-3 rounded-full text-sm font-bold shadow-lg">
                The Legendary Transformation
              </span>
            </div>
            
            <div className="mb-8 pt-4">
              <h3 className="text-3xl font-bold text-foreground mb-4">Signal DNA Discovery™</h3>
              <div className="text-5xl font-bold text-primary mb-4">€12,500</div>
              <p className="text-muted-foreground mb-3 text-lg">Transform From Invisible Founder to Industry Legend in 90 Days</p>
              <p className="text-sm text-muted-foreground">The Complete Legendary Transformation Package</p>
            </div>

            <div className="mb-8">
              <h4 className="font-bold text-foreground mb-6 text-lg">The Legendary Transformation Method:</h4>
              
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
                  <h5 className="font-bold text-primary mb-4 text-lg">PHASE 1: Archaeological Story Excavation</h5>
                  <div className="text-sm font-semibold text-primary mb-3">€8,000 value</div>
                  <ul className="space-y-2 text-muted-foreground">
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

                <div className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
                  <h5 className="font-bold text-primary mb-4 text-lg">PHASE 2: Cinematic Story Engineering</h5>
                  <div className="text-sm font-semibold text-primary mb-3">€15,000 value</div>
                  <ul className="space-y-2 text-muted-foreground">
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

                <div className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
                  <h5 className="font-bold text-primary mb-4 text-lg">PHASE 3: Multi-Audience Signal Amplification</h5>
                  <div className="text-sm font-semibold text-primary mb-3">€12,000 value</div>
                  <ul className="space-y-2 text-muted-foreground">
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

                <div className="p-6 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-2xl border border-green-500/20">
                  <h5 className="font-bold text-green-600 dark:text-green-400 mb-4 text-lg">EXCLUSIVE BONUSES:</h5>
                  <ul className="space-y-2 text-green-600 dark:text-green-400">
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

                <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/30">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary mb-2">TOTAL PACKAGE VALUE: €38,000</p>
                    <p className="text-base text-muted-foreground mb-2">YOUR INVESTMENT: €12,500</p>
                    <p className="text-lg font-bold text-green-600 dark:text-green-400">YOU SAVE: €25,500 (67% savings)</p>
                  </div>
                </div>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground hover:from-primary-dark hover:to-primary font-bold py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              Apply for Legendary Transformation
            </Button>
          </div>

          {/* Full Journey Card */}
          <div className="bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-3xl p-8 shadow-xl backdrop-blur-sm">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">Full Journey Program</h3>
              <div className="text-4xl font-bold text-foreground mb-4">€5,000+</div>
              <p className="text-muted-foreground text-lg">Complete founder story transformation</p>
            </div>

            <div className="mb-8">
              <h4 className="font-bold text-foreground mb-6 text-lg">What's included:</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base">Everything in Signal DNA Discovery™</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base">6-month ongoing optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base">Pitch deck transformation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base">Media training & positioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base">Investor introduction strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base">Team alignment workshops</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base">Crisis communication protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base">Dedicated success manager</span>
                </li>
              </ul>
            </div>

            <Button className="w-full bg-gradient-to-r from-accent to-accent/80 text-accent-foreground hover:from-accent/90 hover:to-accent font-bold py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              Schedule Strategy Call
            </Button>
          </div>
        </div>

        {/* Guarantees Section */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center text-foreground mb-12">The Triple Guarantee</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 rounded-3xl text-center shadow-xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="text-xl font-bold text-green-700 dark:text-green-300 mb-4">TRANSFORMATION GUARANTEE</h4>
              <p className="text-green-600 dark:text-green-400 leading-relaxed">If you don't feel your story has fundamentally transformed within 30 days, we'll continue working until it does - at no additional cost.</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-3xl text-center shadow-xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-4">RESPONSE GUARANTEE</h4>
              <p className="text-blue-600 dark:text-blue-400 leading-relaxed">If key stakeholders (investors, customers, team) don't notice a dramatic difference in how they respond to your story, we'll refund 50% of your investment.</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-3xl text-center shadow-xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-4">OPPORTUNITY GUARANTEE</h4>
              <p className="text-purple-600 dark:text-purple-400 leading-relaxed">If our process doesn't create measurable new opportunities (funding conversations, partnership discussions, media interest) within 90 days, we'll refund your full investment.</p>
            </div>
          </div>
        </div>

        {/* Scarcity Section */}
        <div className="mb-20 p-10 bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-3xl backdrop-blur-sm shadow-xl">
          <h3 className="text-3xl font-bold text-red-800 dark:text-red-200 mb-8 text-center">The Legend Admission Process</h3>
          <div className="max-w-5xl mx-auto">
            <p className="text-red-700 dark:text-red-300 mb-8 text-center text-xl">We accept only 12 founders per quarter into our Signal DNA intensive.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-2xl font-bold text-red-800 dark:text-red-200 mb-6">Why so selective?</h4>
                <ul className="space-y-4 text-red-700 dark:text-red-300 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="bg-red-500/20 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-0.5">1</span>
                    <span>John's documentary expertise requires deep collaboration (not scalable)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-red-500/20 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-0.5">2</span>
                    <span>Ermo's founder psychology work demands intense focus per client</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-red-500/20 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-0.5">3</span>
                    <span>Our reputation depends on extraordinary transformations, not volume</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold text-red-800 dark:text-red-200 mb-6">Current Quarter Status:</h4>
                <ul className="space-y-3 text-red-700 dark:text-red-300 text-lg">
                  <li className="flex items-center gap-3">
                    <span className="text-red-600 dark:text-red-400 font-bold">→</span>
                    <span>Quarter Capacity: 12 founders maximum</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-600 dark:text-red-400 font-bold">→</span>
                    <span>Applications Received: 47</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-600 dark:text-red-400 font-bold">→</span>
                    <span>Accepted: 10</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-600 dark:text-red-400 font-bold">→</span>
                    <span>Remaining Spots: 2</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-600 dark:text-red-400 font-bold">→</span>
                    <span>Next Admission: January 15th, 2026</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="text-center text-red-600 dark:text-red-400 font-medium italic mt-8 text-lg">
              We turn down 60%+ of applicants. This process only works for founders ready to embrace authentic vulnerability as competitive advantage. Are you one of the legendary 12?
            </p>
          </div>
        </div>

        {/* Urgency Triggers */}
        <div className="mb-20 p-10 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-3xl backdrop-blur-sm shadow-xl">
          <h3 className="text-3xl font-bold text-orange-800 dark:text-orange-200 mb-10 text-center flex items-center justify-center gap-3">
            <Clock className="w-8 h-8" />
            URGENCY TRIGGERS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-4 text-xl">TIMING URGENCY</h4>
              <p className="text-orange-600 dark:text-orange-400 leading-relaxed">Every month you wait, another founder in your space claims legendary positioning. In 18 months, there will be clear industry legends and invisible founders. Which will you be?</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-4 text-xl">PRICE ANCHORING</h4>
              <p className="text-orange-600 dark:text-orange-400 leading-relaxed">This intensive is currently €12,500. As our method proves its ROI (like J-Griff's €6M increase), pricing will reflect that value. Early adopters benefit from founder-rate pricing.</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-4 text-xl">COMPETITIVE URGENCY</h4>
              <p className="text-orange-600 dark:text-orange-400 leading-relaxed">While your competitors use AI for their founder stories, legendary founders use the team behind National Geographic documentaries. This advantage won't stay available forever.</p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mb-20 p-10 bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-3xl backdrop-blur-sm shadow-xl">
          <h3 className="text-3xl font-bold text-green-800 dark:text-green-200 mb-10 text-center flex items-center justify-center gap-3">
            <TrendingUp className="w-8 h-8" />
            LEGENDARY FOUNDER TRANSFORMATIONS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-4 text-xl flex items-center gap-3">
                <DollarSign className="w-6 h-6" />
                J-GRIFF (Tech Founder)
              </h4>
              <p className="text-green-600 dark:text-green-400 mb-4 text-lg">Investment: €12,500 → Result: €6M revenue increase → ROI: 48,000%</p>
              <p className="text-sm italic text-green-500 dark:text-green-400 leading-relaxed">"The story framework didn't just help with investors - it transformed how we attract customers and talent."</p>
            </div>
            <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-4 text-xl flex items-center gap-3">
                <Award className="w-6 h-6" />
                AARON ABKE (Spiritual Entrepreneur)
              </h4>
              <p className="text-green-600 dark:text-green-400 mb-4 text-lg">Investment: €12,500 → Result: 1M+ authentic following → ROI: Immeasurable</p>
              <p className="text-sm italic text-green-500 dark:text-green-400 leading-relaxed">"Working with Ermo transformed how I communicate my message. The documentary approach created something I never could have achieved alone."</p>
            </div>
          </div>
          
          <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
            <h4 className="font-bold text-green-700 dark:text-green-300 mb-8 text-center text-2xl flex items-center justify-center gap-3">
              <Users className="w-8 h-8" />
              EMERGING PATTERNS FROM ALL CLIENTS:
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-green-500/10 rounded-xl">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">89%</div>
                <div className="text-sm text-green-500 dark:text-green-400">Improved stakeholder engagement within 30 days</div>
              </div>
              <div className="p-4 bg-green-500/10 rounded-xl">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">73%</div>
                <div className="text-sm text-green-500 dark:text-green-400">New business opportunities within 90 days</div>
              </div>
              <div className="p-4 bg-green-500/10 rounded-xl">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">64%</div>
                <div className="text-sm text-green-500 dark:text-green-400">Measurable business growth within 6 months</div>
              </div>
              <div className="p-4 bg-green-500/10 rounded-xl">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
                <div className="text-sm text-green-500 dark:text-green-400">Say they'd invest again at double the price</div>
              </div>
            </div>
            <p className="text-center text-sm italic text-green-500 dark:text-green-400 mt-6 text-lg">
              *"The documentary approach creates stories that feel both deeply authentic AND cinematically compelling."*
            </p>
          </div>
        </div>

        {/* Investment Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-3xl shadow-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-foreground mb-8">The €12,500 Investment Breakdown:</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground text-lg">40+ hours of 1:1 story development</span>
              </div>
              <div className="flex items-center gap-4">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground text-lg">Documentary filmmaker collaboration (John's expertise)</span>
              </div>
              <div className="flex items-center gap-4">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground text-lg">Proven methodology that generated €6M for J-Griff</span>
              </div>
              <div className="flex items-center gap-4">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground text-lg">Personal brand framework used by 1M+ follower creators</span>
              </div>
              <div className="flex items-center gap-4">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground text-lg">30-day story optimization guarantee</span>
              </div>
            </div>
          </div>
          
          <div className="p-10 bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-3xl shadow-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-foreground mb-8">Compare this to:</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center py-4 border-b border-border/50">
                <span className="text-foreground text-lg">Traditional brand agencies:</span>
                <span className="font-bold text-muted-foreground text-lg">€25K-50K</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-border/50">
                <span className="text-foreground text-lg">Executive coaches:</span>
                <span className="font-bold text-muted-foreground text-lg">€15K-30K</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-border/50">
                <span className="text-foreground text-lg">Documentary production:</span>
                <span className="font-bold text-muted-foreground text-lg">€50K-100K</span>
              </div>
              <div className="mt-8 p-6 bg-primary/10 rounded-2xl">
                <p className="text-lg font-bold text-primary text-center">
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