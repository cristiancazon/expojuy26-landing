'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const links = [
  ['Cronograma', '#cronograma'],
  ['Mapa', '#mapa'],
  ['Entradas', '#entradas'],
  ['Sponsors', '#sponsors'],
  ['Contacto', '#contacto'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 35);
    onScroll(); window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <motion.header initial={reduceMotion ? false : { y: -70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 110, damping: 20 }} className={`hybrid-nav ${scrolled ? 'scrolled' : ''}`}>
      <motion.a whileHover={reduceMotion ? undefined : { scale: 1.035 }} whileTap={{ scale: .98 }} href="#inicio" className="hybrid-logo" aria-label="ExpoJuy 2026, inicio">EXPO.JUY <span>2026</span></motion.a>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {links.map(([label, href]) => <motion.a whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={{ scale: .96 }} key={href} href={href}>{label}</motion.a>)}
      </nav>
      <motion.button whileTap={{ scale: .9 }} className="hybrid-menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>{open ? <X /> : <Menu />}</motion.button>
      <AnimatePresence>
        {open && (
          <motion.nav className="mobile-nav" aria-label="Navegación móvil" initial={reduceMotion ? false : { opacity: 0, y: -10, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: .98 }} transition={{ duration: .2 }}>
            {links.map(([label, href], index) => <motion.a initial={reduceMotion ? false : { opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .035 }} key={href} href={href} onClick={() => setOpen(false)}>{label}</motion.a>)}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
