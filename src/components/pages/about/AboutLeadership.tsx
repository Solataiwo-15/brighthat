import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { LEADERSHIP_TEAM } from "@/constants";

export default function AboutLeadership() {
  return (
    <section className="w-full py-20 bg-brand-cream">
      <Container>
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-black mb-6">
            Our Leadership
          </h2>
          <p className="text-brand-gray text-base lg:text-lg leading-relaxed">
            We&apos;re transforming the knowledge and skills transfer landscape
            by connecting learners to the very best instructors anywhere,
            anytime. Meet team members who provide thought leadership and
            strategic direction for BrightHAT.
          </p>
        </div>

        {/* SUB HEADER */}
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-ebold text-black">
            Our Management Team
          </h3>
        </div>

        {/* LEADERSHIP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {LEADERSHIP_TEAM.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col text-center bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* 
                 IMAGE CONTAINER - DIRECT PLACEMENT 
                 - We rely on the image's inherent shape.
                 - Aspect ratio 'aspect-[4/3]' (taller than wide) to make it compact.
                 - 'overflow-hidden rounded-t-2xl' to hide edges and match card top.
              */}
              <div className="relative w-full aspect-[3/3] overflow-hidden rounded-t-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  // Use object-contain if the image already has transparency/padding
                  // Use object-cover with object-top/center if you want to crop
                  className="object-cover object-top"
                />
              </div>

              {/* TEXT PART (Added padding here) */}
              <div className="p-5 flex flex-col items-center flex-grow">
                <h4 className="text-lg font-bold text-brand-light-blue uppercase tracking-wide mb-1">
                  {member.name}
                </h4>
                <p className="text-brand-gray text-sm font-medium mb-6">
                  {member.role}
                </p>

                <Link
                  href="#"
                  className="mt-auto flex items-center gap-2 text-brand-orange text-sm font-semibold hover:underline"
                >
                  View Profile
                  <ArrowRight color="black" size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
