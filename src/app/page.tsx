import HeroSection from "@/app/components/HeroSection";
import MenuSection from "@/app/components/MenuSection";
import PromotionsSection from "@/app/components/PromotionsSection";
import CtaSection from "@/app/components/CtaSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MenuSection />
      <PromotionsSection />
      <CtaSection />
    </main>
  );
}