import React from "react"
import { Shield, Database, Mail, Users, Lock } from "lucide-react"

export function PrivacyPolicySection() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-lg text-muted-foreground">Last updated: December 2024</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="bg-card border border-primary/20 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Shield className="w-6 h-6 text-primary" />
            Data Collection & Usage
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              When you take our Signal DNA quiz, we collect your responses to provide personalized insights about your founder archetype. 
              This includes your quiz answers, email address, and any additional information you voluntarily provide.
            </p>
            <p>
              We use this data to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Generate your personalized Signal DNA report</li>
              <li>Send you relevant content and updates about founder storytelling</li>
              <li>Improve our quiz and services</li>
              <li>Provide customer support</li>
            </ul>
          </div>
        </div>

        <div className="bg-card border border-primary/20 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Database className="w-6 h-6 text-primary" />
            Data Storage & Security
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Your data is securely stored using Supabase, a GDPR-compliant database service. 
              We implement industry-standard security measures to protect your information.
            </p>
            <p>
              We retain your quiz data for as long as necessary to provide our services and comply with legal obligations.
            </p>
          </div>
        </div>

        <div className="bg-card border border-primary/20 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Mail className="w-6 h-6 text-primary" />
            Email Communications
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              By providing your email address, you consent to receive communications from us about:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your Signal DNA report and insights</li>
              <li>Founder storytelling tips and resources</li>
              <li>Updates about our services</li>
              <li>Invitations to relevant events or programs</li>
            </ul>
            <p>
              You can unsubscribe from these communications at any time using the link in our emails.
            </p>
          </div>
        </div>

        <div className="bg-card border border-primary/20 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Users className="w-6 h-6 text-primary" />
            Third-Party Services
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              We may use third-party services for analytics, email delivery, and customer support. 
              These services are carefully selected for their privacy compliance and security standards.
            </p>
            <p>
              We do not sell, trade, or rent your personal information to third parties.
            </p>
          </div>
        </div>

        <div className="bg-card border border-primary/20 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Lock className="w-6 h-6 text-primary" />
            Your Rights
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>Under GDPR, you have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your data</li>
              <li>Restrict processing</li>
              <li>Data portability</li>
              <li>Object to processing</li>
            </ul>
            <p>
              To exercise these rights, please contact us at privacy@authentikstudio.com
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground">
            Questions about this privacy policy? Contact us at{" "}
            <a href="mailto:privacy@authentikstudio.com" className="text-primary hover:underline">
              privacy@authentikstudio.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
