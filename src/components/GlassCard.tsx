import React, { useRef, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
  glowColor?: 'cyan' | 'violet' | 'blue';
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  enableTilt = false,
  glowColor = 'cyan',
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const reducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || reducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const glowBorderClasses = {
    cyan: isHovered ? 'border-cyan-400/50 shadow-neon-blue' : 'border-slate-800/80',
    violet: isHovered ? 'border-violet-500/50 shadow-neon-violet' : 'border-slate-800/80',
    blue: isHovered ? 'border-blue-400/50 shadow-neon-blue' : 'border-slate-800/80'
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform:
          enableTilt && !reducedMotion && isHovered
            ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px)`
            : undefined,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out, border-color 0.3s, box-shadow 0.3s'
      }}
      className={`glass-panel rounded-2xl border transition-all duration-300 relative overflow-hidden ${glowBorderClasses[glowColor]} ${className}`}
    >
      {/* Subtle top glare highlight */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent pointer-events-none" />
      {children}
    </div>
  );
};
