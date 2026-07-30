import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

export function HeroBrandAnchor({ mousePos, onOpenDemo }) {
  const groupRef = useRef();
  const ringRef1 = useRef();
  const ringRef2 = useRef();
  const coreRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!groupRef.current) return;

    // Zero-gravity float calculation
    const floatY = Math.sin(time * 1.5) * 0.4;
    const floatX = Math.cos(time * 1.2) * 0.2;
    groupRef.current.position.y = floatY;
    groupRef.current.position.x = floatX;

    // Mouse tilt interaction
    const targetRotX = (mousePos.current.y * 0.4);
    const targetRotY = (mousePos.current.x * 0.4) + (time * (hovered ? 0.8 : 0.3));

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);

    // Orbiting energy rings counter-rotation
    if (ringRef1.current) ringRef1.current.rotation.z = time * 0.8;
    if (ringRef2.current) ringRef2.current.rotation.x = time * -0.6;
    if (coreRef.current) {
      const scale = 1 + Math.sin(time * 3) * 0.08 + (hovered ? 0.25 : 0);
      coreRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group
      ref={groupRef}
      position={[0, 0.5, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onOpenDemo}
      style={{ cursor: 'pointer' }}
    >
      {/* Central Luminous Core Mesh */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial
          color="#00b8a9"
          emissive="#00f2fe"
          emissiveIntensity={hovered ? 1.5 : 0.8}
          roughness={0.1}
          metalness={0.9}
          wireframe={false}
        />
      </mesh>

      {/* Infinity Connected Node Left Loop (Navy) */}
      <mesh position={[-0.75, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
        <torusGeometry args={[0.95, 0.22, 24, 64]} />
        <meshStandardMaterial
          color="#0d2b45"
          emissive="#0f3456"
          emissiveIntensity={0.6}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Infinity Connected Node Right Loop (Teal) */}
      <mesh position={[0.75, 0, 0]} rotation={[0, -Math.PI / 4, 0]}>
        <torusGeometry args={[0.95, 0.22, 24, 64]} />
        <meshStandardMaterial
          color="#00b8a9"
          emissive="#00b8a9"
          emissiveIntensity={0.9}
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>

      {/* Outer Orbital Energy Ring 1 */}
      <mesh ref={ringRef1}>
        <torusGeometry args={[2.2, 0.03, 16, 100]} />
        <meshBasicMaterial color="#00f2fe" transparent opacity={0.65} />
      </mesh>

      {/* Outer Orbital Energy Ring 2 */}
      <mesh ref={ringRef2} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.6, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00b8a9" transparent opacity={0.45} />
      </mesh>

      {/* Hover Callout Tag */}
      {hovered && (
        <Html position={[0, -2.2, 0]} center distanceFactor={15}>
          <div className="glass-panel" style={{ padding: '8px 16px', border: '1px solid #00f2fe', borderRadius: '20px', whiteSpace: 'nowrap', pointerEvents: 'none' }}>
            <span style={{ color: '#00f2fe', fontWeight: '700', fontSize: '0.85rem' }}>✨ OneConnect 360° Core Engine — Click to Book Demo</span>
          </div>
        </Html>
      )}
    </group>
  );
}
