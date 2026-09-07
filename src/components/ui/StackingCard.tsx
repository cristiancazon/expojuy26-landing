'use client';

import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StackingCardProps {
  children: ReactNode;
  index: number;
}

export default function StackingCard({ children, index }: StackingCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mide el avance de la tarjeta dentro de la pantalla
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // La tarjeta actual se achica suavemente (1 -> 0.93) y se oscurece cuando la siguiente entra por encima
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <div
      ref={containerRef}
      className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ zIndex: (index + 1) * 10 }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="w-full h-full relative shadow-2xl rounded-3xl overflow-hidden border border-white/10"
      >
        {children}
      </motion.div>
    </div>
  );
}