'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { NewsItem } from '@/lib/data';

interface NewsCardProps {
  news: NewsItem;
  index: number;
}

export default function NewsCard({ news, index }: NewsCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden flex flex-col h-full"
    >
      <div className="relative w-full h-48">
        <Image
          src={news.imageUrl}
          alt={news.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-3 text-sm">
          <span className="text-secondary">{news.date}</span>
          <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
            {news.category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-slate-100 mb-3">{news.title}</h3>
        <p className="text-slate-300 text-sm">
          {news.excerpt}
        </p>
      </div>
    </motion.article>
  );
}
