'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { TicketPlan } from '@/lib/data';

interface TicketCardProps {
  ticket: TicketPlan;
  index: number;
}

export default function TicketCard({ ticket, index }: TicketCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`relative rounded-2xl p-6 bg-white/5 backdrop-blur-md flex flex-col h-full ${
        ticket.highlighted ? 'border-2 border-secondary scale-105' : 'border border-white/10'
      }`}
    >
      {ticket.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Recomendado
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-slate-100 mb-2">{ticket.name}</h3>
        <div className="text-3xl font-extrabold text-white">
          {new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            maximumFractionDigits: 0
          }).format(ticket.price)}
        </div>
      </div>
      
      <ul className="flex-grow space-y-3 mb-8">
        {ticket.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className="w-5 h-5 text-success mr-2 shrink-0" />
            <span className="text-slate-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button 
        onClick={() => alert('Redirigiendo al checkout seguro...')}
        className={`w-full py-3 rounded-lg font-semibold transition-colors btn-primary`}
      >
        Comprar Ticket
      </button>
    </motion.div>
  );
}
