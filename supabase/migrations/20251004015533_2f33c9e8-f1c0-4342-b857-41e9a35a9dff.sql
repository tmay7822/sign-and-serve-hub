-- Enable RLS on tables if not already enabled
ALTER TABLE ai_chat_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_chat_messages ENABLE ROW LEVEL SECURITY;

-- Drop existing INSERT policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Allow public insert on chat sessions" ON ai_chat_sessions;
DROP POLICY IF EXISTS "Allow public insert on chat messages" ON ai_chat_messages;

-- Allow anonymous users to create new chat sessions
CREATE POLICY "Allow public insert on chat sessions"
ON ai_chat_sessions
FOR INSERT
TO public
WITH CHECK (true);

-- Allow anonymous users to send chat messages
CREATE POLICY "Allow public insert on chat messages"
ON ai_chat_messages
FOR INSERT
TO public
WITH CHECK (true);