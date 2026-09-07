'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Briefcase, Mic, Lightbulb } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const stats = [
  { 
    id: 1, 
    label: 'Expositores', 
    value: '+150', 
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 2, 
    label: 'Visitantes', 
    value: '+5000', 
    icon: Users,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 3, 
    label: 'Charlas', 
    value: '30', 
    icon: Mic,
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 4, 
    label: 'Talleres', 
    value: '15', 
    icon: Lightbulb,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800'
  },
];

export default function AboutSection() {
  const containerRef = useRef(null);

  // Captura el progreso del scroll dentro del contenedor
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Transformaciones parallax para desplazar elementos a diferentes velocidades
  const yText = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yStatsOdd = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yStatsEven = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const bgImageY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section 
      ref={containerRef}
      id="acerca" 
      className="relative py-20 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Acerca del Evento" 
          subtitle="Descubrí el ecosistema de innovación de Jujuy"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Columna Izquierda con Parallax sutil */}
          <motion.div 
            style={{ y: yText }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg text-slate-300"
          >
            <p>
              ExpoJuy 2026 es el evento más importante de la región para el desarrollo de la Economía del Conocimiento. Durante tres días, reunimos a emprendedores, inversores, estudiantes y profesionales del sector tecnológico para compartir ideas, generar alianzas y potenciar el ecosistema local.
            </p>
            <p>
              Nuestro objetivo es posicionar a Jujuy como un polo de innovación en el norte argentino, visibilizando el talento de nuestra gente y las oportunidades que ofrece la provincia para el desarrollo de proyectos de base tecnológica.
            </p>
            <p>
              Te invitamos a ser parte de esta experiencia única, donde podrás conectar con líderes de la industria, descubrir nuevas tendencias y encontrar inspiración para llevar tu emprendimiento al siguiente nivel.
            </p>
          </motion.div>

          {/* Grilla de Tarjetas de Estadísticas con Parallax y Fotos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const isEven = index % 2 === 0;
              const cardY = isEven ? yStatsOdd : yStatsEven;

              return (
                <motion.div
                  key={stat.id}
                  style={{ y: cardY }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative rounded-2xl border border-white/10 overflow-hidden p-6 flex flex-col items-center justify-center text-center shadow-2xl hover:border-sky-500/50 transition-colors duration-300 min-h-[220px]"
                >
                  {/* Imagen de Fondo con efecto Parallax vertical + zoom al hover */}
                  <motion.div 
                    className="absolute inset-0 w-full h-[130%] -top-[15%] pointer-events-none"
                    style={{ y: bgImageY }}
                  >
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                      style={{ backgroundImage: `url(${stat.image})` }}
                    />
                  </motion.div>

                  {/* Superposición Oscura (Garantiza contraste y accesibilidad WCAG) */}
                  <div className="absolute inset-0 bg-slate-950/80 group-hover:bg-slate-950/70 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Contenido Frontal */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-sky-950/80 border border-sky-500/30 flex items-center justify-center mb-3 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <motion.div 
                      className="text-4xl font-extrabold text-white mb-1 tracking-tight"
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.2 }}
                    >
                      {stat.value}
                    </motion.div>

                    <div className="text-sm text-slate-300 uppercase tracking-wider font-semibold">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}