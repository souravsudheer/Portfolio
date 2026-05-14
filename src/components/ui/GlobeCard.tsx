"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useRef } from "react";
import type * as THREE from "three";

function GlobeMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.1, 64, 64]}>
      <meshStandardMaterial
        color="#3B82F6"
        roughness={0.45}
        metalness={0.15}
        opacity={0.82}
        transparent
      />
    </Sphere>
  );
}

function WireRing() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = clock.getElapsedTime() * 0.08;
      ringRef.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <Sphere ref={ringRef} args={[1.5, 24, 24]}>
      <meshBasicMaterial color="#8B5CF6" wireframe opacity={0.12} transparent />
    </Sphere>
  );
}

export default function GlobeCard() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.5], fov: 45 }}
      style={{ background: "transparent" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#8B5CF6" />
      <directionalLight position={[-5, -3, -5]} intensity={0.5} color="#3B82F6" />
      <GlobeMesh />
      <WireRing />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
      />
    </Canvas>
  );
}
