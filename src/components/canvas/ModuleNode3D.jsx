import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

export function ModuleNode3D({ moduleData, onSelectModule, mousePos }) {
  const groupRef = useRef();
  const meshRef = useRef();
  const ringRef = useRef();
  const [hovered, setHovered] = useState(false);

  const { id, title, position, color, glowColor, icon, badge } = moduleData;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!groupRef.current) return;

    // Unique floating zero gravity oscillation per module
    const phaseOffset = position[0] * 0.5 + position[1] * 0.3;
    const floatY = position[1] + Math.sin(time * 1.4 + phaseOffset) * 0.35;
    const floatX = position[0] + Math.cos(time * 1.1 + phaseOffset) * 0.25;

    groupRef.current.position.y = floatY;
    groupRef.current.position.x = floatX;

    // Mouse magnetic pull towards node on hover
    if (hovered) {
      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, position[2] + 1.2, 0.1);
    } else {
      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, position[2], 0.05);
    }

    // Mesh rotation
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.4 + phaseOffset;
      meshRef.current.rotation.y = time * 0.6 + phaseOffset;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = time * -0.9;
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation();
        onSelectModule(moduleData);
      }}
    >
      {/* Central Interactive Module Geometry */}
      <mesh ref={meshRef} scale={hovered ? 1.35 : 1.0}>
        {id === 'lead-management' && <octahedronGeometry args={[1.1, 0]} />}
        {id === 'campaign-automation' && <icosahedronGeometry args={[1.0, 0]} />}
        {id === 'calling-communication' && <sphereGeometry args={[1.0, 16, 16]} />}
        {id === 'smart-reminders' && <torusGeometry args={[0.9, 0.3, 16, 32]} />}
        {id === 'marketing-integrations' && <dodecahedronGeometry args={[1.0, 0]} />}
        {id === 'cloud-crm' && <cylinderGeometry args={[0.9, 1.1, 0.8, 8]} />}

        <meshStandardMaterial
          color={color}
          emissive={glowColor}
          emissiveIntensity={hovered ? 1.6 : 0.6}
          roughness={0.2}
          metalness={0.8}
          wireframe={false}
        />
      </mesh>

      {/* Orbiting Ring indicator */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.7, 0.02, 16, 64]} />
        <meshBasicMaterial color={glowColor} transparent opacity={hovered ? 0.9 : 0.4} />
      </mesh>

      {/* Outer Halo */}
      <mesh scale={hovered ? 1.5 : 1.1}>
        <sphereGeometry args={[1.2, 16, 16]} />
        <meshBasicMaterial color={glowColor} transparent opacity={hovered ? 0.25 : 0.08} />
      </mesh>

      {/* HTML Spatial Label Overlay */}
      <Html position={[0, -1.8, 0]} center distanceFactor={16}>
        <div
          className={`glass-panel ${hovered ? 'scale-105' : ''}`}
          style={{
            padding: '8px 14px',
            borderRadius: '12px',
            background: hovered ? 'rgba(13, 43, 69, 0.95)' : 'rgba(8, 21, 38, 0.85)',
            border: `1px solid ${hovered ? glowColor : 'rgba(0, 184, 169, 0.3)'}`,
            textAlign: 'center',
            cursor: 'pointer',
            minWidth: '160px',
            transition: 'all 0.2s ease-out'
          }}
          onClick={() => onSelectModule(moduleData)}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginBottom: '2px' }}>
            <span style={{ fontSize: '1rem' }}>{icon}</span>
            <span style={{ fontWeight: '700', fontSize: '0.85rem', color: '#ffffff' }}>{title}</span>
          </div>
          {badge && (
            <span style={{ fontSize: '0.72rem', color: glowColor, fontWeight: '600', display: 'block' }}>
              {badge}
            </span>
          )}
        </div>
      </Html>
    </group>
  );
}
