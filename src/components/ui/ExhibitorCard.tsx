'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Exhibitor } from '@/lib/data';

interface ExhibitorCardProps {
  exhibitor: Exhibitor;
  index: number;
}

export default function ExhibitorCard({ exhibitor, index }: ExhibitorCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow group flex flex-col h-full"
    >
      <div className="relative w-full h-48">
        <Image
          src={exhibitor.imageUrl}
          alt={exhibitor.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-100">{exhibitor.name}</h3>
          <span className="text-xs px-2 py-1 rounded-full bg-slate-800 text-secondary border border-secondary/30">
            {exhibitor.category}
          </span>
        </div>
        <p className="text-slate-300 text-sm line-clamp-3 group-hover:line-clamp-none transition-all">
          {exhibitor.description}
        </p>
      </div>
    </motion.article>
  );
}
