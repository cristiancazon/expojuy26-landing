export interface AgendaItem {
  id: string;
  time: string;
  title: string;
  speaker: string;
  category: "charla" | "taller" | "panel" | "networking";
  description: string;
}

export interface AgendaDay {
  day: number;
  date: string;
  label: string;
  items: AgendaItem[];
}

export interface Exhibitor {
id: string;
  name: string;
  category: string;
  country: string;
  standNumber: string;
  description: string;
  x: number; // Coordenada X (%) para el mapa
  y: number; // Coordenada Y (%) para el mapa
  imageUrl: string;
  logoUrl?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface TicketPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
}

export interface MapPavilion {
  id: string;
  name: string;
  x: number;
  y: number;
  description: string;
}

export interface AIMessage {
  id: string;
  question: string;
  answer: string;
}

// ─── Agenda Data ───────────────────────────────────────────────

export const agendaData: AgendaDay[] = [
  {
    day: 1,
    date: "23 de Octubre, 2026",
    label: "Día 1 — Innovación y Tecnología",
    items: [
      {
        id: "d1-1",
        time: "09:00",
        title: "Ceremonia de Apertura",
        speaker: "Comité Organizador ExpoJuy",
        category: "charla",
        description:
          "Bienvenida oficial y presentación de la edición 2026 de ExpoJuy.",
      },
      {
        id: "d1-2",
        time: "10:00",
        title: "El Futuro de la Economía del Conocimiento en el NOA",
        speaker: "Dra. María Fernanda López",
        category: "charla",
        description:
          "Análisis del ecosistema tecnológico y las oportunidades en el norte argentino.",
      },
      {
        id: "d1-3",
        time: "11:30",
        title: "Taller de Inteligencia Artificial Aplicada",
        speaker: "Ing. Carlos Quispe",
        category: "taller",
        description:
          "Manos a la obra con herramientas de IA para emprendedores.",
      },
      {
        id: "d1-4",
        time: "14:00",
        title: "Panel: Inversión en Startups del Norte Argentino",
        speaker: "Varios ponentes",
        category: "panel",
        description:
          "Mesa redonda con inversores y fundadores exitosos de la región.",
      },
      {
        id: "d1-5",
        time: "16:00",
        title: "Networking & Coffee Break",
        speaker: "Espacio abierto",
        category: "networking",
        description:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
      },
    ],
  },
  {
    day: 2,
    date: "24 de Octubre, 2026",
    label: "Día 2 — Emprendedurismo Sustentable",
    items: [
      {
        id: "d2-1",
        time: "09:30",
        title: "Economía Circular y Tecnología Verde",
        speaker: "Lic. Andrea Mamani",
        category: "charla",
        description:
          "Cómo la tecnología puede impulsar prácticas sustentables en Jujuy.",
      },
      {
        id: "d2-2",
        time: "11:00",
        title: "Taller de E-Commerce para PyMEs",
        speaker: "Mg. Roberto Sánchez",
        category: "taller",
        description:
          "Estrategias digitales para vender online desde el NOA al mundo.",
      },
      {
        id: "d2-3",
        time: "14:00",
        title: "Energías Renovables: Oportunidades en el Altiplano",
        speaker: "Ing. Soledad Flores",
        category: "charla",
        description:
          "El potencial solar y litio de Jujuy como motor de innovación.",
      },
      {
        id: "d2-4",
        time: "15:30",
        title: "Panel: Mujeres en Tecnología",
        speaker: "Diversas referentes",
        category: "panel",
        description:
          "Experiencias y desafíos de mujeres líderes en el sector tech jujeño.",
      },
      {
        id: "d2-5",
        time: "17:00",
        title: "Pitch Night — Ronda de Inversión",
        speaker: "Startups seleccionadas",
        category: "networking",
        description:
          "Las startups más prometedoras presentan sus proyectos ante inversores.",
      },
    ],
  },
  {
    day: 3,
    date: "25 de Octubre, 2026",
    label: "Día 3 — Conexión y Futuro",
    items: [
      {
        id: "d3-1",
        time: "09:00",
        title: "Blockchain y Fintech en Latinoamérica",
        speaker: "Dr. Alejandro Ruiz",
        category: "charla",
        description:
          "El estado actual y futuro de las finanzas descentralizadas.",
      },
      {
        id: "d3-2",
        time: "10:30",
        title: "Taller de Desarrollo de Apps Móviles",
        speaker: "Dev. Lucía Herrera",
        category: "taller",
        description:
          "Creación de aplicaciones móviles con tecnologías open-source.",
      },
      {
        id: "d3-3",
        time: "13:00",
        title: "Turismo Digital: Vendiendo Jujuy al Mundo",
        speaker: "Lic. Martín Vilca",
        category: "charla",
        description:
          "Estrategias digitales para posicionar a Jujuy como destino turístico tech.",
      },
      {
        id: "d3-4",
        time: "15:00",
        title: "Hackathon Express — Desafío Final",
        speaker: "Equipos participantes",
        category: "taller",
        description:
          "Competencia relámpago para resolver un desafío tecnológico en 2 horas.",
      },
      {
        id: "d3-5",
        time: "18:00",
        title: "Ceremonia de Cierre y Premiación",
        speaker: "Comité Organizador",
        category: "charla",
        description:
          "Entrega de premios, conclusiones del evento y cierre oficial.",
      },
    ],
  },
];

