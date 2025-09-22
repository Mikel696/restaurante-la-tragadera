import { menuItems } from "@/data/menu";
import MenuItemCard from "@/components/ui/MenuItemCard";
import AnimationWrapper from "@/components/ui/AnimationWrapper";
import HeroSection from "@/app/components/HeroSection"; // Import the new HeroSection
// This is a test change for the webhook.

export default function Home() {
  const featuredItems = menuItems.slice(0, 3);

  return (
    <div className="bg-brand-light text-brand-dark">
      <HeroSection /> {/* New HeroSection component */}
      <main>
        {/* Featured Items Section */}
        <AnimationWrapper delay={0.2}>
          <section id="featured" className="py-12 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-extrabold text-center text-brand-dark mb-8">
                Nuestros Destacados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredItems.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </section>
        </AnimationWrapper>
      </main>
    </div>
  );
}