'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Minimize2, Sparkles } from 'lucide-react';

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

const responses: Record<string, string> = {
  'What services do you offer?': `At F H & L Technologies, we offer comprehensive compliance solutions:\n\n🛡️ **AML/CFT/CPF Consultancy** - Full regulatory compliance support\n📊 **goAML Reporting** - Implementation and threshold reporting\n🔍 **goAML Audit & Validation** - Independent audit services\n📋 **Regulatory Consultancy** - Transaction mapping & compliance\n🤖 **AI-Powered Solutions** - Agentic AI systems integration\n\nWhich area would you like to learn more about?`,
  'Tell me about goAML audits': `Our goAML Audit & Validation services include:\n\n✅ Independent audit of goAML threshold reporting\n✅ Source system transaction reconciliation\n✅ Data quality assessment\n✅ Compliance validation framework\n✅ goAML UAT support\n\nWe help ensure your goAML implementation meets FIU requirements with thorough validation and testing.`,
  'How can AML compliance help my business?': `AML/CFT/CPF compliance is essential for:\n\n🏦 **Financial Institutions** - Banks, microfinance, insurance\n🏢 **DNFBPs** - Dealers, lawyers, accountants, real estate\n🌐 **International Trade** - Cross-border transactions\n\n**Benefits:**\n• Regulatory compliance & avoiding penalties\n• Protection from financial crimes\n• Enhanced reputation & trust\n• Streamlined operations`,
  'Schedule a consultation': `Great! I'd be happy to help you schedule a consultation.\n\nPlease provide:\n• Your name and company\n• Best time to contact\n• Areas of interest\n\nOr use the contact form on this page, and our team will reach out within 24 hours.`,
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'welcome', role: 'assistant', content: `👋 Welcome to F H & L Technologies!\n\nI'm your AI assistant, here to help you with:\n• Compliance & regulatory questions\n• Service information\n• Scheduling consultations\n\nHow can I assist you today?`, timestamp: new Date() },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(() => { if (isOpen) scrollToBottom(); }, [messages, isOpen]);

  const handleQuickAction = (action: string) => {
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', content: action, timestamp: new Date() }]);
    setIsTyping(true);
    setTimeout(() => {
      const response = responses[action] || "Thank you for your question! Our team will get back to you shortly.";
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', content: response, timestamp: new Date() }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', content: input.trim(), timestamp: new Date() }]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      let response = "Thank you for your question! Our team of compliance experts will get back to you shortly.";
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('service')) response = responses['What services do you offer?'];
      else if (lowerInput.includes('goaml') || lowerInput.includes('audit')) response = responses['Tell me about goAML audits'];
      else if (lowerInput.includes('aml') || lowerInput.includes('compliance')) response = responses['How can AML compliance help my business?'];
      else if (lowerInput.includes('schedule')) response = responses['Schedule a consultation'];
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', content: response, timestamp: new Date() }]);
      setIsTyping(false);
    }, 1200);
  };

  if (!isOpen) {
    return (
      <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/30 hover:shadow-xl hover:shadow-gold-500/40 transition-all"
      >
        <MessageCircle className="text-navy-900" size={28} />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center">
          <Sparkles size={10} className="text-white" />
        </span>
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className={`fixed z-50 ${isMinimized ? 'bottom-6 right-6' : 'bottom-6 right-6 w-[380px] md:w-[420px]'}`}
      >
        <div className="bg-navy-900 rounded-2xl shadow-2xl shadow-navy-900/50 border border-navy-700 overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gold-500 to-gold-600">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy-900/20 flex items-center justify-center">
                <Bot className="text-navy-900" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-navy-900">AI Assistant</h3>
                <p className="text-xs text-navy-900/70">F H & L Technologies</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setIsMinimized(!isMinimized)} className="w-8 h-8 rounded-full bg-navy-900/20 flex items-center justify-center hover:bg-navy-900/30 transition-colors">
                <Minimize2 size={16} className="text-navy-900" />
              </button>
              <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full bg-navy-900/20 flex items-center justify-center hover:bg-navy-900/30 transition-colors">
                <X size={16} className="text-navy-900" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-navy-800/50">
                {messages.map((message) => (
                  <motion.div key={message.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex gap-3 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${message.role === 'user' ? 'bg-gold-500/20' : 'bg-teal-500/20'}`}>
                        {message.role === 'user' ? <User size={16} className="text-gold-500" /> : <Bot size={16} className="text-teal-500" />}
                      </div>
                      <div className={`rounded-2xl px-4 py-3 ${message.role === 'user' ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900' : 'bg-navy-700 text-slate-200'}`}>
                        <p className="text-sm whitespace-pre-line">{message.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center"><Bot size={16} className="text-teal-500" /></div>
                      <div className="bg-navy-700 rounded-2xl px-4 py-3">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-3 border-t border-navy-700 bg-navy-800/30">
                <div className="flex flex-wrap gap-2 mb-3">
                  {quickActions.map((action, index) => (
                    <button key={index} onClick={() => handleQuickAction(action)}
                      className="px-3 py-1.5 rounded-full bg-navy-700 text-slate-300 text-xs hover:bg-gold-500/20 hover:text-gold-500 transition-colors">
                      {action}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..." className="flex-1 px-4 py-2.5 rounded-xl bg-navy-700 border border-navy-600 text-white placeholder-slate-500 text-sm focus:border-gold-500 focus:outline-none transition-colors" />
                  <button onClick={handleSend} disabled={!input.trim()}
                    className="w-10 h-10 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 flex items-center justify-center hover:shadow-lg hover:shadow-gold-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                    <Send size={18} className="text-navy-900" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
