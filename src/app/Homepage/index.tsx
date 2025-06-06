"use client";

import React from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import heroImage2 from "../../../assets/hero-image-2.png";
// import heroImage3 from "../../../assets/hero-image-3.png"
import Portfolio from "./Portfolio";
import Services from "./Services";
import Hero from "./Hero";
import Info from "./Info";

const Homepage = () => {
  const pagePaddingX = "px-4 sm:px-6 md:px-10 lg:px-20";
  // const sectionPaddingY = "pt-40 pb-20";

  return (
    <div className="m-0 min-h-screen text-white space-y-24">
      <Hero />
      <Info pagePaddingX={pagePaddingX} />
      <Portfolio />
      <Services />
    </div>
  );
};

export default Homepage;
