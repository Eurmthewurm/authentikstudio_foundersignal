import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    console.log('Email sequence cron job triggered at:', new Date().toISOString())
    
    const processedEmails = []
    
    // Get sequences due for next email using Supabase function
    const { data: dueSequences, error } = await supabase
      .rpc('get_sequences_due_for_email')
    
    if (error) {
      console.error('Error fetching due sequences:', error)
      throw error
    }
    
    console.log(`Found ${dueSequences?.length || 0} sequences due for emails`)
    
    // Process each due sequence
    for (const sequence of dueSequences || []) {
      try {
        const result = await sendSequenceEmail(sequence, sequence.next_template)
        
        // Update sequence in database
        const { error: updateError } = await supabase
          .from('email_sequences')
          .update({
            current_step: sequence.next_step,
            last_sent: new Date().toISOString(),
            status: sequence.next_step >= 5 ? 'completed' : 'active'
          })
          .eq('id', sequence.sequence_id)
        
        if (updateError) {
          console.error(`Failed to update sequence ${sequence.sequence_id}:`, updateError)
        }
        
        // Record the email sent
        const { error: emailError } = await supabase
          .from('sequence_emails')
          .insert({
            sequence_id: sequence.sequence_id,
            step: sequence.next_step,
            template: sequence.next_template,
            subject: getEmailSubject(sequence.next_template),
            sent_at: new Date().toISOString()
          })
        
        if (emailError) {
          console.error(`Failed to record email for sequence ${sequence.sequence_id}:`, emailError)
        }
        
        processedEmails.push({
          email: sequence.email,
          template: sequence.next_template,
          step: sequence.next_step,
          success: true,
          messageId: result.messageId
        })
        
      } catch (error) {
        console.error(`Failed to send email to ${sequence.email}:`, error)
        processedEmails.push({
          email: sequence.email,
          template: sequence.next_template,
          step: sequence.next_step,
          success: false,
          error: error.message
        })
      }
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Email sequence cron job executed',
      timestamp: new Date().toISOString(),
      processedEmails,
      totalProcessed: processedEmails.length,
      dueSequencesFound: dueSequences?.length || 0
    })
  } catch (error) {
    console.error('Cron job error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

function getEmailSubject(template: string): string {
  const subjects = {
    'welcome-sequence': 'Your Signal DNA Journey Starts Now 🚀',
    'case-study': 'How Sarah Went From Invisible to Irresistible',
    'mistakes': 'The #1 Founder Story Mistake (And How to Fix It)',
    'intensive-invite': 'Ready to Transform Your Story? Signal DNA Intensive',
    'final-followup': 'Last Chance: 3 Spots Left This Month'
  }
  return subjects[template] || 'Signal DNA Update'
}

async function sendSequenceEmail(sequence: any, template: string) {
  const response = await fetch(`${process.env.VERCEL_URL || 'http://localhost:3000'}/api/send-sequence-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: sequence.email,
      firstName: sequence.first_name,
      lastName: sequence.last_name,
      template: template,
      archetype: sequence.archetype
    })
  })
  
  if (!response.ok) {
    throw new Error(`Failed to send email: ${response.statusText}`)
  }
  
  return await response.json()
}

// GET endpoint for testing
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')
    const template = searchParams.get('template')
    
    if (!email || !template) {
      return NextResponse.json({ 
        error: 'Email and template parameters are required' 
      }, { status: 400 })
    }
    
    const result = await sendSequenceEmail({ email, firstName: 'Test', lastName: 'User' }, template)
    
    return NextResponse.json({
      success: true,
      message: `Sequence email sent to ${email}`,
      result
    })
  } catch (error) {
    console.error('Manual sequence trigger error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}