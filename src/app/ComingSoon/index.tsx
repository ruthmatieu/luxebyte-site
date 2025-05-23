"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import logo from "../../../assets/logo-v2.png";
import background from "../../../assets/coming-soon-bg.png";

const ComingSoon = () => {
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
        const res = await fetch("https://formspree.io/f/xeogwrnk", {
            method: "POST",
            headers: {
                Accept: "aaplication/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        })
        if (res.ok) {
            setError("");
            setSubmitted(true);
            router.push("/thank-you");
        } else {
            setError("Something went wrong. Please try again.")
        }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
        setError("Network error. Please try again later.")
    }
  };

  return (
    <section 
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#f4f7f9] text-[#374151] bg-cover bg-center"
        style={{ backgroundImage: `url(${background.src})` }}
    >
        <Image src={logo} alt="logo" className="w-32 rounded"/>
      <h1 className="text-5xl font-extrabold mt-6 mb-4 text-[#0b1832]">
        Coming Soon September 2025
      </h1>
      <p className="text-xl md:text-2xl mb-2 text-[#0b1832]">
        Helping local businesses grow online—with speed, style, and support.
      </p>
      <p className="mb-6 max-w-md text-[#8a9ba8]">
        Our new website is coming soon. We’re preparing something great—
        custom websites designed to grow your business.
      </p>

      {!submitted ? (
        <form
          className="w-full max-w-sm mb-6"
          onSubmit={handleSubmit}
          noValidate
        >
          <input
            type="email"
            placeholder="Enter your email to get notified"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-[#8a9ba8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5acaae] mb-3 text-[#0b1832]"
          />
          
          {/* Hidden input for redirect */}
          <input type="hidden" name="_redirect" value="https://yourdomain.com/thank-you" />

          <button
            type="submit"
            className="w-full bg-[#5acaae] hover:bg-[#2085b8] text-white py-2 rounded-lg transition-colors cursor-pointer"
          >
            Notify Me
          </button>
          <p className="text-red-600 text-sm mt-2">{error}</p>
        </form>
      ) : (
        null
      )}

      <p className="text-sm text-[#8a9ba8]">
        Have a project in mind?{' '}
        <a href="mailto:hello@luxebytesolutions.com" target="_blank" className="underline text-[#2085b8] hover:text-[#5acaae]">
          Contact us
        </a>
      </p>
    </section>
  );
}


export default ComingSoon;