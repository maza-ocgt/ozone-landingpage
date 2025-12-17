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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative rounded-2xl p-6 md:p-8 border border-purple-500/30 bg-black/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  <h3 className="text-white text-lg md:text-xl font-bold leading-tight">
                    {faq.question}
                  </h3>
                  <p className="text-white text-base md:text-lg leading-relaxed">
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

