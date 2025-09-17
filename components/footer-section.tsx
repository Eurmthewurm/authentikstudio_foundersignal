"use client"

import Link from "next/link"

export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-5 flex flex-col justify-center items-center gap-8 py-10 md:py-[70px]">
      {/* Brand */}
      <div className="text-center space-y-4">
        <div className="text-center text-foreground text-xl font-semibold">AuthentikStudio</div>
        <p className="text-foreground/70 text-sm font-medium">Signal DNA Discovery™ Method</p>
      </div>
      
      {/* Working Links Only */}
      <div className="flex items-center justify-center gap-8">
        <Link href="/quiz" className="text-foreground text-sm font-normal hover:underline">
          Signal Strength Quiz
        </Link>
        <Link href="/audit" className="text-foreground text-sm font-normal hover:underline">
          Free Signal DNA Audit
        </Link>
        <a 
          href="https://calendly.com/ermo/authentik-studio-audit-review" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground text-sm font-normal hover:underline"
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