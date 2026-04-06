import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

type Message = {
  id: string;
  role: "user" | "bot";
  content: string;
};

// Hardcoded knowledge base for perfect accurate offline plant answers
const botKnowledge = [
  { keywords: ["yellow", "leaves"], response: "Yellowing leaves (chlorosis) usually indicate overwatering, poor drainage, or a lack of nitrogen or iron. Let the soil dry out slightly before watering and check if the pot has drainage holes." },
  { keywords: ["white", "spots", "powder"], response: "White powdery spots are likely Powdery Mildew, a fungal disease. Improve air circulation, reduce humidity, and apply neem oil or a sulfur-based fungicide." },
  { keywords: ["brown", "edges", "tips"], response: "Brown, crispy leaf edges often mean underwatering, low humidity, or salt buildup from fertilizer. Try watering more deeply and occasionally flushing the soil." },
  { keywords: ["black", "spots"], response: "Black spots can be Black Spot fungus or a bacterial infection. Remove severely affected leaves, avoid overhead watering, and use a copper fungicide if it spreads." },
  { keywords: ["bugs", "insects", "spider mites", "aphids"], response: "For common pests like aphids or spider mites, wipe the leaves with a damp cloth, shower the plant, or use insecticidal soap/neem oil." },
  { keywords: ["drooping", "wilting"], response: "Wilting can be caused by BOTH severe underwatering and overwatering (which rots the roots). Check the soil moisture immediately. If it's bone dry, water it thoroughly." },
  { keywords: ["arivision", "who are you", "what is this"], response: "I am the AriVision Plant Doctor Chatbot. I help diagnose plant diseases and provide care instructions using our pathology lab." },
  { keywords: ["hi", "hello", "hey"], response: "Hello! I am your Plant Doctor. How can I help you with your plants today?" }
];

function getBotResponse(input: string): string {
  const lowerInput = input.toLowerCase();
  for (const knowledge of botKnowledge) {
    if (knowledge.keywords.some(keyword => lowerInput.includes(keyword))) {
      return knowledge.response;
    }
  }
  return "I'm not exactly sure about that specific issue. However, ensuring proper sunlight, watering only when the top inch of soil is dry, and providing good drainage solves most plant problems! You can also try our 'Scan Leaf' feature for an AI diagnosis.";
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "bot", content: "Hi! I am your Plant Doctor. Ask me anything about plant diseases or plant care!" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate network delay and perfect response
    setTimeout(() => {
      const responseText = getBotResponse(userMsg.content);
      const botMsg: Message = { id: (Date.now() + 1).toString(), role: "bot", content: responseText };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2s delay
  };

  return (
    <div className="fixed bottom-20 right-6 z-50 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-[320px] sm:w-[350px] shadow-2xl rounded-2xl overflow-hidden flex flex-col bg-background border border-border/50"
            style={{ height: "450px" }}
          >
            {/* Header */}
            <div className="px-4 py-3 flex items-center justify-between" style={{
              background: "linear-gradient(135deg, hsl(153 75% 15%) 0%, hsl(160 60% 25%) 100%)",
            }}>
              <div className="flex items-center gap-2 text-white">
                <Bot className="h-5 w-5" />
                <span className="font-semibold text-sm">{t('chat_title', 'Plant Doctor Chatbot')}</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-muted/20">
              {messages.map(msg => (
                <div key={msg.id} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'bot' && (
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="h-3.5 w-3.5 text-primary" />
                    </div>
                  )}
                  <div className={`text-sm px-3 py-2 rounded-2xl max-w-[80%] leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-primary text-primary-foreground rounded-tr-sm' 
                      : 'bg-card border border-border shadow-sm rounded-tl-sm text-foreground'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2 justify-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div className="text-sm px-4 py-2 rounded-2xl bg-card border border-border shadow-sm rounded-tl-sm flex items-center gap-1">
                    <motion.div className="h-1.5 w-1.5 bg-primary/50 rounded-full" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0 }} />
                    <motion.div className="h-1.5 w-1.5 bg-primary/50 rounded-full" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0.2 }} />
                    <motion.div className="h-1.5 w-1.5 bg-primary/50 rounded-full" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0.4 }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-background border-t border-border flex items-center gap-2">
              <input
                type="text"
                placeholder={t('chat_placeholder', 'Ask a question about plants...')}
                className="flex-1 bg-muted px-3 py-2 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <Button 
                size="icon" 
                className="h-9 w-9 rounded-xl shrink-0" 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 group rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(153 75% 35%) 0%, hsl(160 80% 25%) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        {isOpen ? (
          <X className="h-6 w-6 text-white relative z-10" />
        ) : (
          <MessageSquare className="h-6 w-6 text-white relative z-10" />
        )}
      </motion.button>
    </div>
  );
}