// ─── Exhibitors Data ───────────────────────────────────────────

export const exhibitorsData: Exhibitor[] = [
  // ================= SECCIÓN A =================
  {
    id: "exp-a01",
    name: "TechExport",
    category: "Soluciones Tecnológicas",
    country: "🇦🇷 Argentina",
    standNumber: "A-01",
    description: "Desarrollo y exportación de software, soluciones cloud y consultoría IT.",
    x: 31.0,
    y: 9.5,
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
  },
  {
    id: "exp-a03",
    name: "Conectividad Norte",
    category: "Telecomunicaciones",
    country: "🇦🇷 Argentina",
    standNumber: "A-03",
    description: "Despliegue de fibra óptica e internet satelital para zonas rurales y mineras.",
    x: 36.5,
    y: 9.5,
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
  },
  {
    id: "exp-a05",
    name: "BioNorte",
    category: "Biotecnología",
    country: "🇦🇷 Argentina",
    standNumber: "A-05",
    description: "Investigación aplicada a bioinsumos para el agro y salud animal.",
    x: 42.0,
    y: 9.5,
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
  },
  {
    id: "exp-a08",
    name: "Semillas Andes",
    category: "Semillas",
    country: "🇦🇷 Argentina",
    standNumber: "A-08",
    description: "Mejoramiento genético de semillas adaptadas a condiciones de aridez y altura.",
    x: 50.5,
    y: 9.5,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
  },
  {
    id: "exp-a10",
    name: "LithiumPlus",
    category: "Energía",
    country: "🇦🇷 Argentina",
    standNumber: "A-10",
    description: "Tecnología de valor agregado para el procesamiento y refinación de litio.",
    x: 56.0,
    y: 9.5,
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
  },
  {
    id: "exp-a12",
    name: "EcoVida",
    category: "Sostenibilidad",
    country: "🇧🇴 Bolivia",
    standNumber: "A-12",
    description: "Consultoría de huella de carbono y economía circular para empresas.",
    x: 61.5,
    y: 9.5,
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
  },
  {
    id: "exp-a15",
    name: "Madera del Norte",
    category: "Forestal",
    country: "🇦🇷 Argentina",
    standNumber: "A-15",
    description: "Gestión forestal sostenible y productos madereros certificados.",
    x: 70.0,
    y: 9.5,
    imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400&h=300&fit=crop",
  },
  {
    id: "exp-a17",
    name: "Cerámica Norte",
    category: "Cerámica",
    country: "🇦🇷 Argentina",
    standNumber: "A-17",
    description: "Materiales cerámicos de alta resistencia para revestimientos e industria.",
    x: 76.0,
    y: 9.5,
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
  },
  {
    id: "exp-a19",
    name: "InduNorte",
    category: "Manufactura Industrial",
    country: "🇦🇷 Argentina",
    standNumber: "A-19",
    description: "Fabricación de insumos metálicos y equipamiento para la industria regional.",
    x: 81.5,
    y: 9.5,
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
  },
  {
    id: "exp-a20",
    name: "AquaNorte",
    category: "Acuicultura",
    country: "🇦🇷 Argentina",
    standNumber: "A-20",
    description: "Piscicultura sustentable y producción de truchas en ambientes de altura.",
    x: 31.5,
    y: 37.0,
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop",
  },
  {
    id: "exp-a22",
    name: "TurismoActivo",
    category: "Turismo",
    country: "🇦🇷 Argentina",
    standNumber: "A-22",
    description: "Operador de turismo corporativo, MICE y experiencias de naturaleza.",
    x: 34.5,
    y: 41.0,
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
  },

  // ================= SECCIÓN B =================
  {
    id: "exp-b02",
    name: "Minera del Norte",
    category: "Minería Sustentable",
    country: "🇨🇱 Chile",
    standNumber: "B-02",
    description: "Tecnología de extracción limpia y remediación ambiental para proyectos mineros.",
    x: 36.0,
    y: 14.5,
    imageUrl: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b05",
    name: "Finanzas del Norte",
    category: "Finanzas",
    country: "🇦🇷 Argentina",
    standNumber: "B-05",
    description: "Servicios bursátiles, fideicomisos financieros y microfinanzas regional.",
    x: 36.0,
    y: 20.0,
    imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b07",
    name: "LogiFast",
    category: "Logística Internacional",
    country: "🇵🇾 Paraguay",
    standNumber: "B-07",
    description: "Transporte multimodal y gestión de cadenas de suministro transfronterizas.",
    x: 42.0,
    y: 15.0,
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b12",
    name: "TextilNorte",
    category: "Textil",
    country: "🇦🇷 Argentina",
    standNumber: "B-12",
    description: "Producción textil con fibras naturales autóctonas de camélidos.",
    x: 47.0,
    y: 19.0,
    imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b19",
    name: "Orgánicos del Valle",
    category: "Orgánicos",
    country: "🇧🇴 Bolivia",
    standNumber: "B-19",
    description: "Producción y certificación de frutas y hortalizas orgánicas de valles andinos.",
    x: 44.0,
    y: 22.0,
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b20",
    name: "SolarBright",
    category: "Energía Renovable",
    country: "🇧🇷 Brasil",
    standNumber: "B-20",
    description: "Soluciones fotovoltaicas de alta eficiencia para parques industriales.",
    x: 48.0,
    y: 16.0,
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b22",
    name: "Cobre Verde",
    category: "Medio Ambiente",
    country: "🇨🇱 Chile",
    standNumber: "B-22",
    description: "Procesos sostenibles y desalinización para la industria minera.",
    x: 52.5,
    y: 15.0,
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b26",
    name: "MetalMecánica",
    category: "Metalurgia",
    country: "🇨🇱 Chile",
    standNumber: "B-26",
    description: "Mecanizado de precisión y estructuras pesadas para el sector minero.",
    x: 55.0,
    y: 18.0,
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b32",
    name: "QuimicosAndes",
    category: "Química",
    country: "🇦🇷 Argentina",
    standNumber: "B-32",
    description: "Suministro de reactivos químicos para la extracción de minerales y litio.",
    x: 60.0,
    y: 22.0,
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b37",
    name: "AgroSur",
    category: "Agricultura de Precisión",
    country: "🇦🇷 Argentina",
    standNumber: "B-37",
    description: "Drones, mapeo satelital y telemetría aplicada a cultivos extensivos.",
    x: 58.0,
    y: 27.0,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b42",
    name: "SmartFarm",
    category: "AgTech",
    country: "🇺🇾 Uruguay",
    standNumber: "B-42",
    description: "Software de gestión integral de fincas y monitoreo hídrico.",
    x: 62.5,
    y: 15.5,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b45",
    name: "FrigoExport",
    category: "Cadena de Frío",
    country: "🇦🇷 Argentina",
    standNumber: "B-45",
    description: "Servicios de almacenamiento refrigerado y logística de frío para exportación.",
    x: 65.0,
    y: 20.0,
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b54",
    name: "VinoAndes",
    category: "Viticultura",
    country: "🇦🇷 Argentina",
    standNumber: "B-54",
    description: "Vinos de extrema altura producidos en la Quebrada de Humahuaca.",
    x: 71.0,
    y: 16.0,
    imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b58",
    name: "AlimentosNorte",
    category: "Alimentos",
    country: "🇧🇴 Bolivia",
    standNumber: "B-58",
    description: "Procesamiento de superalimentos andinos como quinua, kiwicha y amarantos.",
    x: 70.0,
    y: 19.0,
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b60",
    name: "Artesanías del Norte",
    category: "Artesanía",
    country: "🇦🇷 Argentina",
    standNumber: "B-60",
    description: "Cooperativa de artesanos locales comercializando piezas autóctonas de diseño.",
    x: 39.0,
    y: 26.0,
    imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b63",
    name: "Bodega Alta",
    category: "Vinos",
    country: "🇦🇷 Argentina",
    standNumber: "B-63",
    description: "Elaboración artesanal de vinos varietales de viñedos a más de 2500m de altura.",
    x: 41.5,
    y: 28.5,
    imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b72",
    name: "CopperTech",
    category: "Metalurgia",
    country: "🇨🇱 Chile",
    standNumber: "B-72",
    description: "Insumos y refinería especializada de cobre y aleaciones de alta pureza.",
    x: 50.0,
    y: 26.5,
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b78",
    name: "Mineral Andes",
    category: "Minería",
    country: "🇦🇷 Argentina",
    standNumber: "B-78",
    description: "Exploración y desarrollo de yacimientos minerales no metalíferos.",
    x: 53.5,
    y: 25.0,
    imageUrl: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b83",
    name: "ConstructionHub",
    category: "Construcción",
    country: "🇧🇴 Bolivia",
    standNumber: "B-83",
    description: "Sistemas constructivos modulados e infraestructura para la minería.",
    x: 52.0,
    y: 28.5,
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b88",
    name: "Bioenergía",
    category: "Bioenergía",
    country: "🇦🇷 Argentina",
    standNumber: "B-88",
    description: "Generación de energía limpia a partir de biomasa y residuos agroindustriales.",
    x: 45.5,
    y: 31.0,
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b93",
    name: "Energía Solar Jujuy",
    category: "Energía Solar",
    country: "🇦🇷 Argentina",
    standNumber: "B-93",
    description: "Desarrollo de proyectos solares térmicos y fotovoltaicos a gran escala.",
    x: 48.5,
    y: 33.0,
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b97",
    name: "Cadena Productiva",
    category: "Distribución",
    country: "🇦🇷 Argentina",
    standNumber: "B-97",
    description: "Red de distribución logística e integración de proveedores locales.",
    x: 57.0,
    y: 35.0,
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b99",
    name: "PlasticosVerdes",
    category: "Reciclaje",
    country: "🇧🇷 Brasil",
    standNumber: "B-99",
    description: "Transformación de polímeros reciclados para empaques industriales.",
    x: 53.0,
    y: 38.0,
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b103",
    name: "Pesca Continental",
    category: "Pesca",
    country: "🇨🇱 Chile",
    standNumber: "B-103",
    description: "Tecnología para el cultivo sustentable y procesamiento de recursos acuícolas.",
    x: 61.0,
    y: 38.5,
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b105",
    name: "Transporte Andino",
    category: "Transporte",
    country: "🇦🇷 Argentina",
    standNumber: "B-105",
    description: "Flotas especializadas en caminos de alta montaña y cargas peligrosas.",
    x: 46.0,
    y: 37.0,
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
  },
  {
    id: "exp-b108",
    name: "SalMineral",
    category: "Minerales",
    country: "🇦🇷 Argentina",
    standNumber: "B-108",
    description: "Extracción y refinación de sales industriales de las Salinas Grandes.",
    x: 44.0,
    y: 41.0,
    imageUrl: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=400&h=300&fit=crop",
  },

  // ================= SECCIÓN C =================
  {
    id: "exp-c01",
    name: "AgroJuy",
    category: "Agroindustria Regional",
    country: "🇦🇷 Argentina",
    standNumber: "C-01",
    description: "Procesamiento y comercialización de productos agrícolas del NOA.",
    x: 83.0,
    y: 21.5,
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop",
  },
  {
    id: "exp-c02",
    name: "Café de altura",
    category: "Café",
    country: "🇧🇴 Bolivia",
    standNumber: "C-02",
    description: "Granos de café orgánico de especialidad producidos en la yunga andina.",
    x: 83.0,
    y: 25.0,
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop",
  },
  {
    id: "exp-c03",
    name: "TechExport",
    category: "Soluciones Tecnológicas",
    country: "🇦🇷 Argentina",
    standNumber: "C-03",
    description: "Plataformas de automatización agrícola y software para exportación.",
    x: 83.0,
    y: 28.5,
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
  },
  {
    id: "exp-c04",
    name: "Orgánicos del Valle",
    category: "Orgánicos",
    country: "🇧🇴 Bolivia",
    standNumber: "C-04",
    description: "Certificación y exportación de cereales y frutas andinas orgánicas.",
    x: 80.0,
    y: 31.0,
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop",
  },
  {
    id: "exp-c06",
    name: "Semillas Andes",
    category: "Semillas",
    country: "🇦🇷 Argentina",
    standNumber: "C-06",
    description: "Variedades híbridas de alto rendimiento en zonas áridas.",
    x: 83.0,
    y: 32.5,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
  },
  {
    id: "exp-c09",
    name: "TextilNorte",
    category: "Textil",
    country: "🇦🇷 Argentina",
    standNumber: "C-09",
    description: "Prendas de vicuña y llama con sello de origen regional.",
    x: 77.5,
    y: 33.5,
    imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400&h=300&fit=crop",
  },
  {
    id: "exp-c12",
    name: "AlimentosNorte",
    category: "Alimentos",
    country: "🇧🇴 Bolivia",
    standNumber: "C-12",
    description: "Snacks saludables y harinas derivadas de granos ancestrales.",
    x: 83.0,
    y: 36.0,
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop",
  },
  {
    id: "exp-c13",
    name: "Artesanías del Norte",
    category: "Artesanía",
    country: "🇦🇷 Argentina",
    standNumber: "C-13",
    description: "Diseño contemporáneo aplicado a técnicas textiles y cerámicas tradicionales.",
    x: 75.0,
    y: 36.0,
    imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400&h=300&fit=crop",
  },
  {
    id: "exp-c15",
    name: "Bodega Alta",
    category: "Vinos",
    country: "🇦🇷 Argentina",
    standNumber: "C-15",
    description: "Catas guiadas de vinos de extrema altura y maridajes regionales.",
    x: 80.0,
    y: 36.0,
    imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
  },
  {
    id: "exp-c18",
    name: "TurismoActivo",
    category: "Turismo",
    country: "🇦🇷 Argentina",
    standNumber: "C-18",
    description: "Rutas enoturísticas y circuitos culturales en la Quebrada de Humahuaca.",
    x: 80.0,
    y: 38.5,
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
  },
  {
    id: "exp-c22",
    name: "AquaNorte",
    category: "Acuicultura",
    country: "🇦🇷 Argentina",
    standNumber: "C-22",
    description: "Productos gourmet derivados de trucha de manantial andino.",
    x: 75.0,
    y: 41.5,
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop",
  },
  {
    id: "exp-c25",
    name: "Cerámica Norte",
    category: "Cerámica",
    country: "🇦🇷 Argentina",
    standNumber: "C-25",
    description: "Revestimientos ecológicos y piezas cerámicas de valor arquitectónico.",
    x: 83.0,
    y: 41.5,
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
  },

  // ================= SECCIÓN D =================
  {
    id: "exp-d01",
    name: "BancoComex",
    category: "Finanzas Comerciales",
    country: "🇺🇾 Uruguay",
    standNumber: "D-01",
    description: "Financiamiento de comercio exterior y garantías internacionales para PYMEs.",
    x: 9.0,
    y: 38.5,
    imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
  },
  {
    id: "exp-d02",
    name: "Ministerio de la Producción",
    category: "Institucional",
    country: "🇦🇷 Argentina",
    standNumber: "D-02",
    description: "Pabellón principal de desarrollo productivo e innovación provincial.",
    x: 9.0,
    y: 45.5,
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?w=400&h=300&fit=crop",
  },
  {
    id: "exp-d03",
    name: "Finanzas del Norte",
    category: "Finanzas",
    country: "🇦🇷 Argentina",
    standNumber: "D-03",
    description: "Servicios de inversión, créditos de fomento e inclusión financiera.",
    x: 9.0,
    y: 52.5,
    imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
  },
  {
    id: "exp-d04",
    name: "SolarBright",
    category: "Energía Renovable",
    country: "🇧🇷 Brasil",
    standNumber: "D-04",
    description: "Instalación de grandes parques fotovoltaicos industriales y baterías.",
    x: 9.0,
    y: 58.5,
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
  },
  {
    id: "exp-d05",
    name: "Conectividad Norte",
    category: "Telecomunicaciones",
    country: "🇦🇷 Argentina",
    standNumber: "D-05",
    description: "Infraestructura crítica de datos para faenas mineras y agrícolas.",
    x: 20.5,
    y: 20.0,
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
  },
  {
    id: "exp-d06a",
    name: "QuimicosAndes",
    category: "Química",
    country: "🇦🇷 Argentina",
    standNumber: "D-06a",
    description: "Soluciones químicas e insumos seguros para tratamiento de aguas.",
    x: 17.5,
    y: 40.5,
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
  },
  {
    id: "exp-d06b",
    name: "MetalMecánica",
    category: "Metalurgia",
    country: "🇨🇱 Chile",
    standNumber: "D-06b",
    description: "Mantenimiento y repuestos de alta durabilidad para maquinaria pesada.",
    x: 17.5,
    y: 46.5,
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop",
  },
  {
    id: "exp-d07",
    name: "LithiumPlus",
    category: "Energía",
    country: "🇦🇷 Argentina",
    standNumber: "D-07",
    description: "I+D en baterías de ion-litio para electromovilidad.",
    x: 24.5,
    y: 39.0,
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
  },
  {
    id: "exp-d08",
    name: "Minera del Norte",
    category: "Minería Sustentable",
    country: "🇨🇱 Chile",
    standNumber: "D-08",
    description: "Monitoreo ambiental continuo mediante redes IoT.",
    x: 24.5,
    y: 45.5,
    imageUrl: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=400&h=300&fit=crop",
  },
  {
    id: "exp-d09",
    name: "LogiFast",
    category: "Logística Internacional",
    country: "🇵🇾 Paraguay",
    standNumber: "D-09",
    description: "Depósitos aduaneros y logística de última milla.",
    x: 30.5,
    y: 53.5,
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
  },
  {
    id: "exp-d10",
    name: "Cadena Productiva",
    category: "Distribución",
    country: "🇦🇷 Argentina",
    standNumber: "D-10",
    description: "Centros de consolidación de carga en zonas fronterizas.",
    x: 34.5,
    y: 49.5,
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
  },
  {
    id: "exp-d14",
    name: "ConstructionHub",
    category: "Construcción",
    country: "🇧🇴 Bolivia",
    standNumber: "D-14",
    description: "Infraestructura rápida de campamentos industriales aislados.",
    x: 49.5,
    y: 50.5,
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop",
  },
  {
    id: "exp-d16",
    name: "InduNorte",
    category: "Manufactura Industrial",
    country: "🇦🇷 Argentina",
    standNumber: "D-16",
    description: "Estructuras metálicas de gran porte y calderería industrial.",
    x: 58.5,
    y: 49.0,
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
  },
  {
    id: "exp-d17",
    name: "Transporte Andino",
    category: "Transporte",
    country: "🇦🇷 Argentina",
    standNumber: "D-17",
    description: "Servicios de escolta logística y logística minera de alta exigencia.",
    x: 29.0,
    y: 59.5,
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
  },
  {
    id: "exp-d20",
    name: "Energía Solar Jujuy",
    category: "Energía Solar",
    country: "🇦🇷 Argentina",
    standNumber: "D-20",
    description: "Sistemas autónomos de generación solar para zonas sin red eléctrica.",
    x: 48.5,
    y: 59.5,
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
  },
  {
    id: "exp-d22",
    name: "EcoVida",
    category: "Sostenibilidad",
    country: "🇧🇴 Bolivia",
    standNumber: "D-22",
    description: "Gestión integral de residuos industriales y auditorías ambientales.",
    x: 62.5,
    y: 59.5,
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
  },
  {
    id: "exp-d25",
    name: "PlasticosVerdes",
    category: "Reciclaje",
    country: "🇧🇷 Brasil",
    standNumber: "D-25",
    description: "Líneas de empaques biodegradables para exportación hortícola.",
    x: 69.5,
    y: 59.5,
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
  },
  {
    id: "exp-d26",
    name: "FrigoExport",
    category: "Cadena de Frío",
    country: "🇦🇷 Argentina",
    standNumber: "D-26",
    description: "Contenedores reefer inteligentes con monitoreo satelital de temperatura.",
    x: 20.5,
    y: 67.0,
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
  },
  {
    id: "exp-d28",
    name: "Bioenergía",
    category: "Bioenergía",
    country: "🇦🇷 Argentina",
    standNumber: "D-28",
    description: "Proyectos de generación térmica y eléctrica con biomasa cañera.",
    x: 36.5,
    y: 67.0,
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
  },
  {
    id: "exp-d29",
    name: "Madera del Norte",
    category: "Forestal",
    country: "🇦🇷 Argentina",
    standNumber: "D-29",
    description: "Soluciones de embalaje de madera de alta resistencia para exportación.",
    x: 48.5,
    y: 67.0,
    imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400&h=300&fit=crop",
  },
  {
    id: "exp-d30",
    name: "AgroSur",
    category: "Agricultura de Precisión",
    country: "🇦🇷 Argentina",
    standNumber: "D-30",
    description: "Sistemas de riego inteligente y sensores de humedad de suelo.",
    x: 10.5,
    y: 74.5,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
  },
  {
    id: "exp-d31",
    name: "SmartFarm",
    category: "AgTech",
    country: "🇺🇾 Uruguay",
    standNumber: "D-31",
    description: "Trazabilidad blockchain para cadenas agrícolas de exportación.",
    x: 14.5,
    y: 74.5,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
  },
  {
    id: "exp-d32",
    name: "BioNorte",
    category: "Biotecnología",
    country: "🇦🇷 Argentina",
    standNumber: "D-32",
    description: "Inoculantes biológicos y fertilizantes de origen orgánico.",
    x: 18.5,
    y: 74.5,
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
  },
];

