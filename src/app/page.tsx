import HeroSection from "@/app/components/HeroSection";
import MenuSection from "@/app/components/MenuSection";
import PromotionsSection from "@/app/components/PromotionsSection";
import CtaSection from "@/app/components/CtaSection";
import PromotionalCarousel from "@/app/components/PromotionalCarousel";
import SmallFlyer from "@/app/components/SmallFlyer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MenuSection />
      <PromotionsSection />
      <PromotionalCarousel />
      <SmallFlyer />
      <CtaSection />
    </main>
  );
}