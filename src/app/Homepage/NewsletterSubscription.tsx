"use client";
import React, { useState } from "react";

const NewsletterSubscription = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

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
      });
      if (res.ok) {
        setError("");
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Network error. Please try again later.");
    }
  };
  return (
    <div className="">
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
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-[#8a9ba8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5acaae] mb-3 text-[#0b1832]"
          />

          {/* Hidden input for redirect */}
          <input
            type="hidden"
            name="_redirect"
            value="https://yourdomain.com/thank-you"
          />

          <button
            type="submit"
            className="w-full bg-[#0b1832] hover:bg-[#5acaae] text-white font-semibold hover:text-[#0b1832] py-2 rounded-lg transition-colors cursor-pointer"
          >
            Notify Me
          </button>
          <p className="text-red-600 text-sm mt-2">{error}</p>
        </form>
      ) : (
        <p>Got it! We&apos;`ll be touch shortly.</p>
      )}
    </div>
  );
};

export default NewsletterSubscription;