// ─── News Data ─────────────────────────────────────────────────

export const newsData: NewsItem[] = [
  {
    id: "news-1",
    title: "ExpoJuy 2026 abre la convocatoria para expositores",
    excerpt:
      "Ya podés inscribirte para mostrar tu emprendimiento en la feria tecnológica más grande del norte argentino.",
    date: "1 de Agosto, 2026",
    imageUrl: "/news/expojuy-networking.png",
    category: "Convocatoria",
  },
  {
    id: "news-2",
    title: "Confirmados los speakers internacionales",
    excerpt:
      "Referentes de Silicon Valley, São Paulo y Buenos Aires participarán en los paneles de ExpoJuy 2026.",
    date: "15 de Agosto, 2026",
    imageUrl: "/news/expojuy-speakers.png",
    category: "Speakers",
  },
  {
    id: "news-3",
    title: "Nuevo pabellón de Energías Renovables",
    excerpt:
      "Se incorpora un espacio dedicado exclusivamente a proyectos de energía solar y litio.",
    date: "22 de Agosto, 2026",
    imageUrl: "/news/expojuy-energia.png",
    category: "Novedades",
  },
  {
    id: "news-4",
    title: "Hackathon con premios de \$500.000",
    excerpt:
      "El Hackathon Express del último día repartirá medio millón de pesos en premios para los mejores proyectos.",
    date: "28 de Agosto, 2026",
    imageUrl: "/news/expojuy-networking.png",
    category: "Competencias",
  },
];

