'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const photos = [
  { src: '/news/expojuy-networking.png', alt: 'Empresarios y emprendedores generando conexiones en ExpoJuy', label: 'Conexiones que impulsan la región' },
  { src: '/news/expojuy-speakers.png', alt: 'Conferencia sobre innovación ante el público de ExpoJuy', label: 'Ideas que miran al futuro' },
  { src: '/news/expojuy-energia.png', alt: 'Presentación de soluciones de energía renovable en ExpoJuy', label: 'Innovación productiva y sostenible' },
];

export default function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const show = useCallback((index: number) => {
    setSelected((index + photos.length) % photos.length);
  }, []);

  useEffect(() => {
    if (selected === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
      if (event.key === 'ArrowLeft') show(selected - 1);
      if (event.key === 'ArrowRight') show(selected + 1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected, show]);

  return (
    <section id="galeria" className="section-padding gallery-section">
      <div className="container-custom">
        <SectionHeading title="Galería de Fotos" subtitle="Momentos, encuentros e innovación en ExpoJuy" />
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <motion.button
              key={photo.src}
              type="button"
              className={`group gallery-card gallery-card-${index + 1}`}
              onClick={() => setSelected(index)}
              initial={reduceMotion ? false : { opacity: 0, y: 24, scale: .96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: .3 }}
              transition={{ type: 'spring', stiffness: 110, damping: 18, delay: index * .08 }}
              whileHover={reduceMotion ? undefined : { y: -6, scale: 1.008 }}
              whileTap={{ scale: .985 }}
              aria-label={`Ampliar: ${photo.label}`}
            >
              <Image src={photo.src} alt={photo.alt} fill sizes={index === 0 ? '(min-width: 768px) 64vw, 100vw' : '(min-width: 768px) 32vw, 100vw'} className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="gallery-shade" />
              <span className="gallery-caption"><small>ExpoJuy 2026</small><strong>{photo.label}</strong></span>
              <span className="gallery-expand"><Expand aria-hidden="true" /></span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div className="gallery-modal" role="dialog" aria-modal="true" aria-label="Visor de galería" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.figure initial={reduceMotion ? false : { opacity: 0, scale: .92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .96 }} transition={{ type: 'spring', stiffness: 150, damping: 22 }} onClick={(event) => event.stopPropagation()}>
              <Image src={photos[selected].src} alt={photos[selected].alt} fill sizes="90vw" className="object-contain" priority />
              <figcaption>{photos[selected].label}</figcaption>
            </motion.figure>
            <button className="gallery-close" onClick={() => setSelected(null)} aria-label="Cerrar galería"><X /></button>
            <button className="gallery-prev" onClick={(event) => { event.stopPropagation(); show(selected - 1); }} aria-label="Foto anterior"><ChevronLeft /></button>
            <button className="gallery-next" onClick={(event) => { event.stopPropagation(); show(selected + 1); }} aria-label="Foto siguiente"><ChevronRight /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
