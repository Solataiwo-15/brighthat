import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { PRICING_PLANS } from "@/constants";

export default function PricingSection() {
  return (
    <section className="w-full py-20 bg-[#F5F9FC]">
      <Container>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-5xl font-extrabold text-black mb-4">
            Learning Plans
          </h2>
          <p className="text-[20px] text-black max-w-[570px] mx-auto leading-relaxed">
            Our monthly 1-on-1 tutoring plans are designed to meet the needs of
            our learners.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
          {PRICING_PLANS.map((plan, index) => {
            const curveClass =
              index === 0 ? "rounded-bl-[50px]" : "rounded-br-[50px]";

            return (
              <div
                key={index}
                className={`
                  relative flex flex-col w-full max-w-[300px] bg-white rounded-[10px] overflow-hidden transition-all duration-300
                  ${
                    plan.isPopular
                      ? "shadow-2xl z-10 lg:scale-120"
                      : "shadow-md lg:scale-90 border border-gray-100"
                  }
                `}
              >
                <div
                  className={`w-full p-[15px] text-center text-white ${plan.headerColor} ${curveClass}`}
                >
                  <h3 className="text-lg font-semibold tracking-widest uppercase">
                    {plan.name}
                  </h3>
                  <div className="text-[40px] font-bold">{plan.price}</div>
                  <div className="text-[16px] font-normal">
                    {plan.frequency}
                  </div>
                </div>

                <div className="px-8 pt-8 pb-10 flex flex-col items-center flex-grow">
                  <ul className="space-y-4 mb-8 text-left">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-[16px] text-black font-normal before:content-['•'] before:text-black before:mr-2 before:font-bold flex items-start"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Button
                      className="text-[12px] px-[12px] py-[8px]"
                      variant={plan.isPopular ? "primary" : "outline"}
                    >
                      Select Plan
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
