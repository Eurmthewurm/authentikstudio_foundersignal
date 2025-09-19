-- Supabase Database Schema for AuthentikStudio Email Sequence System
-- Simplified version without superuser permissions

-- Leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  linkedin_profile TEXT,
  twitter_handle VARCHAR(100),
  quiz_scores JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Email sequences table
CREATE TABLE IF NOT EXISTS email_sequences (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'completed', 'paused')),
  current_step INTEGER DEFAULT 0,
  start_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_sent TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sequence emails table (for tracking individual emails)
CREATE TABLE IF NOT EXISTS sequence_emails (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  sequence_id UUID REFERENCES email_sequences(id) ON DELETE CASCADE,
  step INTEGER NOT NULL,
  template VARCHAR(50) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  sent_at TIMESTAMP WITH TIME ZONE,
  opened_at TIMESTAMP WITH TIME ZONE,
  clicked_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_sequences_lead_id ON email_sequences(lead_id);
CREATE INDEX IF NOT EXISTS idx_sequences_status ON email_sequences(status);
CREATE INDEX IF NOT EXISTS idx_sequences_start_date ON email_sequences(start_date);
CREATE INDEX IF NOT EXISTS idx_sequence_emails_sequence_id ON sequence_emails(sequence_id);
CREATE INDEX IF NOT EXISTS idx_sequence_emails_step ON sequence_emails(step);

-- Row Level Security (RLS) policies
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_sequences ENABLE ROW LEVEL SECURITY;
ALTER TABLE sequence_emails ENABLE ROW LEVEL SECURITY;

-- Allow service role to access all data
CREATE POLICY "Service role can access all data" ON leads FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role can access all data" ON email_sequences FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role can access all data" ON sequence_emails FOR ALL USING (auth.role() = 'service_role');

-- Allow authenticated users to read their own data (for future admin dashboard)
CREATE POLICY "Users can read their own data" ON leads FOR SELECT USING (auth.uid()::text = id::text);
CREATE POLICY "Users can read their own data" ON email_sequences FOR SELECT USING (auth.uid()::text = id::text);
CREATE POLICY "Users can read their own data" ON sequence_emails FOR SELECT USING (auth.uid()::text = id::text);

-- Functions for updating timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for automatic timestamp updates
CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_email_sequences_updated_at BEFORE UPDATE ON email_sequences FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to get sequences due for next email
CREATE OR REPLACE FUNCTION get_sequences_due_for_email()
RETURNS TABLE (
  sequence_id UUID,
  lead_id UUID,
  email VARCHAR(255),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  current_step INTEGER,
  next_template VARCHAR(50),
  next_step INTEGER
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    es.id as sequence_id,
    es.lead_id,
    l.email,
    l.first_name,
    l.last_name,
    es.current_step,
    CASE 
      WHEN es.current_step = 0 THEN 'welcome-sequence'
      WHEN es.current_step = 1 THEN 'case-study'
      WHEN es.current_step = 2 THEN 'mistakes'
      WHEN es.current_step = 3 THEN 'intensive-invite'
      WHEN es.current_step = 4 THEN 'final-followup'
      ELSE NULL
    END as next_template,
    es.current_step + 1 as next_step
  FROM email_sequences es
  JOIN leads l ON es.lead_id = l.id
  WHERE es.status = 'active'
    AND es.current_step < 5
    AND (
      (es.current_step = 0 AND es.start_date <= NOW() - INTERVAL '1 day') OR
      (es.current_step = 1 AND es.start_date <= NOW() - INTERVAL '3 days') OR
      (es.current_step = 2 AND es.start_date <= NOW() - INTERVAL '7 days') OR
      (es.current_step = 3 AND es.start_date <= NOW() - INTERVAL '14 days') OR
      (es.current_step = 4 AND es.start_date <= NOW() - INTERVAL '21 days')
    );
END;
$$ LANGUAGE plpgsql;
