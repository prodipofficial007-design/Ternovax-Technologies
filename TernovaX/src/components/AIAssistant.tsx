import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Loader2, Sparkles, User, Bot } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize AI with fallback for browser environment
let genAI: GoogleGenerativeAI | null = null;
try {
  const apiKey = (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) || '';
  if (apiKey) {
    genAI = new GoogleGenerativeAI(apiKey);
  }
} catch (e) {
  console.warn("AI_INITIALIZATION_BYPASSED:", e);
}

interface Message {
  role: 'user' | 'bot';
  text: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "// SYSTEM_READY: I am TrenovaX_AI. State your query for the tech-lab database." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      if (!genAI) throw new Error("AI_ENGINE_OFFLINE");
      
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: "You are TrenovaX_AI, the neural interface of TrenovaX Technologies. Your tone is futuristic, efficient, and slightly tech-noir. You specialize in autonomous systems, AI training, and digital genesis. Keep responses punchy and use technical jargon sparingly but effectively.",
      });

      const result = await model.generateContent(userMessage);
      const responseText = result.response.text() || "I'm sorry, I couldn't process that. Please try again.";
      setMessages(prev => [...prev, { role: 'bot', text: responseText }]);
    } catch (error) {
      console.error('AI error:', error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm having trouble connecting to my neural network. Please check back in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="glass-panel w-80 md:w-96 rounded-2xl shadow-2xl overflow-hidden mb-4 flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-black/95 p-4 border-b border-red-600/20 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="bg-red-600/20 p-1.5 rounded-lg border border-red-600/30">
                  <Sparkles className="w-4 h-4 text-red-500" />
                </div>
                <span className="font-display font-bold text-slate-100 uppercase tracking-tighter italic">TrenovaX_<span className="text-red-600 font-black">AI</span></span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-500 hover:text-red-500 transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide bg-black/50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-2 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-sm flex items-center justify-center shrink-0 ${
                      m.role === 'user' ? 'bg-red-600 shadow-[0_0_10px_red]' : 'bg-black border border-white/10'
                    }`}>
                      {m.role === 'user' ? <User className="w-4 h-4 text-black" /> : <Bot className="w-4 h-4 text-red-600" />}
                    </div>
                    <div className={`p-3 rounded-sm text-xs font-mono tracking-tight ${
                      m.role === 'user' 
                        ? 'bg-red-600 text-black font-bold' 
                        : 'bg-white/5 text-slate-300 border border-white/5 italic'
                    }`}>
                      {m.role !== 'user' && <span className="text-[10px] text-red-500/50 block mb-1">DATA_STREAM:</span>}
                      {m.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2 items-center text-red-500/50 text-[10px] font-mono ml-10 uppercase animate-pulse">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    <span>Processing_stream...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-black border-t border-white/5">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Query_database..."
                  className="w-full bg-black border border-white/10 rounded-sm px-4 py-2.5 text-xs font-mono text-red-500 focus:outline-none focus:border-red-600/50 pr-10 placeholder:text-slate-700"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-red-600 hover:text-red-400 disabled:opacity-50 transition-colors p-1"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-600 hover:bg-red-500 text-black p-4 rounded-sm shadow-[0_0_20px_rgba(255,0,0,0.3)] flex items-center justify-center transition-all border border-red-400/20"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
