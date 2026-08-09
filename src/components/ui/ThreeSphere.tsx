"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "next-themes";

function AnimatedSphere({ color }: { color: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates from -1 to +1
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;

      // Mouse interactive tilt
      const targetRotationY = mouse.current.x * 0.5;
      const targetRotationX = mouse.current.y * -0.5;

      meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * 0.05;
      meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.05;
      
      // Pulsing scale effect
      const scale = 1 + Math.sin(state.clock.elapsedTime) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, 4]} />
      <meshPhongMaterial
        color={color}
        wireframe={true}
        transparent={true}
        opacity={0.8}
        emissive={color}
        emissiveIntensity={0.5}
        shininess={100}
      />
    </mesh>
  );
}

export function ThreeSphere() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use elegant deep purple for light mode, neon purple for dark mode
  const sphereColor = mounted && resolvedTheme === "light" ? 0x7c3aed : 0xa855f7;

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none transition-opacity duration-1000">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        dpr={typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : [1, 2]}
      >
        <ambientLight intensity={0.5} color={0xffffff} />
        <pointLight position={[5, 5, 5]} intensity={2} color={sphereColor} />
        <AnimatedSphere color={sphereColor} />
      </Canvas>
    </div>
  );
}
