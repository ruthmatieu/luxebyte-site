"use client";
import React , { useEffect } from "react";
import confetti from "canvas-confetti";

const ThankYou = () => {

  useEffect(() => {
    confetti({
      particleCount: 300,
      spread: 1200,
      origin: { y: 0 },
      colors: ["#5acaae", "#2085b8", "#0b1832", "#f26b38"],
      startVelocity: 30,
      gravity: 0.2,
    });
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#f4f7f9] text-[#0b1832]">
      <h1 className="text-4xl font-bold mb-4">Thank You for Subscribing!</h1>
      <p className="text-lg max-w-md text-[#8a9ba8]">
        We appreciate your interest. You&apos;ll be the first to know when we launch!
      </p>
    </section>
  );
};

export default ThankYou;
