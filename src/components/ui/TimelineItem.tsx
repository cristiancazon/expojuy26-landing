'use client';
import { motion } from 'framer-motion';
import { AgendaItem, categoryColors } from '@/lib/data';

interface TimelineItemProps {
  item: AgendaItem;
  index: number;
  isLast: boolean;
}

export default function TimelineItem({ item, index, isLast }: TimelineItemProps) {
  return (
    <div className="flex relative">
      <div className="flex flex-col items-center mr-6">
        <div className="w-4 h-4 rounded-full bg-primary z-10"></div>
        {!isLast && <div className="w-0.5 h-full bg-white/20 -mt-2"></div>}
      </div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="pb-8 w-full"
      >
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
          <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
            <span className="text-secondary font-semibold">{item.time}</span>
            <span className={`text-xs px-2 py-1 rounded-full ${categoryColors[item.category] || 'bg-slate-700 text-white'}`}>
              {item.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-100 mb-1">{item.title}</h3>
          <p className="text-primary font-medium mb-3">{item.speaker}</p>
          <p className="text-slate-300">{item.description}</p>
        </div>
      </motion.div>
    </div>
  );
}
