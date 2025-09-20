"use client"

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { RefreshCw, Mail, Calendar, User, Target } from 'lucide-react'

interface Lead {
  id: string
  email: string
  firstName: string
  archetype: string
  strength: string
  blindSpot: string
  source?: string
  timestamp: string
  quizAnswers?: any
}

export default function LeadsDashboard() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchLeads = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/leads')
      const data = await response.json()
      
      if (data.success) {
        setLeads(data.leads)
      } else {
        setError('Failed to fetch leads')
      }
    } catch (err) {
      setError('Error fetching leads')
      console.error('Fetch leads error:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeads()
  }, [])

  const getArchetypeColor = (archetype: string) => {
    const colors: { [key: string]: string } = {
      'Visionary Navigator': 'bg-purple-100 text-purple-800',
      'Builder Founder': 'bg-blue-100 text-blue-800',
      'Executor Founder': 'bg-green-100 text-green-800',
      'Challenger Founder': 'bg-orange-100 text-orange-800',
      'Pioneer Founder': 'bg-pink-100 text-pink-800',
      'Strategist Founder': 'bg-indigo-100 text-indigo-800'
    }
    return colors[archetype] || 'bg-gray-100 text-gray-800'
  }

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleString()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <RefreshCw className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-2">Loading leads...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Lead Dashboard</h1>
            <p className="text-muted-foreground">Track and manage your quiz leads</p>
          </div>
          <Button onClick={fetchLeads} variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>

        {error && (
          <Card className="mb-6 border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <p className="text-red-800">{error}</p>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <User className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Total Leads</p>
                  <p className="text-2xl font-bold text-foreground">{leads.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <Mail className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Email Sequence</p>
                  <p className="text-2xl font-bold text-foreground">Active</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Latest Lead</p>
                  <p className="text-2xl font-bold text-foreground">
                    {leads.length > 0 ? formatTimestamp(leads[0].timestamp).split(',')[0] : 'None'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {leads.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center">
              <Target className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No leads yet</h3>
              <p className="text-muted-foreground">Leads will appear here when people complete your quiz.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {leads.map((lead) => (
              <Card key={lead.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{lead.firstName}</h3>
                        <Badge className={getArchetypeColor(lead.archetype)}>
                          {lead.archetype}
                        </Badge>
                        {lead.source && (
                          <Badge variant="outline">
                            {lead.source}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="font-medium">{lead.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Received</p>
                          <p className="font-medium">{formatTimestamp(lead.timestamp)}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Strength</p>
                          <p className="text-sm">{lead.strength}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Blind Spot</p>
                          <p className="text-sm">{lead.blindSpot}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 ml-4">
                      <Button size="sm" variant="outline">
                        <Mail className="w-4 h-4 mr-1" />
                        Email
                      </Button>
                      <Button size="sm" variant="outline">
                        <Calendar className="w-4 h-4 mr-1" />
                        Book
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}