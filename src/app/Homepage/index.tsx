"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ImageCard from "@/components/ui/imageCard";
import heroImage1 from "../../../assets/hero-image-1.png";
import heroImage2 from "../../../assets/hero-image-2.png";
import heroImage3 from "../../../assets/hero-image-3.png"

const Homepage = () => {
  return (
    <div className="min-h-screen bg-[#f4f7f9] text-[#0b1832] px-4 sm:px-8 md:px-16 pt-40 pb-10 space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0b1832]">
          Website <span className="text-[#2085b8]">Solutions</span> that work as hard as you do
        </h1>
        <div className=""></div>
         <ImageCard
            imageSrc={heroImage1}
            alt="One-line description of the project or result."
        />
        <ImageCard
            imageSrc={heroImage2}
            alt="One-line description of the project or result."
        />
        <ImageCard
            imageSrc={heroImage3}
            alt="One-line description of the project or result."
        />
        <p className="text-lg sm:text-xl text-[#374151]">
            More than just pixels - we build online homes for your <span className="text-[#5acaae]">small business</span>. From quick launches to fully custom sites, we help you look professional and win more customers online.
        </p>
        <Button className="bg-[#5acaae] hover:bg-[#2085b8] text-white px-6 py-3 text-lg rounded-xl shadow-md">
          Get a Free Quote
        </Button>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="shadow-lg border-none">
            <CardHeader>
              <CardTitle>Essential Tier</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Professional websites that get your business online—fast</p>
              <ul className="text-sm space-y-1">
                <li>• Up to 5 pages</li>
                <li>• Mobile-friendly, responsive design</li>
                <li>• Basic SEO setup</li>
                <li className="font-semibold">From $1,500</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-none">
            <CardHeader>
              <CardTitle>Business Growth Tier</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Built to scale with your growing business</p>
              <ul className="text-sm space-y-1">
                <li>• 5+ pages</li>
                <li>• Blog and SEO-ready</li>
                <li>• Custom design blocks</li>
                <li className="font-semibold">From $2,500</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-none">
            <CardHeader>
              <CardTitle>Custom Websites</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Tailored, powerful solutions built from the ground up</p>
              <ul className="text-sm space-y-1">
                <li>• Bespoke design and development</li>
                <li>• Advanced features and integrations</li>
                <li>• Custom CMS</li>
                <li className="font-semibold">From $5,000</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold">Why Choose Luxebyte?</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#374151] text-sm">
          <li>⚡ Fast, friendly, and affordable</li>
          <li>📱 Mobile-first, clean designs</li>
          <li>🚀 Speed & SEO optimized</li>
          <li>🙌 Support and training included</li>
        </ul>
      </section>

      {/* Get a Quote Form */}
      <section className="max-w-xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold">Get a Free Quote</h2>
        <p className="text-[#374151]">Ready to launch or level up your website? Let’s chat about your business and goals.</p>
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
          <Button type="submit" className="w-full bg-[#5acaae] hover:bg-[#2085b8] text-white py-2 rounded-lg text-lg">
            Get a Free Quote
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Homepage;
