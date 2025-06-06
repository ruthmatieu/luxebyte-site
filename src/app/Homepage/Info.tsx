"use client";

import { motion } from "framer-motion";

const Info = ({ pagePaddingX }: { pagePaddingX: string }) => {
  // Animation variants for fade + slide in from bottom
  const fadeSlideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className={`m-0 bg-[#0b1832] text-left ${pagePaddingX} py-16 md:py-20 lg:py-32`}
    >
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Sticky Quote */}
        <motion.div
          className="md:sticky md:top-32 self-start h-fit"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeSlideUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-3xl sm:text-5xl font-medium leading-tight mb-4">
            More than just pixels – we build online homes for your{" "}
            <span className="text-[#5acaae] font-semibold">small business</span>
            .<br />
          </p>
          <p className="text-lg sm:text-xl font-medium leading-relaxed">
            From quick launches to fully custom sites, we help you look
            professional and win more customers online.
          </p>
        </motion.div>

        {/* Right Column: Cards with staggered animation */}
        <div className="space-y-10">
          {[
            {
              title: "Built for Small Business Success",
              text: `We understand the unique challenges small businesses face online — from limited budgets to the need for fast turnarounds. That’s why we tailor our websites to be lean, effective, and results-driven. Whether you're just getting started or scaling up, we focus on what matters: clean design, fast load times, and making you look credible to your ideal customers.`,
            },
            {
              title: "Designs That Convert, Not Just Impress",
              text: `A beautiful website is great — but a website that turns visitors into customers is even better. We blend modern design with marketing principles to create online experiences that build trust, drive engagement, and help grow your revenue. Every button, section, and layout is crafted with a purpose: to help your business thrive.`,
            },
            {
              title: "Transparent, Friendly, and Reliable",
              text: `No jargon. No hidden fees. No ghosting. We pride ourselves on being approachable, communicative, and dependable partners from day one. You’ll always know what to expect, and we’ll guide you every step of the way — from kickoff to launch (and beyond). Our goal is simple: to make your web project stress-free and successful.`,
            },
          ].map(({ title, text }, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeSlideUp}
              transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.3 }}
              className="mb-40"
            >
              <p className="text-xl font-semibold mb-4">
                <span className="text-[#5acaae] mr-2">▶</span>
                {title}
              </p>
              <p>{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
