"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Shield, Cookie } from "lucide-react"

export function GDPRConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consentGiven = localStorage.getItem('gdpr-consent')
    if (!consentGiven) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('gdpr-consent', 'accepted')
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem('gdpr-consent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 dark:bg-gray-900 border-t border-primary/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">We respect your privacy</h3>
              <p className="text-sm text-muted-foreground">
                We use cookies and similar technologies to provide, protect, and improve our services. 
                By clicking "Accept All", you consent to our use of cookies for analytics, personalization, and marketing.
                <a href="/privacy" className="text-primary hover:underline ml-1">Learn more</a>
              </p>
            </div>
          </div>
          
          <div className="flex gap-2 flex-shrink-0">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleDecline}
              className="text-muted-foreground hover:text-foreground"
            >
              Decline
            </Button>
            <Button 
              size="sm" 
              onClick={handleAccept}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
