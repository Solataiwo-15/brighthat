"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import Container from "@/components/ui/Container";
import { TESTIMONIALS } from "@/constants";

export default function TestimonialsSection() {
  const [activeId, setActiveId] = useState(0);

  const activeTestimonial = TESTIMONIALS[activeId];

  return (
    <section className="relative w-full py-20 bg-[#F4F8FF] overflow-hidden">
      <div className="absolute bottom-0 right-0 z-0 pointer-events-none">
        <Image
          src="/blur-corner.svg"
          alt="Blur decoration"
          width={300}
          height={300}
          className="object-contain translate-y-1/2 translate-x-1/3"
        />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-black">
            What our <span className="text-brand-blue">Learners</span> say
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start">
          <div className="flex flex-col gap-6">
            {TESTIMONIALS.map((person, index) => (
              <button
                key={person.id}
                onClick={() => setActiveId(index)}
                className={`cursor-pointer flex items-center gap-6 p-[44px] rounded-2xl transition-all duration-300 text-left w-full
                  ${
                    activeId === index
                      ? "bg-white shadow-lg scale-100 ring-1 ring-black/5"
                      : "bg-white/60 hover:bg-white/80 scale-95 opacity-80"
                  }
                `}
              >
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover rounded-full border-2 border-white shadow-sm"
                  />
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-black">
                    {person.name}
                  </h4>
                  <p className="text-[16px] text-brand-black">
                    {person.location}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div
            className="flex flex-col items-start pt-4 animate-in fade-in slide-in-from-right-4 duration-500 max-w-[460px] lg:ml-auto"
            key={activeId}
          >
            <h3 className="text-2xl font-semibold tracking-wide text-black mb-4">
              {activeTestimonial.title}
            </h3>

            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={
                    i < activeTestimonial.rating
                      ? "fill-[#F8B84E] text-[#F8B84E]"
                      : "fill-gray-200 text-gray-200"
                  }
                />
              ))}
            </div>

            <p className="text-brand-black text-base tracking-wide">
              {activeTestimonial.review}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
