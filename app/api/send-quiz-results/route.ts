import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    // Check environment variables first
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error('Missing Supabase environment variables')
      return NextResponse.json({ 
        error: 'Server configuration error', 
        details: 'Missing Supabase credentials' 
      }, { status: 500 })
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('Missing Resend API key')
      return NextResponse.json({ 
        error: 'Server configuration error', 
        details: 'Missing email service credentials' 
      }, { status: 500 })
    }

    const { email, firstName, lastName, linkedinProfile, twitterHandle, scores, name } = await request.json()

    if (!email || !scores) {
      return NextResponse.json({ error: 'Email and scores are required' }, { status: 400 })
    }

    const { customer, talent, investor, consistency } = scores
    const totalScore = customer + talent + investor + consistency

    // Generate personalized recommendations based on scores
    const recommendations = generateRecommendations(scores)
    
    // Determine founder archetype
    const archetype = determineArchetype(scores)

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Your Signal DNA Assessment Report</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #ffb800, #e6a600); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
            .score-card { background: white; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .score-high { border-left: 4px solid #28a745; }
            .score-medium { border-left: 4px solid #ffc107; }
            .score-low { border-left: 4px solid #dc3545; }
            .recommendation { background: #e3f2fd; border-radius: 8px; padding: 20px; margin: 15px 0; }
            .cta-button { background: #ffb800; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🎯 Your Signal DNA Assessment Report</h1>
            <p>Complete Founder Story Analysis</p>
          </div>
          
          <div class="content">
            <p>Hi ${firstName ? `${firstName}${lastName ? ` ${lastName}` : ''}` : name || 'there'},</p>
            
            <p>Thank you for completing the Signal DNA Assessment! Your personalized analysis is ready. Here's your complete founder story evaluation across all three critical audiences.</p>
            
            ${linkedinProfile ? `<p><strong>LinkedIn:</strong> <a href="${linkedinProfile}" style="color: #0077b5;">${linkedinProfile}</a></p>` : ''}
            ${twitterHandle ? `<p><strong>Twitter/X:</strong> <a href="https://twitter.com/${twitterHandle.replace('@', '')}" style="color: #1da1f2;">${twitterHandle}</a></p>` : ''}
            
            <h2>📊 Your Assessment Results</h2>
            <p><strong>Overall Score: ${totalScore}/40</strong></p>
            
            <div class="score-card ${getScoreClass(customer)}">
              <h3>🎯 Customer Magnetism: ${customer}/10</h3>
              <p>${getScoreDescription(customer, 'customer')}</p>
            </div>
            
            <div class="score-card ${getScoreClass(talent)}">
              <h3>👥 Talent Appeal: ${talent}/10</h3>
              <p>${getScoreDescription(talent, 'talent')}</p>
            </div>
            
            <div class="score-card ${getScoreClass(investor)}">
              <h3>💰 Investor Readiness: ${investor}/10</h3>
              <p>${getScoreDescription(investor, 'investor')}</p>
            </div>
            
            <div class="score-card ${getScoreClass(consistency)}">
              <h3>🔄 Story Consistency: ${consistency}/10</h3>
              <p>${getScoreDescription(consistency, 'consistency')}</p>
            </div>
            
            <h2>🎯 Your Personalized Recommendations</h2>
            ${recommendations.map((rec, index) => `
              <div class="recommendation">
                <h3>${index + 1}. ${rec.title}</h3>
                <p>${rec.description}</p>
                <p><strong>Action:</strong> ${rec.action}</p>
              </div>
            `).join('')}
            
            <h2>🚀 Next Steps</h2>
            <p>Your Signal DNA Assessment reveals specific opportunities to strengthen your founder story. The recommendations above are tailored to your unique profile and can be implemented immediately.</p>
            
            <div style="text-align: center;">
              <a href="https://calendly.com/ermo/authentik-studio-audit-review" class="cta-button">
                Book Your Free Signal DNA Audit →
              </a>
            </div>
            
            <p><strong>What's included in your free audit:</strong></p>
            <ul>
              <li>Complete story assessment across all audiences</li>
              <li>Custom narrative strategy</li>
              <li>Specific recommendations for improvement</li>
              <li>Implementation roadmap</li>
            </ul>
            
            <p>This audit typically costs €500, but it's completely free for you today.</p>
            
            <div class="footer">
              <p>Best regards,<br>Erno Mégberts<br>Founder, AuthentikStudio</p>
              <p>P.S. Limited spots available this month. Book your audit now to secure your place.</p>
            </div>
          </div>
        </body>
      </html>
    `

    const emailText = `
Your Signal DNA Assessment Report

Hi ${firstName ? `${firstName}${lastName ? ` ${lastName}` : ''}` : name || 'there'},

Thank you for completing the Signal DNA Assessment! Your personalized analysis is ready.

${linkedinProfile ? `LinkedIn: ${linkedinProfile}` : ''}
${twitterHandle ? `Twitter/X: ${twitterHandle}` : ''}

YOUR RESULTS:
- Customer Magnetism: ${customer}/10
- Talent Appeal: ${talent}/10  
- Investor Readiness: ${investor}/10
- Story Consistency: ${consistency}/10
- Overall Score: ${totalScore}/40

PERSONALIZED RECOMMENDATIONS:
${recommendations.map((rec, index) => `${index + 1}. ${rec.title}\n   ${rec.description}\n   Action: ${rec.action}\n`).join('')}

NEXT STEPS:
Book your free Signal DNA Audit to get your complete story assessment and custom narrative strategy.

Book here: https://calendly.com/ermo/authentik-studio-audit-review

This audit typically costs €500, but it's completely free for you today.

Best regards,
Erno Mégberts
Founder, AuthentikStudio
    `

    const { data, error } = await resend.emails.send({
      from: 'AuthentikStudio <noreply@authentikstudio.com>',
      to: [email],
      subject: '🎯 Your Signal DNA Assessment Report - Complete Analysis Ready',
      html: emailHtml,
      text: emailText,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    // Add contact to Resend and start email sequence
    try {
      await addContactAndStartSequence({ email, firstName, lastName, linkedinProfile, twitterHandle, scores, name, archetype: archetype.name })
      console.log(`Successfully added lead and started sequence for: ${email}`)
    } catch (sequenceError) {
      console.error('Failed to add contact or start sequence:', sequenceError)
      // Don't fail the request if sequence fails, email was still sent
      // But log the error for debugging
      console.error('Sequence error details:', {
        error: sequenceError,
        email,
        hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasSupabaseKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      })
    }

    return NextResponse.json({ success: true, messageId: data?.id })
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

function getScoreClass(score: number): string {
  if (score >= 8) return 'score-high'
  if (score >= 6) return 'score-medium'
  return 'score-low'
}

function getScoreLabel(score: number, category: string): string {
  const level = score >= 8 ? 'strong' : score >= 6 ? 'clear' : score >= 4 ? 'fading' : 'weak'
  
  if (category === "customer") {
    switch (level) {
      case "weak": return "CRITICAL GAP - Missing €500K+ revenue"
      case "fading": return "CRITICAL GAP - Missing €500K+ revenue"
      case "clear": return "GOOD - But missing €200K+ opportunities"
      case "strong": return "EXCEPTIONAL - Customer magnet status"
      default: return "Unknown"
    }
  }
  
  if (category === "talent") {
    switch (level) {
      case "weak": return "TALENT CRISIS - Losing top performers"
      case "fading": return "TALENT CRISIS - Losing top performers"
      case "clear": return "GOOD - But missing A-players"
      case "strong": return "EXCEPTIONAL - Talent magnet status"
      default: return "Unknown"
    }
  }
  
  if (category === "investor") {
    switch (level) {
      case "weak": return "FUNDING RISK - Leaving €2M+ on table"
      case "fading": return "FUNDING RISK - Leaving €2M+ on table"
      case "clear": return "GOOD - But missing €1M+ opportunities"
      case "strong": return "EXCEPTIONAL - Investor magnet status"
      default: return "Unknown"
    }
  }
  
  if (category === "consistency") {
    switch (level) {
      case "weak": return "MESSAGE CHAOS - Confusing all audiences"
      case "fading": return "MESSAGE CHAOS - Confusing all audiences"
      case "clear": return "GOOD - But missing unified impact"
      case "strong": return "EXCEPTIONAL - Unified message mastery"
      default: return "Unknown"
    }
  }
  
  return "Unknown"
}

function getScoreDescription(score: number, type: string): string {
  const descriptions = {
    customer: {
      high: 'Excellent customer attraction. Your story clearly communicates value and converts prospects.',
      medium: 'Good customer appeal. Some refinement could improve conversion rates.',
      low: 'Customer messaging needs work. Focus on clearer value proposition and benefits.'
    },
    talent: {
      high: 'Strong talent magnetism. Top performers are drawn to your vision and mission.',
      medium: 'Decent talent appeal. Enhancing your employer brand could attract better candidates.',
      low: 'Talent attraction needs improvement. Work on communicating your company culture and vision.'
    },
    investor: {
      high: 'Investor-ready storytelling. Your pitch is memorable and compelling.',
      medium: 'Solid investor appeal. Some tweaks could make your story more impactful.',
      low: 'Investor messaging needs strengthening. Focus on clear problem-solution narrative.'
    },
    consistency: {
      high: 'Excellent story consistency. All audiences hear the same compelling narrative.',
      medium: 'Good consistency. Minor alignment could strengthen your overall message.',
      low: 'Story consistency needs work. Ensure unified messaging across all touchpoints.'
    }
  }

  const level = score >= 8 ? 'high' : score >= 6 ? 'medium' : 'low'
  return descriptions[type as keyof typeof descriptions][level]
}

// Founder Archetype System
interface FounderArchetype {
  name: string
  description: string
  strengths: string[]
  blindSpots: string[]
  recommendations: string[]
  successStory: {
    founder: string
    result: string
    description: string
  }
}

const founderArchetypes: FounderArchetype[] = [
  {
    name: "The Visionary Founder",
    description: "You're in the rare 8% of founders who possess the most powerful investor appeal: future-focused vision. Your Superpower: Investors chase you because they sense inevitable success. Your Hidden Challenge: You have 3 specific story blind spots that repel 60% of customers (most Visionary Founders don't realize this until it's too late).",
    strengths: ["High investor appeal", "Strong vision communication", "Future-focused thinking"],
    blindSpots: ["There's a €1M+ customer story hiding in your vision that you haven't accessed", "Your archetype has a specific accessibility pattern that repels 60% of customers", "You're missing the 'practical bridge' that converts vision into customer value"],
    recommendations: ["Your personalized roadmap reveals the exact customer story framework", "The audit shows your specific accessibility blind spots", "Your transformation timeline unlocks the practical bridge method"],
    successStory: {
      founder: "Elon Musk",
      result: "Multiple billion-dollar companies",
      description: "Mastered the art of making impossible visions feel inevitable"
    }
  },
  {
    name: "The Builder Founder", 
    description: "You're in the rare 15% of founders who possess the most powerful customer appeal: technical excellence. Your Superpower: Customers choose you because they trust your solutions. Your Hidden Challenge: You have 3 specific story blind spots that repel 70% of investors (most Builder Founders don't realize this until it's too late).",
    strengths: ["High product focus", "Technical excellence", "Customer satisfaction"],
    blindSpots: ["There's a €2M+ funding story hiding in your technical journey that you haven't accessed", "Your archetype has a specific vulnerability pattern that repels 70% of investors", "You're missing the 'human bridge' that converts technical excellence into investor appeal"],
    recommendations: ["Your personalized roadmap reveals the exact funding story framework", "The audit shows your specific vulnerability blind spots", "Your transformation timeline unlocks the human bridge method"],
    successStory: {
      founder: "Steve Jobs",
      result: "Apple's transformation",
      description: "Learned to connect technical excellence with emotional storytelling"
    }
  },
  {
    name: "The Transformer Founder",
    description: "You're in the rare 12% of founders who possess the most powerful story element: authentic transformation. Your Superpower: People trust you instantly because they sense your genuine journey. Your Hidden Challenge: You have 3 specific story blind spots that are costing you opportunities (most Transformer Founders don't realize this until it's too late).",
    strengths: ["High authenticity", "Personal connection", "Emotional resonance"],
    blindSpots: ["There's a €2M+ revenue story hiding in your transformation that you haven't accessed", "Your archetype has a specific vulnerability pattern that repels 40% of investors", "You're missing the 'bridge narrative' that converts your story into strategic business advantage"],
    recommendations: ["Your personalized roadmap reveals the exact revenue story framework", "The audit shows your specific vulnerability blind spots", "Your transformation timeline unlocks the bridge narrative method"],
    successStory: {
      founder: "Oprah Winfrey",
      result: "Media empire",
      description: "Transformed personal story into systematic business success"
    }
  },
  {
    name: "The Challenger Founder",
    description: "You're in the rare 10% of founders who possess the most powerful differentiation: unique perspective. Your Superpower: You stand out because you challenge conventional thinking. Your Hidden Challenge: You have 3 specific story blind spots that repel 50% of audiences (most Challenger Founders don't realize this until it's too late).",
    strengths: ["High differentiation", "Unique positioning", "Market disruption"],
    blindSpots: ["There's a €1.5M+ relatability story hiding in your uniqueness that you haven't accessed", "Your archetype has a specific accessibility pattern that repels 50% of audiences", "You're missing the 'connection bridge' that converts differentiation into universal appeal"],
    recommendations: ["Your personalized roadmap reveals the exact relatability story framework", "The audit shows your specific accessibility blind spots", "Your transformation timeline unlocks the connection bridge method"],
    successStory: {
      founder: "Richard Branson",
      result: "Virgin Group empire",
      description: "Made rebellious spirit accessible to mainstream audiences"
    }
  },
  {
    name: "The Connector Founder",
    description: "You're in the rare 18% of founders who possess the most powerful relationship building: multi-audience understanding. Your Superpower: You excel at building networks because you understand different perspectives. Your Hidden Challenge: You have 3 specific story blind spots that hide your individual value (most Connector Founders don't realize this until it's too late).",
    strengths: ["High relationship building", "Multi-audience understanding", "Network effects"],
    blindSpots: ["There's a €1.8M+ individual story hiding in your connections that you haven't accessed", "Your archetype has a specific positioning pattern that dilutes your unique value", "You're missing the 'identity bridge' that converts relationships into personal authority"],
    recommendations: ["Your personalized roadmap reveals the exact individual story framework", "The audit shows your specific positioning blind spots", "Your transformation timeline unlocks the identity bridge method"],
    successStory: {
      founder: "Reid Hoffman",
      result: "LinkedIn success",
      description: "Connected personal mission with systematic networking"
    }
  },
  {
    name: "The Executor Founder",
    description: "You're in the rare 20% of founders who possess the most powerful execution: systematic results. Your Superpower: You deliver because you focus on systematic implementation. Your Hidden Challenge: You have 3 specific story blind spots that hide your emotional depth (most Executor Founders don't realize this until it's too late).",
    strengths: ["High execution focus", "Proven results", "Systematic approach"],
    blindSpots: ["There's a €2.2M+ emotional story hiding in your results that you haven't accessed", "Your archetype has a specific inspiration pattern that limits your appeal", "You're missing the 'passion bridge' that converts execution into emotional connection"],
    recommendations: ["Your personalized roadmap reveals the exact emotional story framework", "The audit shows your specific inspiration blind spots", "Your transformation timeline unlocks the passion bridge method"],
    successStory: {
      founder: "Jeff Bezos",
      result: "Amazon's dominance",
      description: "Learned to balance systematic execution with visionary storytelling"
    }
  },
  {
    name: "The Catalyst Founder",
    description: "You're in the rare 17% of founders who possess the most powerful inspiration: change leadership. Your Superpower: You inspire action because you catalyze transformation. Your Hidden Challenge: You have 3 specific story blind spots that limit your strategic depth (most Catalyst Founders don't realize this until it's too late).",
    strengths: ["High inspiration ability", "Change leadership", "Action orientation"],
    blindSpots: ["There's a €1.7M+ strategic story hiding in your inspiration that you haven't accessed", "Your archetype has a specific depth pattern that limits your credibility", "You're missing the 'strategy bridge' that converts inspiration into systematic authority"],
    recommendations: ["Your personalized roadmap reveals the exact strategic story framework", "The audit shows your specific depth blind spots", "Your transformation timeline unlocks the strategy bridge method"],
    successStory: {
      founder: "Tony Robbins",
      result: "Personal development empire",
      description: "Systematized inspiration into scalable transformation"
    }
  }
]

function determineArchetype(scores: { customer: number; talent: number; investor: number; consistency: number }): FounderArchetype {
  const { customer, talent, investor, consistency } = scores
  
  // Archetype determination logic based on score patterns
  if (investor > customer && investor > talent) {
    return founderArchetypes[0] // Visionary
  } else if (customer > investor && customer > talent) {
    return founderArchetypes[1] // Builder
  } else if (talent > customer && talent > investor) {
    return founderArchetypes[2] // Transformer
  } else if (consistency < 6) {
    return founderArchetypes[3] // Challenger
  } else if (customer > 7 && talent > 7) {
    return founderArchetypes[4] // Connector
  } else if (consistency > 7 && investor > 7) {
    return founderArchetypes[5] // Executor
  } else {
    return founderArchetypes[6] // Catalyst
  }
}

function generateRecommendations(scores: { customer: number; talent: number; investor: number; consistency: number }) {
  const recommendations = []

  // Customer recommendations
  if (scores.customer < 7) {
    recommendations.push({
      title: 'Strengthen Customer Value Proposition',
      description: 'Your customer messaging could be clearer. Focus on specific benefits and outcomes.',
      action: 'Create a one-sentence value proposition that any prospect can understand immediately.'
    })
  }

  // Talent recommendations  
  if (scores.talent < 7) {
    recommendations.push({
      title: 'Enhance Employer Brand Story',
      description: 'Your talent attraction could be stronger. Top performers want to join meaningful missions.',
      action: 'Develop stories about your team culture, growth opportunities, and impact.'
    })
  }

  // Investor recommendations
  if (scores.investor < 7) {
    recommendations.push({
      title: 'Sharpen Investor Narrative',
      description: 'Your investor story needs more impact. VCs remember compelling founder journeys.',
      action: 'Craft a clear problem-solution story with specific market opportunity and traction.'
    })
  }

  // Consistency recommendations
  if (scores.consistency < 7) {
    recommendations.push({
      title: 'Unify Your Message Across Audiences',
      description: 'Your story varies too much between audiences. Consistency builds trust and recognition.',
      action: 'Create core messaging pillars that work for customers, talent, and investors alike.'
    })
  }

  // Default recommendation if all scores are high
  if (recommendations.length === 0) {
    recommendations.push({
      title: 'Amplify Your Signal DNA',
      description: 'Your story is strong across all audiences. Focus on scaling and amplifying your message.',
      action: 'Develop content strategies to reach more people with your compelling narrative.'
    })
  }

  return recommendations.slice(0, 3) // Limit to 3 recommendations
}

async function addContactAndStartSequence(leadData: { email: string; firstName?: string; lastName?: string; linkedinProfile?: string; twitterHandle?: string; scores: any; name?: string; archetype?: string }) {
  try {
    console.log('Starting Supabase operations for:', leadData.email)
    
    // Insert lead into Supabase
    const { data: lead, error: leadError } = await supabase
      .from('leads')
      .insert({
        email: leadData.email,
        first_name: leadData.firstName || '',
        last_name: leadData.lastName || '',
        linkedin_profile: leadData.linkedinProfile || null,
        twitter_handle: leadData.twitterHandle || null,
        quiz_scores: leadData.scores,
        archetype: leadData.archetype || null
      })
      .select()
      .single()

    if (leadError) {
      console.error('Error inserting lead:', leadError)
      console.error('Lead error details:', {
        code: leadError.code,
        message: leadError.message,
        details: leadError.details,
        hint: leadError.hint
      })
      throw leadError
    }

    console.log('Lead inserted successfully:', lead.id)

    // Create email sequence
    const { data: sequence, error: sequenceError } = await supabase
      .from('email_sequences')
      .insert({
        lead_id: lead.id,
        status: 'active',
        current_step: 0,
        start_date: new Date().toISOString()
      })
      .select()
      .single()

    if (sequenceError) {
      console.error('Error creating sequence:', sequenceError)
      console.error('Sequence error details:', {
        code: sequenceError.code,
        message: sequenceError.message,
        details: sequenceError.details,
        hint: sequenceError.hint
      })
      throw sequenceError
    }

    console.log(`Contact added to Supabase and sequence started: ${leadData.email}`)
    
    return { lead, sequence }
    
  } catch (error) {
    console.error('Error adding contact or starting sequence:', error)
    console.error('Full error object:', error)
    throw error
  }
}

