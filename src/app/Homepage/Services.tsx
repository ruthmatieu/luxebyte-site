"use client";

import React from "react";

const Services = () => {
  return (
    <section className="m-0 bg-[#0b1832] px-4 sm:px-6 md:px-10 lg:px-20 pt-20 py-16 md:py-20 lg:py-32 rounded-b-4xl">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-white text-3xl sm:text-5xl font-medium leading-tight mb-4">
          What we can do for you
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="bg-[#f4f7f9] rounded-2xl p-6 text-[#2085b8] text-left hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#5acaae] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Branding</h3>
            <p className="leading-relaxed text-[#0b1832]">
              We craft memorable brand identities with custom logos, color
              schemes, and visual styles that make your business instantly
              recognizable.
            </p>
          </div>

          {/* SEO */}
          <div className="bg-[#101f3a] rounded-2xl p-6 text-white text-left hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#5acaae] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">SEO</h3>
            <p className="leading-relaxed text-gray-300">
              Boost your search rankings with proven SEO strategies that improve
              visibility, drive organic traffic, and help customers find you
              fast.
            </p>
          </div>

          {/* Web Design */}
          <div className="bg-[#101f3a] rounded-2xl p-6 text-white text-left hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#5acaae] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Web Design</h3>
            <p className="leading-relaxed text-gray-300">
              Beautiful, responsive designs that reflect your brand, keep users
              engaged, and look great on every screen size — mobile to desktop.
            </p>
          </div>

          {/* Web Development */}
          <div className="bg-[#101f3a] rounded-2xl p-6 text-white text-left hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#5acaae] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="leading-relaxed text-gray-300">
              We build fast, secure, and scalable websites using modern code —
              optimized for performance, accessibility, and long-term growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
