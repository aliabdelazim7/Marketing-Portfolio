import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveTicker } from './components/LiveTicker';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
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
          <CaseStudiesSection />
          <AboutSection />
          <ExpertiseSection />
          <ExperienceTimeline />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
