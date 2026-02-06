import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { FEATURES } from "@/constants";

export default function ValuePropSection() {
  return (
    <section className="relative w-full pt-20 pb-10 lg:pb-15 bg-brand-cream">
      <div className="absolute top-0 left-0 right-0 bottom-90 lg:bottom-50 bg-white rounded-tl-[70px] -z-0" />

      <div className="absolute bottom-18 left-0 z-0 opacity-80 pointer-events-none">
        <Image
          src="/blur-blue.png"
          alt="Decorative blur"
          width={84}
          height={84}
          className="object-contain"
        />
      </div>

      <div className="absolute top-15 right-0 z-0 opacity-80 pointer-events-none">
        <Image
          src="/blur-orange.png"
          alt="Decorative blur"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 lg:mb-24">
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-[4/5] lg:aspect-square">
              <Image
                src="/students-group.png"
                alt="Group of students"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col items-start space-y-6 max-w-[400px] lg:ml-auto self-end mb-10">
            <h2 className="text-3xl lg:text-[32.5px] font-extrabold text-brand-black">
              Achieving your desired <br />
              outcome is easier with us
            </h2>
            <p className="text-brand-gray text-[19px] leading-[24px] max-w-lg">
              Our team is made up of seasoned educators and technologists who
              are passionate about using technology tools to improve learning
              outcomes for students and language learners alike. With us, you
              can rest assured that your learning goals will be accomplished.
            </p>
            <Button className="mt-4 px-[20px] py-[12px]">Experience it!</Button>
          </div>
        </div>

        <div className="w-full bg-brand-blue rounded-t-[70px] p-8 lg:p-16 text-white relative shadow-2xl overflow-hidden">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-extrabold">How we are Better</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {FEATURES.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-6 relative w-16 h-16">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h4 className="text-2xl font-semibold mb-3">{feature.title}</h4>

                <p className="text-[16px] text-brand-white leading-relaxed max-w-[350px] mx-auto opacity-80">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
