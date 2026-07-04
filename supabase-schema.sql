-- F H & L Technologies Website - Supabase Database Schema
-- Run this in Supabase SQL Editor to set up the database

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- TABLE: leads
-- Stores contact form submissions
-- ============================================
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  phone VARCHAR(50),
  service_interest VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS for leads table
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow public insert
CREATE POLICY "Allow public inserts" ON leads FOR INSERT TO anon WITH CHECK (true);

-- Allow authenticated read
CREATE POLICY "Allow authenticated reads" ON leads FOR SELECT TO authenticated USING (true);

-- ============================================
-- TABLE: conversation_sessions
-- Tracks chatbot conversation sessions
-- ============================================
CREATE TABLE IF NOT EXISTS conversation_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  visitor_id VARCHAR(255),
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ended_at TIMESTAMP WITH TIME ZONE,
  source VARCHAR(100),
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS for sessions
ALTER TABLE conversation_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public inserts" ON conversation_sessions FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow authenticated reads" ON conversation_sessions FOR SELECT TO authenticated USING (true);

-- ============================================
-- TABLE: chat_messages
-- Stores all chatbot messages
-- ============================================
CREATE TABLE IF NOT EXISTS chat_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id UUID REFERENCES conversation_sessions(id) ON DELETE CASCADE,
  role VARCHAR(20) NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content TEXT NOT NULL,
  intent VARCHAR(100),
  confidence DECIMAL(3, 2),
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS for messages
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public inserts" ON chat_messages FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow authenticated reads" ON chat_messages FOR SELECT TO authenticated USING (true);

-- ============================================
-- TABLE: knowledge_base
-- FAQ and knowledge articles
-- ============================================
CREATE TABLE IF NOT EXISTS knowledge_base (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category VARCHAR(100) NOT NULL,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  tags TEXT[],
  is_active BOOLEAN DEFAULT true,
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample knowledge base entries
INSERT INTO knowledge_base (category, question, answer, tags) VALUES
  ('services', 'What services does F H & L Technologies offer?', 'We offer AML/CFT/CPF Consultancy, goAML Reporting, goAML Audit & Validation, Regulatory Consultancy, System Design & Implementation, Banking & Financial Systems, Software Development with AI, and Website & Application Development.', ARRAY['services', 'overview', 'solutions']),
  ('goaml', 'What is goAML?', 'goAML is the reporting system used by the Sri Lanka Financial Intelligence Unit (FIU) for receiving Suspicious Transaction Reports (STRs) and Threshold Reports from reporting entities.', ARRAY['goaml', 'fiu', 'reporting']),
  ('aml', 'What is AML compliance?', 'Anti-Money Laundering (AML) compliance refers to the laws, regulations, and procedures that financial institutions must follow to detect, prevent, and report money laundering activities.', ARRAY['aml', 'compliance', 'regulation']),
  ('contact', 'How can I contact F H & L Technologies?', 'You can contact us via email at info@fhltech.lk, phone at +94 11 234 5678, or by filling out the contact form on our website.', ARRAY['contact', 'email', 'phone']);

-- RLS for knowledge base
ALTER TABLE knowledge_base ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public reads" ON knowledge_base FOR SELECT TO anon USING (is_active = true);
CREATE POLICY "Allow authenticated management" ON knowledge_base FOR ALL TO authenticated USING (true);

-- ============================================
-- TABLE: newsletter_subscribers
-- Email newsletter signups
-- ============================================
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  subscribed BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS for subscribers
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public inserts" ON newsletter_subscribers FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow authenticated reads" ON newsletter_subscribers FOR SELECT TO authenticated USING (true);

-- ============================================
-- INDEXES for performance
-- ============================================
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_messages_session ON chat_messages(session_id);
CREATE INDEX IF NOT EXISTS idx_messages_created ON chat_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_knowledge_category ON knowledge_base(category);
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON newsletter_subscribers(email);

-- ============================================
-- FUNCTION: Update timestamp trigger
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to tables with updated_at
CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_knowledge_updated_at BEFORE UPDATE ON knowledge_base
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();