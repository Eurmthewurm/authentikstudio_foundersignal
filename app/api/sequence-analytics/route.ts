import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    // Simple authentication check
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.ADMIN_TOKEN || 'admin123'}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const client = supabase()

    // Get leads count
    const { count: totalLeads, error: leadsError } = await client
      .from('leads')
      .select('*', { count: 'exact', head: true })

    if (leadsError) {
      console.error('Error fetching leads count:', leadsError)
      throw leadsError
    }

    // Get sequences analytics
    const { data: sequences, error: sequencesError } = await client
      .from('email_sequences')
      .select(`
        id,
        status,
        current_step,
        start_date,
        last_sent,
        leads (
          email,
          first_name,
          last_name,
          created_at
        )
      `)
      .order('created_at', { ascending: false })

    if (sequencesError) {
      console.error('Error fetching sequences:', sequencesError)
      throw sequencesError
    }

    // Calculate analytics
    const analytics = {
      total: totalLeads || 0,
      active: sequences?.filter(s => s.status === 'active').length || 0,
      completed: sequences?.filter(s => s.status === 'completed').length || 0,
      byStep: {
        step1: sequences?.filter(s => s.current_step >= 1).length || 0,
        step2: sequences?.filter(s => s.current_step >= 2).length || 0,
        step3: sequences?.filter(s => s.current_step >= 3).length || 0,
        step4: sequences?.filter(s => s.current_step >= 4).length || 0,
        step5: sequences?.filter(s => s.current_step >= 5).length || 0,
      },
      recentSequences: sequences?.slice(0, 10) || [],
      conversionRate: sequences?.length > 0 ? 
        ((sequences?.filter(s => s.status === 'completed').length || 0) / sequences.length * 100).toFixed(2) : '0.00'
    }
    
    return NextResponse.json({ 
      sequences, 
      analytics,
      lastUpdated: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error reading sequence data:', error)
    return NextResponse.json({ error: 'Failed to retrieve sequence data' }, { status: 500 })
  }
}
