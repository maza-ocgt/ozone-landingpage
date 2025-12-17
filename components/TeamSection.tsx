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
    <section className="relative min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Top Purple Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      {/* Bottom Purple Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-left"
          >
            <span className="text-white">Our</span>{" "}
            <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Team
            </span>
          </motion.h2>

          {/* Team Members - Circular Cutouts with Overlap */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center flex-wrap"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-black/50 shadow-2xl hover:scale-105 transition-transform duration-300"
                style={{
                  marginLeft: index > 0 ? "-40px" : "0",
                  zIndex: teamMembers.length - index,
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                  unoptimized
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

