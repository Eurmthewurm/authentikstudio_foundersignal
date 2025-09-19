import { createClient } from '@supabase/supabase-js'

let supabaseClient: any = null

export const supabase = () => {
  if (!supabaseClient) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('Supabase environment variables are not set.')
      throw new Error('Supabase environment variables are not set.')
    }

    supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
  }
  return supabaseClient
}

// Database types
export interface Lead {
  id: string
  email: string
  first_name: string
  last_name: string
  linkedin_profile?: string
  twitter_handle?: string
  quiz_scores: any
  created_at: string
  updated_at: string
}

export interface EmailSequence {
  id: string
  lead_id: string
  status: 'active' | 'completed' | 'paused'
  current_step: number
  start_date: string
  last_sent?: string
  created_at: string
  updated_at: string
}

export interface SequenceEmail {
  id: string
  sequence_id: string
  step: number
  template: string
  subject: string
  sent_at?: string
  opened_at?: string
  clicked_at?: string
  created_at: string
}
