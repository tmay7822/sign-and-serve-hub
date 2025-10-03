import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const SUGGESTED_PROMPTS = [
  { icon: "💰", text: "What are your prices?" },
  { icon: "📍", text: "Do you serve my area?" },
  { icon: "⏰", text: "What are your hours?" },
  { icon: "📋", text: "What services do you offer?" },
  { icon: "🚗", text: "Do you come to me?" },
  { icon: "📅", text: "How do I schedule an appointment?" }
];

export const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [showSuggestedPrompts, setShowSuggestedPrompts] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && !sessionId) {
      createSession();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const createSession = async () => {
    try {
      const { data, error } = await supabase
        .from('ai_chat_sessions')
        .insert({})
        .select()
        .single();

      if (error) throw error;
      setSessionId(data.id);
      
      // Add welcome message
      setMessages([{
        role: 'assistant',
        content: "Hi! I'm here to help you with mobile notary services. I can answer questions about our services, pricing, service areas, and help you get in touch with Terry. What can I help you with today?",
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error('Error creating session:', error);
    }
  };

  const saveMessage = async (role: 'user' | 'assistant', content: string) => {
    if (!sessionId) return;

    try {
      await supabase.from('ai_chat_messages').insert({
        session_id: sessionId,
        role,
        content
      });
    } catch (error) {
      console.error('Error saving message:', error);
    }
  };

  const sendMessage = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setShowSuggestedPrompts(false);

    await saveMessage('user', textToSend);

    try {
      const response = await fetch(
        `https://jfbmbbslubgrwsguxcqe.supabase.co/functions/v1/ai-chat`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmYm1iYnNsdWJncndzZ3V4Y3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2NjAzOTMsImV4cCI6MjA3NDIzNjM5M30.cDJW7sgKYSrWhX9D7ACIUKbPQE3kfXu-t_L8kH4VLVk`
          },
          body: JSON.stringify({
            messages: [...messages, userMessage].map(m => ({
              role: m.role,
              content: m.content
            })),
            sessionId
          })
        }
      );

      if (!response.ok) {
        if (response.status === 429) {
          toast({
            variant: "destructive",
            title: "Rate Limit",
            description: "Too many requests. Please wait a moment and try again."
          });
          setIsLoading(false);
          return;
        }
        if (response.status === 402) {
          toast({
            variant: "destructive",
            title: "Service Unavailable",
            description: "AI service temporarily unavailable. Please call (513) 226-9052."
          });
          setIsLoading(false);
          return;
        }
        throw new Error('Failed to get response');
      }

      if (!response.body) throw new Error('No response body');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantContent = '';
      let textBuffer = '';
      let streamDone = false;

      // Add empty assistant message that we'll update
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: '',
        timestamp: new Date()
      }]);

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf('\n')) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (line.startsWith(':') || line.trim() === '') continue;
          if (!line.startsWith('data: ')) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === '[DONE]') {
            streamDone = true;
            break;
          }

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantContent += content;
              setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].content = assistantContent;
                return newMessages;
              });
            }
          } catch {
            textBuffer = line + '\n' + textBuffer;
            break;
          }
        }
      }

      await saveMessage('assistant', assistantContent);
      setIsLoading(false);

    } catch (error) {
      console.error('Chat error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get response. Please try again or call (513) 226-9052."
      });
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handlePromptClick = (promptText: string) => {
    sendMessage(promptText);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-xl bg-accent hover:bg-accent/90 z-50 group"
        >
          <MessageCircle className="h-6 w-6 text-accent-foreground" />
          <span className="absolute -top-2 -left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Ask me anything!
          </span>
        </Button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[400px] h-[600px] bg-card rounded-lg shadow-2xl border border-border flex flex-col z-50 max-w-[calc(100vw-2rem)] md:w-[400px]">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary rounded-t-lg">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary-foreground" />
              <h3 className="font-semibold text-primary-foreground">Chat with Signed On Time</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <p className="text-xs opacity-50 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Suggested Prompts */}
            {showSuggestedPrompts && messages.length === 1 && !isLoading && (
              <div className="space-y-2 animate-in fade-in duration-300">
                <p className="text-xs text-muted-foreground font-medium px-2">💡 Quick questions:</p>
                <div className="grid grid-cols-1 gap-2">
                  {SUGGESTED_PROMPTS.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handlePromptClick(prompt.text)}
                      className="text-left px-3 py-2 rounded-lg border border-accent bg-card hover:bg-accent hover:text-accent-foreground text-sm transition-all duration-200 hover:shadow-md"
                    >
                      <span className="mr-2">{prompt.icon}</span>
                      {prompt.text}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg p-3">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t border-border bg-muted/30">
            <div className="flex gap-2 text-xs">
              <Button
                variant="ghost"
                size="sm"
                className="h-7 text-xs"
                onClick={() => {
                  window.location.href = 'tel:5132269052';
                }}
              >
                📞 Call Now
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 text-xs"
                onClick={() => {
                  window.location.href = '/book-now';
                }}
              >
                📅 Book
              </Button>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                onClick={() => sendMessage()}
                disabled={isLoading || !input.trim()}
                size="icon"
                className="bg-accent hover:bg-accent/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};