"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    { id: 1, image: "/mrlim.png", name: "Mr Lim" },
    { id: 2, image: "/john.png", name: "John" },
    { id: 3, image: "/zizi.png", name: "Zizi" },
    { id: 4, image: "/lim.png", name: "Lim" },
    { id: 5, image: "/maza.png", name: "Maza" },
  ];

  return (
    <section className="relative min-h-screen bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(94, 234, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(94, 234, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Animated Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-teal-400/40 rounded-full blur-sm"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + i * 10}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Top Purple Line with Scan Effect */}
      <div className="absolute top-0 left-0 right-0 h-px z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/70 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.6)]" />
        <motion.div
          className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-purple-400/80 to-transparent blur-sm"
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Bottom Purple Line with Scan Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/70 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.6)]" />
        <motion.div
          className="absolute bottom-0 right-0 h-full w-32 bg-gradient-to-l from-purple-400/80 to-transparent blur-sm"
          animate={{
            x: ["100%", "-200%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay: 1.5,
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10 pt-12 sm:pt-16 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-10 sm:space-y-12 md:space-y-16"
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
              <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">Our</span>{" "}
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
                  Team
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

          {/* Team Members - Circular Cutouts with Overlap */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center flex-wrap gap-2 sm:gap-0"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className={`relative group w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-60 xl:h-60 2xl:w-64 2xl:h-64 rounded-full overflow-visible ${
                  index > 0 ? "-ml-5 sm:-ml-6 md:-ml-8 lg:-ml-10 xl:-ml-12" : ""
                }`}
                style={{
                  zIndex: teamMembers.length - index,
                }}
              >
                {/* Outer Glow Ring */}
                <motion.div
                  className="absolute -inset-2 rounded-full bg-gradient-to-r from-teal-400/30 via-cyan-400/30 to-teal-400/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    opacity: [0, 0.2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Animated Border Ring */}
                <motion.div
                  className="absolute -inset-1 rounded-full border-2 border-transparent opacity-0 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(white, white) padding-box, linear-gradient(90deg, rgba(94,234,212,0.8), rgba(34,211,238,0.8), rgba(94,234,212,0.8)) border-box",
                    backgroundSize: "200% 200%",
                  }}
                  animate={{
                    backgroundPosition: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Image Container with Enhanced Border */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-black/70 shadow-[0_0_30px_rgba(0,0,0,0.8)] group-hover:border-teal-400/50 group-hover:shadow-[0_0_40px_rgba(94,234,212,0.4)] transition-all duration-500">
                  {/* Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center relative z-10"
                    unoptimized
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Pulsing Ring Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-teal-400/20 opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />

                {/* Name Tooltip on Hover */}
                <motion.div
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={{ y: -10 }}
                  whileHover={{ y: 0 }}
                >
                  <div className="bg-black/80 backdrop-blur-sm border border-teal-400/30 rounded-lg px-3 py-1.5 whitespace-nowrap">
                    <span className="text-white text-xs sm:text-sm font-semibold bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                      {member.name}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

