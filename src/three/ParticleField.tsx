import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
}

/**
 * Three.js particle constellation around the central holographic structure.
 */
export const ParticleField: React.FC<ParticleFieldProps> = ({ count = 140 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate particle positions and random offsets
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const colorCyan = new THREE.Color('#00f0ff');
    const colorViolet = new THREE.Color('#a855f7');
    const colorBlue = new THREE.Color('#3b82f6');

    for (let i = 0; i < count; i++) {
      // Spherical distribution around center
      const radius = 2.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      // Color variation between cyan, violet, and electric blue
      const mixRatio = Math.random();
      const chosenColor =
        mixRatio < 0.4 ? colorCyan : mixRatio < 0.75 ? colorViolet : colorBlue;

      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Slow orbital rotation
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};
