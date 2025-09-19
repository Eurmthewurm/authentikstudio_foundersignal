"use client"

import Link from "next/link"

export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-8 py-12 sm:py-16 lg:py-20">
      {/* Brand */}
      <div className="text-center space-y-4">
        <div className="text-center text-foreground text-xl font-semibold">AuthentikStudio</div>
        <p className="text-foreground/70 text-sm font-medium">Signal DNA Discovery™ Method</p>
      </div>
      
      {/* Working Links Only */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
        <Link href="/quiz" className="text-foreground text-sm font-normal hover:text-primary hover:underline transition-colors duration-200">
          Complete Founder Story Assessment
        </Link>
        <Link href="/audit" className="text-foreground text-sm font-normal hover:text-primary hover:underline transition-colors duration-200">
          Free Signal DNA Audit
        </Link>
        <a 
          href="https://calendly.com/ermo/authentik-studio-audit-review" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground text-sm font-normal hover:text-primary hover:underline transition-colors duration-200"
        >
          Book Audit Call
        </a>
      </div>
      
      {/* Copyright */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          © 2024 AuthentikStudio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}