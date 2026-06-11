"use client";

import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let destroyed = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lenisInstance: any = null;

    import("@studio-freight/lenis").then((mod) => {
      if (destroyed) return;
      const Lenis = mod.default;
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical" as const,
        gestureOrientation: "vertical" as const,
        smoothWheel: true,
      });

      const raf = (time: number) => {
        if (destroyed) return;
        lenisInstance?.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    });

    return () => {
      destroyed = true;
      try {
        lenisInstance?.destroy();
      } catch {
        // ignore
      }
    };
  }, []);

  return <>{children}</>;
}
