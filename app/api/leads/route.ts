import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return NextResponse.json([])
    }

    const client = supabase()
    
    // Get all leads with scoring
    const { data: quizSubmissions } = await client
      .from('quiz_submissions')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100)

    const { data: auditSubmissions } = await client
      .from('audit_submissions')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100)

    // Combine and score leads
    const leads = []
    
    // Process quiz submissions
    quizSubmissions?.forEach(submission => {
      const score = calculateLeadScore(submission)
      leads.push({
        id: submission.id,
        name: submission.first_name ? `${submission.first_name} ${submission.last_name}` : 'Unknown',
        email: submission.email,
        archetype: submission.archetype || 'unknown',
        score,
        source: submission.utm_source || 'direct',
        submittedAt: submission.created_at,
        status: submission.status || 'new',
        priority: getPriority(score),
        type: 'quiz'
      })
    })

    // Process audit submissions
    auditSubmissions?.forEach(submission => {
      const score = calculateAuditScore(submission)
      leads.push({
        id: submission.id,
        name: `${submission.first_name} ${submission.last_name}`,
        email: submission.email,
        archetype: submission.archetype || 'unknown',
        score,
        source: submission.utm_source || 'direct',
        submittedAt: submission.created_at,
        status: submission.status || 'new',
        priority: getPriority(score),
        type: 'audit'
      })
    })

    // Sort by score and priority
    leads.sort((a, b) => {
      if (a.priority === 'high' && b.priority !== 'high') return -1
      if (b.priority === 'high' && a.priority !== 'high') return 1
      return b.score - a.score
    })

    return NextResponse.json(leads)

  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    )
  }
}

function calculateLeadScore(submission: any): number {
  const archetypeScores = {
    'visionary': 90,
    'builder': 85,
    'scholar': 80,
    'connector': 75
  }
  
  const sourceScores = {
    'email': 100,
    'youtube': 90,
    'reddit': 70,
    'direct': 60
  }

  const archetypeScore = archetypeScores[submission.archetype] || 50
  const sourceScore = sourceScores[submission.utm_source] || 50
  
  // Time bonus for recent submissions (within 1 hour)
  const submissionTime = new Date(submission.created_at)
  const now = new Date()
  const hoursDiff = (now.getTime() - submissionTime.getTime()) / (1000 * 60 * 60)
  const timeBonus = hoursDiff <= 1 ? 10 : 0
  
  return Math.min(100, archetypeScore + sourceScore + timeBonus)
}

function calculateAuditScore(submission: any): number {
  // Audit submissions get higher base scores
  const baseScore = 85
  
  const sourceScores = {
    'email': 15,
    'youtube': 10,
    'reddit': 5,
    'direct': 0
  }

  const sourceBonus = sourceScores[submission.utm_source] || 0
  
  // Time bonus for recent submissions
  const submissionTime = new Date(submission.created_at)
  const now = new Date()
  const hoursDiff = (now.getTime() - submissionTime.getTime()) / (1000 * 60 * 60)
  const timeBonus = hoursDiff <= 1 ? 10 : 0
  
  return Math.min(100, baseScore + sourceBonus + timeBonus)
}

function getPriority(score: number): 'high' | 'medium' | 'low' {
  if (score >= 80) return 'high'
  if (score >= 60) return 'medium'
  return 'low'
}