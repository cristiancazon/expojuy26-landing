'use client';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? 'text-center flex flex-col items-center' : 'text-left'}`}
    >
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-slate-100' : 'text-slate-100'}`}>
        {title}
      </h2>
      <div className="h-1 w-24 rounded bg-gradient-to-r from-secondary via-primary to-secondary mb-6"></div>
      <p className={`text-lg max-w-2xl ${light ? 'text-slate-300' : 'text-slate-300'}`}>
        {subtitle}
      </p>
    </motion.div>
  );
}
