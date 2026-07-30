import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const WAYPOINT_CAMERAS = {
  orbit: { pos: [0, 0, 16], target: [0, 0, 0] },
  'waypoint-1': { pos: [-4, 2, 11], target: [-6.5, 3.2, -2] },
  'waypoint-2': { pos: [4, 2, 11], target: [6.5, 3.5, -1.5] },
  'waypoint-3': { pos: [-4, -1.5, 10], target: [-7.5, -2.8, 1] },
  'waypoint-4': { pos: [4, -1.5, 10], target: [7.2, -2.5, 1.5] },
  'waypoint-5': { pos: [-2, -4.5, 10], target: [-4.2, -6.5, -3] },
  'waypoint-6': { pos: [2, -4.5, 10], target: [4.5, -6.8, -2.5] }
};

export function CameraController({ activeWaypoint, isOrbiting }) {
  const { camera } = useThree();

  useFrame(() => {
    if (isOrbiting) return; // Allow manual orbit control

    const targetConfig = WAYPOINT_CAMERAS[activeWaypoint] || WAYPOINT_CAMERAS.orbit;
    const [tx, ty, tz] = targetConfig.pos;
    const [lookX, lookY, lookZ] = targetConfig.target;

    // Smooth camera transition lerp
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, tx, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, ty, 0.04);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, tz, 0.04);

    camera.lookAt(lookX, lookY, lookZ);
  });

  return null;
}
