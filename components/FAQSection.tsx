"use client";

import { motion } from "motion/react";

export default function FAQSection() {
  const faqs = [
    {
      id: 1,
      question: "Is This App Free?",
      answer: "Yes. It will be free to use with ads, there will be a premium option down the line.",
    },
    {
      id: 2,
      question: "Will this platform allow creator to upload their video?",
      answer: "Yes. Once the creator complete their verification progress.",
    },
    {
      id: 3,
      question: "Does this platform allow AI production video?",
      answer: "Yes. AI films will be allow for streaming in this platform.",
    },
    {
      id: 4,
      question: "What's 9+10",
      answer: "19, not 21.",
    },
    {
      id: 5,
      question: "Will AI-Recommendation disrupt my feed?",
      answer: "No. Our smart AI will not be disruptive towards your feed.",
    },
    {
      id: 6,
      question: "How Long is the wait time",
      answer: "It is still in the preparation phase.",
    },
  ];

  return (
    <section className="relative min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/bg2.png)',
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

      {/* Bottom Purple Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8 sm:space-y-10 md:space-y-12"
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-left"
          >
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text text-transparent">
              FAQ
            </span>
          </motion.h2>

          {/* FAQ Grid - 2 rows, 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                className="relative group rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/[0.08] bg-black/50 backdrop-blur-xl backdrop-saturate-200 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
                style={{
                  backdropFilter: "blur(40px) saturate(200%)",
                  WebkitBackdropFilter: "blur(40px) saturate(200%)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
              >
                {/* iOS glass light reflection */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
                  {/* top highlight */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20" />
                  {/* soft light gradient - iOS style */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent" />
                  {/* subtle inner glow */}
                  <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />
                </div>

                <div className="space-y-4 relative z-10">
                  <h3 className="text-white text-base sm:text-lg md:text-xl font-bold leading-tight">
                    {faq.question}
                  </h3>
                  <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

