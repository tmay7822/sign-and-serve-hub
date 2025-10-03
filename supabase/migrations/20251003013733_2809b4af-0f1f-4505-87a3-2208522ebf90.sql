-- Create AI chat sessions table
CREATE TABLE public.ai_chat_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  visitor_zip TEXT,
  service_interest TEXT,
  resulted_in_lead BOOLEAN DEFAULT false,
  message_count INTEGER DEFAULT 0
);

-- Create AI chat messages table
CREATE TABLE public.ai_chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES public.ai_chat_sessions(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create AI leads table
CREATE TABLE public.ai_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES public.ai_chat_sessions(id) ON DELETE CASCADE,
  name TEXT,
  phone TEXT,
  email TEXT,
  service_type TEXT,
  zip_code TEXT,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'converted')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.ai_chat_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_leads ENABLE ROW LEVEL SECURITY;

-- Public access policies for chat functionality (no auth required)
CREATE POLICY "Allow public insert on chat sessions"
  ON public.ai_chat_sessions FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public select on chat sessions"
  ON public.ai_chat_sessions FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public update on chat sessions"
  ON public.ai_chat_sessions FOR UPDATE
  TO anon
  USING (true);

CREATE POLICY "Allow public insert on chat messages"
  ON public.ai_chat_messages FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public select on chat messages"
  ON public.ai_chat_messages FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public insert on leads"
  ON public.ai_leads FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public select on leads"
  ON public.ai_leads FOR SELECT
  TO anon
  USING (true);

-- Create index for better query performance
CREATE INDEX idx_chat_messages_session_id ON public.ai_chat_messages(session_id);
CREATE INDEX idx_ai_leads_status ON public.ai_leads(status);
CREATE INDEX idx_ai_leads_created_at ON public.ai_leads(created_at DESC);