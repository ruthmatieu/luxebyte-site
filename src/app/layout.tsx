import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "./Homepage/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luxebyte Solutions | Custom Websites for Local Businesses",
  description:
    "Professional, high-converting websites for small businesses. Luxebyte Solutions helps local brands grow online with style, speed, and expert support.",
  keywords: [
    "web design",
    "small business websites",
    "local business web design",
    "SEO-ready sites",
    "affordable websites",
    "custom websites",
    "mobile-friendly design",
  ],
  authors: [{ name: "Luxebyte Solutions" }],
  openGraph: {
    title: "Luxebyte Solutions | Custom Websites for Local Businesses",
    description:
      "We design and build websites that help small businesses grow online with style, speed, and support.",
    url: "https://luxebytesolutions.com",
    siteName: "Luxebyte Solutions",
    images: [
      {
        url: "/og-image.png", // must be in /public
        width: 1200,
        height: 630,
        alt: "Luxebyte Solutions Homepage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxebyte Solutions | Custom Websites for Local Businesses",
    description:
      "We create fast, beautiful websites to help local businesses thrive online.",
    images: ["/og-image.png"],
    creator: "@luxebytesolutions", // Optional: Add your Twitter handle
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Nav /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
