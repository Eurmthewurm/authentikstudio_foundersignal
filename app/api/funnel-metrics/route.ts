import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return NextResponse.json({
        quizStarts: 0,
        quizCompletions: 0,
        completionRate: 0,
        auditSubmissions: 0,
        conversionRate: 0,
        topSources: [],
        alerts: [{
          type: 'info',
          message: 'Supabase not configured - using mock data',
          timestamp: new Date().toLocaleString()
        }]
      })
    }

    const client = supabase()
    
    // Get quiz starts (last 24 hours)
    const { data: quizStarts } = await client
      .from('quiz_submissions')
      .select('*')
      .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())

    // Get quiz completions
    const { data: quizCompletions } = await client
      .from('quiz_submissions')
      .select('*')
      .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())
      .not('archetype', 'is', null)

    // Get audit submissions
    const { data: auditSubmissions } = await client
      .from('audit_submissions')
      .select('*')
      .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())

    // Calculate metrics
    const totalQuizStarts = quizStarts?.length || 0
    const totalCompletions = quizCompletions?.length || 0
    const totalAuditSubmissions = auditSubmissions?.length || 0
    
    const completionRate = totalQuizStarts > 0 ? Math.round((totalCompletions / totalQuizStarts) * 100) : 0
    const conversionRate = totalCompletions > 0 ? Math.round((totalAuditSubmissions / totalCompletions) * 100) : 0

    // Get source breakdown
    const sourceBreakdown = quizStarts?.reduce((acc: any, submission: any) => {
      const source = submission.utm_source || 'direct'
      if (!acc[source]) {
        acc[source] = { count: 0, completions: 0 }
      }
      acc[source].count++
      if (submission.archetype) {
        acc[source].completions++
      }
      return acc
    }, {}) || {}

    const topSources = Object.entries(sourceBreakdown).map(([source, data]: [string, any]) => ({
      source,
      count: data.count,
      rate: data.count > 0 ? Math.round((data.completions / data.count) * 100) : 0
    })).sort((a, b) => b.count - a.count)

    // Generate alerts
    const alerts = []
    
    if (completionRate < 50) {
      alerts.push({
        type: 'error',
        message: `Quiz completion rate is ${completionRate}% - below 50% threshold`,
        timestamp: new Date().toLocaleString()
      })
    } else if (completionRate < 65) {
      alerts.push({
        type: 'warning',
        message: `Quiz completion rate is ${completionRate}% - below 65% target`,
        timestamp: new Date().toLocaleString()
      })
    }

    if (conversionRate < 25) {
      alerts.push({
        type: 'warning',
        message: `Quiz to audit conversion rate is ${conversionRate}% - below 25% target`,
        timestamp: new Date().toLocaleString()
      })
    }

    // Check for form errors (simplified - in real implementation, track actual errors)
    const recentErrors = 0 // This would come from error tracking
    if (recentErrors > 5) {
      alerts.push({
        type: 'error',
        message: `${recentErrors} form errors detected in the last hour`,
        timestamp: new Date().toLocaleString()
      })
    }

    if (alerts.length === 0) {
      alerts.push({
        type: 'success',
        message: 'All funnel metrics are performing within target ranges',
        timestamp: new Date().toLocaleString()
      })
    }

    return NextResponse.json({
      quizStarts: totalQuizStarts,
      quizCompletions: totalCompletions,
      completionRate,
      auditSubmissions: totalAuditSubmissions,
      conversionRate,
      topSources,
      alerts
    })

  } catch (error) {
    console.error('Error fetching funnel metrics:', error)
    return NextResponse.json(
      { error: 'Failed to fetch metrics' },
      { status: 500 }
    )
  }
}
