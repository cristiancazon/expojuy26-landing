'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function MotionSection({ children, index = 0 }: { children: ReactNode; index?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className="motion-section"
      initial={reduceMotion ? false : { opacity: 0, y: 48, scale: 0.992 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.08, margin: '-40px 0px' }}
      transition={{ type: 'spring', stiffness: 78, damping: 19, mass: 0.9, delay: Math.min(index * 0.025, 0.12) }}
    >
      {children}
    </motion.div>
  );
}
