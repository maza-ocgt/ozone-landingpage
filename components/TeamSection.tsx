"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    { 
      id: 1, 
      image: "/mrlim.png",
      name: "Mr Lim ",
      title: "Managing Director",
      quote: "At Ozone, we turn vision into action. Guided by innovation and collaboration, we strive to create lasting value, embrace opportunities, and set new benchmarks in our industry. Together, we will transform challenges into growth and drive Ozone to its fullest potential."
    },
    {
      id: 2,
      image: "/john.png", 
      name: "John",
      title: "Chief Innovation Officer",
      quote: "testing2"
    },
    { 
      id: 3, 
      image: "/zizi.png", 
      name: "Zizi",
      title: "Lead Developer",
      quote: ""
    },
    { 
      id: 4, 
      image: "/lim.png",
      name: "Lim",
      title: "Chief Technology Officer",
      quote: "testing4"
    },
    { 
      id: 5,
      image: "/maza.png",
      name: "Maza",
      title: "Junior Frontend App Developer",
      quote: "testing5"
    },

  ];

  const quoteVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1, 
      y: 0,
      scale: 1, 
      transition: {
        duration: 0.4,
        ease: "easeOut",
      }
    }
  }

  return (
    <section className="relative min-h-screen bg-black py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(94,234,212,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(94,234,212,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Glow */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold mb-20">
          <span className="text-white">Our </span>
          <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
            Team
          </span>
        </h2>

        {/* Team */}
        <div className="flex justify-center items-center flex-wrap">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover="hover"
              variants={{
                hover: {
                  scale: 1.1,
                  y: -8,
                  transition: { duration: 0.3 },
                },
              }}
              className={`relative group w-40 h-40 md:w-48 md:h-48 rounded-full ${
                index > 0 ? "-ml-6 md:-ml-8" : ""
              }`}
              style={{ zIndex: teamMembers.length - index }}
            >
              {/* Glow Ring */}
              <motion.div
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-teal-400/30 via-cyan-400/30 to-teal-400/30 blur-xl opacity-0 group-hover:opacity-100"
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Avatar */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-black shadow-lg group-hover:border-teal-400/50 transition-all">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Quote Panel */}
              <div className="absolute top-full mt-9 left-1/2 -translate-x-1/2 w-56 pointer-events-none
                              opacity-0 translate-y-4 scale-95
                              group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
                              transition-all duration-300 ease-out">
                <div className="relative bg-black/70 backdrop-blur-md border border-teal-400/30 rounded-xl p-4 shadow-[0_0_25px_rgba(94,234,212,0.3)] overflow-hidden">
                  
                  {/* Scan Line */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-400/20 to-transparent"
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />

                  <p className="relative z-10 text-sm text-teal-200 text-center">
                    “{member.quote}”
                  </p>
                </div>
              </div>

              {/* Name */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-semibold bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  {member.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


