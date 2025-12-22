"use client";

import { motion } from "motion/react";

export default function Footer() {
  const marqueeItems = Array.from({ length: 14 }, (_, index) => `ozone-${index + 1}`);

  return (
    <footer className="relative w-full bg-black">
      {/* Marquee strip above footer */}
      <div className="relative overflow-hidden border-t border-b border-white/10 bg-[#0f0f10] py-4">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
        <motion.div
          className="flex min-w-[200%] gap-8 sm:gap-12 text-4xl sm:text-5xl lg:text-6xl font-extrabold lowercase tracking-tight bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity }}
          aria-hidden="true"
        >
          {marqueeItems.map((item) => (
            <span key={item} className="whitespace-nowrap">
              ozone
            </span>
          ))}
          {marqueeItems.map((item) => (
            <span key={`dup-${item}`} className="whitespace-nowrap">
              ozone
            </span>
          ))}
        </motion.div>
      </div>

      {/* Top Dark Strip */}
      <div className="h-1 bg-black" />

      {/* Central Gradient Strip */}
      <div className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 py-6 md:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
            {/* Left Side - Email */}
            <a
              href="mailto:marketing.admin@ocglobaltech.com"
              className="text-white text-sm md:text-base font-bold hover:underline transition-all duration-200"
            >
              marketing.admin@ocglobaltech.com
            </a>

            {/* Right Side - Copyright */}
            <p className="text-white text-sm md:text-base font-bold">
              Built by ©️ OC Global Technology
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Dark Strip */}
      <div className="h-1 bg-black" />
    </footer>
  );
}
