"use client";
// import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "../Homepage/ContactForm";

const containerSpacing =
  "px-4 sm:px-6 md:px-10 lg:px-20 pb-16 md:pb-20 lg:pb-32";

const ContactPage = () => {
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
              PORTFOLIO You Need for a Powerful Online Presence
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
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactPage;
