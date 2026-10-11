import React from 'react';
import { Calendar, Building, CheckCircle2, Award } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { INTERNSHIPS } from '../data/portfolioData';

export const InternshipsSection: React.FC = () => {
  return (
    <section id="internships" className="py-20 md:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Industry Exposure"
          title="Internships & Learning"
          subtitle="Structured virtual internship programs certified by AICTE-EduSkills and supported by Google for Developers."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Central Neon Spine */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-400 via-violet-500 to-blue-500 -translate-x-1/2 shadow-neon-blue hidden sm:block" />

          <div className="space-y-12">
            {INTERNSHIPS.map((internship, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={internship.id}
                  className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Timeline Milestone Node */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-cyan-400 items-center justify-center shadow-neon-blue z-20">
                    <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2">
                    <GlassCard
                      className="p-6 sm:p-7"
                      glowColor={isEven ? 'cyan' : 'violet'}
                      enableTilt
                    >
                      {/* Badge / Duration */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                          {internship.programLength} &bull; {internship.mode}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{internship.duration}</span>
                        </div>
                      </div>

                      {/* Role & Org */}
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {internship.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-xs text-slate-300">
                        <Building className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="font-semibold text-white">{internship.organization}</span>
                        <span className="text-slate-500">&bull;</span>
                        <span className="text-violet-300 font-mono">Supported by {internship.support}</span>
                      </div>

                      {/* Description */}
                      <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {internship.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="mt-4 pt-4 border-t border-slate-800 space-y-2">
                        {internship.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Footer Badge */}
                      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span className="flex items-center gap-1.5 text-cyan-300">
                          <Award className="w-3.5 h-3.5" />
                          AICTE-EduSkills Virtual Program
                        </span>
                        <span className="text-slate-400">India Edu Program</span>
                      </div>
                    </GlassCard>
                  </div>

                  {/* Empty placeholder spacer for the alternate side */}
                  <div className="hidden sm:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
