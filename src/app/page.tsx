import HeroSection from "@/app/components/HeroSection";
import ValueProposition from "@/app/components/ValueProposition"; // New import
import MenuSection from "@/app/components/MenuSection";
import PromotionsSection from "@/app/components/PromotionsSection";
import CtaSection from "@/app/components/CtaSection";
// PromotionalCarousel and SmallFlyer are no longer needed as HeroSection is now a carousel

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ValueProposition />
      <MenuSection />
      <PromotionsSection />
      <CtaSection />
    </main>
  );
}