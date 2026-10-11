import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Cpu, CheckCircle2, AlertCircle } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click listener */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100"
      >
        {/* Header & Close Button */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="inline-block text-xs font-mono font-medium uppercase px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 mb-2">
              {project.category}
            </span>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white leading-snug">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-cyan-400 mt-1">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6">
          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Project Overview
            </h4>
            <div className="space-y-2 text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.fullDescription.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Key Implemented / Proposed Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
              System Features & Technical Capabilities
            </h4>
            <ul className="space-y-2.5">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hardware Specifications if available */}
          {project.hardwareDetails && project.hardwareDetails.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-violet-300 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-violet-400" />
                Hardware Components & Circuit Breakdown
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {project.hardwareDetails.map((hw, idx) => (
                  <li key={idx} className="flex items-center gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    <span>{hw}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Stack Tags */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Technologies & Tools Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-800/80 text-cyan-300 border border-slate-700/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Academic & Verification Note */}
          <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-200/90 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong>Verification Note:</strong> {project.statusNote}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-slate-800 pt-4 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-400 italic">
            {project.links.note}
          </span>
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-medium transition"
              >
                <Github className="w-4 h-4" />
                GitHub Repository
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition shadow-neon-blue"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
