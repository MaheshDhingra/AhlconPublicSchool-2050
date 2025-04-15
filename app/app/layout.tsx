// app/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/Layout/Header"; // We will create this
import Footer from "@/components/Layout/Footer"; // We will create this
import "./globals.css"; // Import global styles

import { Orbitron, Roboto } from 'next/font/google'
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-display' })
const roboto = Roboto({ weight: ['300', '400', '700'], subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  title: "Ahlcon Public - School of 2050",
  description: "Ahlcon Public - School of 2050",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${orbitron.variable} ${roboto.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}