import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { HolographicCore } from './HolographicCore';
import { ParticleField } from './ParticleField';
import { FallbackCore } from './FallbackCore';
import { useReducedMotion } from '../hooks/useReducedMotion';

/**
 * Checks whether WebGL is supported by the client browser.
 */
function isWebGLSupported(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

interface HeroCanvasProps {
  className?: string;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ className = '' }) => {
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setHasWebGL(isWebGLSupported());
  }, []);

  // Graceful fallback if WebGL is unavailable or encounters render error
  if (!hasWebGL || hasError) {
    return <FallbackCore />;
  }

  return (
    <div className={`relative w-full h-[360px] sm:h-[440px] md:h-[500px] lg:h-[540px] ${className}`}>
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <Suspense fallback={<FallbackCore />}>
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
          onError={() => setHasError(true)}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          {/* Cyan and Violet Multi-point Studio Lighting */}
          <ambientLight intensity={0.5} />
          
          {/* Electric Blue Key Light */}
          <directionalLight position={[4, 5, 3]} intensity={1.5} color="#00f0ff" />
          
          {/* Electric Violet Rim Light */}
          <directionalLight position={[-4, -4, -2]} intensity={1.8} color="#a855f7" />
          
          {/* Deep Navy/Indigo Fill Light */}
          <pointLight position={[0, -3, 2]} intensity={0.9} color="#3b82f6" />
          <pointLight position={[2, 3, -2]} intensity={1.2} color="#ec4899" />

          {/* 3D Core Structure */}
          <HolographicCore reducedMotion={reducedMotion} />

          {/* Floating Stardust Particles */}
          <ParticleField count={reducedMotion ? 50 : 130} />
        </Canvas>
      </Suspense>

      {/* Subtle interaction indicator for desktop */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[11px] font-mono tracking-wider text-slate-400/80 pointer-events-none hidden sm:flex items-center gap-1.5 bg-slate-900/60 px-3 py-1 rounded-full border border-slate-700/50 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        Interactive 3D Hologram &bull; Move mouse to tilt
      </div>
    </div>
  );
};
