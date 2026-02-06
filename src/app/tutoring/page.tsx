import TutoringHero from "@/components/pages/tutoring/TutoringHero";
import WhatWeOffer from "@/components/pages/tutoring/WhatWeOffer";
import TutoringFormSection from "@/components/pages/tutoring/TutoringFormSection";
import PricingSection from "@/components/pages/tutoring/PricingSection";

export default function TutoringPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <TutoringHero />
      <WhatWeOffer />
      <TutoringFormSection />
      <PricingSection />
    </main>
  );
}
