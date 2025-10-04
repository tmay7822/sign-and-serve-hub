-- Remove dangerous public SELECT and UPDATE policies on AI chat tables
-- This prevents anyone from reading all customer conversations and contact information

-- Drop public SELECT policy on ai_leads (exposes names, emails, phones)
DROP POLICY IF EXISTS "Allow public select on leads" ON public.ai_leads;

-- Drop public SELECT policy on ai_chat_messages (exposes all conversations)
DROP POLICY IF EXISTS "Allow public select on chat messages" ON public.ai_chat_messages;

-- Drop public SELECT policy on ai_chat_sessions
DROP POLICY IF EXISTS "Allow public select on chat sessions" ON public.ai_chat_sessions;

-- Drop public UPDATE policy on ai_chat_sessions (prevents manipulation)
DROP POLICY IF EXISTS "Allow public update on chat sessions" ON public.ai_chat_sessions;

-- Note: INSERT policies remain unchanged so anonymous visitors can still use the chat
-- If you need admin access to view leads, you'll need to implement authentication
-- and create admin-only SELECT policies using the has_role pattern