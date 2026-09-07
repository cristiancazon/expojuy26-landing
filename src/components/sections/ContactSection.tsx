"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Hide toast after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contacto" className="section-padding container-custom">
      <SectionHeading 
        title="Contacto" 
        subtitle="¿Tenés preguntas? Escribinos y te respondemos" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Column - Form */}
        <div className="relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-slate-300 mb-2">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-secondary text-slate-100 transition-colors"
                aria-label="Tu nombre completo"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-secondary text-slate-100 transition-colors"
                aria-label="Tu correo electrónico"
              />
            </div>

            <div>
              <label htmlFor="asunto" className="block text-sm font-medium text-slate-300 mb-2">Asunto</label>
              <select
                id="asunto"
                name="asunto"
                required
                value={formData.asunto}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-secondary text-slate-100 transition-colors appearance-none [&>option]:bg-slate-900"
                aria-label="Motivo de tu consulta"
              >
                <option value="" disabled>Seleccioná una opción</option>
                <option value="Consulta General">Consulta General</option>
                <option value="Quiero ser Expositor">Quiero ser Expositor</option>
                <option value="Prensa">Prensa</option>
                <option value="Sponsors">Sponsors</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-slate-300 mb-2">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                minLength={10}
                rows={5}
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-secondary text-slate-100 transition-colors resize-none"
                aria-label="Tu mensaje"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-primary w-full sm:w-auto px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity bg-success text-white"
            >
              <span>Enviar Mensaje</span>
              <Send className="w-5 h-5" />
            </button>
          </form>

          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-success/20 border border-success/50 p-6 rounded-2xl backdrop-blur-md flex flex-col items-center justify-center text-center shadow-2xl"
              >
                <CheckCircle className="w-12 h-12 text-success mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">¡Mensaje Enviado!</h4>
                <p className="text-slate-200">Gracias por contactarnos. Te responderemos a la brevedad.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column - Info & Social */}
        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-secondary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-200">Email</h4>
                  <a href="mailto:info@expojuy.com.ar" className="text-slate-400 hover:text-secondary transition-colors">info@expojuy.com.ar</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-secondary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-200">Teléfono</h4>
                  <a href="tel:+543881234567" className="text-slate-400 hover:text-secondary transition-colors">+54 388 123-4567</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-secondary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-200">Ubicación</h4>
                  <p className="text-slate-400">Centro de Convenciones, San Salvador de Jujuy</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Seguinos</h3>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-secondary hover:text-secondary text-slate-300 transition-all" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-secondary hover:text-secondary text-slate-300 transition-all" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-secondary hover:text-secondary text-slate-300 transition-all" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-secondary hover:text-secondary text-slate-300 transition-all" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
