import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { Analytics as GoogleAnalytics } from '@/components/analytics'
import { PerformanceMonitor, UptimeMonitor, ErrorMonitor, PerformanceBudgetMonitor } from '@/components/performance-monitor'
import { GDPRConsentBanner } from '@/components/gdpr-consent-banner'
import { FeedbackWidget } from '@/components/feedback-system'
import { ErrorBoundary } from '@/components/error-handler'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Signal DNA Founder Quiz | AuthentikStudio - Free 2-Minute Assessment',
  description: 'Discover your founder archetype with the Signal DNA Method. Free 2-minute quiz reveals your storytelling strengths and blind spots. Transform from invisible founder to industry legend.',
  generator: 'AuthentikStudio',
  keywords: [
    'founder storytelling framework',
    'founder archetype quiz',
    'Signal DNA Method',
    'AI narrative analysis',
    'founder story development',
    'startup storytelling',
    'founder archetypes',
    'storytelling psychology',
    'founder communication',
    'startup narrative'
  ],
  authors: [{ name: 'Ermo Egberts' }],
  creator: 'AuthentikStudio',
  publisher: 'AuthentikStudio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.authentikstudio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AuthentikStudio - Signal DNA Discovery™ Method',
    description: 'Transform your founder story into an unstoppable competitive advantage with AuthentikStudio\'s AI-powered Signal DNA Discovery™ method.',
    url: 'https://www.authentikstudio.com',
    siteName: 'AuthentikStudio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AuthentikStudio - Signal DNA Discovery™ Method',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AuthentikStudio - Signal DNA Discovery™ Method',
    description: 'Transform your founder story into an unstoppable competitive advantage with AuthentikStudio\'s AI-powered Signal DNA Discovery™ method.',
    images: ['/images/og-image.jpg'],
    creator: '@authentikstudio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${GeistSans.className} antialiased`}>
        <ErrorBoundary>
          {children}
          <Analytics />
          <GoogleAnalytics />
          <PerformanceMonitor />
          <UptimeMonitor />
          <ErrorMonitor />
          <PerformanceBudgetMonitor />
          <GDPRConsentBanner />
          <FeedbackWidget />
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </ErrorBoundary>
      </body>
    </html>
  )
}
