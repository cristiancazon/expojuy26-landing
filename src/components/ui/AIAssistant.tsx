'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, MessageCircle, Send } from 'lucide-react';
import { aiMessages } from '@/lib/data';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const activeMessage = selectedQuestion 
    ? aiMessages.find(m => m.question === selectedQuestion)
    : null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 sm:w-96 rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col max-h-[500px]"
          >
            <div className="bg-primary/20 border-b border-white/10 p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-secondary" />
                <h3 className="font-semibold text-slate-100">Asistente Virtual ExpoJuy</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Cerrar asistente virtual"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 overflow-y-auto flex-grow flex flex-col gap-4">
              <div className="bg-slate-800 p-3 rounded-lg rounded-tl-none self-start max-w-[85%] border border-white/5">
                <p className="text-sm text-slate-200">¡Hola! Soy el asistente virtual de ExpoJuy 2026. ¿En qué te puedo ayudar hoy?</p>
              </div>

              {!selectedQuestion ? (
                <div className="flex flex-col gap-2 mt-2">
                  {aiMessages.map((msg, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedQuestion(msg.question)}
                      className="text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm text-secondary flex items-start gap-2 group"
                    >
                      <MessageCircle className="w-4 h-4 mt-0.5 shrink-0 opacity-70 group-hover:opacity-100" />
                      <span>{msg.question}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <>
                  <div className="bg-primary p-3 rounded-lg rounded-tr-none self-end max-w-[85%] text-white text-sm">
                    {selectedQuestion}
                  </div>
                  <div className="bg-slate-800 p-3 rounded-lg rounded-tl-none self-start max-w-[85%] border border-white/5">
                    <p className="text-sm text-slate-200 whitespace-pre-wrap">{activeMessage?.answer}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedQuestion(null)}
                    className="text-xs text-center text-slate-400 hover:text-secondary mt-2 underline"
                  >
                    Hacer otra pregunta
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir asistente virtual"
        aria-expanded={isOpen}
        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors animate-bounce-gentle border border-primary/50 relative"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-secondary border-2 border-slate-950"></span>
        )}
      </button>
    </div>
  );
}
