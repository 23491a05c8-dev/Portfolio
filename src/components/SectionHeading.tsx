import React from 'react';

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center'
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {/* Badge */}
      <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 shadow-neon-blue mb-4`}>
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        {badge}
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
        <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={`mt-4 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}

      {/* Decorative Gradient Line */}
      <div className={`mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-blue-500 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};
