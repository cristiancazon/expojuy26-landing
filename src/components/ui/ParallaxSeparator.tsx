'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSeparatorProps {
  topBgClass?: string;
  bottomBgClass?: string;
  accentFill?: string;
}

export default function ParallaxSeparator({
  bottomBgClass = 'fill-slate-900',
  accentFill = 'fill-sky-950/70',
}: ParallaxSeparatorProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Movimientos Parallax en direcciones opuestas para generar efecto 3D
  const yBack = useTransform(scrollYProgress, [0, 1], ['-25%', '25%']);
  const yFront = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const scaleFront = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1.03, 0.97]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-32 md:h-52 overflow-hidden pointer-events-none select-none z-30 -my-1 bg-transparent"
    >
      {/* Capa Trasera: Silueta en V profunda (Baja con el scroll) */}
      <motion.div
        style={{ y: yBack }}
        className="absolute inset-0 w-full h-[150%] -top-[25%]"
      >
        <svg
          viewBox="0 0 1440 320"
          className={`w-full h-full ${accentFill}`}
          preserveAspectRatio="none"
        >
          <path d="M0,32 L600,240 L1440,0 L1440,320 L0,320 Z" />
        </svg>
      </motion.div>

      {/* Capa Frontal: Silueta en V invertida (Sube y expande con el scroll) */}
      <motion.div
        style={{ y: yFront, scale: scaleFront }}
        className="absolute inset-0 w-full h-[150%] -top-[25%]"
      >
        <svg
          viewBox="0 0 1440 320"
          className={`w-full h-full ${bottomBgClass}`}
          preserveAspectRatio="none"
        >
          <path d="M0,96 L720,290 L1440,80 L1440,320 L0,320 Z" />
        </svg>
      </motion.div>
    </div>
  );
}