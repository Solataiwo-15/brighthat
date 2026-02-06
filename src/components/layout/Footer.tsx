import Link from "next/link";
import Image from "next/image";
import { Send } from "lucide-react";
import Container from "@/components/ui/Container";
import { FOOTER_LINKS } from "@/constants";

export default function Footer() {
  return (
    <footer className="relative w-full bg-brand-brown text-white py-20 overflow-hidden">
      <div className="absolute top-[-10%] left-[-8%] w-[408px] h-[408px] bg-brand-orange/40 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center mb-24">
          <h3 className="text-2xl md:text-[32px] font-semibold mb-6">
            Subscribe to our Monthly Newsletters
          </h3>

          <div className="flex w-full max-w-xl bg-white rounded-xl overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-6 py-3 text-gray-700 placeholder-gray-400 outline-none border-none bg-transparent"
            />
            <button className="bg-brand-orange cursor-pointer hover:bg-opacity-90 transition-opacity text-white px-8 py-3 rounded-xl font-medium flex items-center gap-2">
              Subscribe now
              <Send size={16} />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-10 justify-between items-start">
          <div className="flex flex-col items-center lg:center lg:w-[30%]">
            <div className="relative w-[180px] h-[200px] mb-6">
              <Image
                src="/footer-logo.png"
                alt="BrightHat Footer Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="hidden lg:block text-[12px] font-normal text-gray-300 mt-4">
              Copyright © 2026 Brighthat limited. All Rights Reserved.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full lg:pt-5">
            {FOOTER_LINKS.map((column, index) => (
              <div key={index} className="flex flex-col space-y-6">
                <h4 className="font-semibold text-lg">{column.title}</h4>
                <ul className="space-y-4">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href="#"
                        className="text-[16px] text-gray-300 hover:text-brand-orange transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:hidden text-center w-full">
            <p className="text-xs text-gray-400">
              Copyright © 2026 Brighthat limited. All Rights Reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
