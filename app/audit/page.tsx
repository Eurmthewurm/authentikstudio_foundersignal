"use client"

import { Suspense } from "react"
import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

function AuditRedirect() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Redirect to optimized audit page with all parameters
    const params = new URLSearchParams(searchParams.toString())
    const newUrl = `/audit-optimized${params.toString() ? `?${params.toString()}` : ''}`
    router.replace(newUrl)
  }, [router, searchParams])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Redirecting to audit...</p>
      </div>
    </div>
  )
}

export default function AuditPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <AuditRedirect />
    </Suspense>
  )
}