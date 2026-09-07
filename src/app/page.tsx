import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import AgendaSection from '@/components/sections/AgendaSection';
import NewsSection from '@/components/sections/NewsSection';
import MapSection from '@/components/sections/MapSection';
import TicketsSection from '@/components/sections/TicketsSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import ContactSection from '@/components/sections/ContactSection';
import AIAssistant from '@/components/ui/AIAssistant';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="hybrid-content">
        <AboutSection />
        <AgendaSection />
        <NewsSection />
        <MapSection />
        <TicketsSection />
        <SponsorsSection />
        <ContactSection />
      </div>
      <AIAssistant />
    </>
  );
}
