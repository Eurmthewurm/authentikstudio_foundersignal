import React from "react"
import { Clock, Mail, Calendar, CheckCircle, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CustomerSuccessWorkflowSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your{" "}
            <span className="text-primary">Success Journey</span>{" "}
            Starts Here
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            From quiz completion to legendary transformation - we're with you every step of the way
          </p>
        </div>

        {/* Onboarding Workflow */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Standardized Onboarding Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-card border border-primary/20 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-2">Within 24 Hours</h4>
              <p className="text-sm text-muted-foreground">
                Welcome video, platform walkthrough, and personalized next-steps guide delivered to your inbox
              </p>
            </div>
            
            <div className="text-center p-6 bg-card border border-primary/20 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-2">Day 3</h4>
              <p className="text-sm text-muted-foreground">
                Personalized Signal DNA report with actionable insights and recommended next steps
              </p>
            </div>
            
            <div className="text-center p-6 bg-card border border-primary/20 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-2">Week 1</h4>
              <p className="text-sm text-muted-foreground">
                Discovery call scheduling and preparation materials for your Signal DNA intensive
              </p>
            </div>
            
            <div className="text-center p-6 bg-card border border-primary/20 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-2">Week 2</h4>
              <p className="text-sm text-muted-foreground">
                Program kickoff with dedicated success manager and access to founder legend community
              </p>
            </div>
          </div>
        </div>

        {/* Follow-Up Sequence */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Automated Follow-Up Sequence
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">30</span>
                </div>
                <h4 className="font-bold text-primary">30-Day Check-In</h4>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                Progress assessment, story refinement feedback, and next-phase planning
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Story transformation progress review</li>
                <li>• Stakeholder feedback analysis</li>
                <li>• Next-phase optimization recommendations</li>
              </ul>
            </div>
            
            <div className="bg-card border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">60</span>
                </div>
                <h4 className="font-bold text-primary">60-Day Momentum</h4>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                Mid-program evaluation, success metrics tracking, and testimonial collection
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• ROI measurement and analysis</li>
                <li>• Success story documentation</li>
                <li>• Community engagement opportunities</li>
              </ul>
            </div>
            
            <div className="bg-card border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">90</span>
                </div>
                <h4 className="font-bold text-primary">90-Day Legend</h4>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                Program completion celebration, ongoing support planning, and referral opportunities
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Transformation celebration</li>
                <li>• Ongoing support options</li>
                <li>• Referral program invitation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Manager Benefits */}
        <div className="bg-card border border-primary/20 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Dedicated Success Manager Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">Personalized Support</div>
                  <div className="text-sm text-muted-foreground">Dedicated success manager for your entire journey</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">Progress Tracking</div>
                  <div className="text-sm text-muted-foreground">Regular check-ins and milestone celebrations</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">Community Access</div>
                  <div className="text-sm text-muted-foreground">Exclusive founder legend community membership</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">Flexible Scheduling</div>
                  <div className="text-sm text-muted-foreground">Adapt to your schedule and availability</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Ready to Start Your Success Journey?
          </h3>
          <p className="text-muted-foreground mb-6">
            Join 2,847+ founders who've transformed their Signal DNA
          </p>
          <Link href="/quiz">
            <Button className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg rounded-xl">
              Begin Your Transformation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
