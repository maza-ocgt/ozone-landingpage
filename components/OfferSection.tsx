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
    <section className="relative min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Bottom Purple Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-left"
          >
            <span className="text-white">What we</span>{" "}
            <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
              offer
            </span>
          </motion.h2>

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
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`relative rounded-2xl p-6 md:p-8 min-h-[200px] flex flex-col ${
                    offer.variant === "dark"
                      ? "bg-black/50 border border-purple-500/30"
                      : "bg-gradient-to-br from-teal-400 to-cyan-400"
                  }`}
                >
                  {/* Icon for dark variant */}
                  {offer.variant === "dark" && offer.icon && (
                    <div className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16">
                      <Image
                        src={offer.icon}
                        alt={offer.title}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  )}

                  {/* Title at bottom */}
                  <div className="mt-auto">
                    <h3 className="text-white text-lg md:text-xl font-semibold leading-tight">
                      {offer.title}
                    </h3>
                  </div>
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
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className={`relative rounded-2xl p-6 md:p-8 min-h-[200px] flex flex-col ${
                      offer.variant === "dark"
                        ? "bg-black/50 border border-purple-500/30"
                        : "bg-gradient-to-br from-teal-400 to-cyan-400"
                    }`}
                  >
                    {/* Icon for dark variant */}
                    {offer.variant === "dark" && offer.icon && (
                      <div className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16">
                        <Image
                          src={offer.icon}
                          alt={offer.title}
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                    )}

                    {/* Title at bottom */}
                    <div className="mt-auto">
                      <h3 className="text-white text-lg md:text-xl font-semibold leading-tight">
                        {offer.title}
                      </h3>
                    </div>
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

