import React, { useState } from 'react';
import { ExternalLink, Github, Cpu, Globe, Info, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { FishFarmCanvas } from '../components/FishFarmCanvas';
import { ProjectModal } from '../components/ProjectModal';
import { PROJECTS, ProjectItem } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const iotProject = PROJECTS.find((p) => p.id === 'aquaculture-iot');
  const webProject = PROJECTS.find((p) => p.id === 'portfolio-website');

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Portfolio Work"
          title="Featured Projects"
          subtitle="Real academic engineering and software projects reflecting practical hardware interfacing and responsive web development."
        />

        <div className="space-y-16">
          {/* PROJECT 1: Smart Aquaculture IoT System */}
          {iotProject && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono text-cyan-300 mb-2 shadow-neon-blue">
                    <Cpu className="w-3.5 h-3.5" />
                    {iotProject.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {iotProject.title}
                  </h3>
                  <p className="text-sm text-cyan-400 mt-1">{iotProject.subtitle}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(iotProject)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 text-xs font-semibold shadow-sm transition"
                  >
                    <Info className="w-3.5 h-3.5" />
                    Deep Technical Specs
                  </button>
                  <a
                    href={iotProject.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold transition"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                </div>
              </div>

              {/* 3D-Inspired Aquaculture Visualizer */}
              <FishFarmCanvas />

              {/* Feature Highlights & Technology Badges Card */}
              <GlassCard className="p-6 sm:p-8" glowColor="cyan">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-7 space-y-4">
                    <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400">
                      System Architecture & Problem Solved
                    </h4>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {iotProject.shortDescription}
                    </p>
                    <div className="space-y-2 pt-2">
                      {iotProject.features.slice(0, 4).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-800/80 pt-6 md:pt-0 md:pl-8 space-y-4">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                        Hardware Stack
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {iotProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900/90 text-cyan-300 border border-cyan-900/50 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400">
                      <strong className="text-slate-200 block mb-1">Project Milestone:</strong>
                      {iotProject.statusNote}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          )}

          {/* PROJECT 2: Personal Portfolio Website */}
          {webProject && (
            <div className="space-y-6 pt-4">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/80 border border-violet-500/40 text-xs font-mono text-violet-300 mb-2 shadow-neon-violet">
                    <Globe className="w-3.5 h-3.5" />
                    {webProject.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {webProject.title}
                  </h3>
                  <p className="text-sm text-violet-400 mt-1">{webProject.subtitle}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(webProject)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-violet-300 border border-violet-500/30 text-xs font-semibold shadow-sm transition"
                  >
                    <Info className="w-3.5 h-3.5" />
                    View Details
                  </button>
                  <a
                    href={webProject.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold transition"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Miniature Browser Mockup & Interactive Website Preview */}
              <div className="rounded-2xl border border-violet-500/30 overflow-hidden bg-slate-950 shadow-2xl">
                {/* Browser Top Chrome / Title Bar */}
                <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-4 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400 max-w-sm w-full text-center truncate">
                    https://potluriharish.dev &bull; responsive portfolio
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="font-mono text-[11px] hidden sm:inline">LIVE</span>
                  </div>
                </div>

                {/* Browser Inner Showcase Body */}
                <div className="p-6 sm:p-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-violet-400 block font-semibold">
                      Modern Frontend Engineering
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                      Tailored Developer Experience with Real-Time Interactivity
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {webProject.shortDescription}
                    </p>
                    <div className="space-y-2 pt-1">
                      {webProject.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual UI Preview Card */}
                  <div className="md:col-span-5">
                    <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-glass-card space-y-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono text-cyan-300">Frontend Stack</span>
                        <span className="font-mono text-slate-400">Pure Web Tech</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {webProject.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-lg bg-violet-950/70 border border-violet-700/50 text-violet-200 text-xs font-mono font-semibold"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                        Designed with accessibility, semantic hierarchy, and mobile responsive adaptation from 320px screens up to 4K displays.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
