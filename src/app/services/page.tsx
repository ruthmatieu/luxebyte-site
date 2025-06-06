// app/services/page.tsx or pages/services.tsx (depending on your routing setup)
"use client";

import { motion } from "framer-motion";

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
  "Discovery Call",
  "Research & Strategy",
  "Design Mockups",
  "Development",
  "Launch & Support",
];

const testimonials = [
  {
    name: "Jane Doe",
    business: "Wellness Co.",
    quote:
      "Luxebyte completely transformed our website. Our bookings doubled within a month!",
  },
  {
    name: "David Smith",
    business: "Smith Legal",
    quote:
      "Professional, fast, and easy to work with. I finally feel confident about sending people to my site.",
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

export default function ServicesPage() {
  return (
    <main className="min-h-screen text-white px-6 sm:px-12 lg:px-20 py-24 lg:py-32">
      <div className="bg-[#f4f7f9]">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-center mb-16"
          >
            Everything You Need for a Powerful Online Presence
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                className="bg-[#13203a] p-6 rounded-3xl shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-12 h-12 ${service.iconShape}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#5acaae]">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h3
            className="text-3xl font-bold mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeInUp}
          >
            How We Work
          </motion.h3>
          <div className="grid sm:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="bg-[#1c2b47] p-4 rounded-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="font-semibold">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-5xl mx-auto">
          <motion.h3
            className="text-3xl font-bold text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            Client Testimonials
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-[#13203a] p-6 rounded-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <p className="italic text-gray-300 mb-2">“{t.quote}”</p>
                <p className="text-sm font-semibold">
                  — {t.name}, {t.business}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Packages */}
        <div className="max-w-6xl mx-auto text-center">
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
          className="mt-24 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            Let’s Build Something Great
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Whether you&apos;re just starting or rebranding, Luxebyte Solutions
            is here to make your business shine online.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#5acaae] hover:bg-[#48b59c] text-black font-medium py-3 px-8 rounded-2xl transition"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </div>
    </main>
  );
}
