import React from 'react';
import { Code2, Layout, Server, Wrench, Users, Check, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  // Map category names to icons
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Frontend Development':
        return <Layout className="w-5 h-5 text-sky-400" />;
      case 'Backend Development':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Developer Tools':
        return <Wrench className="w-5 h-5 text-violet-400" />;
      case 'Soft Skills':
        return <Users className="w-5 h-5 text-purple-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Capabilities"
          title="Technical Arsenal"
          subtitle="Honest, descriptive overview of academic and hands-on technical competencies without exaggerated progress bars."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <GlassCard
              key={cat.category}
              className="p-6 flex flex-col justify-between"
              glowColor={idx % 2 === 0 ? 'cyan' : 'violet'}
              enableTilt
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shadow-sm">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-wide">
                      {cat.category}
                    </h3>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="h-px w-full bg-slate-800/80 my-4" />

                {/* Skill Items */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-900/90 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 group-hover:scale-125 transition-transform" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-950 text-cyan-300/90 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Tag Footer */}
              <div className="mt-5 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>VERIFIED RESUME SKILL</span>
                <span className="text-cyan-400">&bull; ACTIVE</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
