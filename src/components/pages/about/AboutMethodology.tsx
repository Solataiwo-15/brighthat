import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function AboutMethodology() {
  return (
    <section className="w-full py-20 bg-white">
      <Container>
        {/* HEADER TEXT */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
            The BrightHAT™ Way
          </h2>

          <p className="text-brand-gray text-base lg:text-lg leading-relaxed mb-6">
            BrightHAT’s way of teaching is inspired by the Kolb’s Tri-polar
            framework, which is designed to foster engagement in learning goals,
            enhancement of learning goals, and extension of learning goals.
          </p>

          <p className="text-brand-gray text-sm lg:text-base leading-relaxed max-w-3xl mx-auto">
            Our instructional strategies use technology drivers to ensure that
            authentic engagement is occurring. While lessons are developed to
            help students stay focused as instruction progresses, we use
            technology to support active learning differentiation,
            personalization, higher-level thinking, and real-world connections
            in ways that traditional tools could not. Every instructor imbibes
            the BrightHAT way in their delivery of instruction.
          </p>
        </div>

        {/* THE DIAGRAM IMAGE */}
        <div className="relative w-full flex justify-center">
          <div className="relative w-full max-w-5xl aspect-[16/9] lg:aspect-[2/1]">
            <Image
              src="/about/methodology-chart.png"
              alt="BrightHAT Methodology Diagram"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
