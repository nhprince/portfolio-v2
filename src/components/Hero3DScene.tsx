"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useRef, useState, useEffect, Component, type ReactNode } from "react";
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
      <meshPhysicalMaterial
        transmission={0.9}
        thickness={0.5}
        roughness={0.05}
        ior={1.5}
        color="#a855f7"
        envMapIntensity={1}
        transparent
        opacity={0.8}
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
            "radial-gradient(circle at 35% 35%, rgba(124,58,237,0.3) 0%, rgba(236,72,153,0.2) 40%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />
    </div>
  );
}

export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(isMobileDevice());
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile || hasError) {
    return (
      <div style={{ position: "absolute", inset: 0 }}>
        <GradientOrbFallback />
      </div>
    );
  }

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <ErrorBoundary onError={() => setHasError(true)}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          frameloop="demand"
          gl={{ antialias: true, alpha: true }}
        >
          <Scene />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}

// Simple error boundary for the 3D scene
function ErrorBoundary({
  children,
  onError,
}: {
  children: React.ReactNode;
  onError: () => void;
}) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (hasError) onError();
  }, [hasError, onError]);

  if (hasError) {
    return (
      <div style={{ position: "absolute", inset: 0 }}>
        <GradientOrbFallback />
      </div>
    );
  }

  return (
    <ErrorCatcher onError={() => setHasError(true)}>
      {children}
    </ErrorCatcher>
  );
}

class ErrorCatcher extends Component<
  { children: ReactNode; onError: () => void },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; onError: () => void }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}
