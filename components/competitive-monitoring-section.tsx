import React from "react"
import { Eye, TrendingUp, Calendar, AlertTriangle, CheckCircle, BarChart3 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CompetitiveMonitoringSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Competitive{" "}
            <span className="text-primary">Intelligence</span>{" "}
            & Market Monitoring
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of market shifts and emerging trends in the founder storytelling space
          </p>
        </div>

        {/* Quarterly Competitive Audits */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Quarterly Competitive Audits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-3 text-center">Direct Competitors</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>• Founder coaching programs</div>
                <div>• Storytelling consultants</div>
                <div>• Pitch deck services</div>
                <div>• Personal branding agencies</div>
              </div>
            </div>
            
            <div className="bg-card border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-3 text-center">Market Trends</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>• AI-authenticity fatigue</div>
                <div>• Remote-first narratives</div>
                <div>• ESG storytelling</div>
                <div>• Web3 founder stories</div>
              </div>
            </div>
            
            <div className="bg-card border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-3 text-center">Pricing Analysis</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>• Service pricing changes</div>
                <div>• Package structures</div>
                <div>• Value propositions</div>
                <div>• Market positioning</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quiz Evolution Strategy */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Quiz Evolution & Market Adaptation
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card border border-primary/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <h4 className="text-xl font-bold text-primary mb-6">6-Month Quiz Updates</h4>
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="font-semibold text-foreground mb-2">Q1 2025: AI Integration</div>
                  <div className="text-sm text-muted-foreground">
                    Add questions about AI-authenticity balance and human storytelling differentiation
                  </div>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="font-semibold text-foreground mb-2">Q2 2025: Remote Leadership</div>
                  <div className="text-sm text-muted-foreground">
                    Incorporate remote-first team building and virtual storytelling elements
                  </div>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="font-semibold text-foreground mb-2">Q3 2025: ESG Focus</div>
                  <div className="text-sm text-muted-foreground">
                    Add sustainability and social impact storytelling assessment
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-primary/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <h4 className="text-xl font-bold text-primary mb-6">Market Response Monitoring</h4>
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="font-semibold text-foreground mb-2">Competitor Launches</div>
                  <div className="text-sm text-muted-foreground">
                    Track new storytelling frameworks and founder coaching programs
                  </div>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="font-semibold text-foreground mb-2">Pricing Changes</div>
                  <div className="text-sm text-muted-foreground">
                    Monitor competitor pricing adjustments and market positioning shifts
                  </div>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="font-semibold text-foreground mb-2">Content Analysis</div>
                  <div className="text-sm text-muted-foreground">
                    Analyze competitor content strategies and messaging approaches
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Monitoring Tools & Processes */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Monitoring Tools & Processes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <h4 className="font-bold text-primary mb-4">Automated Monitoring</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Google Alerts for competitor mentions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Social media monitoring tools</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Industry newsletter subscriptions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Competitor website tracking</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <h4 className="font-bold text-primary mb-4">Manual Research</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Quarterly competitor deep-dives</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Industry conference attendance</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Founder community engagement</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Client feedback analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alert System */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Market Alert System
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-primary/20 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="font-bold text-primary mb-3">Green Alert</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Market opportunities and positive trends
              </p>
              <div className="text-xs text-green-500 font-semibold">Monitor & capitalize</div>
            </div>
            
            <div className="bg-card border border-primary/20 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-500" />
              </div>
              <h4 className="font-bold text-primary mb-3">Yellow Alert</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Competitive threats and market shifts
              </p>
              <div className="text-xs text-yellow-500 font-semibold">Assess & adapt</div>
            </div>
            
            <div className="bg-card border border-primary/20 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <h4 className="font-bold text-primary mb-3">Red Alert</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Major competitive launches or market disruptions
              </p>
              <div className="text-xs text-red-500 font-semibold">Respond immediately</div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-card border border-primary/20 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Competitive Intelligence Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <div className="text-sm text-muted-foreground">Competitors Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Quarterly Audits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">89%</div>
              <div className="text-sm text-muted-foreground">Market Share</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">156%</div>
              <div className="text-sm text-muted-foreground">Competitive Advantage</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Stay Ahead of the Competition
          </h3>
          <p className="text-muted-foreground mb-6">
            Join our competitive intelligence program and maintain your market leadership
          </p>
          <Link href="/audit">
            <Button className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg rounded-xl">
              Start Monitoring
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
