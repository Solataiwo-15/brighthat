import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "BrightHat | Borderless Tutoring",
  description: "Outcome-focused tutoring at its best.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} font-sans antialiased bg-brand-cream text-brand-black`}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
