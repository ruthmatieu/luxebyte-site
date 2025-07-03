"use client";

import React from "react";
// import NewsletterSubscription from "./NewsletterSubscription";

const Footer = () => {
  return (
    <>
      {/* <ContactForm/> */}
      <div className="parallax-container relative w-full">
        <footer className="section m-0 bg-[#f4f7f9] px-4 sm:px-6 md:px-10 lg:px-20 pt-20 pb-40">
          <div className="fixed-content w-full mx-auto text-center px-4 sm:px-6 md:px-10 lg:px-20">
            <h2 className="text-5xl font-bold mb-10">
              Ready to get
              <br />
              <span className="text-[#5acaae]">started?</span>
            </h2>

            {/* <NewsletterSubscription /> */}

            <div className="grid gap-10 mt-20 text-left text-[#0b1832] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {/* Section 1: Logo / Branding */}
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Luxebyte Solutions
                </h3>
                <p className="">
                  Empowering businesses with modern, high-performance websites.
                </p>
              </div>

              {/* Section 2: Quick Links */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
                <ul className="space-y">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <a href="/case-studies">Case Studies</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>

              {/* Section 3: Contact Info */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                <ul className="space-y">
                  <li>Email: hello@luxebytesolutions.com</li>
                  <li>Phone: (123) 456-7890</li>
                  <li>Location: Remote / Global</li>
                </ul>
              </div>

              {/* Section 4: Newsletter / Social */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Stay Connected</h3>
                <p className="mb-2">
                  Subscribe to our newsletter or follow us on socials.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-[#0b1832]">
                    Twitter
                  </a>
                  <a href="#" className="hover:text-[#0b1832]">
                    LinkedIn
                  </a>
                  <a href="#" className="hover:text-[#0b1832]">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-copyright_layout flex justify-between mt-5">
              <p className="copyright-text">
                ©<span className="current-year"> 2025</span> Luxebyte Solutions
              </p>
              <a href="/policies" className="copyright-text">
                Policies
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
