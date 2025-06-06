"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="m-0 bg-[#0b1832] text-white px-6 sm:px-12 lg:px-20 py-24 lg:py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Elevate Your Brand
            <br className="hidden sm:block" />
            With Stunning Digital Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-300"
          >
            Luxebyte Solutions crafts modern, conversion-focused websites for
            small businesses ready to level up. No fluff — just strategic design
            and clean development.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center lg:justify-start gap-4 pt-4"
          >
            <button className="bg-[#5acaae] hover:bg-[#48b59c] text-black px-6 py-3 rounded-2xl text-sm font-semibold transition">
              View Our Work
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-2xl text-sm font-semibold hover:bg-white hover:text-[#0b1832] transition">
              Get a Quote
            </button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-br from-[#5acaae]/20 to-[#2085b8]/30 rounded-3xl blur-3xl scale-110"
          ></motion.div>
          <img
            src="/mockup.png"
            alt="Website Mockup"
            className="relative w-full h-full object-contain z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
