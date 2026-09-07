const rows = [
  [
    { name: 'Banco Nación', mark: 'BNA', color: '#1b365d' },
    { name: 'YPF', mark: 'YPF', color: '#0033a0' },
    { name: 'Telefónica', mark: 'T', color: '#0066cc' },
    { name: 'Mercado Libre', mark: 'ML', color: '#ffe600', dark: true },
  ],
  [
    { name: 'Globant', mark: 'G', color: '#1a1a2e' },
    { name: 'Arcor', mark: 'A', color: '#e60012' },
    { name: 'Molinera', mark: 'M', color: '#875a37' },
    { name: 'La Serenísima', mark: 'LS', color: '#007a33' },
  ],
  [
    { name: 'Frigorífico', mark: 'F', color: '#2274a5' },
    { name: 'Minera Alumbrera', mark: 'MA', color: '#2d2d2d' },
    { name: 'Cementera', mark: 'C', color: '#6b7280' },
    { name: 'Energía Jujuy', mark: 'EJ', color: '#f5a623', dark: true },
  ],
];

type Sponsor = (typeof rows)[number][number];

function SponsorLogo({ sponsor }: { sponsor: Sponsor }) {
  return (
    <svg viewBox="0 0 220 80" role="img" aria-label={sponsor.name} className="sponsor-logo">
      <rect x="4" y="8" width="212" height="64" rx="14" fill={sponsor.color} />
      <circle cx="43" cy="40" r="23" fill={sponsor.dark ? 'rgba(20,20,30,.1)' : 'rgba(255,255,255,.15)'} />
      <text x="43" y="47" textAnchor="middle" fontSize="20" fontWeight="900" fill={sponsor.dark ? '#202231' : '#fff'}>{sponsor.mark}</text>
      <text x="76" y="45" fontSize="15" fontWeight="800" fill={sponsor.dark ? '#202231' : '#fff'}>{sponsor.name.toUpperCase()}</text>
    </svg>
  );
}

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="mati-sponsors">
      <div className="mati-section-heading"><span>Aliados</span><h2>Nuestros <em>Sponsors</em></h2><p>Empresas que hacen posible ExpoJuy 2026</p></div>
      <div className="sponsor-rows">
        {rows.map((row, rowIndex) => (
          <div className="sponsor-window" key={rowIndex}>
            <div className={`sponsor-track ${rowIndex === 1 ? 'reverse' : ''}`}>
              {[...row, ...row, ...row].map((sponsor, index) => <div className="sponsor-card" key={`${sponsor.name}-${index}`}><SponsorLogo sponsor={sponsor} /></div>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