// ─── Tickets Data ──────────────────────────────────────────────

export const ticketsData: TicketPlan[] = [
  {
    id: "ticket-general",
    name: "General",
    price: 5000,
    currency: "ARS",
    features: [
      "Acceso a los 3 días del evento",
      "Entrada a charlas principales",
      "Acceso a la zona de expositores",
      "Coffee break incluido",
      "Certificado digital de asistencia",
    ],
    highlighted: false,
  },
  {
    id: "ticket-vip",
    name: "VIP",
    price: 12000,
    currency: "ARS",
    features: [
      "Todo lo incluido en General",
      "Acceso a talleres exclusivos",
      "Asiento preferencial en paneles",
      "Kit de bienvenida ExpoJuy",
      "Networking lunch con speakers",
      "Acceso al Pitch Night",
    ],
    highlighted: true,
    badge: "Más Popular",
  },
  {
    id: "ticket-premium",
    name: "Premium",
    price: 25000,
    currency: "ARS",
    features: [
      "Todo lo incluido en VIP",
      "Meet & Greet con speakers",
      "Acceso backstage",
      "Estacionamiento reservado",
      "Cena de gala de clausura",
      "Mentoring 1-a-1 con inversores",
      "Grabaciones de todas las charlas",
    ],
    highlighted: false,
  },
];

