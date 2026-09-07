'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface ParallaxWrapperProps {
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
  children: React.ReactNode;
}

export default function ParallaxWrapper({
  speed = 0.5,
  direction = 'up',
  className = '',
  children,
}: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yOffset = (direction === 'up' ? -100 : 100) * speed;
  const transformedValue = useTransform(scrollYProgress, [0, 1], [0, yOffset]);

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ y: transformedValue }} className={className}>
      {children}
    </motion.div>
  );
}
