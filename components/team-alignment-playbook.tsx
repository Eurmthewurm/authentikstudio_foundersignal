"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Target, 
  Clock, 
  TrendingUp,
  Calendar,
  FileText,
  MessageSquare,
  BarChart3,
  AlertCircle,
  CheckCircle
} from "lucide-react"

interface TeamMember {
  name: string
  role: string
  responsibilities: string[]
  contactInfo: string
}

interface FunnelMetric {
  name: string
  current: number
  target: number
  status: 'on_track' | 'at_risk' | 'behind'
}

interface MeetingAgenda {
  date: string
  topics: string[]
  attendees: string[]
  actionItems: string[]
}

export function TeamAlignmentPlaybook() {
  const [activeTab, setActiveTab] = useState<'overview' | 'metrics' | 'processes' | 'meetings'>('overview')

  const teamMembers: TeamMember[] = [
    {
      name: "Ermo Egberts",
      role: "Founder & Lead Strategist",
      responsibilities: [
        "Overall funnel strategy and optimization",
        "High-value client consultations",
        "Content strategy and thought leadership",
        "Team coordination and decision making"
      ],
      contactInfo: "ermo@authentikstudio.com"
    },
    {
      name: "Marketing Team",
      role: "Traffic & Conversion",
      responsibilities: [
        "Traffic source optimization",
        "A/B testing and experimentation",
        "Content creation and distribution",
        "Lead generation campaigns"
      ],
      contactInfo: "marketing@authentikstudio.com"
    },
    {
      name: "Sales Team",
      role: "Lead Qualification & Conversion",
      responsibilities: [
        "Lead follow-up and qualification",
        "Discovery call management",
        "Client onboarding and success",
        "Revenue optimization"
      ],
      contactInfo: "sales@authentikstudio.com"
    },
    {
      name: "Success Team",
      role: "Client Success & Retention",
      responsibilities: [
        "Client onboarding and support",
        "Success metrics tracking",
        "Feedback collection and analysis",
        "Retention and upselling"
      ],
      contactInfo: "success@authentikstudio.com"
    }
  ]

  const funnelMetrics: FunnelMetric[] = [
    { name: "Quiz Completion Rate", current: 68, target: 65, status: 'on_track' },
    { name: "Quiz to Audit Conversion", current: 42, target: 40, status: 'on_track' },
    { name: "Audit to Intensive Conversion", current: 15, target: 20, status: 'at_risk' },
    { name: "Average Lead Score", current: 78, target: 75, status: 'on_track' },
    { name: "Response Time (High Priority)", current: 45, target: 60, status: 'on_track' }
  ]

  const meetingAgenda: MeetingAgenda = {
    date: "Next Monthly Meeting: January 15, 2025",
    topics: [
      "Review December funnel performance",
      "Analyze traffic source effectiveness",
      "Discuss lead quality improvements",
      "Plan Q1 optimization initiatives",
      "Review team capacity and forecasting"
    ],
    attendees: ["Ermo Egberts", "Marketing Lead", "Sales Lead", "Success Lead"],
    actionItems: [
      "Optimize Reddit traffic conversion (currently 25%)",
      "Implement new testimonial rotation",
      "Update archetype-specific scripts",
      "Schedule Q1 capacity planning session"
    ]
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on_track': return 'bg-green-100 text-green-800 border-green-200'
      case 'at_risk': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'behind': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'on_track': return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'at_risk': return <AlertCircle className="w-4 h-4 text-yellow-600" />
      case 'behind': return <AlertCircle className="w-4 h-4 text-red-600" />
      default: return <AlertCircle className="w-4 h-4 text-gray-600" />
    }
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Team Alignment & Handoff Playbook</h1>
          <p className="text-muted-foreground">Comprehensive guide for marketing, sales, and success team coordination</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-muted p-1 rounded-lg w-fit">
          {[
            { id: 'overview', label: 'Overview', icon: Users },
            { id: 'metrics', label: 'Key Metrics', icon: BarChart3 },
            { id: 'processes', label: 'Processes', icon: FileText },
            { id: 'meetings', label: 'Meetings', icon: Calendar }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === tab.id
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Team Structure */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Team Structure & Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="font-semibold text-lg mb-2">{member.name}</div>
                      <div className="text-sm text-primary mb-3">{member.role}</div>
                      <div className="space-y-2 mb-3">
                        {member.responsibilities.map((responsibility, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{responsibility}</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Contact: {member.contactInfo}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Funnel Flow */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Funnel Flow & Handoff Points
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">1</div>
                    <div className="flex-1">
                      <div className="font-semibold">Traffic Generation</div>
                      <div className="text-sm text-muted-foreground">Marketing Team: YouTube, Reddit, Email campaigns</div>
                    </div>
                    <Badge variant="outline">Marketing</Badge>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">2</div>
                    <div className="flex-1">
                      <div className="font-semibold">Quiz Completion</div>
                      <div className="text-sm text-muted-foreground">Automated: Lead scoring and qualification</div>
                    </div>
                    <Badge variant="outline">System</Badge>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">3</div>
                    <div className="flex-1">
                      <div className="font-semibold">Audit Booking</div>
                      <div className="text-sm text-muted-foreground">Sales Team: Discovery calls and qualification</div>
                    </div>
                    <Badge variant="outline">Sales</Badge>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">4</div>
                    <div className="flex-1">
                      <div className="font-semibold">Client Success</div>
                      <div className="text-sm text-muted-foreground">Success Team: Onboarding and program delivery</div>
                    </div>
                    <Badge variant="outline">Success</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Metrics Tab */}
        {activeTab === 'metrics' && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Key Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {funnelMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-4">
                        {getStatusIcon(metric.status)}
                        <div>
                          <div className="font-semibold">{metric.name}</div>
                          <div className="text-sm text-muted-foreground">
                            Current: {metric.current}% | Target: {metric.target}%
                          </div>
                        </div>
                      </div>
                      <Badge className={getStatusColor(metric.status)}>
                        {metric.status.replace('_', ' ')}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Capacity Forecasting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">47</div>
                    <div className="text-sm text-muted-foreground">Weekly Quiz Completions</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">19</div>
                    <div className="text-sm text-muted-foreground">Weekly Audit Bookings</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">3</div>
                    <div className="text-sm text-muted-foreground">Weekly Intensive Sales</div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-4 h-4 text-yellow-600" />
                    <span className="font-semibold text-yellow-800">Capacity Alert</span>
                  </div>
                  <p className="text-sm text-yellow-700">
                    Current discovery call capacity: 25/week. Projected demand: 30/week. 
                    Consider expanding sales team or optimizing conversion rates.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Processes Tab */}
        {activeTab === 'processes' && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Standard Operating Procedures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-3">Lead Response Protocol</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>• High-priority leads (score ≥80): Contact within 1 hour</div>
                      <div>• Medium-priority leads (score 60-79): Contact within 4 hours</div>
                      <div>• Low-priority leads (score &lt;60): Contact within 24 hours</div>
                      <div>• Use archetype-specific scripts for personalized outreach</div>
                    </div>
                  </div>

                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-3">Quality Assurance Checklist</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>• Verify lead contact information accuracy</div>
                      <div>• Confirm archetype alignment with communication style</div>
                      <div>• Document all interactions in CRM system</div>
                      <div>• Follow up within 48 hours if no response</div>
                    </div>
                  </div>

                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-3">Escalation Procedures</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>• High-value prospects (&gt;€10K potential): Escalate to Ermo</div>
                      <div>• Technical issues: Contact development team</div>
                      <div>• Client complaints: Immediate escalation to success team</div>
                      <div>• System outages: Notify all teams via Slack</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Meetings Tab */}
        {activeTab === 'meetings' && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Monthly Funnel Health Meeting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <div className="font-semibold text-primary mb-2">{meetingAgenda.date}</div>
                    <div className="text-sm text-muted-foreground">
                      Duration: 60 minutes | Format: Video call
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Agenda Topics</h4>
                    <div className="space-y-2">
                      {meetingAgenda.topics.map((topic, index) => (
                        <div key={index} className="flex items-start gap-3 text-sm">
                          <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xs mt-0.5">
                            {index + 1}
                          </div>
                          <span className="text-muted-foreground">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Attendees</h4>
                    <div className="flex flex-wrap gap-2">
                      {meetingAgenda.attendees.map((attendee, index) => (
                        <Badge key={index} variant="outline">{attendee}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Action Items</h4>
                    <div className="space-y-2">
                      {meetingAgenda.actionItems.map((item, index) => (
                        <div key={index} className="flex items-start gap-3 text-sm">
                          <div className="w-4 h-4 border-2 border-primary rounded-full flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          </div>
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
