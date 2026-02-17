import Link from "next/link";
import Image from "next/image";
import { Send } from "lucide-react";
import Container from "@/components/ui/Container";
import { FOOTER_LINKS } from "@/constants";

export default function Footer() {
  return (
    <footer className="relative w-full bg-brand-brown text-white py-12 lg:py-20 overflow-hidden">
      <div className="absolute top-[-10%] left-[-8%] w-[250px] lg:w-[408px] h-[250px] lg:h-[408px] bg-brand-orange/40 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center mb-12 lg:mb-24">
          <h3 className="text-2xl md:text-[32px] font-semibold mb-6 text-center">
            Subscribe to our Monthly Newsletters
          </h3>

          <div className="flex w-full max-w-xl bg-white rounded-full overflow-hidden p-1 shadow-lg">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 md:px-6 py-3 text-gray-700 placeholder-gray-400 outline-none border-none bg-transparent min-w-0"
            />
            <button className="bg-brand-orange cursor-pointer hover:bg-opacity-90 transition-opacity text-white px-5 md:px-8 py-3 rounded-full font-medium flex items-center gap-2 whitespace-nowrap">
              <span className="hidden sm:inline">Subscribe now</span>
              <span className="sm:hidden">Subscribe</span> <Send size={16} />
            </button>
          </div>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 justify-between items-stretch">
          {/* LEFT: LOGO SECTION */}
          <div className="flex flex-col items-center lg:items-start lg:justify-center lg:w-[30%]">
            <div className="relative w-[140px] h-[160px] lg:w-[180px] lg:h-[200px] mb-6 lg:mb-0">
              <Image
                src="/footer-logo.png"
                alt="BrightHat Footer Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Desktop Copyright */}
            <p className="hidden lg:block text-[12px] font-normal text-gray-300 mt-4">
              Copyright © 2026 Brighthat limited. All Rights Reserved.
            </p>
          </div>

          {/* RIGHT: LINKS GRID */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 w-full lg:pt-5 text-center lg:text-left">
            {FOOTER_LINKS.map((column, index) => (
              <div key={index} className="flex flex-col space-y-4 lg:space-y-6">
                <h4 className="font-semibold text-lg text-white">
                  {column.title}
                </h4>
                <ul className="space-y-3 lg:space-y-4">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href="#"
                        className="text-sm lg:text-[16px] text-gray-300 hover:text-brand-orange transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:hidden text-center w-full mt-4">
            <p className="text-xs text-gray-400">
              Copyright © 2026 Brighthat limited. All Rights Reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
