import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function MillenniumFalcon() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={[0.8, 0.8, 0.8]} rotation={[Math.PI / 2, 0, 0]}>
      {/* Main body */}
      <mesh>
        <cylinderGeometry args={[1, 1, 0.1, 32]} />
        <meshStandardMaterial color="#D0D0D0" roughness={0.7} metalness={0.3} />
      </mesh>

      {/* Cockpit */}
      <mesh position={[0.9, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.15, 16]} />
        <meshStandardMaterial color="#A0A0A0" roughness={0.5} metalness={0.5} />
      </mesh>

      {/* Mandibles */}
      <mesh position={[1.3, 0.4, 0]}>
        <boxGeometry args={[0.8, 0.2, 0.05]} />
        <meshStandardMaterial color="#C0C0C0" roughness={0.6} metalness={0.4} />
      </mesh>
      <mesh position={[1.3, -0.4, 0]}>
        <boxGeometry args={[0.8, 0.2, 0.05]} />
        <meshStandardMaterial color="#C0C0C0" roughness={0.6} metalness={0.4} />
      </mesh>

      {/* Rear indentation */}
      <mesh position={[-0.6, 0, 0.05]}>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 32]} />
        <meshStandardMaterial color="#B0B0B0" roughness={0.5} metalness={0.5} />
      </mesh>

      {/* Side corridors */}
      <mesh position={[0, 0.9, 0.05]}>
        <boxGeometry args={[1.6, 0.2, 0.05]} />
        <meshStandardMaterial color="#A9A9A9" roughness={0.6} metalness={0.4} />
      </mesh>
      <mesh position={[0, -0.9, 0.05]}>
        <boxGeometry args={[1.6, 0.2, 0.05]} />
        <meshStandardMaterial color="#A9A9A9" roughness={0.6} metalness={0.4} />
      </mesh>

      {/* Circular details */}
      {[-0.5, 0, 0.5].map((x, i) => (
        <mesh key={i} position={[x, 0, 0.06]}>
          <cylinderGeometry args={[0.15, 0.15, 0.02, 16]} />
          <meshStandardMaterial color="#808080" roughness={0.4} metalness={0.6} />
        </mesh>
      ))}

      {/* Additional surface details */}
      {[...Array(30)].map((_, i) => (
        <mesh key={i} position={[
          (Math.random() - 0.5) * 1.8,
          (Math.random() - 0.5) * 1.8,
          0.06
        ]}>
          <boxGeometry args={[0.05, 0.05, 0.01]} />
          <meshStandardMaterial color="#B0B0B0" roughness={0.5} metalness={0.5} />
        </mesh>
      ))}
    </group>
  );
}