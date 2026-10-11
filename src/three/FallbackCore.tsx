import React from 'react';

/**
 * Fallback static/CSS component when WebGL is unavailable,
 * reduced motion is requested, or while 3D assets load.
 */
export const FallbackCore: React.FC = () => {
  return (
    <div className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] flex items-center justify-center">
      {/* Outer ambient glow */}
      <div className="absolute w-72 h-72 sm:w-88 sm:h-88 bg-gradient-to-tr from-cyan-500/20 via-violet-600/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      {/* Futuristic concentric orbital rings */}
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
        {/* Ring 1 */}
        <div className="absolute inset-0 border border-cyan-400/40 rounded-full animate-spin-slow shadow-neon-blue" 
             style={{ borderStyle: 'dashed', animationDuration: '24s' }} />

        {/* Ring 2 (Tilted) */}
        <div className="absolute inset-4 border border-violet-500/40 rounded-full animate-spin shadow-neon-violet"
             style={{ borderStyle: 'solid', animationDuration: '32s', animationDirection: 'reverse' }} />

        {/* Inner geometric core */}
        <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-cyan-500/30 via-slate-900/80 to-violet-600/30 border border-cyan-300/40 backdrop-blur-md flex flex-col items-center justify-center text-center p-4 shadow-glass-card">
          <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-neon-blue animate-ping mb-2" />
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-semibold">
            HARISH // 3D CORE
          </span>
          <span className="text-[10px] text-slate-400 mt-1 font-mono">
            IoT &bull; Web &bull; AI
          </span>
        </div>

        {/* Satellite nodes */}
        <div className="absolute top-2 left-1/4 w-3 h-3 rounded-full bg-violet-400 shadow-neon-violet" />
        <div className="absolute bottom-4 right-1/4 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-neon-blue" />
        <div className="absolute top-1/2 -right-2 w-2 h-2 rounded-full bg-blue-300" />
      </div>
    </div>
  );
};
