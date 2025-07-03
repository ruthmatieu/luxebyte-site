"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="m-0 bg-[#f4f7f9] text-[#0b1832] px-6 sm:px-12 lg:px-20 py-16 md:py-24 lg:py-36 relative">
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
            className="text-lg sm:text-xl text-gray-600"
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
            <button className="cursor-pointer bg-[#5acaae] hover:bg-[#48b59c] text-[#0b1832] px-6 py-3 rounded-xl text-sm font-semibold transition">
              Start a Conversation
            </button>
            <button className="cursor-pointer border border-[#2085b8] bg-white text-[#2085b8] px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#f4f7f9] hover:text-[#0b1832] transition">
              View Our Work
            </button>
          </motion.div>
        </motion.div>

        {/* Right Image */}

        <div className="container relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center">
          {/* Background blur */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#5acaae]/20 to-[#2085b8]/30 blur-3xl scale-90" />

          {/* Scaled iframe */}
          <div className="blob absolute z-10 w-full h-full flex items-center justify-center">
            <div className="scale-[0.55] sm:scale-[0.65] md:scale-[0.8] lg:scale-100 origin-center w-[500px] h-[500px] max-w-full">
              <iframe
                src="https://my.spline.design/untitled-408xwPlNskDVRoOrMtKDQxaw/"
                frameBorder="0"
                className="w-full h-full"
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
