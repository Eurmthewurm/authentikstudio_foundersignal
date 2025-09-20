import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { getEmail2, getEmail3, getEmail4, getEmail5 } from '@/lib/email-templates'

const resend = new Resend(process.env.RESEND_API_KEY)

interface NurtureSequenceRequest {
  email: string
  firstName: string
  archetype: string
  strength: string
  blindSpot: string
  source?: string
}

// Schedule emails with delays (in milliseconds)
const EMAIL_SCHEDULE = {
  email2: 24 * 60 * 60 * 1000, // Day 1 (24 hours)
  email3: 3 * 24 * 60 * 60 * 1000, // Day 3 (72 hours)
  email4: 5 * 24 * 60 * 60 * 1000, // Day 5 (120 hours)
  email5: 7 * 24 * 60 * 60 * 1000, // Day 7 (168 hours)
}

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, archetype, strength, blindSpot, source }: NurtureSequenceRequest = await request.json()

    // Validate required fields
    if (!email || !firstName || !archetype || !strength || !blindSpot) {
      return NextResponse.json(
        { error: 'Missing required fields: email, firstName, archetype, strength, blindSpot' },
        { status: 400 }
      )
    }

    const userData = { email, firstName, archetype, strength, blindSpot }

    // Schedule all nurture emails
    const scheduledEmails = []

    try {
      // Email 2 (Day 1)
      const email2Template = getEmail2(userData)
      const email2Schedule = new Date(Date.now() + EMAIL_SCHEDULE.email2)
      
      const { data: email2Data, error: email2Error } = await resend.emails.send({
        from: 'Authentik Studio <noreply@authentikstudio.com>',
        to: [email],
        subject: email2Template.subject,
        html: email2Template.html,
        text: email2Template.text,
        scheduledAt: email2Schedule,
        tags: [
          { name: 'type', value: 'nurture-sequence' },
          { name: 'sequence', value: 'email-2' },
          { name: 'archetype', value: archetype },
          { name: 'source', value: source || 'direct' }
        ]
      })

      if (email2Error) {
        console.error('Email 2 scheduling error:', email2Error)
      } else {
        scheduledEmails.push({ email: 'email2', id: email2Data?.id, scheduledAt: email2Schedule })
      }

      // Email 3 (Day 3)
      const email3Template = getEmail3(userData)
      const email3Schedule = new Date(Date.now() + EMAIL_SCHEDULE.email3)
      
      const { data: email3Data, error: email3Error } = await resend.emails.send({
        from: 'Authentik Studio <noreply@authentikstudio.com>',
        to: [email],
        subject: email3Template.subject,
        html: email3Template.html,
        text: email3Template.text,
        scheduledAt: email3Schedule,
        tags: [
          { name: 'type', value: 'nurture-sequence' },
          { name: 'sequence', value: 'email-3' },
          { name: 'archetype', value: archetype },
          { name: 'source', value: source || 'direct' }
        ]
      })

      if (email3Error) {
        console.error('Email 3 scheduling error:', email3Error)
      } else {
        scheduledEmails.push({ email: 'email3', id: email3Data?.id, scheduledAt: email3Schedule })
      }

      // Email 4 (Day 5)
      const email4Template = getEmail4(userData)
      const email4Schedule = new Date(Date.now() + EMAIL_SCHEDULE.email4)
      
      const { data: email4Data, error: email4Error } = await resend.emails.send({
        from: 'Authentik Studio <noreply@authentikstudio.com>',
        to: [email],
        subject: email4Template.subject,
        html: email4Template.html,
        text: email4Template.text,
        scheduledAt: email4Schedule,
        tags: [
          { name: 'type', value: 'nurture-sequence' },
          { name: 'sequence', value: 'email-4' },
          { name: 'archetype', value: archetype },
          { name: 'source', value: source || 'direct' }
        ]
      })

      if (email4Error) {
        console.error('Email 4 scheduling error:', email4Error)
      } else {
        scheduledEmails.push({ email: 'email4', id: email4Data?.id, scheduledAt: email4Schedule })
      }

      // Email 5 (Day 7)
      const email5Template = getEmail5(userData)
      const email5Schedule = new Date(Date.now() + EMAIL_SCHEDULE.email5)
      
      const { data: email5Data, error: email5Error } = await resend.emails.send({
        from: 'Authentik Studio <noreply@authentikstudio.com>',
        to: [email],
        subject: email5Template.subject,
        html: email5Template.html,
        text: email5Template.text,
        scheduledAt: email5Schedule,
        tags: [
          { name: 'type', value: 'nurture-sequence' },
          { name: 'sequence', value: 'email-5' },
          { name: 'archetype', value: archetype },
          { name: 'source', value: source || 'direct' }
        ]
      })

      if (email5Error) {
        console.error('Email 5 scheduling error:', email5Error)
      } else {
        scheduledEmails.push({ email: 'email5', id: email5Data?.id, scheduledAt: email5Schedule })
      }

    } catch (schedulingError) {
      console.error('Email scheduling error:', schedulingError)
      return NextResponse.json(
        {
          error: 'Failed to schedule nurture sequence emails',
          details: schedulingError instanceof Error ? schedulingError.message : 'Unknown error'
        },
        { status: 500 }
      )
    }

    // Log successful scheduling
    console.log('Nurture sequence scheduled successfully:', {
      email,
      firstName,
      archetype,
      scheduledEmails: scheduledEmails.length,
      source
    })

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Nurture sequence scheduled successfully',
        scheduledEmails,
        totalEmails: scheduledEmails.length
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Nurture sequence API error:', error)
    
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
      message: 'Nurture Sequence API is working',
      emailSchedule: {
        email2: 'Day 1 (24 hours)',
        email3: 'Day 3 (72 hours)', 
        email4: 'Day 5 (120 hours)',
        email5: 'Day 7 (168 hours)'
      },
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  )
}
