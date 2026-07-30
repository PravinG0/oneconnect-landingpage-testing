import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

const METRICS_DATA = [
  {
    id: 'conversion',
    value: '98%',
    label: 'Lead Conversion Rate',
    subtext: 'Turn cold inquiries into active deals',
    pos: [-12, 1.5, -4],
    color: '#00f2fe',
    icon: '⚡'
  },
  {
    id: 'response',
    value: '3×',
    label: 'Faster Response Time',
    subtext: 'Instant WhatsApp & Email engagement',
    pos: [12, 1.8, -4],
    color: '#00b8a9',
    icon: '🚀'
  },
  {
    id: 'businesses',
    value: '1,000+',
    label: 'Businesses Served',
    subtext: 'Trusted by top sales & growth teams',
    pos: [-11, -5.5, -3],
    color: '#38ef7d',
    icon: '🏢'
  },
  {
    id: 'satisfaction',
    value: '4.9 / 5',
    label: 'Customer Rating',
    subtext: 'Extremely high user satisfaction',
    pos: [11, -5.8, -3],
    color: '#ffb302',
    icon: '⭐'
  },
  {
    id: 'retention',
    value: '98%',
    label: 'Customer Retention',
    subtext: 'Long-term business value & growth',
    pos: [0, 8.5, -6],
    color: '#00e5ff',
    icon: '🔄'
  }
];

export function MetricsCluster3D() {
  return (
    <group>
      {METRICS_DATA.map((metric) => (
        <SingleMetricNode key={metric.id} metric={metric} />
      ))}
    </group>
  );
}

function SingleMetricNode({ metric }) {
  const groupRef = useRef();
  const ringRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!groupRef.current) return;

    // Weightless float oscillation
    const offset = metric.pos[0] * 0.2;
    groupRef.current.position.y = metric.pos[1] + Math.sin(time * 1.2 + offset) * 0.25;

    if (ringRef.current) {
      ringRef.current.rotation.x = time * 0.5 + offset;
      ringRef.current.rotation.y = time * 0.7;
    }
  });

  return (
    <group ref={groupRef} position={metric.pos}>
      {/* 3D Geometry Core */}
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.25 : 1.0}
      >
        <torusGeometry args={[0.75, 0.12, 16, 32]} />
        <meshStandardMaterial
          color={metric.color}
          emissive={metric.color}
          emissiveIntensity={hovered ? 1.2 : 0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Orbit Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.2, 0.02, 16, 32]} />
        <meshBasicMaterial color={metric.color} transparent opacity={0.6} />
      </mesh>

      {/* 3D HTML Card Overlay */}
      <Html center distanceFactor={18}>
        <div
          className="glass-panel"
          style={{
            padding: '12px 18px',
            borderRadius: '16px',
            background: 'rgba(6, 17, 33, 0.88)',
            border: `1px solid ${hovered ? metric.color : 'rgba(0, 184, 169, 0.3)'}`,
            textAlign: 'center',
            minWidth: '180px',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'all 0.3s ease-out'
          }}
        >
          <div style={{ fontSize: '1.75rem', fontWeight: '900', color: metric.color, fontFamily: 'Outfit, sans-serif' }}>
            {metric.icon} {metric.value}
          </div>
          <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#ffffff', marginTop: '2px' }}>
            {metric.label}
          </div>
          <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px' }}>
            {metric.subtext}
          </div>
        </div>
      </Html>
    </group>
  );
}
