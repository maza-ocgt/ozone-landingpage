"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

interface VantaBackgroundProps {
  className?: string;
}

export default function VantaBackground({ className = "" }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    let checkInterval: NodeJS.Timeout | null = null;

    const initVanta = () => {
      if (!vantaRef.current || !window.VANTA) return;

      // Cleanup existing effect if any
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }

      // Initialize Vanta Halo
      vantaEffect.current = window.VANTA.HALO({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        baseColor: 0x00d4aa,
        backgroundColor: 0x131a43,
        amplitudeFactor: 1.0,
        xOffset: 0.0,
        yOffset: 0.0,
        size: 2.5,
      });
    };

    if (window.VANTA) {
      initVanta();
    } else {
      // If Vanta is not loaded yet, wait a bit and try again
      checkInterval = setInterval(() => {
        if (window.VANTA) {
          if (checkInterval) {
            clearInterval(checkInterval);
            checkInterval = null;
          }
          initVanta();
        }
      }, 100);

      // Cleanup interval after 5 seconds
      setTimeout(() => {
        if (checkInterval) {
          clearInterval(checkInterval);
          checkInterval = null;
        }
      }, 5000);
    }

    // Cleanup on unmount
    return () => {
      if (checkInterval) {
        clearInterval(checkInterval);
      }
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className={`absolute inset-0 ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}

