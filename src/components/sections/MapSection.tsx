"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Search,
  Navigation,
  Sparkles,
  Globe,
  X,
  Building2,
  Filter,
  Info
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { exhibitorsData, Exhibitor } from "@/lib/data";

export default function MapSection() {
  const [selectedExhibitor, setSelectedExhibitor] = useState<Exhibitor | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [wayfindingActive, setWayfindingActive] = useState<boolean>(false);

  // Categorías calculadas dinámicamente
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(exhibitorsData.map((e) => e.category)));
    return [
      { id: "all", label: "Todos" },
      ...uniqueCategories.map((cat) => ({ id: cat, label: cat }))
    ];
  }, []);

  // Filtrado de exhibidores
  const filteredExhibitors = useMemo(() => {
    return exhibitorsData.filter((e) => {
      const matchesCategory = activeCategory === "all" || e.category === activeCategory;
      const matchesSearch =
        e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.standNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.country.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="mapa" className="py-20 md:py-32 bg-slate-950 relative overflow-hidden text-slate-100">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title="Plano Interactivo EXPO JUJUY"
          subtitle="Explorá los stands sobre el mapa oficial en tiempo real, ubicá expositores y trazá tu recorrido"
        />

        {/* Barra de Herramientas y Controles del Mapa */}
        <div className="mt-8 mb-6 flex flex-col xl:flex-row gap-5 items-stretch xl:items-center justify-between bg-slate-900/80 p-5 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">

          {/* Buscador Integrado */}
          <div className="relative w-full xl:w-64 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por stand, empresa o rubro..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/80 border border-white/10 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-sky-400 transition-colors shadow-inner"
            />
          </div>

          {/* Filtros de Categoría */}
          <div className="flex flex-wrap items-center gap-2 w-full xl:flex-1 xl:justify-center">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${isActive
                      ? "text-slate-950 font-bold"
                      : "text-slate-400 hover:text-white bg-slate-950/50 border border-white/5 hover:border-white/15"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeMapCategoryTab"
                      className="absolute inset-0 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-xl shadow-lg shadow-sky-500/25 z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-1.5">
                    {cat.id === "all" && <Filter className="w-3 h-3 shrink-0" />}
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Lienzo Principal del Mapa */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 relative aspect-[4/3] w-full rounded-3xl border border-white/10 bg-slate-900 overflow-hidden shadow-2xl group">

            {/* Contenedor del mapa en vista plana */}
            <div
              className="w-full h-full relative transition-transform duration-700 ease-out flex items-center justify-center"
            >
              {/* Imagen Base Oficial de la Expo */}
              <img
                src="/mapa-expojuy.jpg"
                alt="Mapa Oficial EXPO JUJUY"
                width={1600}
                height={1200}
                className="w-full h-full object-contain select-none pointer-events-none bg-white"
                onError={(event) => { event.currentTarget.src = "/expojuy-mapa.jpeg"; }}
              />

              {/* Marcadores / Pins de Exhibidores */}
              {filteredExhibitors.map((exhibitor) => {
                const isSelected = selectedExhibitor?.id === exhibitor.id;

                return (
                  <div
                    key={exhibitor.id}
                    className="absolute z-20 cursor-pointer -translate-x-1/2 -translate-y-1/2 group/pin"
                    style={{ left: `${exhibitor.x}%`, top: `${exhibitor.y}%` }}
                    onClick={() => {
                      setSelectedExhibitor(exhibitor);
                      setWayfindingActive(true);
                    }}
                  >
                    {/* Anillos de selección activados */}
                    {isSelected && (
                      <>
                        <motion.div
                          animate={{ scale: [1, 2.4, 1], opacity: [0.8, 0.15, 0.8] }}
                          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                          className="absolute -inset-3 rounded-full blur-md bg-sky-400"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.8, 1], opacity: [1, 0.3, 1] }}
                          transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }}
                          className="absolute -inset-1.5 rounded-full bg-sky-300"
                        />
                      </>
                    )}

                    {/* Pin del Stand */}
                    <div
                      className={`relative transition-all duration-300 cursor-pointer flex items-center justify-center p-0 bg-transparent ${isSelected
                          ? "scale-130 z-30 drop-shadow-[0_0_10px_rgba(56,189,248,0.9)]"
                          : "hover:scale-115 hover:z-20 drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)]"
                        }`}
                    >
                      {exhibitor.logoUrl ? (
                        <img
                          src={exhibitor.logoUrl}
                          alt={exhibitor.name}
                          className="w-7 h-7 object-contain pointer-events-none"
                        />
                      ) : (
                        <span className="text-[10px] font-black text-slate-900 bg-white/90 px-1 rounded shadow-sm">
                          {exhibitor.standNumber}
                        </span>
                      )}
                    </div>

                    {/* Popover al pasar el cursor (Hover) */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 hidden group-hover/pin:flex flex-col gap-1 w-44 p-2.5 bg-slate-900/95 border border-sky-500/40 rounded-2xl shadow-2xl backdrop-blur-md pointer-events-none z-40 transition-all duration-200">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 font-bold border border-sky-500/30">
                          Stand {exhibitor.standNumber}
                        </span>
                        <span className="text-[9px] text-slate-400 truncate max-w-[80px]">{exhibitor.category}</span>
                      </div>
                      <p className="text-xs font-bold text-white truncate mt-0.5">{exhibitor.name}</p>
                      <p className="text-[10px] text-slate-300 truncate">{exhibitor.country}</p>

                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900/95" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Leyenda Inferior */}
            <div className="absolute bottom-4 left-4 z-30 bg-slate-950/85 backdrop-blur-md border border-white/10 rounded-xl p-3 text-xs text-slate-300 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-sky-400" />
                <span>Stands Visibles ({filteredExhibitors.length})</span>
              </div>
            </div>
          </div>

          {/* Panel Lateral de Detalle del Exhibidor */}
          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              {selectedExhibitor ? (
                <motion.div
                  key={selectedExhibitor.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-slate-900 border border-white/10 rounded-3xl p-6 relative overflow-hidden backdrop-blur-md shadow-2xl"
                >
                  <button
                    onClick={() => {
                      setSelectedExhibitor(null);
                      setWayfindingActive(false);
                    }}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/60 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="relative h-44 -mx-6 -mt-6 mb-4 overflow-hidden">
                    <img
                      src={selectedExhibitor.imageUrl}
                      alt={selectedExhibitor.name}
                      className="w-full h-full object-cover"
                      onError={(event) => { event.currentTarget.src = "/news/expojuy-networking.png"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-semibold">
                      {selectedExhibitor.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10 text-xs font-semibold">
                      Stand {selectedExhibitor.standNumber}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{selectedExhibitor.name}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">{selectedExhibitor.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-slate-950/60 p-3 rounded-2xl border border-white/5">
                      <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                        <Globe className="w-3.5 h-3.5 text-sky-400" />
                        <span>Origen</span>
                      </div>
                      <span className="text-sm font-bold text-white">{selectedExhibitor.country}</span>
                    </div>

                    <div className="bg-slate-950/60 p-3 rounded-2xl border border-white/5">
                      <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                        <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Ubicación</span>
                      </div>
                      <span className="text-sm font-bold text-white">Stand {selectedExhibitor.standNumber}</span>
                    </div>
                  </div>

                </motion.div>
              ) : (
                <div className="bg-slate-900/50 border border-dashed border-white/10 rounded-3xl p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
                  <Sparkles className="w-10 h-10 text-sky-400/50 mb-3 animate-pulse" />
                  <h4 className="text-lg font-bold text-white mb-1">Selecciona un Exhibidor</h4>
                  <p className="text-slate-400 text-xs max-w-xs leading-relaxed">
                    Toca cualquier pin sobre la imagen del mapa para ver los datos completos de la empresa, su rubro y cómo llegar.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
