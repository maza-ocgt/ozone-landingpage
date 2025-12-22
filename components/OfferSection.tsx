"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import Image from "next/image";
import { useState, useRef } from "react";


export default function OfferSection() {
  const offers = [
    {
      id: 1,
      title: "Long-form Streaming",
      description: "High-quality films, series, dramas, and documentaries.",
      icon: "/logo1.png",
      variant: "dark" as const, 
    },
    {
      id: 2,
      title: "Smart Discovery Feed",
      description: "Feed adapts using smart suggestions tailored to your viewing habits.",
      icon: null,
      variant: "teal" as const, 
    },
    {
      id: 3,
      title: "Creator Monetization",
      description: "Earn revenue through ads and global viewership.",
      icon: "/logo2.png",
      variant: "dark" as const,
    },
    {
      id: 4,
      title: "Watch-to-Earn Rewards",
      description: "Earn rewards based on your watch-time and engagement.",
      icon: "/logo3.png",
      variant: "dark" as const,
    },
    {
      id: 5,
      title: "Global Malaysia Content",
      description: "Showcasing local creators to the world.",
      icon: "/logo4.png",
      variant: "dark" as const,
    },
    {
      id: 6,
      title: "Creator Upload Studio",
      description: "Complete dashboard for uploading, managing, and tracking videos.",
      icon: null,
      variant: "teal" as const,
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const glassBlur = useTransform(scrollYProgress, [0, 0.5], [40, 60]);
  const glassOpacity = useTransform(scrollYProgress, [0, 0.5], [0.05, 0.08]);

  const [blurValue, setBlurValue] = useState(40);
  const [opacityValue, setOpacityValue] = useState(0.05);

  useMotionValueEvent(glassBlur, "change", (latest) => {
    setBlurValue(latest);
  });

  useMotionValueEvent(glassOpacity, "change", (latest) => {
    setOpacityValue(latest);
  });

  return (
    <section
      ref={sectionRef} 
      className="relative min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Dark Overlay*/}
      <div 
        className="absolute inset-0 z-0 bg-black/60"
      />

      {/* Static Background Gradient Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(79, 70, 229, 0.08) 0%, transparent 80%),
            radial-gradient(ellipse 80% 50% at 50% 100%, rgba(139, 92, 246, 0.06) 0%, transparent 80%),
            linear-gradient(180deg, 
              rgba(30, 41, 59, 0.3) 0%, 
              transparent 20%, 
              transparent 80%, 
              rgba(30, 41, 59, 0.3) 100%
            )
          `,
        }}
      />

      {/* Subtle Static Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
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
      </div>

      {/* Top Subtle Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-px z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      </div>

      {/* Bottom Subtle Divider Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
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
                  whileHover={offer.variant === "dark" ? { 
                    scale: 1.01,
                    transition: { type: "spring", stiffness: 200, damping: 22 }
                  } : {
                    scale: 1.02, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  style={offer.variant === "dark" ? {
                    backdropFilter: `blur(${blurValue}px) saturate(200%)`,
                    backgroundColor: `rgba(255,255,255,${opacityValue})`,
                    WebkitBackdropFilter: `blur(${blurValue}px) saturate(200%)`,
                  } : {}}
                  className={`relative group rounded-3xl p-6 md:p-8 min-h-[220px] sm:min-h-[240px] flex flex-col overflow-hidden ${
                    offer.variant === "dark"
                      ? "border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                      : "bg-gradient-to-br from-teal-400 to-cyan-400 shadow-[0_8px_32px_0_rgba(94,234,212,0.2)]"
                  }`}
                >
                  {/* iOS glass light reflection - more subtle */}
                  {offer.variant === "dark" && (
                    <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden">
                      {/* top highlight - very subtle */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20" />
                      {/* soft light gradient - iOS style */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent" />
                      {/* subtle inner glow */}
                      <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />
                    </div>
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

                  {/* Icon for dark variant with enhanced styling and glow */}
                  {offer.variant === "dark" && offer.icon && (
                    <motion.div 
                      className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 relative z-10"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={offer.icon}
                        alt={offer.title}
                        fill
                        className="object-contain opacity-90 relative z-10"
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
                      {/* Static inner glow */}
                      <div className="absolute inset-4 bg-white/10 rounded-xl sm:rounded-2xl" />
                    </>
                  )}

                  {/* Title and Description */}
                  <div className="mt-auto relative z-10">
                    <motion.h3
                      className={`text-lg md:text-xl font-semibold leading-tight transition-all duration-300 ${
                        offer.description ? "mb-2 group-hover:mb-3" : ""
                      } ${
                        offer.variant === "dark" 
                          ? "text-white" 
                          : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                      }`}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {offer.title}
                    </motion.h3>
                    {offer.description && (
                      <p
                        className={`text-sm md:text-base leading-relaxed overflow-hidden transition-all duration-400 ease-out opacity-0 max-h-0 translate-y-2 group-hover:opacity-100 group-hover:max-h-[200px] group-hover:translate-y-0 ${
                          offer.variant === "dark"
                            ? "text-white/70"
                            : "text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)]"
                        }`}
                      >
                        {offer.description}
                      </p>
                    )}
                  </div>


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
                    whileHover={offer.variant === "dark" ? { 
                      scale: 1.01,
                      transition: { type: "spring", stiffness: 200, damping: 22 }
                    } : {
                      scale: 1.02, 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    style={offer.variant === "dark" ? {
                      backdropFilter: `blur(${blurValue}px) saturate(200%)`,
                      backgroundColor: `rgba(255,255,255,${opacityValue})`,
                      WebkitBackdropFilter: `blur(${blurValue}px) saturate(200%)`,
                    } : {}}
                    className={`relative group rounded-3xl p-6 md:p-8 min-h-[220px] sm:min-h-[240px] flex flex-col overflow-hidden ${
                      offer.variant === "dark"
                        ? "border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                        : "bg-gradient-to-br from-teal-400 to-cyan-400 shadow-[0_8px_32px_0_rgba(94,234,212,0.2)]"
                    }`}
                  >
                    {/* iOS glass light reflection - more subtle */}
                    {offer.variant === "dark" && (
                      <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden">
                        {/* top highlight - very subtle */}
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20" />
                        {/* soft light gradient - iOS style */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent" />
                        {/* subtle inner glow */}
                        <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />
                      </div>
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

                    {/* Icon for dark variant with enhanced styling and glow */}
                    {offer.variant === "dark" && offer.icon && (
                      <motion.div 
                        className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 relative z-10"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={offer.icon}
                          alt={offer.title}
                          fill
                          className="object-contain opacity-90 relative z-10"
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

                    {/* Title and Description */}
                    <div className="mt-auto relative z-10">
                      <motion.h3
                        className={`text-lg md:text-xl font-semibold leading-tight transition-all duration-300 ${
                          offer.description ? "mb-2 group-hover:mb-3" : ""
                        } ${
                          offer.variant === "dark" 
                            ? "text-white" 
                            : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                        }`}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {offer.title}
                      </motion.h3>
                    {offer.description && (
                      <p
                        className={`text-sm md:text-base leading-relaxed overflow-hidden transition-all duration-400 ease-out opacity-0 max-h-0 translate-y-2 group-hover:opacity-100 group-hover:max-h-[200px] group-hover:translate-y-0 ${
                          offer.variant === "dark"
                            ? "text-white/70"
                            : "text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)]"
                        }`}
                      >
                        {offer.description}
                      </p>
                    )}
                    </div>


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

