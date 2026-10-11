import React from 'react';
import { ArrowRight, FileDown, Mail, MapPin, Sparkles, Github, Linkedin } from 'lucide-react';
import { HeroCanvas } from '../three/HeroCanvas';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/10 via-violet-600/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text & CTA Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-neon-blue">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Available for Entry-Level IT Roles</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <span className="text-sm sm:text-base font-mono text-slate-400 uppercase tracking-widest block">
                Welcome to my digital space
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent drop-shadow-sm">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
            </div>

            {/* Headline Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-cyan-300/90 leading-relaxed">
              {PERSONAL_INFO.headline}
            </p>

            {/* Tagline */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              "{PERSONAL_INFO.tagline}"
            </p>

            {/* Verification Metadata Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/70 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/70 border border-slate-800 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                CGPA: 7.08 (First 3 Years)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/70 border border-slate-800 font-mono">
                Graduation: 2027
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-neon-blue transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Potluri_Harish_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-cyan-200 hover:text-white border border-cyan-500/40 hover:border-cyan-400 font-semibold text-sm tracking-wide shadow-glass-card transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Secondary Contact Link & Socials */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors underline underline-offset-4 decoration-cyan-500/40 hover:decoration-cyan-400"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>Have a role or question? Contact Me</span>
              </a>

              <div className="flex items-center gap-3 pl-2 border-l border-slate-800">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white transition"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right 3D Centerpiece Scene */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-md lg:max-w-none relative">
              <HeroCanvas />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
