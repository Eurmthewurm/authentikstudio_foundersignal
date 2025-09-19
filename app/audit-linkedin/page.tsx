"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FunnelHeader } from "@/components/funnel-header"
import { FunnelFooter } from "@/components/funnel-footer"
import { CheckCircle, Clock, Users, Star, Building2, TrendingUp, Award } from "lucide-react"

export default function AuditLinkedInPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })
  const [source, setSource] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const src = urlParams.get('src') || 'linkedin'
    setSource(src)
  }, [])

  const getDynamicHeadline = () => {
    switch (source) {
      case 'linkedin':
        return "LinkedIn Founders: Claim Your Free Professional Signal DNA Audit"
      case 'linkedin-campaign':
        return "Exclusive Professional Audit Offer for LinkedIn Network"
      case 'linkedin-network':
        return "Network-Ready: Free Professional Story Audit"
      default:
        return "LinkedIn Founders: Claim Your Free Professional Signal DNA Audit"
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.firstName || !formData.lastName || !formData.email) return

    setIsSubmitting(true)
    
    // Track the submission with source
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'audit_form_submitted', {
        event_category: 'conversion',
        event_label: 'funnel_audit_linkedin',
        utm_source: source || 'linkedin',
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email
      })
    }

    // Store form data in session storage for Calendly
    sessionStorage.setItem('auditFormData', JSON.stringify({
      ...formData,
      utm_source: source || 'linkedin'
    }))

    // Scroll to Calendly widget
    const calendlyWidget = document.getElementById('calendly-widget')
    if (calendlyWidget) {
      calendlyWidget.scrollIntoView({ behavior: 'smooth' })
    }

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <FunnelHeader />
      
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              {getDynamicHeadline()}
            </h1>
            
            <div className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto space-y-4">
              <p>Get professional narrative feedback and a 90-day action plan to transform your founder story for maximum LinkedIn impact.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Professional analysis of your current story strengths and gaps</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>How you compare to competitors and where to stand out</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Step-by-step roadmap to amplify your professional signal</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>LinkedIn-optimized messaging templates and frameworks</span>
                </div>
              </div>
              
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mt-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">Professional Investment</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Normally €500 — free for qualified LinkedIn founders
                </p>
                <p className="text-sm text-muted-foreground">
                  60-minute professional video call with screen sharing
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-card border border-primary/20 rounded-2xl p-8 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 text-lg rounded-xl border-primary/20 focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 text-lg rounded-xl border-primary/20 focus:border-primary"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Professional email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 text-lg rounded-xl border-primary/20 focus:border-primary"
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={!formData.firstName || !formData.lastName || !formData.email || isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-4 text-lg rounded-xl"
              >
                {isSubmitting ? "Processing..." : "Book My Professional Audit"}
              </Button>
            </form>
          </div>

          {/* LinkedIn-Specific Social Proof Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="bg-green-500/20 border border-green-500/30 rounded-xl px-6 py-3">
              <div className="text-lg font-bold text-green-600">€6M Revenue Gain</div>
              <div className="text-sm text-green-600">— J-Griff (LinkedIn Thought Leader)</div>
            </div>
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl px-6 py-3">
              <div className="text-lg font-bold text-blue-600">Series A Secured</div>
              <div className="text-sm text-blue-600">— Multiple LinkedIn Founders</div>
            </div>
            <div className="bg-purple-500/20 border border-purple-500/30 rounded-xl px-6 py-3">
              <div className="text-lg font-bold text-purple-600">Top Talent Attracted</div>
              <div className="text-sm text-purple-600">— 50+ LinkedIn Professionals</div>
            </div>
          </div>

          {/* Professional Benefits Section */}
          <div className="bg-card border border-primary/20 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Perfect for LinkedIn Professionals</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Investor Readiness</h4>
                <p className="text-sm text-muted-foreground">Craft stories that resonate with VCs and angel investors</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Talent Attraction</h4>
                <p className="text-sm text-muted-foreground">Attract top-tier professionals to your team</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Leadership Positioning</h4>
                <p className="text-sm text-muted-foreground">Establish yourself as a thought leader in your space</p>
              </div>
            </div>
          </div>

          {/* Calendly Widget */}
          <div id="calendly-widget" className="bg-card border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Schedule Your Professional Audit Call
            </h3>
            <div className="calendly-inline-widget" 
                 data-url="https://calendly.com/ermo/authentik-studio-audit-review" 
                 style={{ minWidth: '320px', height: '700px' }}>
            </div>
          </div>
        </div>
      </main>
      
      <FunnelFooter />
    </div>
  )
}
