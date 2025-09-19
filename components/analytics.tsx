'use client'

import Script from 'next/script'

export function Analytics() {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

  if (!GA_TRACKING_ID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  )
}

// Track quiz completion
export function trackQuizCompletion(scores: any) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'quiz_completed', {
      event_category: 'engagement',
      event_label: 'founder_story_quiz',
      value: scores.total || 0,
      custom_map: {
        customer_score: scores.customerAttraction || 0,
        talent_score: scores.talentAttraction || 0,
        investor_score: scores.investorAttraction || 0,
      }
    })
  }
}

// Track lead capture
export function trackLeadCapture(email: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'lead_captured', {
      event_category: 'conversion',
      event_label: 'email_signup',
      value: 1
    })
  }
}

// Track page views
export function trackPageView(url: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    })
  }
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
