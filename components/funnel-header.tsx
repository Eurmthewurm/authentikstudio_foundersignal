"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"

export function FunnelHeader() {
  return (
    <header className="w-full bg-background border-b border-border/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-foreground">AuthentikStudio</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
