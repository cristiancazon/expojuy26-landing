"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Linkedin, MapPin, Mail, Phone, Heart } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-200 overflow-hidden pt-20">
      {/* 1. Fondo de Resplandor Neón (Atardecer en la Quebrada) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-gradient-to-r from-sky-500/20 via-rose-500/15 to-emerald-500/20 blur-[120px] rounded-full" />
      </div>

      {/* 2. Escultura Vectorial: Relieve de Montañas (Serranía de Hornocal / 14 Colores) */}
      <div className="relative w-full h-32 sm:h-48 md:h-64 pointer-events-none select-none z-10 -mb-1">
        {/* Capa Posterior: Serranía Lejana */}
        <motion.svg
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-full fill-sky-950/60 stroke-sky-500/20 stroke-1"
          preserveAspectRatio="none"
        >
          <path d="M0,224L120,192L240,256L360,128L480,224L600,96L720,224L840,160L960,256L1080,128L1200,192L1320,160L1440,224L1440,320L0,320Z" />
        </motion.svg>

        {/* Capa Intermedia: Quebrada Intermedia con trazo neón verde/rosa */}
        <motion.svg
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-full fill-slate-900/80 stroke-rose-400/30 stroke-1"
          preserveAspectRatio="none"
        >
          <path d="M0,160L180,288L360,192L540,256L720,160L900,288L1080,192L1260,256L1440,160L1440,320L0,320Z" />
        </motion.svg>

        {/* Capa Frontal Principal: Silueta de los Valles de Jujuy (Cierre de Fondo) */}
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-full fill-slate-950 stroke-emerald-500/30 stroke-1"
          preserveAspectRatio="none"
        >
          <path d="M0,256L140,192L280,288L420,160L560,256L700,224L840,288L980,192L1120,256L1260,192L1440,288L1440,320L0,320Z" />
        </svg>
      </div>

      {/* 3. Contenido Principal del Footer con Cristalismo */}
      <div className="relative z-20 bg-slate-950 border-t border-white/10 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Columna 1: Branding e Identidad Local */}
            <div className="flex flex-col items-start">
              <Link href="/" className="flex items-baseline space-x-2 mb-4 group" aria-label="Inicio">
                <span className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-emerald-300 to-rose-400 tracking-tight">
                  ExpoJuy
                </span>
                <span className="text-xl font-bold text-sky-400 group-hover:text-emerald-400 transition-colors">
                  2026
                </span>
              </Link>
              <p className="text-slate-400 max-w-sm mb-6 leading-relaxed text-sm sm:text-base">
                El punto de encuentro donde el talento tecnológico jujeño, la innovación abierta y la Economía del Conocimiento se conectan con el futuro.
              </p>
            </div>

            {/* Columna 2: Enlaces Rápidos */}
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold text-sky-300 uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Navegación
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-emerald-300 transition-colors duration-200 text-sm flex items-center gap-1.5 hover:translate-x-1 transition-transform"
                    >
                      <span className="text-sky-500/50">›</span> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 3: Contacto e Iconos Sociales */}
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold text-sky-300 uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                Conectemos
              </h3>
              <ul className="space-y-3 text-slate-400 mb-6 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>info@expojuy2026.com.ar</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>+54 388 400 0000</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  <span>San Salvador de Jujuy, Argentina</span>
                </li>
              </ul>

              {/* Botones Sociales con Efecto Glass */}
              <div className="flex space-x-3 mt-auto">
                {[
                  { Icon: Instagram, label: "Instagram", href: "#" },
                  { Icon: Twitter, label: "Twitter", href: "#" },
                  { Icon: Facebook, label: "Facebook", href: "#" },
                  { Icon: Linkedin, label: "LinkedIn", href: "#" },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-slate-400 hover:border-sky-400 hover:bg-sky-500/20 hover:text-sky-300 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Barra Inferior (Pie de Página) */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
            <p>© 2026 ExpoJuy. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0 flex items-center gap-1.5">
              <span>Hecho con</span>
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 animate-pulse" />
              <span>en Jujuy, Argentina</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}