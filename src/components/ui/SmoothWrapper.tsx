'use client';

import { ReactNode } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface SmoothWrapperProps {
  children: ReactNode;
}

export default function SmoothWrapper({ children }: SmoothWrapperProps) {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <div className="relative bg-slate-950 min-h-screen overflow-x-hidden">
      {/* Línea conectora central con aceleración por GPU */}
      <motion.div
        style={{ scaleY: smoothProgress }}
        className="fixed left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-sky-400 via-emerald-400 to-rose-400 origin-top z-50 pointer-events-none will-change-transform shadow-[0_0_12px_rgba(56,189,248,0.8)]"
      />
      {children}
    </div>
  );
}