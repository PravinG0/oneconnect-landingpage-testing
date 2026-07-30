import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function PhysicsField({ count = 250, mousePos }) {
  const pointsRef = useRef();
  const linesRef = useRef();

  // Generate random positions, velocities, and scales for antigravity particles
  const [positions, velocities, colors] = useMemo(() => {
    const posArr = new Float32Array(count * 3);
    const velArr = new Float32Array(count * 3);
    const colArr = new Float32Array(count * 3);

    const tealColor = new THREE.Color('#00b8a9');
    const cyanColor = new THREE.Color('#00f2fe');
    const navyColor = new THREE.Color('#0d2b45');

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      // Position spread across 3D space
      posArr[idx] = (Math.random() - 0.5) * 50;
      posArr[idx + 1] = (Math.random() - 0.5) * 35;
      posArr[idx + 2] = (Math.random() - 0.5) * 40;

      // Subtle initial floating velocities
      velArr[idx] = (Math.random() - 0.5) * 0.015;
      velArr[idx + 1] = (Math.random() - 0.5) * 0.015;
      velArr[idx + 2] = (Math.random() - 0.5) * 0.015;

      // Color gradient between Navy, Teal, and Cyan
      const randColor = Math.random();
      const mixedColor = randColor > 0.6 ? cyanColor : randColor > 0.25 ? tealColor : navyColor;
      colArr[idx] = mixedColor.r;
      colArr[idx + 1] = mixedColor.g;
      colArr[idx + 2] = mixedColor.b;
    }

    return [posArr, velArr, colArr];
  }, [count]);

  // Buffer Geometry for dynamic constellation lines
  const maxLines = 150;
  const linePositions = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const positionAttr = pointsRef.current.geometry.attributes.position;
    const pos = positionAttr.array;

    const mx = (mousePos.current.x * 25) || 0;
    const my = (mousePos.current.y * 15) || 0;

    let lineIndex = 0;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;

      // Antigravity wave force + cursor magnetic pull
      const dx = mx - pos[idx];
      const dy = my - pos[idx + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 10) {
        // Magnetic repulsion/attraction wave
        velocities[idx] += (dx / dist) * 0.0008;
        velocities[idx + 1] += (dy / dist) * 0.0008;
      }

      // Sine wave drift (simulates zero gravity weightlessness)
      pos[idx] += velocities[idx] + Math.sin(time + pos[idx + 1] * 0.1) * 0.005;
      pos[idx + 1] += velocities[idx + 1] + Math.cos(time + pos[idx] * 0.1) * 0.005;
      pos[idx + 2] += velocities[idx + 2] + Math.sin(time * 0.5 + i) * 0.003;

      // Soft boundary wrap-around
      if (Math.abs(pos[idx]) > 28) pos[idx] = -pos[idx] * 0.95;
      if (Math.abs(pos[idx + 1]) > 20) pos[idx + 1] = -pos[idx + 1] * 0.95;
      if (Math.abs(pos[idx + 2]) > 25) pos[idx + 2] = -pos[idx + 2] * 0.95;

      // Check proximity to draw data flow connection lines between nearby particles
      if (lineIndex < maxLines * 6 && i % 4 === 0) {
        for (let j = i + 1; j < count; j++) {
          const jdx = j * 3;
          const lx = pos[idx] - pos[jdx];
          const ly = pos[idx + 1] - pos[jdx + 1];
          const lz = pos[idx + 2] - pos[jdx + 2];
          const lDist = Math.sqrt(lx * lx + ly * ly + lz * lz);

          if (lDist < 4.5) {
            linePositions[lineIndex++] = pos[idx];
            linePositions[lineIndex++] = pos[idx + 1];
            linePositions[lineIndex++] = pos[idx + 2];
            linePositions[lineIndex++] = pos[jdx];
            linePositions[lineIndex++] = pos[jdx + 1];
            linePositions[lineIndex++] = pos[jdx + 2];
            if (lineIndex >= maxLines * 6) break;
          }
        }
      }
    }

    positionAttr.needsUpdate = true;

    if (linesRef.current) {
      linesRef.current.geometry.attributes.position.needsUpdate = true;
      linesRef.current.geometry.setDrawRange(0, lineIndex / 3);
    }
  });

  return (
    <group>
      {/* Antigravity Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.22}
          vertexColors
          transparent
          opacity={0.75}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Network Data Constellation Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={maxLines * 2}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00b8a9"
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}
