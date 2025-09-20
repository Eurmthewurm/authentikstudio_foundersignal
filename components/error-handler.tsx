'use client'

import React, { Component, ReactNode } from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
}

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo
    })

    // Log error to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          stack_trace: error.stack,
          component_stack: errorInfo.componentStack
        }
      })
    }

    console.error('Error caught by boundary:', error, errorInfo)
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="max-w-md mx-auto px-4">
            <Alert className="border-destructive">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <AlertDescription className="mt-2">
                <h2 className="font-semibold text-lg mb-2">Something went wrong</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
                </p>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={this.handleRetry}
                    className="flex items-center gap-2"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Try Again
                  </Button>
                  <Link href="/">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Home className="w-4 h-4" />
                      Go Home
                    </Button>
                  </Link>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Form Validation Utilities
export interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: string) => string | null
}

export interface FormErrors {
  [key: string]: string
}

export function validateField(value: string, rules: ValidationRule): string | null {
  if (rules.required && (!value || value.trim() === '')) {
    return 'This field is required'
  }

  if (value && rules.minLength && value.length < rules.minLength) {
    return `Must be at least ${rules.minLength} characters`
  }

  if (value && rules.maxLength && value.length > rules.maxLength) {
    return `Must be no more than ${rules.maxLength} characters`
  }

  if (value && rules.pattern && !rules.pattern.test(value)) {
    return 'Invalid format'
  }

  if (value && rules.custom) {
    return rules.custom(value)
  }

  return null
}

export function validateForm(data: Record<string, string>, rules: Record<string, ValidationRule>): FormErrors {
  const errors: FormErrors = {}

  for (const [field, value] of Object.entries(data)) {
    if (rules[field]) {
      const error = validateField(value, rules[field])
      if (error) {
        errors[field] = error
      }
    }
  }

  return errors
}

// Email validation
export const EMAIL_RULES: ValidationRule = {
  required: true,
  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  custom: (value: string) => {
    if (!value.includes('@')) {
      return 'Please enter a valid email address'
    }
    return null
  }
}

// Phone validation
export const PHONE_RULES: ValidationRule = {
  pattern: /^[\+]?[1-9][\d]{0,15}$/,
  custom: (value: string) => {
    if (value && value.replace(/\D/g, '').length < 10) {
      return 'Please enter a valid phone number'
    }
    return null
  }
}

// Name validation
export const NAME_RULES: ValidationRule = {
  required: true,
  minLength: 2,
  maxLength: 50,
  pattern: /^[a-zA-Z\s\-']+$/
}

// Error Display Component
interface ErrorDisplayProps {
  error: string | null
  className?: string
}

export function ErrorDisplay({ error, className = '' }: ErrorDisplayProps) {
  if (!error) return null

  return (
    <div className={`text-sm text-destructive mt-1 ${className}`}>
      {error}
    </div>
  )
}

// Form Field Component with Validation
interface ValidatedFieldProps {
  name: string
  value: string
  onChange: (value: string) => void
  rules: ValidationRule
  label: string
  type?: string
  placeholder?: string
  className?: string
}

export function ValidatedField({
  name,
  value,
  onChange,
  rules,
  label,
  type = 'text',
  placeholder,
  className = ''
}: ValidatedFieldProps) {
  const [touched, setTouched] = useState(false)
  const error = touched ? validateField(value, rules) : null

  return (
    <div className={`space-y-1 ${className}`}>
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
        {rules.required && <span className="text-destructive ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => setTouched(true)}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-md transition-colors ${
          error ? 'border-destructive focus:border-destructive' : 'border-input focus:border-primary'
        } ${className}`}
      />
      <ErrorDisplay error={error} />
    </div>
  )
}

// Network Error Handler
export function handleNetworkError(error: any): string {
  if (!navigator.onLine) {
    return 'No internet connection. Please check your network and try again.'
  }

  if (error?.response?.status === 429) {
    return 'Too many requests. Please wait a moment and try again.'
  }

  if (error?.response?.status >= 500) {
    return 'Server error. Please try again later or contact support.'
  }

  if (error?.response?.status === 404) {
    return 'Resource not found. Please check your request and try again.'
  }

  return 'An unexpected error occurred. Please try again.'
}

// Retry Utility
export function withRetry<T extends any[], R>(
  fn: (...args: T) => Promise<R>,
  maxRetries: number = 3,
  delay: number = 1000
) {
  return async (...args: T): Promise<R> => {
    let lastError: any

    for (let i = 0; i <= maxRetries; i++) {
      try {
        return await fn(...args)
      } catch (error) {
        lastError = error
        
        if (i === maxRetries) {
          throw error
        }

        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)))
      }
    }

    throw lastError
  }
}
