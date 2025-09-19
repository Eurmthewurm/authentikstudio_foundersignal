"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { 
  MessageSquare, 
  TrendingUp, 
  RefreshCw,
  Star,
  ThumbsUp,
  ThumbsDown,
  AlertCircle
} from "lucide-react"

interface Feedback {
  id: string
  leadId: string
  type: 'conversion' | 'non_conversion'
  rating: number
  comments: string
  improvements: string[]
  submittedAt: string
  source: string
}

interface FeedbackSummary {
  totalResponses: number
  conversionRate: number
  avgRating: number
  topImprovements: Array<{ improvement: string; count: number }>
  sourceBreakdown: Record<string, number>
}

export function FeedbackCollectionSystem() {
  const [feedback, setFeedback] = useState<Feedback[]>([])
  const [summary, setSummary] = useState<FeedbackSummary | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchFeedback = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/feedback')
      const data = await response.json()
      setFeedback(data.feedback)
      setSummary(data.summary)
    } catch (error) {
      console.error('Failed to fetch feedback:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchFeedback()
  }, [])

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return 'text-green-600'
    if (rating >= 3) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getRatingIcon = (rating: number) => {
    if (rating >= 4) return <ThumbsUp className="w-4 h-4 text-green-600" />
    if (rating >= 3) return <ThumbsDown className="w-4 h-4 text-yellow-600" />
    return <ThumbsDown className="w-4 h-4 text-red-600" />
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Feedback Loop & Iteration</h1>
            <p className="text-muted-foreground">Monthly feedback collection and continuous improvement system</p>
          </div>
          <Button onClick={fetchFeedback} disabled={isLoading} variant="outline">
            <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>

        {/* Feedback Summary */}
        {summary && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Responses</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{summary.totalResponses}</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{summary.conversionRate}%</div>
                <p className="text-xs text-muted-foreground">From feedback</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{summary.avgRating.toFixed(1)}</div>
                <p className="text-xs text-muted-foreground">Out of 5</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Improvement Areas</CardTitle>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{summary.topImprovements.length}</div>
                <p className="text-xs text-muted-foreground">Identified</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Top Improvement Areas */}
        {summary && summary.topImprovements.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Top Improvement Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {summary.topImprovements.map((improvement, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="font-medium">{improvement.improvement}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {improvement.count} mentions
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Source Breakdown */}
        {summary && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Feedback by Traffic Source</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(summary.sourceBreakdown).map(([source, count]) => (
                  <div key={source} className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{count}</div>
                    <div className="text-sm text-muted-foreground capitalize">{source}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recent Feedback */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {feedback.map((item) => (
                <div key={item.id} className="p-4 border border-border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {getRatingIcon(item.rating)}
                      <div>
                        <div className="font-semibold">
                          {item.type === 'conversion' ? 'Converted Lead' : 'Non-Converting Lead'}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Source: {item.source} • {new Date(item.submittedAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div className={`text-2xl font-bold ${getRatingColor(item.rating)}`}>
                      {item.rating}/5
                    </div>
                  </div>
                  
                  {item.comments && (
                    <div className="mb-3">
                      <div className="text-sm font-medium mb-1">Comments:</div>
                      <p className="text-sm text-muted-foreground">{item.comments}</p>
                    </div>
                  )}
                  
                  {item.improvements.length > 0 && (
                    <div>
                      <div className="text-sm font-medium mb-2">Suggested Improvements:</div>
                      <div className="flex flex-wrap gap-2">
                        {item.improvements.map((improvement, index) => (
                          <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                            {improvement}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
