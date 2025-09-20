import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface LeadNotificationRequest {
  email: string
  firstName: string
  archetype: string
  strength: string
  blindSpot: string
  source?: string
  quizAnswers?: any
}

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, archetype, strength, blindSpot, source, quizAnswers }: LeadNotificationRequest = await request.json()

    // Validate required fields
    if (!email || !firstName || !archetype) {
      return NextResponse.json(
        { error: 'Missing required fields: email, firstName, archetype' },
        { status: 400 }
      )
    }

    // Send notification email to you
    const { data, error } = await resend.emails.send({
      from: 'Authentik Studio <noreply@authentikstudio.com>',
      to: ['info@ermoegberts.com'], // Your email for notifications
      subject: `🎯 NEW LEAD: ${firstName} - ${archetype}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Lead Alert</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: white; padding: 30px; border: 1px solid #e1e5e9; }
            .lead-box { background: #e8f5e8; border: 2px solid #28a745; padding: 20px; margin: 20px 0; border-radius: 8px; }
            .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
            .info-item { background: #f8f9fa; padding: 15px; border-radius: 5px; }
            .cta-button { display: inline-block; background: #007bff; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
            .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 14px; color: #666; border-radius: 0 0 10px 10px; }
            .highlight { color: #28a745; font-weight: bold; }
            .timestamp { color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🎯 NEW LEAD ALERT</h1>
            <p>Someone just completed your quiz!</p>
          </div>
          
          <div class="content">
            <div class="lead-box">
              <h2>👤 Lead Details</h2>
              <p><strong>Name:</strong> ${firstName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Source:</strong> ${source || 'Direct'}</p>
              <p class="timestamp">Received: ${new Date().toLocaleString()}</p>
            </div>

            <div class="info-grid">
              <div class="info-item">
                <h3>🎭 Archetype</h3>
                <p class="highlight">${archetype}</p>
              </div>
              <div class="info-item">
                <h3>💪 Strength</h3>
                <p>${strength}</p>
              </div>
              <div class="info-item">
                <h3>⚠️ Blind Spot</h3>
                <p>${blindSpot}</p>
              </div>
              <div class="info-item">
                <h3>📊 Next Action</h3>
                <p>Email sequence triggered</p>
              </div>
            </div>

            <h3>📧 What Happened:</h3>
            <ul>
              <li>✅ Quiz completed successfully</li>
              <li>✅ Immediate results email sent</li>
              <li>✅ 5-email nurture sequence scheduled</li>
              <li>✅ Lead added to tracking system</li>
            </ul>

            <div style="text-align: center;">
              <a href="https://calendly.com/authentikstudio/strategy-session" class="cta-button">📅 View Strategy Sessions</a>
            </div>

            <p><strong>Pro tip:</strong> This lead will receive nurture emails on Day 1, 3, 5, and 7. Consider reaching out personally within 24 hours for maximum conversion!</p>
          </div>
          
          <div class="footer">
            <p>Authentik Studio | Lead Notification System</p>
            <p>Automated lead detection & nurturing</p>
          </div>
        </body>
        </html>
      `,
      text: `
NEW LEAD ALERT 🎯

Lead Details:
- Name: ${firstName}
- Email: ${email}
- Source: ${source || 'Direct'}
- Received: ${new Date().toLocaleString()}

Archetype: ${archetype}
Strength: ${strength}
Blind Spot: ${blindSpot}

What Happened:
✅ Quiz completed successfully
✅ Immediate results email sent
✅ 5-email nurture sequence scheduled
✅ Lead added to tracking system

Pro tip: This lead will receive nurture emails on Day 1, 3, 5, and 7. Consider reaching out personally within 24 hours for maximum conversion!

View Strategy Sessions: https://calendly.com/authentikstudio/strategy-session
      `,
      tags: [
        { name: 'type', value: 'lead-notification' },
        { name: 'archetype', value: archetype },
        { name: 'source', value: source || 'direct' }
      ]
    })

    if (error) {
      console.error('Lead notification error:', error)
      return NextResponse.json(
        { error: 'Failed to send lead notification', details: error },
        { status: 500 }
      )
    }

    // Log successful notification
    console.log('Lead notification sent successfully:', {
      email,
      firstName,
      archetype,
      notificationId: data?.id,
      source
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Lead notification sent successfully',
        notificationId: data?.id
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Lead notification API error:', error)
    
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
      message: 'Lead Notification API is working',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  )
}
