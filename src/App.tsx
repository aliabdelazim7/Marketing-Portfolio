import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveTicker } from './components/LiveTicker';
import { AboutSection } from './components/AboutSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { MethodologySection } from './components/MethodologySection';
import { UnitEconomicsSimulator } from './components/UnitEconomicsSimulator';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans selection:bg-accent selection:text-white overflow-x-hidden w-full max-w-[100vw]">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <LiveTicker />
          <AboutSection />
          <CaseStudiesSection />
          <ExpertiseSection />
          <MethodologySection />
          <UnitEconomicsSimulator />
          <ExperienceTimeline />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
