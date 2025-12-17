"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function OfferSection() {
  const offers = [
    {
      id: 1,
      title: "Long-form Streaming",
      icon: "/logo1.png",
      variant: "dark" as const, // dark with border and icon
    },
    {
      id: 2,
      title: "AI-Generated Entertainment",
      icon: null,
      variant: "teal" as const, // solid teal background
    },
    {
      id: 3,
      title: "Creator Monetization",
      icon: "/logo2.png",
      variant: "dark" as const,
    },
    {
      id: 4,
      title: "Watch-to-Earn Rewards",
      icon: "/logo3.png",
      variant: "dark" as const,
    },
    {
      id: 5,
      title: "Global Malaysia Content",
      icon: "/logo4.png",
      variant: "dark" as const,
    },
    {
      id: 6,
      title: "AI-Powered Recommendations",
      icon: null,
      variant: "teal" as const,
    },
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

      <div className="mx-auto max-w-7xl relative z-10">
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
              <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">What we</span>{" "}
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
                  offer
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

          {/* Cards Grid */}
          <div className="space-y-8">
            {/* Top Row - 4 Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {offers.slice(0, 4).map((offer, index) => (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className={`relative group rounded-2xl sm:rounded-3xl p-6 md:p-8 min-h-[220px] sm:min-h-[240px] flex flex-col overflow-hidden ${
                    offer.variant === "dark"
                      ? "bg-black/50 border border-purple-500/30 backdrop-blur-md shadow-[0_8px_32px_0_rgba(168,85,247,0.1)]"
                      : "bg-gradient-to-br from-teal-400 to-cyan-400 shadow-[0_8px_32px_0_rgba(94,234,212,0.2)]"
                  }`}
                >
                  {/* Outer Glow Effect */}
                  {offer.variant === "dark" && (
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-teal-500/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}

                  {/* Glassmorphism Overlay for Dark Variant */}
                  {offer.variant === "dark" && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-purple-500/8 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/15 via-transparent to-cyan-500/15 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </>
                  )}

                  {/* Animated Gradient for Teal Variant */}
                  {offer.variant === "teal" && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-400 to-teal-400 rounded-2xl sm:rounded-3xl"
                      animate={{
                        background: [
                          "linear-gradient(to bottom right, rgb(94, 234, 212), rgb(34, 211, 238))",
                          "linear-gradient(to bottom right, rgb(34, 211, 238), rgb(94, 234, 212))",
                          "linear-gradient(to bottom right, rgb(94, 234, 212), rgb(34, 211, 238))",
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}

                  {/* Animated Border Glow for Dark Variant */}
                  {offer.variant === "dark" && (
                    <motion.div
                      className="absolute -inset-px rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100"
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.4), transparent)",
                        backgroundSize: "200% 100%",
                      }}
                      animate={{
                        backgroundPosition: ["200%", "-200%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  )}

                  {/* Icon for dark variant with enhanced styling and glow */}
                  {offer.variant === "dark" && offer.icon && (
                    <motion.div 
                      className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 opacity-80 group-hover:opacity-100 transition-opacity duration-300 relative z-10"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Glowing background behind icon */}
                      <motion.div
                        className="absolute inset-0 bg-teal-400/20 rounded-full blur-xl"
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <Image
                        src={offer.icon}
                        alt={offer.title}
                        fill
                        className="object-contain drop-shadow-[0_0_15px_rgba(94,234,212,0.5)] relative z-10"
                        unoptimized
                      />
                    </motion.div>
                  )}

                  {/* Enhanced Gradient Shimmer for Teal Variant */}
                  {offer.variant === "teal" && (
                    <>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />
                      {/* Pulsing inner glow */}
                      <motion.div
                        className="absolute inset-4 bg-white/10 rounded-xl sm:rounded-2xl"
                        animate={{
                          opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </>
                  )}

                  {/* Title at bottom with enhanced styling */}
                  <div className="mt-auto relative z-10">
                    <motion.h3
                      className={`text-lg md:text-xl font-semibold leading-tight ${
                        offer.variant === "dark" 
                          ? "text-white" 
                          : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                      }`}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {offer.title}
                    </motion.h3>
                  </div>

                  {/* Enhanced Corner Accents for Dark Variant */}
                  {offer.variant === "dark" && (
                    <>
                      <div className="absolute top-2 left-2 w-8 h-0.5 bg-gradient-to-r from-purple-400 via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                      <div className="absolute top-2 left-2 w-0.5 h-8 bg-gradient-to-b from-purple-400 via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                      <div className="absolute bottom-2 right-2 w-8 h-0.5 bg-gradient-to-l from-cyan-400 via-teal-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(94,234,212,0.5)]" />
                      <div className="absolute bottom-2 right-2 w-0.5 h-8 bg-gradient-to-t from-cyan-400 via-teal-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(94,234,212,0.5)]" />
                    </>
                  )}

                  {/* Corner Accents for Teal Variant */}
                  {offer.variant === "teal" && (
                    <>
                      <div className="absolute top-3 left-3 w-6 h-0.5 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-3 left-3 w-0.5 h-6 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-3 right-3 w-6 h-0.5 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-3 right-3 w-0.5 h-6 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Row - 2 Cards Centered */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl">
                {offers.slice(4, 6).map((offer, index) => (
                  <motion.div
                    key={offer.id}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.7 + index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    className={`relative group rounded-2xl sm:rounded-3xl p-6 md:p-8 min-h-[220px] sm:min-h-[240px] flex flex-col overflow-hidden ${
                      offer.variant === "dark"
                        ? "bg-black/50 border border-purple-500/30 backdrop-blur-md shadow-[0_8px_32px_0_rgba(168,85,247,0.1)]"
                        : "bg-gradient-to-br from-teal-400 to-cyan-400 shadow-[0_8px_32px_0_rgba(94,234,212,0.2)]"
                    }`}
                  >
                    {/* Outer Glow Effect */}
                    {offer.variant === "dark" && (
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-teal-500/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{
                          opacity: [0, 0.3, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}

                    {/* Glassmorphism Overlay for Dark Variant */}
                    {offer.variant === "dark" && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-purple-500/8 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/15 via-transparent to-cyan-500/15 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </>
                    )}

                    {/* Animated Gradient for Teal Variant */}
                    {offer.variant === "teal" && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-400 to-teal-400 rounded-2xl sm:rounded-3xl"
                        animate={{
                          background: [
                            "linear-gradient(to bottom right, rgb(94, 234, 212), rgb(34, 211, 238))",
                            "linear-gradient(to bottom right, rgb(34, 211, 238), rgb(94, 234, 212))",
                            "linear-gradient(to bottom right, rgb(94, 234, 212), rgb(34, 211, 238))",
                          ],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}

                    {/* Animated Border Glow for Dark Variant */}
                    {offer.variant === "dark" && (
                      <motion.div
                        className="absolute -inset-px rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100"
                        style={{
                          background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.4), transparent)",
                          backgroundSize: "200% 100%",
                        }}
                        animate={{
                          backgroundPosition: ["200%", "-200%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    )}

                    {/* Icon for dark variant with enhanced styling and glow */}
                    {offer.variant === "dark" && offer.icon && (
                      <motion.div 
                        className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 opacity-80 group-hover:opacity-100 transition-opacity duration-300 relative z-10"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Glowing background behind icon */}
                        <motion.div
                          className="absolute inset-0 bg-teal-400/20 rounded-full blur-xl"
                          animate={{
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <Image
                          src={offer.icon}
                          alt={offer.title}
                          fill
                          className="object-contain drop-shadow-[0_0_15px_rgba(94,234,212,0.5)] relative z-10"
                          unoptimized
                        />
                      </motion.div>
                    )}

                    {/* Enhanced Gradient Shimmer for Teal Variant */}
                    {offer.variant === "teal" && (
                      <>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                        {/* Pulsing inner glow */}
                        <motion.div
                          className="absolute inset-4 bg-white/10 rounded-xl sm:rounded-2xl"
                          animate={{
                            opacity: [0.1, 0.2, 0.1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </>
                    )}

                    {/* Title at bottom with enhanced styling */}
                    <div className="mt-auto relative z-10">
                      <motion.h3
                        className={`text-lg md:text-xl font-semibold leading-tight ${
                          offer.variant === "dark" 
                            ? "text-white" 
                            : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                        }`}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {offer.title}
                      </motion.h3>
                    </div>

                    {/* Enhanced Corner Accents for Dark Variant */}
                    {offer.variant === "dark" && (
                      <>
                        <div className="absolute top-2 left-2 w-8 h-0.5 bg-gradient-to-r from-purple-400 via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                        <div className="absolute top-2 left-2 w-0.5 h-8 bg-gradient-to-b from-purple-400 via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                        <div className="absolute bottom-2 right-2 w-8 h-0.5 bg-gradient-to-l from-cyan-400 via-teal-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(94,234,212,0.5)]" />
                        <div className="absolute bottom-2 right-2 w-0.5 h-8 bg-gradient-to-t from-cyan-400 via-teal-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(94,234,212,0.5)]" />
                      </>
                    )}

                    {/* Corner Accents for Teal Variant */}
                    {offer.variant === "teal" && (
                      <>
                        <div className="absolute top-3 left-3 w-6 h-0.5 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-3 left-3 w-0.5 h-6 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-3 right-3 w-6 h-0.5 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-3 right-3 w-0.5 h-6 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

