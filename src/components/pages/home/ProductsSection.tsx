"use client";

import { useRef } from "react";
import Image from "next/image";
import { Triangle } from "lucide-react";
import Container from "@/components/ui/Container";
import { PRODUCTS } from "@/constants";

export default function ProductsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-16 lg:py-20 bg-brand-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-black mb-4 lg:mb-6">
            Our Products
          </h2>
          {/* FIX 2: Slightly smaller text on mobile */}
          <p className="text-brand-black text-sm md:text-[16px] max-w-[700px] leading-relaxed mx-auto">
            Everyday, we take a step towards achieving our vision by helping
            people fulfill their learning needs from anywhere at anytime. Below
            are some of the ways by which we make that happen.
          </p>
        </div>

        <div className="relative group">
          {/* LEFT ARROW (Desktop only) */}
          <button
            onClick={() => scroll("left")}
            className="hidden lg:block absolute top-1/2 -left-16 -translate-y-1/2 z-10 text-brand-orange hover:scale-110 transition-transform cursor-pointer"
          >
            <Triangle size={40} fill="currentColor" className="-rotate-90" />
          </button>

          {/* SCROLL CONTAINER */}
          <div
            ref={scrollRef}
            // FIX 3: Reduced gap on mobile (gap-4) to keep cards closer
            className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-10 px-4 -mx-4 scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {PRODUCTS.map((product, index) => (
              <div
                key={index}
                className="min-w-[280px] md:min-w-[350px] lg:min-w-[380px] bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 snap-center flex flex-col overflow-hidden border border-gray-100/50"
              >
                <div className="relative w-full h-48 md:h-56">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl md:text-[28px] font-bold text-brand-blue mb-4">
                    {product.title}
                  </h3>
                  <p className="text-brand-black text-sm md:text-[16px] leading-relaxed mb-8 flex-grow">
                    {product.description}
                  </p>

                  <div>
                    <button className="px-[16px] py-[10px] rounded-md bg-brand-blue/10 text-brand-light-blue font-semibold text-sm hover:bg-brand-blue/20 transition-colors cursor-pointer">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW (Desktop only) */}
          <button
            onClick={() => scroll("right")}
            className="hidden lg:block absolute top-1/2 -right-16 -translate-y-1/2 z-10 text-brand-orange hover:scale-110 transition-transform cursor-pointer"
          >
            <Triangle size={40} fill="currentColor" className="rotate-90" />
          </button>
        </div>
      </Container>
    </section>
  );
}
