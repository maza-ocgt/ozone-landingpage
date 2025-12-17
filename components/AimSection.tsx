"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";

export default function AimSection() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [randomVideo, setRandomVideo] = useState<string>("");

  useEffect(() => {
    // Array of placeholder video URLs - replace with your actual videos later
    const videoPaths = [
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    ];
    
    // Select random video on mount
    if (videoPaths.length > 0) {
      const randomIndex = Math.floor(Math.random() * videoPaths.length);
      setRandomVideo(videoPaths[randomIndex]);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);
  const imageX = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Top Purple Line with Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/70 to-transparent shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

      {/* Bottom Purple Line with Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/70 to-transparent shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

      {/* Blue Wavy Texture on Right */}
      <div className="absolute right-0 top-0 bottom-0 w-32 opacity-20 pointer-events-none">
        <div className="h-full w-full bg-gradient-to-l from-cyan-500/30 to-transparent" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,50 Q25,30 50,50 T100,50' stroke='%2300ffff' fill='none' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat-y',
        }} />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          style={{ opacity, y }}
          className="space-y-12 md:space-y-16"
        >
          {/* Title - Top Left with Enhanced Styling */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-left"
            >
              Our{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                  aim
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 rounded-full shadow-[0_0_10px_rgba(94,234,212,0.5)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
            </motion.h2>
          </motion.div>

          {/* Landscape Video - Center with Glass Morphism Border */}
          <motion.div
            style={{ x: imageX, opacity: imageOpacity }}
            className="relative w-full aspect-video group"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/50 via-cyan-500/50 to-teal-500/50 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Glass Border */}
            <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm">
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
              
              {randomVideo && (
                <video
                  ref={videoRef}
                  src={randomVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover relative z-10"
                />
              )}
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none z-20" />
            </div>
          </motion.div>

          {/* Text Content - Below Image, Left Aligned with Card Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-4xl"
          >
            {/* Glass Morphism Background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/5 via-cyan-500/5 to-teal-500/5 rounded-2xl backdrop-blur-sm border border-white/5 opacity-50" />
            
            <div className="relative space-y-6 text-white text-left p-8 md:p-10">
              <div className="space-y-3">
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-light text-white">
                  Experience Malaysia's first global streaming revolution -
                </p>
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-light text-white">
                  <span className="relative inline-block font-semibold">
                    <span className="relative z-10 bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                      movies, creators, and AI entertainment
                    </span>
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </span>
                  , all in one place!
                </p>
              </div>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/70 font-light">
                Join thousands waiting for early access. Your input helps shape the platform.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

