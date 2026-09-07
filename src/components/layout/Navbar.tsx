'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

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
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 35);
    onScroll(); window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`hybrid-nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#inicio" className="hybrid-logo" aria-label="ExpoJuy 2026, inicio">EXPO.JUY <span>2026</span></a>
      <nav className={open ? 'open' : ''} aria-label="Navegación principal">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <button className="hybrid-menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>{open ? <X /> : <Menu />}</button>
    </header>
  );
}
