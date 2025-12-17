"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function BottomSection() {

  // Placeholder thumbnails with random images
  const videoThumbnails = [
    { id: 1, thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop" },
    { id: 2, thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=600&fit=crop" },
    { id: 3, thumbnail: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&h=600&fit=crop" },
    { id: 4, thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop" },
    { id: 5, thumbnail: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop" },
    { id: 6, thumbnail: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=800&h=600&fit=crop" },
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
          className="space-y-12"
        >
          {/* Title - Movie Gallery */}
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-left"
          >
            <span className="text-white">Movie</span>{" "}
            <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Gallery
            </span>
          </motion.h2>

          {/* Video Thumbnails Grid - 2x3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          >
            {videoThumbnails.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative group aspect-video rounded-lg overflow-hidden cursor-pointer border border-teal-400/30"
              >
                {/* Thumbnail Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={video.thumbnail}
                    alt={`Video thumbnail ${video.id}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-green-400/80 bg-black/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {/* Play Icon */}
                    <div className="w-0 h-0 border-l-[12px] md:border-l-[16px] border-l-green-400 border-t-[8px] md:border-t-[10px] border-t-transparent border-b-[8px] md:border-b-[10px] border-b-transparent ml-1" />
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/20 via-transparent to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </motion.div>
            ))}
          </motion.div>

          {/* Watch More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group px-8 py-4 md:px-12 md:py-5 rounded-full overflow-hidden"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 rounded-full" />
              
              {/* Purple Glow on Right and Bottom */}
              <div className="absolute -right-1 top-0 bottom-0 w-1 bg-purple-400/50 rounded-r-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-purple-400/50 rounded-b-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Button Text */}
              <span className="relative z-10 text-white text-sm md:text-base font-semibold uppercase tracking-widest">
                Watch More
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

