import React from "react"
import { Users, Gift, Star, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ReferralEcosystemSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our{" "}
            <span className="text-primary">Founder Signal</span>{" "}
            Ecosystem
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with us to help founders discover their Signal DNA and earn rewards for every successful referral
          </p>
        </div>

        {/* Referral Program */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-card border border-primary/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
              <Gift className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Referral Rewards Program
            </h3>
            <p className="text-muted-foreground mb-6">
              Earn exclusive rewards for every founder you refer to our Signal DNA ecosystem
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">Quiz Referral</div>
                  <div className="text-sm text-muted-foreground">€50 credit for every quiz completion</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">Audit Referral</div>
                  <div className="text-sm text-muted-foreground">€200 credit + bonus coaching session</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">Intensive Referral</div>
                  <div className="text-sm text-muted-foreground">€1,250 commission + exclusive access</div>
                </div>
              </div>
            </div>

            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 rounded-xl">
              Join Referral Program
            </Button>
          </div>

          <div className="bg-card border border-primary/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Partner Network
            </h3>
            <p className="text-muted-foreground mb-6">
              Connect with complementary networks in the founder ecosystem
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">Accelerator Programs</div>
                  <div className="text-sm text-muted-foreground">Partner with top accelerators for founder referrals</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">Investor Communities</div>
                  <div className="text-sm text-muted-foreground">Collaborate with VC networks and angel groups</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">Founder Meetups</div>
                  <div className="text-sm text-muted-foreground">Sponsor and speak at founder events</div>
                </div>
              </div>
            </div>

            <Button className="w-full bg-card border border-primary text-primary hover:bg-primary/10 font-semibold py-3 rounded-xl">
              Become a Partner
            </Button>
          </div>
        </div>

        {/* Micro-Influencer Program */}
        <div className="bg-card border border-primary/20 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Micro-Influencer Partnership Program
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/10">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-2">Podcast Hosts</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Guest appearances on founder-focused podcasts with Signal DNA quiz integration
              </p>
              <div className="text-xs text-primary font-semibold">€500 per episode</div>
            </div>
            
            <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/10">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-2">Newsletter Writers</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Sponsored content in investor and founder newsletters
              </p>
              <div className="text-xs text-primary font-semibold">€300 per article</div>
            </div>
            
            <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/10">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-2">Event Speakers</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Speaking opportunities at founder conferences and meetups
              </p>
              <div className="text-xs text-primary font-semibold">€1,000 per event</div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-6">
            Partnership Success Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">47</div>
              <div className="text-sm text-muted-foreground">Active Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">€12K</div>
              <div className="text-sm text-muted-foreground">Monthly Referral Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">89%</div>
              <div className="text-sm text-muted-foreground">Partner Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">156%</div>
              <div className="text-sm text-muted-foreground">YoY Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
