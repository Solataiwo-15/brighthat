import HeroSection from "@/components/pages/home/HeroSection";
import ProductsSection from "@/components/pages/home/ProductsSection";
import TestimonialsSection from "@/components/pages/home/TestimonialsSection";
import TutorsSection from "@/components/pages/home/TutorsSection";
import ValuePropSection from "@/components/pages/home/ValuePropSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <ValuePropSection />
      <ProductsSection />
      <TestimonialsSection />
      <TutorsSection />
    </main>
  );
}
