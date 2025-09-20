'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Star, ThumbsUp, ThumbsDown, MessageSquare, Send, X } from 'lucide-react'
import { trackCTAClick } from './analytics'

interface FeedbackData {
  type: 'rating' | 'thumbs' | 'detailed'
  rating?: number
  thumbs?: 'up' | 'down'
  comment?: string
  email?: string
  page?: string
  timestamp: string
}

interface FeedbackWidgetProps {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  trigger?: 'scroll' | 'time' | 'manual'
  triggerDelay?: number
  showOnPages?: string[]
}

export function FeedbackWidget({
  position = 'bottom-right',
  trigger = 'scroll',
  triggerDelay = 30000, // 30 seconds
  showOnPages = ['/', '/quiz-optimized']
}: FeedbackWidgetProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [feedbackType, setFeedbackType] = useState<'rating' | 'thumbs' | 'detailed'>('rating')
  const [rating, setRating] = useState(0)
  const [thumbs, setThumbs] = useState<'up' | 'down' | null>(null)
  const [comment, setComment] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const currentPage = window.location.pathname
    if (!showOnPages.includes(currentPage)) return

    // Check if user has already given feedback
    const hasGivenFeedback = localStorage.getItem('feedback_given')
    if (hasGivenFeedback) return

    const showWidget = () => {
      if (trigger === 'time') {
        setTimeout(() => setIsVisible(true), triggerDelay)
      } else if (trigger === 'scroll') {
        const handleScroll = () => {
          const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
          if (scrollPercent > 50) {
            setIsVisible(true)
            window.removeEventListener('scroll', handleScroll)
          }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
      }
    }

    const cleanup = showWidget()
    return cleanup
  }, [trigger, triggerDelay, showOnPages])

  const handleSubmit = async () => {
    setIsSubmitting(true)

    const feedbackData: FeedbackData = {
      type: feedbackType,
      rating,
      thumbs,
      comment,
      email,
      page: window.location.pathname,
      timestamp: new Date().toISOString()
    }

    try {
      // Send to your feedback endpoint
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      })

      if (response.ok) {
        // Track feedback submission
        trackCTAClick('Feedback Submitted', 'feedback_widget')
        
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'feedback_submitted', {
            event_category: 'engagement',
            event_label: feedbackType,
            value: rating || (thumbs === 'up' ? 1 : 0)
          })
        }

        // Mark as given and hide
        localStorage.setItem('feedback_given', 'true')
        setIsVisible(false)
        
        // Show thank you message
        alert('Thank you for your feedback!')
      }
    } catch (error) {
      console.error('Failed to submit feedback:', error)
      alert('Failed to submit feedback. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsVisible(false)
    // Don't show again for this session
    sessionStorage.setItem('feedback_dismissed', 'true')
  }

  if (!isVisible) return null

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4'
  }

  return (
    <div className={`fixed ${positionClasses[position]} z-50 max-w-sm`}>
      <Card className="shadow-lg border-primary/20">
        <CardContent className="p-4">
          {!isExpanded ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm">How was your experience?</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClose}
                  className="h-6 w-6 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setFeedbackType('thumbs')
                    setIsExpanded(true)
                  }}
                  className="flex items-center gap-1"
                >
                  <ThumbsUp className="w-4 h-4" />
                  Quick
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setFeedbackType('rating')
                    setIsExpanded(true)
                  }}
                  className="flex items-center gap-1"
                >
                  <Star className="w-4 h-4" />
                  Rate
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setFeedbackType('detailed')
                    setIsExpanded(true)
                  }}
                  className="flex items-center gap-1"
                >
                  <MessageSquare className="w-4 h-4" />
                  Comment
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm">
                  {feedbackType === 'rating' && 'Rate your experience'}
                  {feedbackType === 'thumbs' && 'Quick feedback'}
                  {feedbackType === 'detailed' && 'Share your thoughts'}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(false)}
                  className="h-6 w-6 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {feedbackType === 'rating' && (
                <div className="flex gap-1 justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className={`p-1 ${
                        star <= rating ? 'text-yellow-400' : 'text-gray-300'
                      } hover:text-yellow-400 transition-colors`}
                    >
                      <Star className="w-6 h-6 fill-current" />
                    </button>
                  ))}
                </div>
              )}

              {feedbackType === 'thumbs' && (
                <div className="flex gap-2 justify-center">
                  <Button
                    variant={thumbs === 'up' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setThumbs(thumbs === 'up' ? null : 'up')}
                    className="flex items-center gap-1"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    Good
                  </Button>
                  <Button
                    variant={thumbs === 'down' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setThumbs(thumbs === 'down' ? null : 'down')}
                    className="flex items-center gap-1"
                  >
                    <ThumbsDown className="w-4 h-4" />
                    Needs work
                  </Button>
                </div>
              )}

              {feedbackType === 'detailed' && (
                <div className="space-y-2">
                  <Textarea
                    placeholder="Tell us what you think..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="min-h-[80px] resize-none"
                  />
                </div>
              )}

              <Input
                placeholder="Email (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsExpanded(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  onClick={handleSubmit}
                  disabled={isSubmitting || (feedbackType === 'rating' && rating === 0) || (feedbackType === 'thumbs' && !thumbs)}
                  className="flex-1"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-1" />
                      Send
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

// Post-Quiz Feedback Component
interface PostQuizFeedbackProps {
  onComplete: (feedback: any) => void
}

export function PostQuizFeedback({ onComplete }: PostQuizFeedbackProps) {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    const feedback = {
      rating,
      comment,
      page: 'quiz_completion',
      timestamp: new Date().toISOString()
    }

    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedback)
      })

      trackCTAClick('Quiz Feedback Submitted', 'post_quiz')
      onComplete(feedback)
    } catch (error) {
      console.error('Failed to submit feedback:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">How was your quiz experience?</h3>
        
        <div className="flex gap-1 justify-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`p-1 ${
                star <= rating ? 'text-yellow-400' : 'text-gray-300'
              } hover:text-yellow-400 transition-colors`}
            >
              <Star className="w-8 h-8 fill-current" />
            </button>
          ))}
        </div>

        <Textarea
          placeholder="Any additional feedback? (optional)"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mb-4 min-h-[80px] resize-none"
        />

        <Button
          onClick={handleSubmit}
          disabled={isSubmitting || rating === 0}
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
        </Button>
      </CardContent>
    </Card>
  )
}
