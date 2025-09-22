import { menuItems } from "@/data/menu";
// Removed: import MenuItemCard from "@/components/ui/MenuItemCard";
// Removed: import AnimationWrapper from "@/components/ui/AnimationWrapper";

// Removed: import HeroSection from "@/app/components/HeroSection"; // Direct import of the new HeroSection

// This is a test change for the webhook. (Final verification push)

export default function Home() {
  const featuredItems = menuItems.slice(0, 3);

  return (
    <div className="bg-brand-light text-brand-dark">
      {/* Removed HeroSection */}
      <main>
        {/* Featured Items Section */}
        {/* Removed AnimationWrapper */}
        <section id="featured" className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-center text-brand-dark mb-8">
              Nuestros Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredItems.map((item) => (
                <div key={item.id} className="p-4 border rounded-lg">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}