import React from "react"
import { Mic, Video, PenTool, Share2, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThoughtLeadershipSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Founder Signal{" "}
            <span className="text-primary">Thought Leadership</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Positioning yourself as the authority on founder storytelling through strategic content and media
          </p>
        </div>

        {/* Podcast Strategy */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Founder Signal Podcast
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card border border-primary/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mic className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4 text-center">Bi-Weekly Episodes</h4>
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="font-semibold text-foreground mb-2">Episode Format</div>
                  <div className="text-sm text-muted-foreground">
                    30-minute interviews with successful founders about their story transformations
                  </div>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="font-semibold text-foreground mb-2">Guest Criteria</div>
                  <div className="text-sm text-muted-foreground">
                    Founders who've raised €1M+, built 1M+ followers, or achieved legendary status
                  </div>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="font-semibold text-foreground mb-2">Distribution</div>
                  <div className="text-sm text-muted-foreground">
                    Spotify, Apple Podcasts, YouTube, and LinkedIn Audio
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-primary/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Video className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4 text-center">Video Series</h4>
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="font-semibold text-foreground mb-2">"Signal DNA Deep Dives"</div>
                  <div className="text-sm text-muted-foreground">
                    15-minute educational videos breaking down specific storytelling frameworks
                  </div>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="font-semibold text-foreground mb-2">"Founder Transformation Stories"</div>
                  <div className="text-sm text-muted-foreground">
                    Before/after case studies with visual storytelling elements
                  </div>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="font-semibold text-foreground mb-2">Platform</div>
                  <div className="text-sm text-muted-foreground">
                    YouTube, LinkedIn Video, and Instagram Reels
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Repurposing Strategy */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Content Repurposing Pipeline
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-primary/20 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <PenTool className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-3">LinkedIn Articles</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Transform podcast insights into long-form thought leadership pieces
              </p>
              <div className="text-xs text-primary font-semibold">2 articles per episode</div>
            </div>
            
            <div className="bg-card border border-primary/20 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-3">Social Media Reels</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Extract key quotes and insights for Instagram and TikTok content
              </p>
              <div className="text-xs text-primary font-semibold">5 reels per episode</div>
            </div>
            
            <div className="bg-card border border-primary/20 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-3">Email Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Weekly digest of insights, case studies, and Signal DNA tips
              </p>
              <div className="text-xs text-primary font-semibold">Weekly distribution</div>
            </div>
          </div>
        </div>

        {/* Content Calendar */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Bi-Weekly Content Calendar
          </h3>
          <div className="bg-card border border-primary/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-primary mb-4">Week 1: Podcast Episode</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Monday: Guest research & outreach</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Wednesday: Recording session</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Friday: Episode release</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-primary mb-4">Week 2: Content Repurposing</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Monday: LinkedIn article</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Wednesday: Social media reels</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Friday: Newsletter digest</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guest Pipeline */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Guest Pipeline & Networking
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <h4 className="font-bold text-primary mb-4">Target Guest Categories</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Successful SaaS founders</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Consumer brand creators</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Social impact entrepreneurs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Industry thought leaders</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <h4 className="font-bold text-primary mb-4">Networking Strategy</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Founder meetups & conferences</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Accelerator demo days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">VC portfolio events</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">LinkedIn outreach campaigns</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-card border border-primary/20 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Thought Leadership Success Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">47K</div>
              <div className="text-sm text-muted-foreground">LinkedIn Followers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">12K</div>
              <div className="text-sm text-muted-foreground">Podcast Downloads/Month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">89%</div>
              <div className="text-sm text-muted-foreground">Content Engagement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">23</div>
              <div className="text-sm text-muted-foreground">Guest Appearances</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Ready to Establish Your Authority?
          </h3>
          <p className="text-muted-foreground mb-6">
            Join our thought leadership program and become the go-to expert on founder storytelling
          </p>
          <Button className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg rounded-xl">
            Start Your Authority Journey
          </Button>
        </div>
      </div>
    </section>
  )
}
