"use client";

import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import CustomCursor from "@/components/UI/CustomCursor";
import "./globals.css";
import { ParallaxProvider } from 'react-scroll-parallax';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         <title>Ahlcon Public School - Pioneering Education for 2050</title>
         <meta name="description" content="Discover Ahlcon Public School's vision for future-ready education, integrating advanced technology and innovative learning." />
      </head>
      <body>
        <ParallaxProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ParallaxProvider>
        <CustomCursor />
      </body>
    </html>
  );
}