"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { NAV_LINKS, CONTACT_INFO } from "@/constants";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const pathname = usePathname();

  const dropdownCloseTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleDropdownClose = () => {
    if (dropdownCloseTimeout.current) {
      clearTimeout(dropdownCloseTimeout.current);
    }
    dropdownCloseTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  const handleDropdownOpen = (index: number) => {
    if (dropdownCloseTimeout.current) {
      clearTimeout(dropdownCloseTimeout.current);
    }
    setActiveDropdown(index);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-brand-navbar-bg/80 backdrop-blur-md border-b border-brand-brown/5">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="BrightHat Logo"
              width={120}
              height={30}
              className="h-6 md:h-7 w-auto object-contain"
              priority
            />
          </Link>

          {/* DESKTOP MENU - CENTER */}
          <div className="hidden xl:flex flex-1 items-center justify-center gap-6">
            <div className="flex items-center gap-6">
              {NAV_LINKS.map((link, index) => {
                const isActiveLink =
                  pathname === link.href ||
                  (link.dropdown &&
                    link.dropdown.some((subLink) => pathname === subLink.href));

                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() =>
                      link.dropdown && handleDropdownOpen(index)
                    }
                    onMouseLeave={handleDropdownClose}
                  >
                    <Link
                      href={link.href}
                      className={`relative text-sm font-semibold transition-colors py-2 flex items-center gap-1
                        ${isActiveLink ? "text-brand-orange" : "text-brand-gray hover:text-brand-orange"}
                      `}
                    >
                      {link.label}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand-orange transition-transform duration-200 origin-left
                        ${isActiveLink ? "scale-x-100" : "scale-x-0"}
                      `}
                      />
                    </Link>

                    {/* DESKTOP DROPDOWN MENU */}
                    {link.dropdown && activeDropdown === index && (
                      <div
                        className="absolute top-full left-0 pt-1.5 w-56 bg-[#D1DAE6] font-semibold text-brand-gray rounded-lg shadow-lg py-2 animate-in slide-in-from-top-2 z-50"
                        onMouseEnter={() => handleDropdownOpen(index)}
                        onMouseLeave={handleDropdownClose}
                      >
                        {link.dropdown.map((subLink) => (
                          <Link
                            key={subLink.label}
                            href={subLink.href}
                            className={`block px-4 py-2 text-sm hover:bg-brand-blue/10 transition-colors
                                ${pathname === subLink.href ? "text-brand-orange bg-brand-blue/5" : "text-brand-gray hover:text-brand-orange"}
                            `}
                            onClick={handleDropdownClose}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {/* Phone Number */}
            <a
              href={CONTACT_INFO.phoneLink}
              className="flex items-center gap-2 text-brand-gray font-medium text-sm hover:text-brand-orange transition-colors"
            >
              <Phone className="w-4 h-4 font-bold" />
              {CONTACT_INFO.phone}
            </a>
          </div>

          {/* DESKTOP MENU - RIGHT BUTTON */}
          <div className="hidden xl:flex flex-shrink-0">
            <Button variant="outline">Login/Sign up</Button>
          </div>

          {/* MOBILE & TABLET HAMBURGER BUTTON */}
          <button
            className="xl:hidden text-brand-blue p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE & TABLET DROPDOWN MENU */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-20 left-0 w-full h-screen bg-brand-cream border-t border-gray-100 shadow-xl py-8 flex flex-col items-center gap-6 animate-in slide-in-from-top-5 z-50">
            {NAV_LINKS.map((link, index) => {
              const isActiveLink =
                pathname === link.href ||
                (link.dropdown &&
                  link.dropdown.some((subLink) => pathname === subLink.href));

              return (
                <div key={link.label} className="w-full text-center">
                  <Link
                    href={link.href}
                    className={`text-lg font-semibold py-2 px-4 block
                      ${isActiveLink ? "text-brand-orange" : "text-brand-gray hover:text-brand-orange"}
                    `}
                    onClick={() => {
                      if (link.dropdown) {
                        setActiveDropdown(
                          activeDropdown === index ? null : index,
                        );
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                  >
                    {link.label}
                  </Link>

                  {/* MOBILE DROPDOWN SUB-LINKS */}
                  {link.dropdown &&
                    (activeDropdown === index || isActiveLink) && (
                      <div className="flex flex-col gap-2 mt-2 bg-brand-blue/5 rounded-md px-2 py-2 w-4/5 mx-auto animate-in fade-in-0 duration-200">
                        {link.dropdown.map((subLink) => (
                          <Link
                            key={subLink.label}
                            href={subLink.href}
                            className={`block px-3 py-1.5 text-sm transition-colors rounded-sm
                              ${pathname === subLink.href ? "text-brand-orange bg-brand-blue/10" : "text-brand-gray hover:text-brand-orange"}
                          `}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              );
            })}
            <a
              href={CONTACT_INFO.phoneLink}
              className="flex items-center gap-2 text-brand-gray font-semibold text-lg mt-4"
            >
              <Phone className="w-5 h-5" />
              {CONTACT_INFO.phone}
            </a>
            <Button variant="outline" className="w-3/4 mt-4">
              Login/Sign up
            </Button>
          </div>
        )}
      </Container>
    </nav>
  );
}
