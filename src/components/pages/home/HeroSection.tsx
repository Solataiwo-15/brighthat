import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative w-full pt-3 pb-0 lg:pt-5 lg:pb-0 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-4 items-center">
          <div className="flex flex-col items-start max-w-2xl z-10">
            <span className="text-[12px] font-normal text-brand-light-blue uppercase tracking-wider mb-2">
              Welcome to Brighthat
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[67px] font-bold leading-[1.1] text-brand-black mb-4">
              Borderless, <br />
              <span className="text-brand-orange">outcome-focused</span> <br />
              tutoring at its best
            </h1>
            <p className="text-lg text-brand-gray font-medium mb-10">
              Engage. Enhance. Extend.
            </p>
            <Button className="px-[24px] py-[16px] text-base shadow-xl shadow-brand-orange/30">
              Get Started
            </Button>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px] aspect-square">
              <Image
                src="/hero-full.png"
                alt="Happy student using BrightHat learning platform"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
