import Container from "@/components/ui/Container";
import { FEATURES } from "@/constants";

export default function WhatWeOffer() {
  return (
    <section className="w-full py-20 bg-white rounded-tr-[70px]">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-black">What we offer</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {FEATURES.map((feature, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div
                className="mb-6 w-20 h-20 bg-brand-blue"
                style={{
                  maskImage: `url(${feature.icon})`,
                  maskSize: "contain",
                  maskPosition: "center",
                  maskRepeat: "no-repeat",
                  WebkitMaskImage: `url(${feature.icon})`,
                  WebkitMaskSize: "contain",
                  WebkitMaskPosition: "center",
                  WebkitMaskRepeat: "no-repeat",
                }}
              />

              <h3 className="text-2xl font-semibold mb-3 text-brand-orange mb-4">
                {feature.title}
              </h3>

              <p className="text-[16px] text-[#131313] leading-relaxed max-w-[350px] mx-auto opacity-80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
