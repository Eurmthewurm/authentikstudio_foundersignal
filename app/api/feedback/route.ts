import { NextRequest, NextResponse } from 'next/server'

interface FeedbackData {
  type: 'rating' | 'thumbs' | 'detailed'
  rating?: number
  thumbs?: 'up' | 'down'
  comment?: string
  email?: string
  page?: string
  timestamp: string
}

export async function POST(request: NextRequest) {
  try {
    const feedback: FeedbackData = await request.json()

    // Validate required fields
    if (!feedback.type || !feedback.timestamp) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Log feedback (in production, you'd save to database)
    console.log('Feedback received:', {
      type: feedback.type,
      rating: feedback.rating,
      thumbs: feedback.thumbs,
      hasComment: !!feedback.comment,
      hasEmail: !!feedback.email,
      page: feedback.page,
      timestamp: feedback.timestamp
    })

    // In production, you would:
    // 1. Save to your database
    // 2. Send notification emails
    // 3. Update analytics
    // 4. Trigger follow-up workflows

    // For now, just acknowledge receipt
    return NextResponse.json(
      { 
        success: true, 
        message: 'Feedback received successfully',
        id: `feedback_${Date.now()}`
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Feedback submission error:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to process feedback',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
