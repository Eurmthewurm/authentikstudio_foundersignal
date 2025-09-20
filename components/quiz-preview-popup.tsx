"use client"

import React from "react"
import Link from "next/link"

export function QuizPreviewPopup() {
  return (
    <Link href="/quiz" className="inline-block">
      <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full hover:bg-primary/15 transition-colors duration-300 cursor-pointer group">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <span className="text-primary font-semibold text-sm sm:text-base">Join 2,847 founders who discovered their Signal DNA</span>
        <div className="text-primary text-xs opacity-70">→ Start Quiz</div>
      </div>
    </Link>
  )
}
