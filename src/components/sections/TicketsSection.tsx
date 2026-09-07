"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TicketCard from "@/components/ui/TicketCard";
import { ticketsData } from "@/lib/data";

export default function TicketsSection() {
  return (
    <section id="entradas" className="section-padding container-custom relative bg-gradient-to-b from-transparent to-primary/5">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,58,138,0.1)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="relative z-10">
        <SectionHeading 
          title="Entradas" 
          subtitle="Elegí tu experiencia ExpoJuy 2026" 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {ticketsData.map((ticket, index) => (
            <div key={ticket.id} className={ticket.highlighted ? "md:scale-105 z-10" : "z-0"}>
              <TicketCard ticket={ticket} index={index} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-slate-400 text-sm max-w-2xl mx-auto text-center">
          <Shield className="w-5 h-5 text-success flex-shrink-0" aria-hidden="true" />
          <p>
            Todas las transacciones son procesadas de forma segura. Aceptamos tarjetas de crédito, débito y transferencias bancarias.
          </p>
        </div>
      </div>
    </section>
  );
}
