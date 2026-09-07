'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Expositores', featured: true },
  { value: '150+', label: 'Conferencias' },
  { value: '40+', label: 'Países' },
  { value: '25.000+', label: 'Visitantes' },
];

const mountainPaths = [
  'M0,192 L80,170 L180,210 L300,130 L420,180 L540,110 L680,160 L800,90 L920,150 L1060,110 L1200,170 L1320,120 L1440,180',
  'M0,220 L120,160 L240,200 L380,120 L500,170 L640,100 L760,150 L900,110 L1020,180 L1160,130 L1300,190 L1440,140',
  'M0,250 L150,180 L280,220 L420,150 L560,200 L700,130 L840,180 L980,140 L1120,210 L1260,160 L1440,220',
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const farY = useTransform(scrollYProgress, [0, 1], ['0%', '24%']);
  const middleY = useTransform(scrollYProgress, [0, 1], ['0%', '42%']);
  const nearY = useTransform(scrollYProgress, [0, 1], ['0%', '62%']);
  const mountainY = [farY, middleY, nearY];

  return (
    <section ref={heroRef} id="inicio" className="mati-hero" aria-labelledby="hero-title">
      <video className="mati-hero-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
        <source src="/expojuy24.mp4" type="video/mp4" />
      </video>
      <div className="mati-video-shade" aria-hidden="true" />
      <div className="mati-grid" aria-hidden="true" />
      <div className="mati-mountains" aria-hidden="true">
        {mountainPaths.map((path, index) => (
          <motion.svg key={path} style={{ y: mountainY[index] }} viewBox="0 0 1440 320" preserveAspectRatio="none" className={`mati-mountain mati-mountain-${index + 1}`}>
            <path d={`${path} L1440,320 L0,320 Z`} className="mati-mountain-body" />
            <path d={path} className="mati-mountain-base" />
            <path d={path} className="mati-mountain-line" />
          </motion.svg>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mati-hero-content">
        <div className="mati-date"><span />23–25 Octubre 2026 · San Salvador de Jujuy</div>
        <h1 id="hero-title" className="mati-title"><span>EXPO</span><strong>JUY</strong></h1>
        <p className="mati-tagline">Conectando Países <b>•</b> Creando Oportunidades</p>
        <p className="mati-subtitle">La feria comercial e industrial más importante del Norte Argentino. 3 días de negocios, networking y oportunidades sin fronteras.</p>
      </motion.div>
      <div className="mati-stats">
        {stats.map((stat) => <div key={stat.label} className={stat.featured ? 'mati-stat featured' : 'mati-stat'}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
      </div>
      <a className="mati-scroll" href="#acerca" aria-label="Continuar hacia el contenido"><span>Scroll</span><i /></a>
    </section>
  );
}
