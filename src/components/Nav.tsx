// src/components/Nav.tsx
"use client";
import { useState } from "react";
// import { Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact", href: "/contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    // <header className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-4 bg-[#f4f7f9]">
    <header className="m-0 sticky top-0 z-50 backdrop-blur-md bg-white px-4 sm:px-6 md:px-10 lg:px-20 py-4 transition-all">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="Logo" className="w-20 md:w-26" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#0b1832] hover:text-[#2085b8] font-semibold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#0b1832] focus:outline-none"
        >
          {mobileOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 bg-white shadow-lg rounded-lg px-4 py-2 space-y-2">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-[#0b1832] hover:text-[#2085b8] font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
