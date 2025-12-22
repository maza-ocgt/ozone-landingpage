"use client";

import { motion, useMotionValue, useSpring, useTransform, useMotionValueEvent } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import VantaBackground from "@/components/VantaBackground";

export default function Hero() {
  const count = useMotionValue(0);
  const springCount = useSpring(count, {
    damping: 60,
    stiffness: 100,
  });
  
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    count.set(12000); 
  }, [count]);
  
  useMotionValueEvent(springCount, "change", (latest) => {
    if (latest >= 1000) {
      const kValue = latest / 1000;
      const rounded = Math.round(kValue * 10) / 10;
      setDisplayValue(
        rounded % 1 === 0 ? `${rounded}k` : `${rounded.toFixed(1)}k`
      );
    } else {
      setDisplayValue(Math.round(latest).toString());
    }
  });
  
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center text-white overflow-hidden">
      {/* Vanta Halo Background */}
      <VantaBackground />
      
      {/* Top Label - Positioned center top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 sm:top-12 md:top-16 left-1/2 -translate-x-1/2 z-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wider sm:tracking-widest text-white uppercase px-4"
      >
        <div className="relative overflow-hidden rounded-full border border-white/40 bg-white/5 px-4 py-2 backdrop-blur-3xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_20%_20%,rgba(94,234,212,0.18),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.14),transparent_35%)]" />
          <div className="pointer-events-none absolute inset-[-1px] rounded-full border border-white/10" />
          <div className="relative flex items-center justify-center gap-2 sm:gap-3 px-1">
            <span>OZONE</span>
            <span className="text-teal-300">✦</span>
            <span>OC GLOBAL TECHNOLOGY</span>
          </div>
        </div>
      </motion.div>

    

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 mb-10"
      >
        <div className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-75 md:w-75">
          <Image
            src="/3dlogo.png"
            alt="OZONE Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="relative z-10 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Malaysia's Global <br />
        Streaming{" "}
        <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
          Platform
        </span>
      </motion.h1>

      {/* Stats */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-10 mt-8 text-xl text-white sm:text-2xl"
      >
        <motion.span
          className="text-4xl font-bold bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent sm:text-5xl"
        >
          {displayValue}
        </motion.span>{" "}
        people are Interested
      </motion.p>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-10 mt-8 sm:mt-10 rounded-full bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-teal-500/30 transition-all hover:shadow-xl hover:shadow-teal-500/50"
      >
        Preregister Now
      </motion.button>
    </section>
  );
}

