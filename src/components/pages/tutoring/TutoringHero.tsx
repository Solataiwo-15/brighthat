import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function TutoringHero() {
  return (
    <section className="w-full py-10 lg:py-7 bg-brand-cream overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-1 items-center">
          <div className="flex flex-col items-start max-w-xl">
            <h1 className="text-4xl lg:text-[56px] font-extrabold text-black mb-6 leading-[1.15]">
              Partner with us to <br />
              <span className="text-brand-orange">improve</span> your grades
            </h1>

            <p className="text-brand-gray text-base lg:text-lg leading-relaxed mb-8 max-w-[410px]">
              Our 1-on-1 tutoring service comes with personalized attention and
              customized support to each student. We&apos;re laser focused on
              outcome so you can rest assured that your learning goals will be
              accomplished.
            </p>

            <Button className="mt-4 px-[24px] py-[16px]">Get Started</Button>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[680px] aspect-[2/2]">
              <Image
                src="/tutoring/hero-girl.png"
                alt="Student improving grades with tutoring"
                fill
                className="object-contain relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
