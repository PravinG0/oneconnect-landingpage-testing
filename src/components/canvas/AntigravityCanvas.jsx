import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Light 3D Particles Constellation Field
function SpatialParticles({ scrollProgress, mousePos }) {
  const pointsRef = useRef();
  const count = 350;

  const [positions, colors] = React.useMemo(() => {
    const posArr = new Float32Array(count * 3);
    const colArr = new Float32Array(count * 3);

    const teal = new THREE.Color('#00b8a9');
    const cyan = new THREE.Color('#0dbeaa');
    const mint = new THREE.Color('#7fd8cd');

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      posArr[idx] = (Math.random() - 0.5) * 45;
      posArr[idx + 1] = (Math.random() - 0.5) * 60;
      posArr[idx + 2] = (Math.random() - 0.5) * 50;

      const r = Math.random();
      const c = r > 0.6 ? cyan : r > 0.3 ? teal : mint;
      colArr[idx] = c.r;
      colArr[idx + 1] = c.g;
      colArr[idx + 2] = c.b;
    }
    return [posArr, colArr];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const posAttr = pointsRef.current.geometry.attributes.position;
    const array = posAttr.array;

    const scrollVel = scrollProgress.current * 20;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      array[idx + 2] += 0.04 + scrollVel * 0.005;

      if (array[idx + 2] > 25) array[idx + 2] = -35;

      array[idx] += Math.sin(time * 0.5 + i) * 0.004;
      array[idx + 1] += Math.cos(time * 0.4 + i) * 0.004;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.17} vertexColors transparent opacity={0.45} sizeAttenuation />
    </points>
  );
}

// Light 3D Grid Tunnel
function SpatialGridTunnel({ scrollProgress }) {
  const gridRef = useRef();

  useFrame((state) => {
    if (!gridRef.current) return;
    const time = state.clock.getElapsedTime();
    gridRef.current.rotation.z = time * 0.05 + scrollProgress.current * 1.5;
    gridRef.current.position.z = THREE.MathUtils.lerp(gridRef.current.position.z, -10 + scrollProgress.current * 15, 0.05);
  });

  return (
    <group ref={gridRef} position={[0, 0, -10]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[14, 14, 40, 32, 12, true]} />
        <meshBasicMaterial color="#00b8a9" wireframe transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

// Camera Controller
function CameraScrollController({ scrollProgress, mousePos }) {
  const { camera } = useThree();

  useFrame(() => {
    const sp = scrollProgress.current;

    const targetX = (mousePos.current.x * 2.5) + Math.sin(sp * Math.PI * 2) * 3;
    const targetY = -(sp * 18) + (mousePos.current.y * 1.5);
    const targetZ = 16 - (sp * 8);

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.06);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.06);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.06);

    camera.rotation.z = THREE.MathUtils.lerp(camera.rotation.z, (mousePos.current.x * -0.05) + Math.sin(sp * Math.PI) * 0.08, 0.05);
    camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, (mousePos.current.y * 0.05) - (sp * 0.1), 0.05);
  });

  return null;
}

export function AntigravityCanvas() {
  const scrollProgress = useRef(0);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        scrollProgress.current = Math.min(1, Math.max(0, window.scrollY / totalScroll));
      }
    };

    const handleMouseMove = (e) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 16], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={['#f0f4f8']} />

        {/* Ambient & Bright Directional Lighting */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 20, 15]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#00b8a9" />

        {/* Light 3D Tunnel & Dust Particles */}
        <SpatialParticles scrollProgress={scrollProgress} mousePos={mousePos} />
        <SpatialGridTunnel scrollProgress={scrollProgress} />

        <CameraScrollController scrollProgress={scrollProgress} mousePos={mousePos} />
      </Canvas>
    </div>
  );
}
