"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Download, Mail, FileText } from "lucide-react"

export function SecondaryConversions() {
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !consent) return

    setIsSubmitting(true)
    
    // Track newsletter signup
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'newsletter_signup', {
        event_category: 'conversion',
        event_label: 'secondary_conversion',
        email: email
      })
    }

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail("")
      setConsent(false)
      alert("Thanks! Check your email for storytelling tips.")
    }, 1000)
  }

  return (
    <div className="w-full py-16 sm:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Not Ready for the Full Assessment?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with these free resources to improve your founder storytelling
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Newsletter Signup */}
          <div className="bg-card border border-primary/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Weekly Storytelling Tips</h3>
                <p className="text-sm text-muted-foreground">Free insights delivered to your inbox</p>
              </div>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                required
              />
              <div className="flex items-start gap-3">
                <Checkbox
                  id="newsletter-consent"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked as boolean)}
                  className="mt-1"
                />
                <label htmlFor="newsletter-consent" className="text-sm text-muted-foreground leading-relaxed">
                  I consent to receiving weekly storytelling tips and founder insights. 
                  I can unsubscribe anytime.
                </label>
              </div>
              <Button
                type="submit"
                disabled={!email || !consent || isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? "Subscribing..." : "Get Free Tips"}
              </Button>
            </form>
          </div>

          {/* Quick Download */}
          <div className="bg-card border border-primary/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Quick Storytelling Guide</h3>
                <p className="text-sm text-muted-foreground">5-minute read, instant impact</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="w-4 h-4" />
                <span>10 storytelling frameworks that work</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="w-4 h-4" />
                <span>Real founder examples & templates</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="w-4 h-4" />
                <span>Actionable next steps</span>
              </div>
              
              <Button 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'download_guide', {
                      event_category: 'conversion',
                      event_label: 'secondary_conversion'
                    })
                  }
                  // Simulate download
                  alert("Download started! Check your downloads folder.")
                }}
              >
                Download Free Guide
              </Button>
            </div>
          </div>
        </div>

        {/* Back to Main CTAs */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Ready for the full experience?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="/quiz">Take Full Assessment</a>
            </Button>
            <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="/audit">Book Free Audit</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
