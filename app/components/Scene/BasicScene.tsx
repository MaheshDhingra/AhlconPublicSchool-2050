"use client";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, TorusKnot } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function RotatingShape() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <TorusKnot ref={meshRef} args={[1, 0.3, 128, 16]} scale={0.9}>
      <meshStandardMaterial
        color={0xa03eff}
        emissive={0x501a88}
        emissiveIntensity={0.5}
        wireframe={false}
        metalness={0.4}
        roughness={0.3}
      />
    </TorusKnot>
  );
}

export default function BasicScene() {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 55 }} shadows>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        color={0xffffff}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-5, -5, 2]} intensity={0.6} color={0x00f2ff} />
      <pointLight position={[0, -5, 0]} intensity={0.5} color={0xa03eff} />

      <RotatingShape />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.0}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
        enableDamping
        dampingFactor={0.1}
      />
    </Canvas>
  );
}