"use client";
// import Image from "next/image";
import { motion } from "framer-motion";
import pattern from "../../../assets/services-pattern.png";

const services = [
  {
    title: "Branding & Identity",
    description:
      "We craft cohesive visual identities that go beyond just a logo — from color palettes and typography to tone of voice, we ensure your brand speaks consistently across all touchpoints.",
    iconShape: "rounded-full bg-[#5acaae]",
  },
  {
    title: "Web Design",
    description:
      "Our designs combine aesthetic clarity with usability. We build intuitive interfaces that guide visitors, build trust, and tell your story with impact.",
    iconShape: "rounded-md bg-[#2085b8]",
  },
  {
    title: "Web Development",
    description:
      "We develop fast, accessible websites using modern tech that scales. From custom React apps to lightweight marketing sites — we build what fits you best.",
    iconShape: "rounded-tr-3xl bg-[#5acaae]",
  },
  {
    title: "Search Engine Optimization",
    description:
      "SEO isn’t just keywords. We handle technical audits, semantic HTML, fast loading, structured data, and content strategy so your site gets discovered organically.",
    iconShape: "rounded-bl-3xl bg-[#2085b8]",
  },
  {
    title: "Site Maintenance & Support",
    description:
      "Once your site launches, we don’t disappear. We offer updates, backups, and ongoing tweaks so your website stays fresh and secure.",
    iconShape: "rounded-xl bg-[#5acaae]",
  },
  {
    title: "Content Strategy & Copywriting",
    description:
      "Great websites are built with great words. We help clarify your messaging and write clear, compelling copy that resonates with your target audience.",
    iconShape: "rounded-full bg-[#2085b8]",
  },
];

const steps = [
  {
    title: "Discovery Chat",
    description:
      "We start with a casual yet focused conversation to understand your goals, challenges, and vision. This helps us get aligned on your brand, audience, and business objectives. It’s your chance to share ideas, and our chance to listen deeply.",
  },
  {
    title: "Research & Strategy",
    description:
      "We dive into competitive research, user behavior, and design trends relevant to your industry. Then, we develop a custom strategy tailored to your business — from content flow to conversion goals. This phase ensures your site has a strong foundation.",
  },
  {
    title: "Design Mockups",
    description:
      "Using the insights from our strategy, we design high-fidelity mockups that reflect your brand identity and user needs. You'll get to review and provide feedback — we fine-tune the look and feel until everything aligns beautifully.",
  },
  {
    title: "Development",
    description:
      "Once the design is approved, we start building. Our developers bring the design to life using clean, scalable code. Whether it's a sleek one-pager or a dynamic CMS-backed site, we ensure it's responsive, fast, and accessible.",
  },
  {
    title: "Launch & Support",
    description:
      "After testing and your final approval, we launch your site to the world. But our work doesn’t stop there — we offer ongoing maintenance, performance checks, and content support to keep your digital presence sharp and stress-free.",
  },
];

const packages = [
  {
    name: "Launch Kit",
    price: "$",
    includes: ["1-page site", "Basic contact form", "Launch support"],
  },
  {
    name: "Growth Bundle",
    price: "$$",
    includes: ["Multi-page site", "SEO optimization", "CMS integration"],
  },
  {
    name: "Custom Elite",
    price: "$$$",
    includes: [
      "Custom strategy",
      "Advanced animations",
      "Full branding package",
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const containerSpacing =
  "px-4 sm:px-6 md:px-10 lg:px-20 pb-16 md:pb-20 lg:pb-32";

const ServicesPage = () => {
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

      <div className={`bg-[#f4f7f9] ${containerSpacing}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="bg-[#0b1832]/5 p-6 rounded-3xl shadow-md hover:shadow-xl transition"
            >
              <div className="flex items-center justify-center mb-6">
                <div className={`w-12 h-12 ${service.iconShape}`} />
              </div>
              <h3 className="text-xl text-center font-semibold mb-3 text-[#0b1832]">
                {service.title}
              </h3>
              <p className="text-[#0b1832] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* divider */}
      <div className="relative bg-[#13203a] flex justify-center text-center text-white overflow-hidden px-4 sm:px-6 md:px-10 lg:px-20 py-16 lg:py-20">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center bg-fixed opacity-20"
          style={{
            backgroundImage: `url(${pattern.src})`,
          }}
        ></div>

        {/* Overlay Content */}
        <div className="relative z-10 max-w-3xl">
          <p className="text-3xl sm:text-4xl font-bold mb-4">
            Not sure where to start?
            <br />
            Let’s talk through your vision.
          </p>
          <p className="text-lg text-gray-200 mb-6">
            Whether you need a brand refresh, a new website, or ongoing support
            —
            <br />
            we’re here to guide you through the process with clarity and
            creativity.
          </p>
          <button className="bg-[#5acaae] hover:bg-[#48b59c] font-bold text-[#0b1832] py-3 px-8 rounded-2xl transition cursor-pointer">
            Start a Conversation
          </button>
        </div>
      </div>

      {/* Process */}
      <div
        className={`bg-[#f4f7f9] text-center text-white pt-16 md:pt-20 lg:pt-32 ${containerSpacing}`}
      >
        <div
          className={`bg-white rounded-3xl text-center text-white p-4 sm:p-6 md:p-10`}
        >
          <motion.h3
            className="text-3xl sm:text-4xl font-semibold mb-12 text-[#0b1832]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeInUp}
          >
            How We Work
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="relative bg-[#0b1832] p-6 md:p-10 rounded-xl overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Background number */}
                <span className="absolute top-2 left-4 text-[#2085b8]/20 text-[6rem] font-bold leading-none pointer-events-none z-0">
                  {i + 1}
                </span>

                {/* Foreground content */}
                <div className="relative z-10">
                  <p className="font-semibold mb-2 text-xl text-[#2085b8]">
                    {step.title}
                  </p>
                  <p className="text-left text-gray-200">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages */}
      <div className="text-center bg-white">
        <div className="max-w-6xl mx-auto ">
          <motion.h3
            className="text-3xl font-bold mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Choose Your Plan
          </motion.h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {packages.map((p, i) => (
              <motion.div
                key={i}
                className="bg-[#1a2a4a] p-6 rounded-xl text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <h4 className="text-xl font-semibold mb-2">{p.name}</h4>
                <p className="text-lg text-[#5acaae] font-bold mb-4">
                  {p.price}
                </p>
                <ul className="list-disc list-inside text-gray-300 text-sm">
                  {p.includes.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-center bg-[#0b1832]"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
          Let’s Build Something Great
        </h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Whether you&apos;re just starting or rebranding, Luxebyte Solutions is
          here to make your business shine online.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#5acaae] hover:bg-[#48b59c] text-black font-medium py-3 px-8 rounded-2xl transition"
        >
          Get a Free Quote
        </a>
      </motion.div>
    </main>
  );
};

export default ServicesPage;
