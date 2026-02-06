"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function TutoringFormSection() {
  const [selectedOption, setSelectedOption] = useState<string | null>(
    "My child",
  );

  const options = [
    { id: "A", label: "Myself" },
    { id: "B", label: "My child" },
    { id: "C", label: "Someone else" },
  ];

  return (
    <section className="relative w-full py-28 overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-24 items-start">
          <div className="flex flex-col w-full">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-brand-blue mb-2">
                1-on-1 Tutoring Form
              </h2>
              <p className="text-brand-gray">Please fill out the form below</p>
            </div>

            <div className="bg-[#EAF2FD] p-8 rounded-3xl w-full">
              <h3 className="text-lg font-semibold text-black mb-6">
                1. Who needs a tutor?<span className="text-red-500">*</span>
              </h3>

              <div className="flex flex-col gap-4">
                {options.map((opt) => {
                  const isSelected = selectedOption === opt.label;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedOption(opt.label)}
                      className={`
                      w-full flex items-center gap-4 px-3 py-3 rounded-lg text-left transition-all duration-200 border-2 cursor-pointer
                      ${
                        isSelected
                          ? "bg-[#B3C1D5] border-[#B3C1D5] text-[#101010]"
                          : "bg-[#D1DAE6] border-transparent text-[#101010] hover:bg-[#d1dceb]"
                      }
                    `}
                    >
                      <span
                        className={`
                      w-8 h-8 flex items-center justify-center rounded text-[16px] font-normal border
                      ${
                        isSelected
                          ? "bg-[#1b4581] text-white border-[#1b4581]"
                          : "bg-transparent border-[#1b4581] text-black"
                      }
                    `}
                      >
                        {opt.id}
                      </span>

                      <span className="font-medium text-lg">{opt.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between mt-8">
                <Button className="px-5 py-3 bg-brand-orange hover:bg-brand-orange/90 cursor-pointer">
                  Next
                </Button>

                <div className="flex items-center gap-2 bg-brand-blue/10 px-2 py-1 rounded-full text-brand-blue">
                  <ChevronLeft
                    size={20}
                    className="cursor-pointer opacity-50"
                  />
                  <div className="w-16 h-1 bg-white rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-brand-blue"></div>
                  </div>
                  <ChevronRight size={20} className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end w-full h-full">
            <div className="absolute -top-10 -right-25 z-20 w-[150px] h-[150px]">
              <Image
                src="/tutoring/blue-blur.svg"
                alt="Blur"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative w-[85%] aspect-[4/3] lg:h-auto">
              <Image
                src="/tutoring/form-image.png"
                alt="Mother and child learning"
                fill
                className="object-contain object-right-top"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
