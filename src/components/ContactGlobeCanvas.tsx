import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

/**
 * Animated 3D Wireframe Connected-Node Globe
 * Renders an abstract glowing telecommunication globe with connected network nodes,
 * pulse beams, and smooth rotation beside the contact section.
 */
export const ContactGlobeCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let angleY = 0;
    let angleX = 0.3; // Slight tilt
    const radius = 110;
    const nodeCount = 36;

    // Generate latitude/longitude node coordinates on sphere
    const nodes: { phi: number; theta: number; size: number; color: string }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        phi: Math.acos(-1 + (2 * i) / nodeCount),
        theta: Math.sqrt(nodeCount * Math.PI) * i,
        size: 2.2 + (i % 3) * 0.8,
        color: i % 3 === 0 ? '#00f0ff' : i % 3 === 1 ? '#a855f7' : '#38bdf8'
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Outer radial glow
      const grad = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.2,
        centerX,
        centerY,
        radius * 1.3
      );
      grad.addColorStop(0, 'rgba(0, 240, 255, 0.08)');
      grad.addColorStop(0.5, 'rgba(168, 85, 247, 0.05)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Transform 3D sphere points into 2D screen coordinates
      const projected = nodes.map((n) => {
        const x3 = radius * Math.sin(n.phi) * Math.cos(n.theta + angleY);
        const y3 = radius * Math.sin(n.phi) * Math.sin(n.theta + angleY);
        const z3 = radius * Math.cos(n.phi);

        // Apply X-axis tilt
        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);
        const yRot = y3 * cosX - z3 * sinX;
        const zRot = y3 * sinX + z3 * cosX;

        // Perspective division
        const fov = 350;
        const scale = fov / (fov + zRot);
        const x2d = centerX + x3 * scale;
        const y2d = centerY + yRot * scale;

        return {
          x: x2d,
          y: y2d,
          z: zRot,
          size: n.size * scale,
          color: n.color
        };
      });

      // Sort by depth (back to front)
      projected.sort((a, b) => a.z - b.z);

      // Draw connection lines between nearby nodes
      ctx.lineWidth = 0.75;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 52) {
            const alpha = Math.max(0, (1 - dist / 52) * 0.35);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      projected.forEach((p) => {
        // Node halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}33`;
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      // Central core dot
      ctx.beginPath();
      ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;

      if (!reducedMotion) {
        angleY += 0.008;
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationId);
  }, [reducedMotion]);

  return (
    <div className="relative w-full max-w-[320px] aspect-square mx-auto flex items-center justify-center">
      <canvas
        ref={canvasRef}
        width={320}
        height={320}
        className="w-full h-full object-contain pointer-events-none"
      />
      <div className="absolute -bottom-2 text-center w-full">
        <span className="text-[11px] font-mono text-cyan-400 bg-slate-950/80 px-3 py-1 rounded-full border border-cyan-500/20 shadow-sm">
          Open to Global Opportunities
        </span>
      </div>
    </div>
  );
};
