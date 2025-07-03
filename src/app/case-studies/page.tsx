"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImage1 from "../../../assets/hero-image-1.png";
import heroImage2 from "../../../assets/hero-image-2.png";
import heroImage3 from "../../../assets/hero-image-3.png";
import ComingSoon from "../../../assets/coming-soon-bg.png";

const caseStudies = [
  {
    image: heroImage1,
    title: "Empowering Access to Fresh Produce",
    desc: "A mobile app built to revolutionize AI-powered greenhouses. Designed for operational efficiency at scale.",
    bgColor: "bg-[#0b1832]",
    textColor: "text-[#f4f7f9]",
  },
  {
    image: heroImage2,
    title: "Streamline Remote Hiring",
    desc: "A marketplace platform to connect businesses with top-tier software development partners worldwide.",
    bgColor: "bg-white",
    textColor: "text-[#0b1832]",
  },
  {
    image: heroImage3,
    title: "Java SDK for Security-Sensitive Products",
    desc: "A highly specialized Java SDK designed to expose APIs securely for sensitive government services.",
    bgColor: "bg-[#5acaae]",
    textColor: "text-[#0b1832]",
  },
  {
    image: ComingSoon,
    title: "Coming Soon",
    desc: "Another powerful platform in development. We’re excited to share more soon.",
    bgColor: "bg-white",
    textColor: "text-[#0b1832]",
  },
  {
    image: heroImage1,
    title: "Empowering Access to Fresh Produce",
    desc: "A mobile app built to revolutionize AI-powered greenhouses. Designed for operational efficiency at scale.",
    bgColor: "bg-[#2085b8]",
    textColor: "text-[#0b1832]",
  },
];

const CaseStudies = () => {
  return (
    <main className="min-h-screen">
      <div className="bg-[#f4f7f9] px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-20 lg:py-32">
        <div className="mx-auto">
          <div className="text-[#0b1832] md:w-1/2">
            <motion.h1
              className="mb-4 text-4xl sm:text-5xl font-bold text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              Everything You Need for a Powerful Online Presence
            </motion.h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sint
              cumque sapiente reiciendis, iste doloribus libero obcaecati, cum
              deleniti deserunt, error quo velit. Harum exercitationem dolore
              consectetur nobis at magnam?
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-10 lg:px-20 pb-16 md:pb-20 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 !== 0 ? "md:flex-col-reverse" : ""
              } ${
                index % 1 !== 0 ? "lg:flex-col-reverse" : ""
              } ${item.bgColor} shadow-md overflow-hidden`}
            >
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
                placeholder="blur"
              />
              <div
                className={`${item.textColor} p-6 sm:p-10 flex flex-col justify-between h-full`}
              >
                <h3 className={`text-2xl font-semibold mb-2`}>{item.title}</h3>
                <p className="mb-4">{item.desc}</p>
                <div className="text-right">
                  <button className="text-[#2085b8] font-semibold hover:underline self-start">
                    View Project →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CaseStudies;
