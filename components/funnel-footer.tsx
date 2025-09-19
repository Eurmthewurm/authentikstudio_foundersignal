"use client"

import React from "react"
import Link from "next/link"

export function FunnelFooter() {
  return (
    <footer className="w-full bg-background border-t border-border/20 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <Link 
            href="https://www.authentikstudio.com" 
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Back to AuthentikStudio.com
          </Link>
        </div>
      </div>
    </footer>
  )
}
