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
            enhanced_ecommerce: true,
            custom_map: {
              'dimension1': 'quiz_progress',
              'dimension2': 'archetype_type',
              'dimension3': 'traffic_source'
            }
          });
          
          // Enhanced funnel tracking
          gtag('event', 'page_view', {
            event_category: 'funnel',
            event_label: 'landing_page_view',
            value: 1
          });
        `}
      </Script>
    </>
  )
}

// Comprehensive funnel tracking functions
export function trackQuizStart() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'quiz_started', {
      event_category: 'funnel',
      event_label: 'quiz_initiation',
      value: 1
    })
  }
}

export function trackQuizProgress(questionNumber: number, totalQuestions: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'quiz_progress', {
      event_category: 'engagement',
      event_label: `question_${questionNumber}_of_${totalQuestions}`,
      value: Math.round((questionNumber / totalQuestions) * 100),
      custom_map: {
        question_number: questionNumber,
        total_questions: totalQuestions
      }
    })
  }
}

export function trackQuizCompletion(archetype: string, answers: any) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'quiz_completed', {
      event_category: 'conversion',
      event_label: 'quiz_finished',
      value: 1,
      custom_map: {
        archetype_type: archetype,
        total_questions_answered: Object.keys(answers).length
      }
    })
  }
}

// Track lead capture
export function trackLeadCapture(email: string, source: string = 'quiz') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'lead_captured', {
      event_category: 'conversion',
      event_label: 'email_signup',
      value: 1,
      custom_map: {
        lead_source: source,
        email_domain: email.split('@')[1]
      }
    })
  }
}

// Track CTA clicks
export function trackCTAClick(ctaText: string, location: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: ctaText,
      value: 1,
      custom_map: {
        cta_location: location,
        cta_text: ctaText
      }
    })
  }
}

// Track strategy call booking
export function trackStrategyCallBooking() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'strategy_call_booked', {
      event_category: 'conversion',
      event_label: 'call_scheduling',
      value: 1
    })
  }
}

// Track video engagement
export function trackVideoPlay(videoTitle: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'video_play', {
      event_category: 'engagement',
      event_label: videoTitle,
      value: 1
    })
  }
}

// Track scroll depth
export function trackScrollDepth(depth: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll', {
      event_category: 'engagement',
      event_label: `${depth}%_scroll`,
      value: depth
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
