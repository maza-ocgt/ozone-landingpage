// "use client";

// import { motion } from "motion/react";

// export default function ComingSoon() {
//   return (
//     <section className="w-full py-13 md:py-23 flex flex-col items-center justify-center bg-black">
//       <div className="container mx-auto px-4">
//         {/* Coming Soon Image */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="flex justify-center mb-2 md:mb-4"
//         >
//           <img
//             src="/coming-soon.png"
//             alt="Coming Soon"
//             className="w-full h-auto max-w-6xl object-contain"
//           />
//         </motion.div>

//         {/* CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="flex justify-center -mt-6 md:-mt-8"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="rounded-full bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-teal-500/30 transition-all hover:shadow-xl hover:shadow-teal-500/50"
//           >
//             Preregister Now
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "motion/react";

type ComingSoonProps = {
  onOpenSurvey: () => void;
};

export default function ComingSoon({ onOpenSurvey }: ComingSoonProps) {
  return (
    <section className="w-full py-8 sm:py-10 md:py-12 flex flex-col items-center justify-center bg-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center">
        
        {/* Coming Soon Image */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center w-full"
        >
          <img
            src="/coming-soon.png"
            alt="Coming Soon"
            className="w-full h-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl object-contain"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-8 sm:mt-10 mb-6 sm:mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-teal-500/30 transition-all hover:shadow-xl hover:shadow-teal-500/50"
            onClick={onOpenSurvey}
          >
            Preregister Now
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
