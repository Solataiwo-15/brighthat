import Image from "next/image";
import Container from "@/components/ui/Container";
import { ABOUT_VALUES } from "@/constants";

export default function AboutHero() {
  return (
    <section className="w-full bg-brand-cream pb-20">
      {/* 1. THE HERO IMAGE AREA */}
      <div className="w-full relative h-[400px] lg:h-[500px]">
        {/* Background Image */}
        <Image
          src="/about/about-hero.png" // Make sure this exists
          alt="BrightHat Team"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-cream/20" />
      </div>

      {/* 2. THE OVERLAPPING BLUE CARD */}
      <Container>
        <div className="relative z-10 -mt-30 lg:-mt-50 w-full bg-brand-blue rounded-[40px] p-8 lg:p-16 text-white shadow-2xl">
          {/* Header inside the card */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold">About BrightHAT</h1>
          </div>

          {/* Grid of 4 Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
            {ABOUT_VALUES.map((item, index) => (
              <div key={index} className="flex flex-col items-start">
                {/* Icon */}
                <div className="mb-6 relative w-16 h-16">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-200 leading-relaxed opacity-90">
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
