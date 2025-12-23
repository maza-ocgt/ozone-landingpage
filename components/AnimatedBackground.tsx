'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';


/**
 * Modern Hero Background Component
 * 
 * Inspired by modern landing page designs with:
 * - Soft vibrant teal/cyan gradients
 * - Subtle abstract geometric shapes
 * - Light particle effects
 * - Smooth and professional aesthetic
 * - Optimized for 16:9 wide screen hero sections
 */
export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect mobile and reduced motion preference
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', (e) => setPrefersReducedMotion(e.matches));

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', (e) => setPrefersReducedMotion(e.matches));
    };
  }, []);

  // Generate particles on mount - fewer on mobile
  useEffect(() => {
    const particleCount = isMobile ? 8 : 20; // Reduced for mobile
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, [isMobile]);

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ willChange: 'auto' }}
    >
      {/* Base Gradient Background - Soft vibrant teal/cyan */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 20%, rgba(94, 234, 212, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 80% 50% at 80% 80%, rgba(34, 211, 238, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 50% 50%, rgba(20, 184, 166, 0.1) 0%, transparent 60%),
            linear-gradient(135deg, #0a0a0f 0%, #0f1419 25%, #0a0f14 50%, #0f1419 75%, #0a0a0f 100%)
          `,
          backgroundSize: '200% 200%',
          willChange: prefersReducedMotion ? 'auto' : 'transform',
        }}
        animate={prefersReducedMotion ? {} : {
          scale: [1, 1.02, 1],
        }}
        transition={prefersReducedMotion ? {} : {
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Hero Focus - Brighter center glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 60% at 50% 50%, rgba(94, 234, 212, 0.08) 0%, transparent 70%)
          `,
        }}
      />

      {/* Abstract Geometric Shapes */}
      
      {/* Large Circle - Top Right - Hidden on mobile */}
      {!isMobile && (
        <motion.div
          className="absolute"
          style={{
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            border: '1px solid rgba(94, 234, 212, 0.1)',
            top: '-100px',
            right: '-100px',
          }}
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={prefersReducedMotion ? {} : {
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      {/* Medium Circle - Bottom Left - Hidden on mobile */}
      {!isMobile && (
        <motion.div
          className="absolute"
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            border: '1px solid rgba(34, 211, 238, 0.08)',
            bottom: '-50px',
            left: '-50px',
          }}
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={prefersReducedMotion ? {} : {
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      {/* Small Circle - Center Right - Hidden on mobile */}
      {!isMobile && (
        <motion.div
          className="absolute"
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            border: '1px solid rgba(20, 184, 166, 0.1)',
            top: '50%',
            right: '10%',
            transform: 'translateY(-50%)',
          }}
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={prefersReducedMotion ? {} : {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      {/* Geometric Line - Diagonal Top Left - Hidden on mobile */}
      {!isMobile && (
        <motion.div
          className="absolute"
          style={{
            width: '300px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(94, 234, 212, 0.2), transparent)',
            top: '20%',
            left: '10%',
            transform: 'rotate(45deg)',
            transformOrigin: 'left center',
          }}
          animate={prefersReducedMotion ? {} : {
            opacity: [0.2, 0.4, 0.2],
            scaleX: [1, 1.2, 1],
          }}
          transition={prefersReducedMotion ? {} : {
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      {/* Geometric Line - Diagonal Bottom Right - Hidden on mobile */}
      {!isMobile && (
        <motion.div
          className="absolute"
          style={{
            width: '250px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.15), transparent)',
            bottom: '15%',
            right: '15%',
            transform: 'rotate(-45deg)',
            transformOrigin: 'right center',
          }}
          animate={prefersReducedMotion ? {} : {
            opacity: [0.15, 0.3, 0.15],
            scaleX: [1, 1.3, 1],
          }}
          transition={prefersReducedMotion ? {} : {
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      {/* Particle Effects - Reduced animation on mobile */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-teal-300/40"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: `0 0 ${particle.size * 2}px rgba(94, 234, 212, 0.3)`,
            willChange: prefersReducedMotion ? 'auto' : 'transform, opacity',
          }}
          animate={prefersReducedMotion ? {} : {
            y: isMobile ? [0, -15, 0] : [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={prefersReducedMotion ? {} : {
            duration: isMobile ? 6 + Math.random() * 2 : 4 + Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}

      {/* Subtle overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 30% at 30% 30%, rgba(94, 234, 212, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 70% 70%, rgba(34, 211, 238, 0.03) 0%, transparent 50%)
          `,
          mixBlendMode: 'screen',
          opacity: 0.8,
        }}
      />
    </div>
  );
}

