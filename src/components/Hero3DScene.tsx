"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

function GlassIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    meshRef.current.rotation.x += delta * 0.08;
    meshRef.current.rotation.y += delta * 0.12;
  });

  return (
    <mesh ref={meshRef} scale={1.8}>
      <icosahedronGeometry args={[1, 1]} />
      <MeshTransmissionMaterial
        backside
        samples={16}
        resolution={256}
        transmission={0.95}
        roughness={0.05}
        thickness={0.5}
        ior={1.5}
        chromaticAberration={0.06}
        anisotropy={0.3}
        distortion={0.1}
        distortionScale={0.2}
        temporalDistortion={0.1}
        clearcoat={1}
        clearcoatRoughness={0}
        color="#ffffff"
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <GlassIcosahedron />
      <Environment preset="city" />
    </>
  );
}

function BloomPostprocessing() {
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
        intensity={0.8}
        mipmapBlur
      />
    </EffectComposer>
  );
}

function isMobileDevice(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768 || "ontouchstart" in window;
}

function GradientOrbFallback() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "70vw",
          height: "70vw",
          maxWidth: 400,
          maxHeight: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.25) 0%, rgba(120,180,255,0.12) 30%, rgba(80,100,255,0.08) 55%, transparent 75%)",
          filter: "blur(2px)",
        }}
      />
    </div>
  );
}

export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(isMobileDevice());
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return (
      <div style={{ position: "absolute", inset: 0 }}>
        <GradientOrbFallback />
      </div>
    );
  }

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        frameloop="demand"
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
        <BloomPostprocessing />
      </Canvas>
    </div>
  );
}
