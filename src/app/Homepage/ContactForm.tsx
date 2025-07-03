"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch("https://formspree.io/f/mvgrzjle", {
        method: "POST",
        headers: {
          Accept: "aaplication/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setError("");
        setSubmitted(true);
        router.push("/thank-you");
      } else {
        setError("Something went wrong. Please try again.");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Network error. Please try again later.");
    }
  };

  return (
    <section className="m-0 max-w-xl mx-auto text-center space-y-6 bg-[#f9fafb]">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 text-left bg-[#f4f7f9]"
      >
        <Input placeholder="Name" required />
        <Input type="email" placeholder="Email" required />
        <select
          required
          className="w-full p-2 border border-gray-400 rounded-md text-[#0b1832]"
        >
          <option value="" disabled selected>
            Business Type
          </option>
          <option value="beauty">
            Beauty & Wellness (Salon, Barber, Esthetician)
          </option>
          <option value="home-services">
            Home Services (Cleaning, Plumbing, Lawn Care)
          </option>
          <option value="fitness">
            Fitness & Coaching (Trainer, Yoga, Life Coach)
          </option>
          <option value="retail">Retail or Boutique Shop</option>
          <option value="creative">
            Creative Professional (Photographer, Artist, Videographer)
          </option>
          <option value="professional">
            Professional Services (Accountant, Lawyer, Consultant)
          </option>
          <option value="food">
            Food & Beverage (Caterer, Baker, Farmer&apos;s Market Vendor)
          </option>
          <option value="education">Education or Tutoring</option>
          <option value="nonprofit">Nonprofit / Church / Community Org</option>
          <option value="other">Other</option>
        </select>
        <Textarea placeholder="Message" rows={4} required />
        <Button
          type="submit"
          className="w-full bg-[#2085b8] hover:bg-[#2085b8] text-white py-2 rounded-lg text-lg"
        >
          Get a Free Quote
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
