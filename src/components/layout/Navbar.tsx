"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { NAV_LINKS, CONTACT_INFO } from "@/constants";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-brand-navbar-bg/80 backdrop-blur-md border-brand-brown/5">
      <Container>
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="BrightHat Logo"
              width={120}
              height={30}
              className="h-7 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex flex-1 items-center justify-center gap-8">
            <div className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-brand-gray hover:text-brand-orange transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <a
              href={CONTACT_INFO.phoneLink}
              className="flex items-center gap-2 text-brand-gray font-medium text-sm hover:text-brand-orange transition-colors"
            >
              <Phone className="w-4 h-4 font-bold" />
              {CONTACT_INFO.phone}
            </a>
          </div>

          <div className="hidden md:flex flex-shrink-0">
            <Button variant="outline">Login/Sign up</Button>
          </div>

          <button
            className="md:hidden text-brand-blue p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-brand-cream border-b border-gray-100 shadow-xl py-4 flex flex-col items-center gap-4 animate-in slide-in-from-top-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base font-semibold text-brand-gray hover:text-brand-orange"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={CONTACT_INFO.phoneLink}
              className="flex items-center gap-2 text-brand-gray font-semibold"
            >
              <Phone className="w-4 h-4" />
              {CONTACT_INFO.phone}
            </a>
            <Button variant="outline" className="w-3/4">
              Login/Sign up
            </Button>
          </div>
        )}
      </Container>
    </nav>
  );
}
