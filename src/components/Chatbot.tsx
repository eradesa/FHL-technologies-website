'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Minimize2, Sparkles, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const quickActions = [
  'What services do you offer?',
  'Tell me about goAML audits',
  'How can AML compliance help my business?',
  'Schedule a consultation',
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'welcome', role: 'assistant', content: `👋 Welcome to F H & L Technologies!\n\nI'm your AI assistant, here to help you with:\n• Compliance & regulatory questions\n• Service information\n• Scheduling consultations\n\nHow can I assist you today?`, timestamp: new Date() },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() => crypto.randomUUID());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen, scrollToBottom]);

  const sendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = { id: Date.now().toString(), role: 'user', content, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: content, sessionId }),
      });

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I'm sorry, I'm having trouble connecting. Please try again or contact us directly at info@fhltech.lk",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickAction = (action: string) => sendMessage(action);
  const handleSend = () => { if (input.trim()) sendMessage(input.trim()); };

  if (!isOpen) {
    return (
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/30 hover:shadow-xl hover:shadow-gold-500/40 transition-all"
      >
        <MessageCircle className="text-navy-900" size={28} />
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -top-1 -right-1 w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center"
        >
          <Sparkles size={10} className="text-white" />
        </motion.span>
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`fixed z-50 ${isMinimized ? 'bottom-6 right-6' : 'bottom-6 right-6 w-[380px] md:w-[420px]'}`}
      >
        <div className="bg-navy-900 rounded-2xl shadow-2xl shadow-navy-900/50 border border-navy-700 overflow-hidden">
          <motion.div
            className="flex items-center justify-between p-4 bg-gradient-to-r from-gold-500 to-gold-600"
            layoutId="chatbot-header"
          >
            <div className="flex items-center gap-3">
              <motion.div
                className="w-10 h-10 rounded-full bg-navy-900/20 flex items-center justify-center"
                whileHover={{ rotate: 15 }}
              >
                <Bot className="text-navy-900" size={24} />
              </motion.div>
              <div>
                <h3 className="font-bold text-navy-900">AI Assistant</h3>
                <p className="text-xs text-navy-900/70">Powered by F H & L</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-8 h-8 rounded-full bg-navy-900/20 flex items-center justify-center hover:bg-navy-900/30 transition-colors"
              >
                <Minimize2 size={16} className="text-navy-900" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-navy-900/20 flex items-center justify-center hover:bg-navy-900/30 transition-colors"
              >
                <X size={16} className="text-navy-900" />
              </motion.button>
            </div>
          </motion.div>

          {!isMinimized && (
            <>
              <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-navy-800/50">
                <AnimatePresence>
                  {messages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.2, delay: index === messages.length - 1 ? 0 : 0 }}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex gap-3 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${message.role === 'user' ? 'bg-gold-500/20' : 'bg-teal-500/20'}`}
                        >
                          {message.role === 'user' ? (
                            <User size={16} className="text-gold-500" />
                          ) : (
                            <Bot size={16} className="text-teal-500" />
                          )}
                        </motion.div>
                        <motion.div
                          initial={{ scale: 0.95 }}
                          animate={{ scale: 1 }}
                          className={`rounded-2xl px-4 py-3 ${message.role === 'user' ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900' : 'bg-navy-700 text-slate-200'}`}
                        >
                          <p className="text-sm whitespace-pre-line">{message.content}</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
                        <Bot size={16} className="text-teal-500" />
                      </div>
                      <div className="bg-navy-700 rounded-2xl px-4 py-3 flex items-center gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.span
                            key={i}
                            className="w-2 h-2 bg-teal-500 rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1 }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-3 border-t border-navy-700 bg-navy-800/30">
                <motion.div
                  className="flex flex-wrap gap-2 mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleQuickAction(action)}
                      className="px-3 py-1.5 rounded-full bg-navy-700 text-slate-300 text-xs hover:bg-gold-500/20 hover:text-gold-500 transition-colors"
                    >
                      {action}
                    </motion.button>
                  ))}
                </motion.div>
                <div className="flex gap-2">
                  <motion.input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..."
                    whileFocus={{ scale: 1.01 }}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-navy-700 border border-navy-600 text-white placeholder-slate-500 text-sm focus:border-gold-500 focus:outline-none transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSend}
                    disabled={!input.trim() || isTyping}
                    className="w-10 h-10 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 flex items-center justify-center hover:shadow-lg hover:shadow-gold-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isTyping ? (
                      <Loader2 size={18} className="text-navy-900 animate-spin" />
                    ) : (
                      <Send size={18} className="text-navy-900" />
                    )}
                  </motion.button>
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
