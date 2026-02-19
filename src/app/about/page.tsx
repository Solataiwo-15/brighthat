import AboutHero from "@/components/pages/about/AboutHero";
import AboutLeadership from "@/components/pages/about/AboutLeadership";
import AboutMethodology from "@/components/pages/about/AboutMethodology";
import AboutOpportunities from "@/components/pages/about/AboutOpportunities";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <AboutHero />
      <AboutMethodology />
      <AboutOpportunities />
      <AboutLeadership />
      {/* Next sections will go here */}
    </main>
  );
}
