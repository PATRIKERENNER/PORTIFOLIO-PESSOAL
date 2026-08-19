import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { PublicationsAwards } from './components/PublicationsAwards';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#1B1B18] selection:bg-[#A68B6E] selection:text-[#F8F7F4]">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <SkillsSection />
        <TimelineSection />
        <PublicationsAwards />
        <ContactSection />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
