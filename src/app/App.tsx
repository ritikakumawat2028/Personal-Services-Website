import { HeroSection } from '@/app/components/HeroSection';
import { ServicesSection } from '@/app/components/ServicesSection';
import { TechStack } from '@/app/components/TechStack';
import { WhyChooseMe } from '@/app/components/WhyChooseMe';
import { ContactSection } from '@/app/components/ContactSection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <HeroSection />
      <ServicesSection />
      <TechStack />
      <WhyChooseMe />
      <ContactSection />
      <Footer />
    </div>
  );
}
