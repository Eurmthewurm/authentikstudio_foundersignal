"use client"

import { Suspense } from "react"
import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

function QuizRedirect() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Redirect to optimized quiz page with all parameters
    const params = new URLSearchParams(searchParams.toString())
    const newUrl = `/quiz-optimized${params.toString() ? `?${params.toString()}` : ''}`
    router.replace(newUrl)
  }, [router, searchParams])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Redirecting to quiz...</p>
      </div>
    </div>
  )
}

export default function QuizPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <QuizRedirect />
    </Suspense>
  )
}
