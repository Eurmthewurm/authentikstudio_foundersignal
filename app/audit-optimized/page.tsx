"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FunnelHeader } from "@/components/funnel-header"
import { FunnelFooter } from "@/components/funnel-footer"
import { CheckCircle, Clock, Users, Star } from "lucide-react"

export default function AuditPage() {
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
    const src = urlParams.get('src') || ''
    setSource(src)
  }, [])

  const getDynamicHeadline = () => {
    switch (source) {
      case 'email':
        return "Exclusive Audit Offer, Just for You"
      default:
        return "Claim Your Free 1:1 Signal DNA Audit"
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
        event_label: 'funnel_audit',
        utm_source: source || 'direct',
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email
      })
    }

    // Store form data in session storage for Calendly
    sessionStorage.setItem('auditFormData', JSON.stringify({
      ...formData,
      utm_source: source || 'direct'
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
              <p>Get personalized narrative feedback and a 90-day action plan to transform your founder story.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Deep analysis of your current story strengths and gaps</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>How you compare to competitors and where to stand out</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Step-by-step roadmap to amplify your signal</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Email scripts, pitch frameworks, and messaging templates</span>
                </div>
              </div>
              
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mt-6">
                <p className="text-lg font-semibold text-primary mb-2">
                  Normally €500 — free for qualified founders
                </p>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>60-minute video call with screen sharing</span>
                </div>
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
                  placeholder="Email address"
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
                {isSubmitting ? "Processing..." : "Book My Free Audit"}
              </Button>
            </form>
          </div>

          {/* Social Proof Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="bg-green-500/20 border border-green-500/30 rounded-xl px-6 py-3">
              <div className="text-lg font-bold text-green-600">€6M revenue gain</div>
              <div className="text-sm text-green-600">— J-Griff</div>
            </div>
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl px-6 py-3">
              <div className="text-lg font-bold text-blue-600">1M+ followers</div>
              <div className="text-sm text-blue-600">— Aaron Abke</div>
            </div>
          </div>

          {/* Calendly Widget */}
          <div id="calendly-widget" className="bg-card border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Schedule Your Free Audit Call
            </h3>
            <div className="calendly-inline-widget" 
                 data-url="https://calendly.com/your-calendly-link" 
                 style={{ minWidth: '320px', height: '700px' }}>
            </div>
          </div>
        </div>
      </main>
      
      <FunnelFooter />
    </div>
  )
}
