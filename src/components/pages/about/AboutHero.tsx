import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { ABOUT_VALUES } from "@/constants";

export default function AboutHero() {
  return (
    <section className="w-full bg-brand-cream pb-0">
      {" "}
      {/* Removed bottom padding to let it flow */}
      {/* 1. THE HERO IMAGE (People + Orange Circle) */}
      <div className="w-full flex justify-center pt-0 lg:pt-5">
        {/* 
            - w-[70%]: Requested width.
            - h-[350px] to h-[550px]: Height to show heads/torsos.
            - relative z-0: Sits behind the card.
        */}
        <div className="relative w-[90%] lg:w-[70%] h-[350px] lg:h-[600px] z-0">
          <Image
            src="/about/about-hero.png"
            alt="BrightHat Team"
            fill
            className="object-contain object-bottom" // Aligns people to the bottom so card covers waists
            priority
            quality={100}
          />
        </div>
      </div>
      {/* 2. THE OVERLAPPING BLUE CARD */}
      <Container>
        {/* 
           -mt-32 lg:-mt-48: Pulls the card UP significantly to cover the waists.
           relative z-10: Sits ON TOP of the image.
        */}
        <div className="relative z-10 -mt-24 lg:-mt-40 w-full bg-brand-blue rounded-t-[40px] lg:rounded-t-[60px] p-8 lg:p-16 text-white shadow-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold">About BrightHAT</h1>
          </div>

          {/* Grid of 4 Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
            {ABOUT_VALUES.map((item, index) => (
              <div key={index} className="flex flex-col items-start group">
                {/* Icon */}
                <div className="mb-6 relative w-12 h-12 lg:w-16 lg:h-16">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm lg:text-base text-gray-200 leading-relaxed opacity-90">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
