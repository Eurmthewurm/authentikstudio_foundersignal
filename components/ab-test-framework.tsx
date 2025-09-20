'use client'

import React, { useState, useEffect } from 'react'
import { trackCTAClick } from './analytics'

interface ABTestVariant {
  id: string
  name: string
  weight: number // 0-100
}

interface ABTestConfig {
  testId: string
  variants: ABTestVariant[]
  defaultVariant: string
}

// A/B Test Framework
export class ABTestFramework {
  private static instance: ABTestFramework
  private tests: Map<string, string> = new Map()
  private initialized = false

  static getInstance(): ABTestFramework {
    if (!ABTestFramework.instance) {
      ABTestFramework.instance = new ABTestFramework()
    }
    return ABTestFramework.instance
  }

  init() {
    if (this.initialized || typeof window === 'undefined') return
    this.initialized = true
    this.loadTestsFromStorage()
  }

  private loadTestsFromStorage() {
    try {
      const stored = localStorage.getItem('ab_tests')
      if (stored) {
        this.tests = new Map(JSON.parse(stored))
      }
    } catch (error) {
      console.warn('Failed to load A/B tests from storage:', error)
    }
  }

  private saveTestsToStorage() {
    try {
      localStorage.setItem('ab_tests', JSON.stringify([...this.tests]))
    } catch (error) {
      console.warn('Failed to save A/B tests to storage:', error)
    }
  }

  getVariant(testId: string, config: ABTestConfig): string {
    // Return cached variant if exists
    if (this.tests.has(testId)) {
      return this.tests.get(testId)!
    }

    // Generate new variant
    const variant = this.selectVariant(config)
    this.tests.set(testId, variant)
    this.saveTestsToStorage()
    
    // Track variant assignment
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ab_test_assignment', {
        event_category: 'ab_test',
        event_label: `${testId}_${variant}`,
        value: 1
      })
    }

    return variant
  }

  private selectVariant(config: ABTestConfig): string {
    // Simple weighted random selection
    const random = Math.random() * 100
    let cumulative = 0

    for (const variant of config.variants) {
      cumulative += variant.weight
      if (random <= cumulative) {
        return variant.id
      }
    }

    return config.defaultVariant
  }

  trackConversion(testId: string, variant: string, conversionType: string) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ab_test_conversion', {
        event_category: 'ab_test',
        event_label: `${testId}_${variant}_${conversionType}`,
        value: 1
      })
    }
  }
}

// React Hook for A/B Testing
export function useABTest(config: ABTestConfig) {
  const [variant, setVariant] = useState<string>(config.defaultVariant)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const framework = ABTestFramework.getInstance()
    framework.init()
    
    const selectedVariant = framework.getVariant(config.testId, config)
    setVariant(selectedVariant)
    setIsLoaded(true)
  }, [config])

  const trackConversion = (conversionType: string) => {
    const framework = ABTestFramework.getInstance()
    framework.trackConversion(config.testId, variant, conversionType)
  }

  return { variant, isLoaded, trackConversion }
}

// CTA A/B Test Component
interface CTAAbTestProps {
  testConfig: ABTestConfig
  variants: {
    [key: string]: {
      text: string
      className?: string
      onClick?: () => void
    }
  }
  onClick?: (variant: string) => void
}

export function CTAAbTest({ testConfig, variants, onClick }: CTAAbTestProps) {
  const { variant, isLoaded, trackConversion } = useABTest(testConfig)
  
  if (!isLoaded) {
    return null // Prevent flash of wrong content
  }

  const variantConfig = variants[variant]
  if (!variantConfig) {
    console.warn(`Variant ${variant} not found in variants config`)
    return null
  }

  const handleClick = () => {
    trackConversion('cta_click')
    trackCTAClick(variantConfig.text, 'hero')
    
    if (variantConfig.onClick) {
      variantConfig.onClick()
    }
    
    if (onClick) {
      onClick(variant)
    }
  }

  return (
    <button
      className={variantConfig.className}
      onClick={handleClick}
    >
      {variantConfig.text}
    </button>
  )
}

// Pre-configured A/B Tests
export const AB_TESTS = {
  HERO_CTA: {
    testId: 'hero_cta_test',
    variants: [
      { id: 'control', name: 'Discover My Archetype', weight: 50 },
      { id: 'variant_a', name: 'Start Free Assessment', weight: 25 },
      { id: 'variant_b', name: 'Get My Story Blueprint', weight: 25 }
    ],
    defaultVariant: 'control'
  },
  
  QUIZ_CTA: {
    testId: 'quiz_cta_test',
    variants: [
      { id: 'control', name: 'Take Quiz', weight: 60 },
      { id: 'variant_a', name: 'Start Assessment', weight: 20 },
      { id: 'variant_b', name: 'Discover My Type', weight: 20 }
    ],
    defaultVariant: 'control'
  }
}
