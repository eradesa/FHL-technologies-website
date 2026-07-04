import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yruldksdjciohukzjwhd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlydWxka3NkamNpb2h1a3pqd2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxMDU1NzQsImV4cCI6MjA5ODY4MTU3NH0.qT4M8J3rFg6v5hK9xL2pW7mN8cR1sX4uO6yB3dZ0kA';

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
