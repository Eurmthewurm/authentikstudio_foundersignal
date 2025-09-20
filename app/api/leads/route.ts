import { NextRequest, NextResponse } from 'next/server'

// In a production environment, you'd want to store this in a database
// For now, we'll use a simple in-memory store (resets on server restart)
let leads: any[] = []

interface LeadData {
  email: string
  firstName: string
  archetype: string
  strength: string
  blindSpot: string
  source?: string
  timestamp: string
  quizAnswers?: any
}

// GET - Retrieve all leads
export async function GET() {
  try {
    // Sort leads by timestamp (newest first)
    const sortedLeads = leads.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    
    return NextResponse.json(
      {
        success: true,
        leads: sortedLeads,
        total: leads.length,
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Get leads error:', error)
    return NextResponse.json(
      { error: 'Failed to retrieve leads' },
      { status: 500 }
    )
  }
}

// POST - Add a new lead
export async function POST(request: NextRequest) {
  try {
    const leadData: LeadData = await request.json()

    // Validate required fields
    if (!leadData.email || !leadData.firstName || !leadData.archetype) {
      return NextResponse.json(
        { error: 'Missing required fields: email, firstName, archetype' },
        { status: 400 }
      )
    }

    // Add timestamp
    const newLead = {
      ...leadData,
      timestamp: new Date().toISOString(),
      id: Date.now().toString() // Simple ID generation
    }

    // Add to leads array
    leads.push(newLead)

    // Log the new lead
    console.log('New lead added:', {
      email: leadData.email,
      firstName: leadData.firstName,
      archetype: leadData.archetype,
      source: leadData.source || 'direct',
      timestamp: newLead.timestamp
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Lead added successfully',
        lead: newLead,
        totalLeads: leads.length
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Add lead error:', error)
    return NextResponse.json(
      { error: 'Failed to add lead' },
      { status: 500 }
    )
  }
}

// DELETE - Clear all leads (for testing)
export async function DELETE() {
  try {
    leads = []
    
    return NextResponse.json(
      {
        success: true,
        message: 'All leads cleared',
        totalLeads: 0
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Clear leads error:', error)
    return NextResponse.json(
      { error: 'Failed to clear leads' },
      { status: 500 }
    )
  }
}