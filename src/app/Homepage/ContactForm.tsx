"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <section className="m-0 max-w-xl mx-auto text-center space-y-6 bg-[#f9fafb]">
      <form className="space-y-4 text-left">
        <Input placeholder="Name" required />
        <Input type="email" placeholder="Email" required />
        <select className="w-full p-2 border border-gray-300 rounded-md text-[#0b1832]">
          <option value="">Business Type</option>
          <option>Local Service</option>
          <option>Ecommerce</option>
          <option>Portfolio</option>
          <option>Other</option>
        </select>
        <Textarea placeholder="Message" rows={4} required />
        <Button
          type="submit"
          className="w-full bg-[#5acaae] hover:bg-[#2085b8] text-white py-2 rounded-lg text-lg"
        >
          Get a Free Quote
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
