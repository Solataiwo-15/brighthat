import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function AboutOpportunities() {
  const opportunities = [
    "There are students who need help to improve their performance",
    "There are tutors and experts who love to help people improve",
    "People always have specific knowledge and skills gap to fill",
    "Our platform can help people reach their full potential",
  ];

  return (
    <section className="w-full py-20 bg-[#F4F8FF]">
      <Container>
        {/* 
           FIX 1: Changed 'items-center' to 'items-start'. 
           This forces both the Image and the Text to align perfectly at the top edge.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* --- LEFT COLUMN: VIDEO & BUTTONS --- */}
          <div className="flex flex-col gap-8 w-full">
            {/* 
               FIX 2: Changed 'aspect-video' (16:9) to 'aspect-[4/3]'.
               This makes the image taller, giving it more presence to match the text height.
            */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
              <Image
                src="/about/video-thumb.png"
                alt="Students learning"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-brand-orange rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-6 h-6 lg:w-8 lg:h-8 text-white fill-white translate-x-1" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="flex-1 sm:flex-none">
                Watch Testimonials
              </Button>
              <Button variant="outline" className="flex-1 sm:flex-none">
                Book a Session
              </Button>
            </div>
          </div>

          {/* --- RIGHT COLUMN: CONTENT --- */}
          {/* Added 'pt-2' to align the text cap-height visually with the image top */}
          <div className="flex flex-col items-start lg:pt-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
              We create learning and teaching opportunities
            </h2>

            <p className="text-brand-gray text-base lg:text-lg mb-8 font-medium">
              We help people get better. We know that:
            </p>

            <ul className="space-y-6 mb-10">
              {opportunities.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-brand-orange mt-2 flex-shrink-0" />
                  <span className="text-brand-gray text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="w-full bg-brand-blue/10 p-6 lg:p-8 rounded-2xl border-l-4 border-brand-blue">
              <p className="text-brand-blue font-medium text-base lg:text-lg leading-relaxed mb-2">
                So, we&apos;re on a MISSION to help people fulfill their
                learning needs from anywhere at anytime.
              </p>
              <Link
                href="#"
                className="text-brand-orange font-bold hover:underline"
              >
                Learn about our K-12 intervention
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
