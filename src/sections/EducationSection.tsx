import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { EDUCATION } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-88 h-88 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Foundations"
          title="Academic Journey"
          subtitle="Education credentials and verified scholastic milestones from secondary school to undergraduate engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION.map((edu, idx) => {
            const isLatest = idx === 0;
            return (
              <GlassCard
                key={edu.id}
                className="p-6 sm:p-7 flex flex-col justify-between"
                glowColor={isLatest ? 'cyan' : idx === 1 ? 'violet' : 'blue'}
                enableTilt
              >
                <div>
                  {/* Top Badge & Year */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-xs font-mono font-medium px-3 py-1 rounded-full border ${
                        isLatest
                          ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40 shadow-neon-blue'
                          : 'bg-slate-900 text-slate-300 border-slate-800'
                      }`}
                    >
                      {isLatest ? 'Current Degree' : 'Completed'}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {/* Degree Name */}
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-cyan-300/90 font-medium mt-1">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-3">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>

                  {/* Score Highlight Box */}
                  <div className="mt-4 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">{edu.scoreLabel}</span>
                    <span className="text-sm font-bold font-mono text-white bg-slate-900 px-2.5 py-0.5 rounded-md border border-slate-700">
                      {edu.scoreValue}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>VERIFIED RECORD</span>
                  <span className="text-cyan-400">&bull; ACCREDITED</span>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
