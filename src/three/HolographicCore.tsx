import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface HolographicCoreProps {
  reducedMotion?: boolean;
}

/**
 * Interactive 3D Holographic Core
 * Features:
 * - Inner glowing faceted icosahedron
 * - Outer wireframe dodecahedron
 * - Concentric tilted glowing orbital rings
 * - Mouse-driven subtle parallax tilt
 * - Smooth rotation and breathing scale effect
 */
export const HolographicCore: React.FC<HolographicCoreProps> = ({ reducedMotion = false }) => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (reducedMotion) return;

    const t = state.clock.getElapsedTime();
    const { pointer } = state; // Normalized mouse coordinates [-1, 1]

    if (groupRef.current) {
      // Subtle mouse tracking interpolation (smooth dampening)
      const targetRotX = pointer.y * 0.45;
      const targetRotY = pointer.x * 0.6;

      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotX,
        0.05
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotY,
        0.05
      );

      // Subtle vertical floating oscillation
      groupRef.current.position.y = Math.sin(t * 1.5) * 0.08;
    }

    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.4;
      coreRef.current.rotation.z += delta * 0.2;
      // Gentle breathing scale
      const scale = 1 + Math.sin(t * 2) * 0.04;
      coreRef.current.scale.set(scale, scale, scale);
    }

    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * 0.25;
      wireRef.current.rotation.x += delta * 0.15;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.5;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.x += delta * 0.35;
      ring2Ref.current.rotation.y -= delta * 0.35;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Solid-Glow Icosahedron */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshPhysicalMaterial
          color="#00f0ff"
          emissive="#06b6d4"
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.8}
          clearcoat={0.9}
          clearcoatRoughness={0.1}
          wireframe={false}
          flatShading={true}
        />
      </mesh>

      {/* Outer Wireframe Lattice */}
      <mesh ref={wireRef}>
        <dodecahedronGeometry args={[1.65, 0]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#8b5cf6"
          emissiveIntensity={0.7}
          wireframe
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* Orbit Ring 1 - Cyan Torus */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.0, 0.025, 16, 100]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Orbit Ring 2 - Violet Torus */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.3, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#c084fc"
          emissive="#a855f7"
          emissiveIntensity={0.85}
          roughness={0.2}
        />
      </mesh>

      {/* Orbit Ring 3 - Electric Blue Outer Horizon */}
      <mesh ref={ring3Ref} rotation={[0, Math.PI / 3, Math.PI / 4]}>
        <torusGeometry args={[2.6, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={0.75}
          roughness={0.3}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Micro Orbiting Satellite Beads */}
      <mesh position={[1.8, 0.8, 0.5]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial color="#00f0ff" />
      </mesh>
      <mesh position={[-1.7, -0.9, -0.6]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#d946ef" />
      </mesh>
      <mesh position={[0.4, 2.1, -0.8]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>
    </group>
  );
};
