import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import AgendaSection from '@/components/sections/AgendaSection';
import NewsSection from '@/components/sections/NewsSection';
import MapSection from '@/components/sections/MapSection';
import TicketsSection from '@/components/sections/TicketsSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import ContactSection from '@/components/sections/ContactSection';
import AIAssistant from '@/components/ui/AIAssistant';
import MotionSection from '@/components/ui/MotionSection';
import ScrollProgress from '@/components/ui/ScrollProgress';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <HeroSection />
      <div className="hybrid-content">
        <MotionSection index={0}><AboutSection /></MotionSection>
        <MotionSection index={1}><AgendaSection /></MotionSection>
        <MotionSection index={2}><NewsSection /></MotionSection>
        <MotionSection index={3}><MapSection /></MotionSection>
        <MotionSection index={4}><TicketsSection /></MotionSection>
        <MotionSection index={5}><SponsorsSection /></MotionSection>
        <MotionSection index={6}><ContactSection /></MotionSection>
      </div>
      <AIAssistant />
    </>
  );
}
