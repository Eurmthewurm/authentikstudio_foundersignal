import React from "react"
import { Users, Calendar, MessageSquare, Award, Lock } from "lucide-react"

export function FoundersCircleSection() {
  return (
    <section className="w-full overflow-hidden flex justify-center items-center">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Your Signal Is Found. Now Amplify It.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              After completing the 1:1 Intensive, you'll be eligible to join the Signal DNA Founders Circle:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Monthly Live Coaching</h3>
              </div>
              <p className="text-muted-foreground">
                Hot-seat sessions and real-time story refinement with expert feedback
              </p>
            </div>
            
            <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Peer Feedback & Accountability</h3>
              </div>
              <p className="text-muted-foreground">
                Cross-industry insights and peer accountability from high-signal founders
              </p>
            </div>
            
            <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Exclusive Masterclasses</h3>
              </div>
              <p className="text-muted-foreground">
                Guest sessions with VCs, storytelling experts, and branding professionals
              </p>
            </div>
            
            <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Private Community</h3>
              </div>
              <p className="text-muted-foreground">
                Slack/Discord community of high-signal founders for ongoing support
              </p>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-primary">Invite-Only Membership</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Your Signal must be discovered before it can be amplified with the group.
            </p>
            <div className="bg-muted/5 border border-border/20 rounded-lg p-6">
              <h4 className="text-2xl font-bold text-primary mb-2">€997/month</h4>
              <p className="text-sm text-muted-foreground">
                Limited to 12 founders per cohort. Includes all monthly sessions, masterclasses, and community access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
