import Image from "next/image";
import Container from "@/components/ui/Container";
import { TUTORS } from "@/constants";

export default function TutorsSection() {
  return (
    <section className="w-full py-20 bg-brand-cream">
      <Container>
        <div className="text-center mb-20">
          {" "}
          <h2 className="text-3xl md:text-[48px] font-[800] text-black">
            Meet some of our{" "}
            <span className="text-brand-orange">expert Tutors</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 gap-y-20">
          {TUTORS.map((tutor, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-48 h-64 mb-4 flex justify-center items-end">
                <div className="absolute bottom-0 w-48 h-48 rounded-full bg-brand-orange shadow-lg" />

                <div className="relative z-10 w-full h-[115%]">
                  <Image
                    src={tutor.image}
                    alt={tutor.name}
                    fill
                    className="object-contain object-bottom"
                  />
                </div>
              </div>

              <h3 className="text-[24px] font-[600] text-black uppercase tracking-[4%] mb-0.5">
                {tutor.name}
              </h3>
              <p className="text-[16px] text-brand-gray font-[400]">
                {tutor.role}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
