import type { Metadata } from "next";

import { Inconsolata, Inter, Outfit } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Analytics } from "@vercel/analytics/next";

// xd glhf ^

const fontFamily = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const fontFamilyAlt = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fontFamilyCode = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UNIT30 Records",
  description: "UNIT30 COLLECTIVE. Discover new music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontFamilyCode.variable} ${fontFamilyAlt.variable} ${fontFamily.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
