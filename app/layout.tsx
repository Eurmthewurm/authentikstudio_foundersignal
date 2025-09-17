import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AuthentikStudio - Signal DNA Discovery™ Method',
  description: 'Transform your founder story into an unstoppable competitive advantage with AuthentikStudio\'s AI-powered Signal DNA Discovery™ method.',
  generator: 'AuthentikStudio',
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
      </body>
    </html>
  )
}
