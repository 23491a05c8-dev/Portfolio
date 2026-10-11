import React from 'react';
import { Award, Clock, Calendar, CheckCircle2, ExternalLink } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { CERTIFICATIONS } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Credentials"
          title="Certifications & Courses"
          subtitle="Specialized coursework completed through national academic portals and technical training."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CERTIFICATIONS.map((cert, idx) => (
            <GlassCard
              key={cert.id}
              className="p-6 sm:p-8 flex flex-col justify-between"
              glowColor={idx === 0 ? 'cyan' : 'violet'}
              enableTilt
            >
              <div>
                {/* Header Icon & Issuer */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 shadow-neon-blue">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                    {cert.issuer}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {cert.title}
                </h3>

                {/* Duration & Period */}
                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs font-mono text-slate-400">
                  {cert.duration && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{cert.duration}</span>
                    </div>
                  )}
                  {cert.period && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-violet-400" />
                      <span>{cert.period}</span>
                    </div>
                  )}
                  {cert.certifiedDate && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Certified: {cert.certifiedDate}</span>
                    </div>
                  )}
                </div>

                {/* Score highlight if available */}
                {cert.score && (
                  <div className="mt-4 p-3 rounded-xl bg-slate-950/80 border border-cyan-500/30 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-slate-400 block">Proctored Exam Score:</span>
                      {cert.scoreBreakdown && (
                        <span className="text-[10px] text-slate-400 font-mono">{cert.scoreBreakdown}</span>
                      )}
                    </div>
                    <span className="text-sm font-bold font-mono text-cyan-300 bg-cyan-950 px-2.5 py-0.5 rounded border border-cyan-800">
                      {cert.score}
                    </span>
                  </div>
                )}

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Status Note & Verification Link */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  Verified Completion
                </span>
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline font-mono flex items-center gap-1 text-[11px]"
                  >
                    <span>Verify Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-slate-400">
                    IIT Roorkee / Swayam
                  </span>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
