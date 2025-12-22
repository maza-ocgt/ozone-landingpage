"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function BottomSection() {

  const videoThumbnails = [
    { id: 1, thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop" },
    { id: 2, thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=600&fit=crop" },
    { id: 3, thumbnail: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&h=600&fit=crop" },
    { id: 4, thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop" },
    { id: 5, thumbnail: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop" },
    { id: 6, thumbnail: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=800&h=600&fit=crop" },
  ];

  return (
    <section 
      className="relative min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: `
          linear-gradient(180deg, 
            #0a0a0f 0%, 
            #0f1419 15%, 
            #1a1a2e 30%, 
            #16213e 50%, 
            #1a1a2e 70%, 
            #0f1419 85%, 
            #0a0a0f 100%
          )
        `,
      }}
    >
      {/* Static Background Gradient Overlay */}
      {/* <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(79, 70, 229, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 80% 50% at 50% 100%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
            linear-gradient(180deg, 
              rgba(30, 41, 59, 0.3) 0%, 
              transparent 20%, 
              transparent 80%, 
              rgba(30, 41, 59, 0.3) 100%
            )
          `,
        }}
      /> */}

      {/* Subtle Static Grid Pattern */}
      {/* <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div> */}

      {/* Top Subtle Divider Line */}
      {/* <div className="absolute top-0 left-0 right-0 h-px z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      </div> */}

      {/* Bottom Subtle Divider Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10 pt-12 sm:pt-16 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8 sm:space-y-10 md:space-y-12"
        >
          {/* Title with Enhanced Futuristic Styling */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow behind title */}
            <div className="absolute -left-6 md:-left-8 top-0 w-1 h-full bg-gradient-to-b from-teal-500/40 via-cyan-500/40 to-transparent blur-md hidden sm:block" />
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-left relative">
              <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">Movie</span>{" "}
              <span className="relative inline-block">
                <motion.span
                  className="bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent relative z-10"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  Gallery
                </motion.span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 rounded-full shadow-[0_0_15px_rgba(94,234,212,0.6)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                />
                {/* Pulsing glow under underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 h-2 bg-teal-400/30 rounded-full blur-sm"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    width: { duration: 1.2, delay: 0.5 },
                    opacity: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />
              </span>
              
              {/* Side accent line */}
              <motion.div
                className="absolute -right-6 md:-right-8 top-0 w-px h-full bg-gradient-to-b from-transparent via-teal-500/50 to-transparent hidden sm:block"
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                style={{ transformOrigin: "top" }}
              />
            </h2>
          </motion.div>

          {/* Video Thumbnails Grid - 2x3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          >
            {videoThumbnails.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="relative group aspect-video rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Outer Glow Effect - Only on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/30 via-cyan-500/30 to-teal-500/30 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glassmorphism Border with Glow */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-teal-500/20 via-cyan-500/10 to-purple-500/20 backdrop-blur-sm border border-white/10 shadow-[0_8px_32px_0_rgba(94,234,212,0.1)] group-hover:border-teal-400/40 group-hover:shadow-[0_8px_32px_0_rgba(94,234,212,0.3)] transition-all duration-500" />
                
                {/* Border Glow - Only on hover, no animation */}
                <div className="absolute -inset-px rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-gradient-to-r from-teal-400/30 via-cyan-400/30 to-teal-400/30" />

                {/* Thumbnail Image with Overlay */}
                <div className="relative w-full h-full z-0">
                  <Image
                    src={video.thumbnail}
                    alt={`Video thumbnail ${video.id}`}
                    fill
                    className="object-cover rounded-xl sm:rounded-2xl"
                    unoptimized
                  />
                  {/* Dark overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-xl sm:rounded-2xl" />
                </div>

                {/* Enhanced Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-16 h-16 md:w-20 md:h-20 rounded-full backdrop-blur-xl border-2 border-teal-400/80 bg-gradient-to-br from-teal-500/20 via-cyan-500/20 to-teal-500/20 flex items-center justify-center shadow-[0_0_30px_rgba(94,234,212,0.5)] group-hover:shadow-[0_0_40px_rgba(94,234,212,0.7)] transition-all duration-300"
                  >
                    {/* Static Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-teal-400/30" />
                    {/* Play Icon */}
                    <div className="relative z-10 w-0 h-0 border-l-[12px] md:border-l-[16px] border-l-teal-300 border-t-[8px] md:border-t-[10px] border-t-transparent border-b-[8px] md:border-b-[10px] border-b-transparent ml-1" />
                  </motion.div>
                </div>

                {/* Enhanced Hover Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/30 via-transparent to-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-bl from-purple-400/10 via-transparent to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />

                {/* Corner Accents */}
                <div className="absolute top-2 left-2 w-6 h-0.5 bg-gradient-to-r from-teal-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-2 left-2 w-0.5 h-6 bg-gradient-to-b from-teal-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 right-2 w-6 h-0.5 bg-gradient-to-l from-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 right-2 w-0.5 h-6 bg-gradient-to-t from-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* Watch More Button - Enhanced Futuristic Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative group px-10 py-5 md:px-14 md:py-6 rounded-full overflow-hidden"
            >
              {/* Animated Gradient Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 rounded-full"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              />
              
              {/* Animated Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
              />

              {/* Glowing Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
              
              {/* Button Text with Glow */}
              <span className="relative z-10 text-white text-sm md:text-base font-semibold uppercase tracking-widest drop-shadow-[0_0_8px_rgba(94,234,212,0.5)]">
                Watch More
              </span>

              {/* Corner Accents */}
              <div className="absolute top-1 left-4 w-2 h-2 bg-teal-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-1 right-4 w-2 h-2 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

