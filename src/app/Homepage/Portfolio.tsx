"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import { PortfolioImage } from "@/components/ui/portfolioCard"
import ComingSoon from "../../../assets/coming-soon-bg.png";
import heroImage3 from "../../../assets/hero-image-3.png";
import heroImage1 from "../../../assets/hero-image-1.png";
import heroImage2 from "../../../assets/hero-image-2.png";

const Portfolio = () => {
  return (
    <section className="m-0 bg-[#f4f7f9] px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-20 lg:py-32">
      <div className="mx-auto text-center space-y-10">
        <p className="text-3xl sm:text-5xl text-[#0b1832] font-medium leading-tight mb-4">
          Clean, modern, and built to perform.
          <br />
        </p>
        <p className="text-lg sm:text-xl text-[#0b1832] font-medium leading-relaxed">
          A glimpse into the websites we&apos;ve built for small businesses like
          yours.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Row 1 - 2 Images */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full flex flex-col sm:flex-row gap-4 col-span-1 md:col-span-3"
          >
            <Image
              src={heroImage3}
              alt="Portfolio 1"
              className="w-full md:w-1/2 rounded-xl object-cover h-64 "
            />
            <Image
              src={heroImage1}
              alt="Portfolio 2"
              className="w-full md:w-1/2 rounded-xl object-cover h-64"
            />
          </motion.div>

          {/* Row 2 - 3 Images */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="col-span-1 sm:col-span-2 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            <Image
              src={heroImage2}
              alt="Portfolio 3"
              className="rounded-xl object-cover w-full h-64"
            />
            <Image
              src={ComingSoon}
              alt="Portfolio 4"
              className="rounded-xl object-cover w-full h-64"
            />
            <Image
              src={ComingSoon}
              alt="Portfolio 5"
              className="rounded-xl object-cover w-full h-64"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
