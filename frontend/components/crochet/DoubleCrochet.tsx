import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const DoubleCrochet: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  // Create a custom shape for the double crochet stitch
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.bezierCurveTo(0.1, 0.2, 0.3, 0.2, 0.4, 0);
  shape.bezierCurveTo(0.3, -0.2, 0.1, -0.2, 0, 0);
  shape.bezierCurveTo(-0.1, 0.2, -0.3, 0.2, -0.4, 0);
  shape.bezierCurveTo(-0.3, -0.2, -0.1, -0.2, 0, 0);

  return (
    <group ref={groupRef}>
      {/* Main body of the stitch */}
      <mesh position={[0, 0, 0]}>
        <extrudeGeometry args={[shape, { steps: 1, depth: 0.1, bevelEnabled: false }]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      {/* Top loop of the stitch */}
      <mesh position={[0, 0.2, 0]}>
        <torusGeometry args={[0.1, 0.02, 8, 16]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      {/* Bottom loop of the stitch */}
      <mesh position={[0, -0.2, 0]}>
        <torusGeometry args={[0.1, 0.02, 8, 16]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </group>
  );
};

const DoubleCrochetScene: React.FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <DoubleCrochet />
      <OrbitControls />
    </Canvas>
  );
};

export default DoubleCrochetScene;
