import React from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { InternshipsSection } from './sections/InternshipsSection';
import { EducationSection } from './sections/EducationSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { ContactSection } from './sections/ContactSection';
import { useActiveSection } from './hooks/useActiveSection';

const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'projects',
  'internships',
  'education',
  'certifications',
  'contact'
];

export const App: React.FC = () => {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* Persistent Glassmorphism Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full overflow-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <InternshipsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Recruiter-friendly Footer */}
      <Footer />
    </div>
  );
};

export default App;
