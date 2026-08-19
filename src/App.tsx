import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TrustFaqSection } from './components/TrustFaqSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { PublicationsAwards } from './components/PublicationsAwards';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#1B1B18] selection:bg-[#A68B6E] selection:text-[#F8F7F4] relative">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <ProjectsSection />
        <TrustFaqSection />
        <AboutSection />
        <SkillsSection />
        <TimelineSection />
        <PublicationsAwards />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      {/* Vercel Telemetry & Real-time Web Vitals Analytics */}
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