// ─── Map Pavilions ─────────────────────────────────────────────

export const mapPavilions: MapPavilion[] = [
  {
    id: "pab-1",
    name: "Pabellón Central",
    x: 50,
    y: 40,
    description: "Charlas principales y paneles",
  },
  {
    id: "pab-2",
    name: "Pabellón Tecnología",
    x: 25,
    y: 30,
    description: "Startups de software y apps",
  },
  {
    id: "pab-3",
    name: "Pabellón Sustentabilidad",
    x: 75,
    y: 30,
    description: "Energías renovables y economía circular",
  },
  {
    id: "pab-4",
    name: "Zona de Talleres",
    x: 30,
    y: 65,
    description: "Workshops y hackathon",
  },
  {
    id: "pab-5",
    name: "Food Court & Networking",
    x: 70,
    y: 65,
    description: "Gastronomía y espacio de networking",
  },
  {
    id: "pab-6",
    name: "Pabellón Educativo",
    x: 50,
    y: 75,
    description: "Universidades y centros de formación",
  },
];

// ─── AI Assistant Data ─────────────────────────────────────────

export const aiMessages: AIMessage[] = [
  {
    id: "ai-1",
    question: "¿Cuándo es ExpoJuy 2026?",
    answer:
      "ExpoJuy 2026 se realizará del 23 al 25 de octubre de 2026 en San Salvador de Jujuy. ¡Te esperamos!",
  },
  {
    id: "ai-2",
    question: "¿Cómo compro entradas?",
    answer:
      'Podés comprar entradas desde la sección "Entradas" de esta página. Tenemos planes General, VIP y Premium. El pago se realiza de forma 100% segura.',
  },
  {
    id: "ai-3",
    question: "¿Hay estacionamiento?",
    answer:
      "Sí, el Centro de Convenciones cuenta con estacionamiento. Las entradas Premium incluyen estacionamiento reservado. Para otros planes, hay estacionamiento público cercano.",
  },
  {
    id: "ai-4",
    question: "¿Puedo ser expositor?",
    answer:
      'Sí, la convocatoria para expositores está abierta. Podés completar el formulario en la sección de "Contacto" o escribirnos a expositores@expojuy.com.ar.',
  },
  {
    id: "ai-5",
    question: "¿Qué incluye la entrada VIP?",
    answer:
      "La entrada VIP incluye acceso a talleres exclusivos, asiento preferencial, kit de bienvenida, networking lunch con speakers y acceso al Pitch Night. ¡Es nuestra opción más popular!",
  },
];

// ─── Navigation Links ──────────────────────────────────────────

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Acerca", href: "#acerca" },
  { label: "Agenda", href: "#agenda" },
  { label: "Expositores", href: "#expositores" },
  { label: "Noticias", href: "#noticias" },
  { label: "Mapa", href: "#mapa" },
  { label: "Entradas", href: "#entradas" },
  { label: "Contacto", href: "#contacto" },
];

// ─── Category Colors ──────────────────────────────────────────

export const categoryColors: Record<string, string> = {
  charla: "bg-secondary/20 text-secondary",
  taller: "bg-success/20 text-success",
  panel: "bg-purple-500/20 text-purple-400",
  networking: "bg-accent/20 text-accent",
};

export const exhibitorCategories = [
  "Todos",
  "Textil",
  "Cadena de Frío",
  "Agroindustria Regional",
  "Vinos",
  "Reciclaje",
  "Minerales",
  "Cerámica",
  "Artesanía",
  "Pesca",
  "Transporte",
  "Turismo",
  "Alimentos",
  "Energía Solar",
  "Acuicultura",
];
