"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsCard from "@/components/ui/NewsCard";
import { newsData } from "@/lib/data";

export default function NewsSection() {
  return (
    <section id="noticias" className="section-padding container-custom">
      <SectionHeading 
        title="Noticias y Novedades" 
        subtitle="Las últimas actualizaciones de ExpoJuy 2026" 
      />

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {newsData.map((news, index) => (
          <NewsCard key={news.id} news={news} index={index} />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4">
        {newsData.map((news, index) => (
          <div key={news.id} className="min-w-[280px] snap-center">
            <NewsCard news={news} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
