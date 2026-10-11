import React from 'react';
import { GraduationCap, Cpu, Target, CheckCircle2, Sparkles, Compass } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Background"
          title="About Me"
          subtitle="A dedicated final-year student pursuing Computer Science, combining foundational engineering logic with hands-on project exploration."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Statement & Bio Card */}
          <div className="lg:col-span-7 space-y-6">
            <GlassCard className="p-6 sm:p-8" glowColor="cyan">
              <div className="flex items-center gap-3 mb-4 text-cyan-400">
                <Compass className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-semibold">
                  Professional Profile
                </span>
              </div>

              <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                "{PERSONAL_INFO.aboutText}"
              </blockquote>

              <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 font-mono block">Institution</span>
                  <span className="text-white font-medium">QIS College of Engg.</span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono block">Specialization</span>
                  <span className="text-white font-medium">Computer Science</span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono block">Graduation</span>
                  <span className="text-cyan-300 font-medium">Expected 2027</span>
                </div>
              </div>
            </GlassCard>

            {/* Core Commitments Pill List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Foundations in Core CS, OOP & Web</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Hands-on IoT & Sensor Interfacing</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                <span>AICTE-EduSkills Virtual Internships</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Continuous Learner & Collaborative Mindset</span>
              </div>
            </div>
          </div>

          {/* Three Attractive Information Cards + Orbiting Visual */}
          <div className="lg:col-span-5 space-y-4">
            {/* Education Card */}
            <GlassCard className="p-5" glowColor="blue" enableTilt>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 shrink-0 shadow-neon-blue">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block">
                    Academic Pillar
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5">Education</h3>
                  <p className="text-xs text-cyan-300 font-medium mt-0.5">
                    B.Tech Computer Science &bull; Expected 2027
                  </p>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    QIS College of Engineering and Technology, Ongole. Cumulative 7.08 CGPA across first three academic years.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Practical Learning Card */}
            <GlassCard className="p-5" glowColor="violet" enableTilt>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-violet-950/80 border border-violet-500/40 text-violet-400 shrink-0 shadow-neon-violet">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-violet-400 block">
                    Applied Practice
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5">Practical Learning</h3>
                  <p className="text-xs text-violet-300 font-medium mt-0.5">
                    Academic Projects & Virtual Internships
                  </p>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Virtual internships supported by Google for Developers in AI-ML & Android. Smart aquaculture IoT prototype.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Career Goal Card */}
            <GlassCard className="p-5" glowColor="cyan" enableTilt>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-sky-950/80 border border-sky-500/40 text-sky-400 shrink-0 shadow-neon-blue">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 block">
                    Aspiration
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5">Career Goal</h3>
                  <p className="text-xs text-sky-300 font-medium mt-0.5">
                    Entry-Level IT Roles & Continuous Growth
                  </p>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Seeking roles where I can contribute foundational programming knowledge, adapt quickly to corporate stacks, and solve real challenges.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
