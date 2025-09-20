import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { getEmail1 } from '@/lib/email-templates'

const resend = new Resend(process.env.RESEND_API_KEY)

interface QuizEmailRequest {
  email: string
  firstName: string
  archetype: string
  strength: string
  blindSpot: string
  source?: string
}

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, archetype, strength, blindSpot, source }: QuizEmailRequest = await request.json()

    // Validate required fields
    if (!email || !firstName || !archetype || !strength || !blindSpot) {
      return NextResponse.json(
        { error: 'Missing required fields: email, firstName, archetype, strength, blindSpot' },
        { status: 400 }
      )
    }

    // Get email template
    const emailTemplate = getEmail1({
      email,
      firstName,
      archetype,
      strength,
      blindSpot
    })

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Authentik Studio <noreply@authentikstudio.com>',
      to: [email],
      subject: emailTemplate.subject,
      html: emailTemplate.html,
      text: emailTemplate.text,
      tags: [
        { name: 'type', value: 'quiz-results' },
        { name: 'archetype', value: archetype },
        { name: 'source', value: source || 'direct' }
      ]
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      )
    }

    // Log successful email send
    console.log('Quiz email sent successfully:', {
      email,
      firstName,
      archetype,
      emailId: data?.id,
      source
    })

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Quiz results email sent successfully',
        emailId: data?.id
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Quiz email API error:', error)
    
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// Handle GET requests for testing
export async function GET() {
  return NextResponse.json(
    {
      message: 'Quiz Email API is working',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  )
}
