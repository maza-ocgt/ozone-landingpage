"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function OfferSection() {
  const { t } = useTranslation("common");
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  const offers = [
    {
      id: 1,
      title: t("offer.longFormStreaming.title"),
      description: t("offer.longFormStreaming.description"),
      image: "/offer/lfs.jpg",
      features: t("offer.longFormStreaming.features", { returnObjects: true }) as string[],
    },
    {
      id: 2,
      title: t("offer.smartDiscovery.title"),
      description: t("offer.smartDiscovery.description"),
      image: "/offer/sd.jpg",
      features: t("offer.smartDiscovery.features", { returnObjects: true }) as string[],
    },
    {
      id: 3,
      title: t("offer.creatorMonetization.title"),
      description: t("offer.creatorMonetization.description"),
      image: "/offer/money.jpg",
      features: t("offer.creatorMonetization.features", { returnObjects: true }) as string[],
    },
    {
      id: 4,
      title: t("offer.watchToEarn.title"),
      description: t("offer.watchToEarn.description"),
      image: "/offer/watch.jpeg",
      features: t("offer.watchToEarn.features", { returnObjects: true }) as string[],
    },
    {
      id: 5,
      title: t("offer.malaysiaContent.title"),
      description: t("offer.malaysiaContent.description"),
      image: "/offer/malaysia2.jpg",
      features: t("offer.malaysiaContent.features", { returnObjects: true }) as string[],
    },
    {
      id: 6,
      title: t("offer.creatorStudio.title"),
      description: t("offer.creatorStudio.description"),
      image: "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?w=1200&auto=format&fit=crop",
      features: t("offer.creatorStudio.features", { returnObjects: true }) as string[],
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section
      ref={sectionRef} 
      className="relative min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_90%_60%_at_20%_10%,rgba(79,70,229,0.08),transparent),radial-gradient(ellipse_80%_50%_at_80%_0%,rgba(34,211,238,0.08),transparent),radial-gradient(ellipse_80%_50%_at_50%_90%,rgba(20,184,166,0.06),transparent),linear-gradient(180deg,#0b0c10_0%,#0b1118_30%,#0a0f14_70%,#0a0a0f_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:120px_120px] opacity-[0.04] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent opacity-10 pointer-events-none" />

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
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-left relative px-2 sm:px-0">
              <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">{t("offer.title")}</span>{" "}
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
                  {t("offer.offer")}
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

          {/* Cards Grid - Fancy glass grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08 },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {offers.map((offer) => (
              <motion.div
                key={offer.id}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    setExpandedCardId(expandedCardId === offer.id ? null : offer.id);
                  }
                }}
                onHoverStart={() => setHoveredCardId(offer.id)}
                onHoverEnd={() => setHoveredCardId(null)}
                className="group relative overflow-hidden rounded-3xl bg-white/8 border border-white/12 backdrop-blur-2xl shadow-[0_15px_60px_rgba(0,0,0,0.35)] p-5 sm:p-6 md:p-7 flex flex-col gap-4"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0.55),rgba(0,0,0,0.35)), url(${offer.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "saturate(1.05)",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(94,234,212,0.18),transparent_38%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.14),transparent_34%)]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/14 via-white/8 to-transparent" />

                <div className="relative space-y-3">
                  <div className="inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-teal-300/70 via-cyan-400/70 to-blue-500/70 border border-white/25 backdrop-blur-xl text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] text-base sm:text-lg font-semibold">
                    {offer.title}
                  </div>
                  <motion.div
                    className={`inline-flex max-w-full rounded-2xl px-4 py-3 bg-black/45 border border-white/15 backdrop-blur shadow-[0_12px_28px_rgba(0,0,0,0.35)] overflow-hidden ${
                      expandedCardId === offer.id || isMobile
                        ? "opacity-100 translate-x-0"
                        : "opacity-80 translate-x-0 md:opacity-0 md:-translate-x-2 md:group-hover:opacity-100 md:group-hover:translate-x-0"
                    }`}
                    initial={isMobile ? { opacity: 0, x: -14 } : false}
                    whileInView={isMobile ? { opacity: 1, x: 0 } : undefined}
                    viewport={isMobile ? { once: true, amount: 0.4 } : undefined}
                    transition={isMobile ? { duration: 0.25, ease: "easeOut" } : { duration: 0.2 }}
                  >
                    <p className="text-sm text-white/90 leading-relaxed">
                      {offer.description}
                    </p>
                  </motion.div>
                </div>

                <div className="relative flex flex-wrap gap-2 pt-2">
                  {offer.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-[11px] px-3 py-1 rounded-full bg-white/12 border border-white/15 text-white/90 backdrop-blur shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
