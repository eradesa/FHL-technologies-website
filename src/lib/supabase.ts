import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://yruldksdjciohukzjwhd.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlydWxka3NkamNpb2h1a3pqd2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MzI3MTMsImV4cCI6MjA2NTE4ODcxM30.OqEpRP4c5_pAQ1B4qWkpSv2aDkEJvxJbL9RNN-BV8p8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database
export interface ChatMessage {
  id: string;
  session_id: string;
  role: 'user' | 'assistant';
  content: string;
  created_at: string;
  metadata?: Record<string, any>;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service_interest: string;
  message: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted';
  created_at: string;
}

export interface ConversationSession {
  id: string;
  visitor_id?: string;
  started_at: string;
  ended_at?: string;
  source?: string;
}
