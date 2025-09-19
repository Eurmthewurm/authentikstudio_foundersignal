import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { Analytics as GoogleAnalytics } from '@/components/analytics'
import { PerformanceMonitor } from '@/components/performance-monitor'
import { GDPRConsentBanner } from '@/components/gdpr-consent-banner'
import './globals.css'

export const metadata: Metadata = {
  title: 'AuthentikStudio - Signal DNA Discovery™ Method',
  description: 'Transform your founder story into an unstoppable competitive advantage with AuthentikStudio\'s AI-powered Signal DNA Discovery™ method.',
  generator: 'AuthentikStudio',
  keywords: [
    'founder story',
    'startup storytelling',
    'brand psychology',
    'signal DNA',
    'founder narrative',
    'startup marketing',
    'brand positioning',
    'founder authenticity',
    'startup growth',
    'founder story development'
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
        {children}
        <Analytics />
        <GoogleAnalytics />
        <PerformanceMonitor />
        <GDPRConsentBanner />
      </body>
    </html>
  )
}
