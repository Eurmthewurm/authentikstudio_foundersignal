"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Star, 
  Clock, 
  Users, 
  Target,
  AlertCircle,
  CheckCircle,
  TrendingUp,
  Mail,
  Phone
} from "lucide-react"

interface Lead {
  id: string
  name: string
  email: string
  archetype: string
  score: number
  source: string
  submittedAt: string
  status: 'new' | 'contacted' | 'qualified' | 'converted'
  priority: 'high' | 'medium' | 'low'
}

interface LeadScoringRules {
  archetypeScores: Record<string, number>
  sourceScores: Record<string, number>
  timeBonus: number
  highScoreThreshold: number
}

export function LeadQualificationDashboard() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [scoringRules, setScoringRules] = useState<LeadScoringRules>({
    archetypeScores: {
      'visionary': 90,
      'builder': 85,
      'scholar': 80,
      'connector': 75
    },
    sourceScores: {
      'email': 100,
      'youtube': 90,
      'reddit': 70,
      'direct': 60
    },
    timeBonus: 10,
    highScoreThreshold: 80
  })
  const [isLoading, setIsLoading] = useState(true)

  const fetchLeads = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/leads')
      const data = await response.json()
      setLeads(data)
    } catch (error) {
      console.error('Failed to fetch leads:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchLeads()
    // Refresh every 30 seconds for real-time updates
    const interval = setInterval(fetchLeads, 30000)
    return () => clearInterval(interval)
  }, [])

  const calculateLeadScore = (lead: any): number => {
    const archetypeScore = scoringRules.archetypeScores[lead.archetype] || 50
    const sourceScore = scoringRules.sourceScores[lead.source] || 50
    
    // Time bonus for recent submissions (within 1 hour)
    const submissionTime = new Date(lead.submittedAt)
    const now = new Date()
    const hoursDiff = (now.getTime() - submissionTime.getTime()) / (1000 * 60 * 60)
    const timeBonus = hoursDiff <= 1 ? scoringRules.timeBonus : 0
    
    return Math.min(100, archetypeScore + sourceScore + timeBonus)
  }

  const getPriority = (score: number): 'high' | 'medium' | 'low' => {
    if (score >= scoringRules.highScoreThreshold) return 'high'
    if (score >= 60) return 'medium'
    return 'low'
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'low': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getArchetypeColor = (archetype: string) => {
    switch (archetype) {
      case 'visionary': return 'text-purple-600'
      case 'builder': return 'text-blue-600'
      case 'scholar': return 'text-green-600'
      case 'connector': return 'text-orange-600'
      default: return 'text-gray-600'
    }
  }

  const handleContactLead = async (leadId: string) => {
    try {
      await fetch(`/api/leads/${leadId}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'contacted' })
      })
      
      // Send notification to team
      await fetch('/api/notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'lead_contacted',
          leadId,
          message: `Lead ${leadId} has been contacted`
        })
      })
      
      fetchLeads() // Refresh the list
    } catch (error) {
      console.error('Failed to contact lead:', error)
    }
  }

  const highPriorityLeads = leads.filter(lead => lead.priority === 'high' && lead.status === 'new')
  const newLeads = leads.filter(lead => lead.status === 'new')

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Lead Qualification & Routing</h1>
            <p className="text-muted-foreground">Automated lead scoring and priority routing system</p>
          </div>
          <Button onClick={fetchLeads} disabled={isLoading} variant="outline">
            Refresh Leads
          </Button>
        </div>

        {/* High Priority Alerts */}
        {highPriorityLeads.length > 0 && (
          <Card className="mb-8 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-800">
                <AlertCircle className="w-5 h-5" />
                High Priority Leads Requiring Immediate Attention
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {highPriorityLeads.map((lead) => (
                  <div key={lead.id} className="flex items-center justify-between p-4 bg-white rounded-lg border border-red-200">
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="font-semibold">{lead.name}</div>
                        <div className="text-sm text-muted-foreground">{lead.email}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className={getPriorityColor(lead.priority)}>
                            {lead.priority} priority
                          </Badge>
                          <Badge variant="outline" className={getArchetypeColor(lead.archetype)}>
                            {lead.archetype}
                          </Badge>
                          <Badge variant="outline">{lead.source}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-600">{lead.score}</div>
                        <div className="text-xs text-muted-foreground">score</div>
                      </div>
                      <Button 
                        onClick={() => handleContactLead(lead.id)}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Contact Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Lead Scoring Rules */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Lead Scoring Rules</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Archetype Scores</h4>
                <div className="space-y-2">
                  {Object.entries(scoringRules.archetypeScores).map(([archetype, score]) => (
                    <div key={archetype} className="flex items-center justify-between">
                      <span className="capitalize">{archetype}</span>
                      <Badge variant="outline">{score} points</Badge>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Source Scores</h4>
                <div className="space-y-2">
                  {Object.entries(scoringRules.sourceScores).map(([source, score]) => (
                    <div key={source} className="flex items-center justify-between">
                      <span className="capitalize">{source}</span>
                      <Badge variant="outline">{score} points</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-semibold">Time Bonus</span>
              </div>
              <p className="text-sm text-muted-foreground">
                +{scoringRules.timeBonus} points for submissions within 1 hour
              </p>
            </div>
          </CardContent>
        </Card>

        {/* All Leads */}
        <Card>
          <CardHeader>
            <CardTitle>All Leads ({newLeads.length} new)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leads.map((lead) => (
                <div key={lead.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="font-semibold">{lead.name}</div>
                      <div className="text-sm text-muted-foreground">{lead.email}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className={getPriorityColor(lead.priority)}>
                          {lead.priority} priority
                        </Badge>
                        <Badge variant="outline" className={getArchetypeColor(lead.archetype)}>
                          {lead.archetype}
                        </Badge>
                        <Badge variant="outline">{lead.source}</Badge>
                        <Badge variant="outline">{lead.status}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-xl font-bold">{lead.score}</div>
                      <div className="text-xs text-muted-foreground">score</div>
                    </div>
                    {lead.status === 'new' && (
                      <Button 
                        onClick={() => handleContactLead(lead.id)}
                        variant="outline"
                        size="sm"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Contact
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
