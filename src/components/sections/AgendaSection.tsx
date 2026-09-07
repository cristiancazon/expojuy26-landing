'use client';

import { useState } from 'react';

const days = [
  { number: '23', name: 'Día 1', events: [
    ['09:00 – 10:00', 'Inauguración Oficial', 'Apertura con autoridades nacionales e internacionales. Bienvenida a expositores y visitantes de todo el continente.'],
    ['10:30 – 12:30', 'Panel: Comercio Regional', 'Oportunidades de exportación en Latinoamérica. Casos de éxito y estrategias de penetración de mercados.'],
    ['14:00 – 16:00', 'Workshop: Digitalización', 'Transformación digital para PyMEs. Herramientas y metodologías para la modernización empresarial.'],
    ['17:00 – 19:00', 'Networking Session', 'Encuentros con compradores internacionales y nuevas conexiones comerciales.'],
  ]},
  { number: '24', name: 'Día 2', events: [
    ['09:00 – 10:30', 'Keynote: Inteligencia Artificial', 'El impacto de la IA en la industria regional. Experiencias prácticas y casos de implementación exitosa.'],
    ['11:00 – 13:00', 'Mesa Redonda: Sustentabilidad', 'Economía circular y desarrollo sostenible en el Norte Argentino. Experiencias de empresas líderes.'],
    ['14:30 – 16:30', 'Workshop: Exportación', 'Pasos concretos para internacionalizar tu empresa: documentación, logística y financiación.'],
    ['18:00 – 21:00', 'Cena de Gala', 'Evento exclusivo con premiación a las empresas innovadoras de la región.'],
  ]},
  { number: '25', name: 'Día 3', events: [
    ['09:00 – 11:00', 'Feria de Empleo', 'Conectando talento con oportunidades. Empresas de la región buscan profesionales calificados.'],
    ['11:30 – 13:30', 'Panel: Futuro del Comercio', 'Tendencias y proyecciones para el comercio internacional en Sudamérica 2027–2030.'],
    ['15:00 – 17:00', 'Clausura y Networking Final', 'Últimas conexiones, intercambio de contactos y clausura oficial de ExpoJuy 2026.'],
  ]},
];

export default function AgendaSection() {
  const [active, setActive] = useState(0);
  return (
    <section id="cronograma" className="mati-section mati-agenda">
      <div className="mati-section-heading"><span>Agenda</span><h2>Cronograma <em>2026</em></h2><p>3 días intensos de conferencias y networking</p></div>
      <div className="agenda-layout">
        <div className="agenda-days" role="tablist" aria-label="Días del cronograma">
          {days.map((day, index) => <button key={day.number} role="tab" aria-selected={active === index} onClick={() => setActive(index)} className={active === index ? 'active' : ''}><strong>{day.number}</strong><span><b>{day.name}</b><small>Octubre 2026</small></span></button>)}
        </div>
        <div className="agenda-events" role="tabpanel">
          {days[active].events.map(([time, title, description]) => <article key={title}><time>{time}</time><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </div>
    </section>
  );
}
