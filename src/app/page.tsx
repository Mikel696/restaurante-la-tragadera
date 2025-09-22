import Button from "@/components/ui/Button";
import Link from "next/link";
import { menuItems } from "@/data/menu";
import MenuItemCard from "@/components/ui/MenuItemCard";
import AnimationWrapper from "@/components/ui/AnimationWrapper";

export default function Home() {
  const featuredItems = menuItems.slice(0, 3);

  return (
    <div className="bg-brand-light text-brand-dark">
      <main>
        <AnimationWrapper>
          <section id="hero" className="text-center py-20 md:py-32 px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              El Sabor que no se Olvida
            </h1>
            <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
              Las mejores y más grandes hamburguesas, perros calientes y salchipapas de Soacha. ¡Atrévete a probar!
            </p>
            <div className="mt-8">
              <Link href="/menu">
                <Button>
                  Ver Menú Completo
                </Button>
              </Link>
            </div>
          </section>
        </AnimationWrapper>

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
