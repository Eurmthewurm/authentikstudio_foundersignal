'use client'

import React, { useEffect } from 'react'

interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  firstInputDelay: number
  cumulativeLayoutShift: number
  timeToInteractive: number
}

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const collectPerformanceMetrics = () => {
      const metrics: Partial<PerformanceMetrics> = {}

      // Navigation timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        metrics.loadTime = navigation.loadEventEnd - navigation.fetchStart
        metrics.timeToInteractive = navigation.domContentLoadedEventEnd - navigation.fetchStart
      }

      // Paint timing
      const paintEntries = performance.getEntriesByType('paint')
      paintEntries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          metrics.firstContentfulPaint = entry.startTime
        }
      })

      // Largest Contentful Paint
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint')
      if (lcpEntries.length > 0) {
        const lcp = lcpEntries[lcpEntries.length - 1]
        metrics.largestContentfulPaint = lcp.startTime
      }

      // First Input Delay
      new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (entry.processingStart && entry.startTime) {
            metrics.firstInputDelay = entry.processingStart - entry.startTime
          }
        })
      }).observe({ entryTypes: ['first-input'] })

      // Cumulative Layout Shift
      let clsValue = 0
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
          }
        }
        metrics.cumulativeLayoutShift = clsValue
      }).observe({ entryTypes: ['layout-shift'] })

      // Send metrics to analytics
      if (typeof window !== 'undefined' && window.gtag && metrics.loadTime) {
        window.gtag('event', 'performance_metrics', {
          event_category: 'performance',
          event_label: 'page_load',
          value: Math.round(metrics.loadTime),
          custom_map: {
            fcp: Math.round(metrics.firstContentfulPaint || 0),
            lcp: Math.round(metrics.largestContentfulPaint || 0),
            fid: Math.round(metrics.firstInputDelay || 0),
            cls: Math.round((metrics.cumulativeLayoutShift || 0) * 1000) / 1000,
            tti: Math.round(metrics.timeToInteractive || 0)
          }
        })
      }

      // Log performance warnings
      if (metrics.loadTime && metrics.loadTime > 3000) {
        console.warn(`Slow page load: ${Math.round(metrics.loadTime)}ms`)
      }

      if (metrics.largestContentfulPaint && metrics.largestContentfulPaint > 2500) {
        console.warn(`Slow LCP: ${Math.round(metrics.largestContentfulPaint)}ms`)
      }

      if (metrics.cumulativeLayoutShift && metrics.cumulativeLayoutShift > 0.1) {
        console.warn(`High CLS: ${metrics.cumulativeLayoutShift}`)
      }
    }

    // Collect metrics after page load
    if (document.readyState === 'complete') {
      setTimeout(collectPerformanceMetrics, 1000)
    } else {
      window.addEventListener('load', () => {
        setTimeout(collectPerformanceMetrics, 1000)
      })
    }

    // Monitor resource loading
    const monitorResources = () => {
      const resources = performance.getEntriesByType('resource')
      const slowResources = resources.filter((resource: any) => resource.duration > 1000)
      
      if (slowResources.length > 0) {
        console.warn('Slow resources detected:', slowResources.map((r: any) => ({
          name: r.name,
          duration: Math.round(r.duration),
          size: r.transferSize
        })))
      }
    }

    // Monitor after a delay to allow resources to load
    setTimeout(monitorResources, 5000)

    // Monitor Core Web Vitals
    const monitorWebVitals = () => {
      // LCP
      new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'lcp',
            value: Math.round(lastEntry.startTime)
          })
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] })

      // FID
      new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (entry.processingStart && entry.startTime) {
            const fid = entry.processingStart - entry.startTime
            
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'performance',
                event_label: 'fid',
                value: Math.round(fid)
              })
            }
          }
        })
      }).observe({ entryTypes: ['first-input'] })

      // CLS
      let clsValue = 0
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
          }
        }
        
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'cls',
            value: Math.round(clsValue * 1000) / 1000
          })
        }
      }).observe({ entryTypes: ['layout-shift'] })
    }

    monitorWebVitals()

  }, [])

  return null // This component doesn't render anything
}

// Uptime Monitor
export function UptimeMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Simple uptime check
    const checkUptime = async () => {
      try {
        const start = performance.now()
        const response = await fetch('/api/health', {
          method: 'HEAD',
          cache: 'no-cache'
        })
        const duration = performance.now() - start

        if (response.ok) {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'uptime_check', {
              event_category: 'monitoring',
              event_label: 'success',
              value: Math.round(duration)
            })
          }
        } else {
          console.error('Uptime check failed:', response.status)
          
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'uptime_check', {
              event_category: 'monitoring',
              event_label: 'failed',
              value: response.status
            })
          }
        }
      } catch (error) {
        console.error('Uptime check error:', error)
        
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'uptime_check', {
            event_category: 'monitoring',
            event_label: 'error',
            value: 0
          })
        }
      }
    }

    // Check immediately and then every 5 minutes
    checkUptime()
    const interval = setInterval(checkUptime, 5 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  return null
}

// Error Monitoring
export function ErrorMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Global error handler
    const handleError = (event: ErrorEvent) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description: event.message,
          fatal: false,
          custom_map: {
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno
          }
        })
      }
    }

    // Unhandled promise rejection handler
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description: event.reason?.message || 'Unhandled promise rejection',
          fatal: false,
          custom_map: {
            type: 'unhandled_promise_rejection'
          }
        })
      }
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  return null
}

// Performance Budget Monitor
export function PerformanceBudgetMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const budgets = {
      loadTime: 2000, // 2 seconds
      lcp: 2500, // 2.5 seconds
      fid: 100, // 100ms
      cls: 0.1 // 0.1
    }

    const checkBudget = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const loadTime = navigation ? navigation.loadEventEnd - navigation.fetchStart : 0

      if (loadTime > budgets.loadTime) {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'performance_budget_exceeded', {
            event_category: 'performance',
            event_label: 'load_time',
            value: Math.round(loadTime)
          })
        }
      }
    }

    window.addEventListener('load', () => {
      setTimeout(checkBudget, 1000)
    })

  }, [])

  return null
}