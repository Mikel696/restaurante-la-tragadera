import Button from "@/components/ui/Button";
import Link from "next/link";
import { menuItems } from "@/data/menu";
import MenuItemCard from "@/components/ui/MenuItemCard";
import AnimationWrapper from "@/components/ui/AnimationWrapper";
import BannerCarousel from "@/components/layout/BannerCarousel";
import Image from "next/image"; // Import Image for side banners

export default function Home() {
  const featuredItems = menuItems.slice(0, 3);

  return (
    <div className="bg-brand-light text-brand-dark">
      <BannerCarousel /> {/* Main Carousel at the very top */}
      <main>
        {/* Hero Section with Side Banners */}
        <section className="container mx-auto px-6 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
            {/* Left Side Banner */}
            <AnimationWrapper delay={0.3} className="w-full md:w-1/4 mb-8 md:mb-0">
              <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/banner-promocion.jpg"
                  alt="Promoción Lateral 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </AnimationWrapper>

            {/* Center Hero Content */}
            <AnimationWrapper className="w-full md:w-1/2 text-center">
              <section id="hero" className="py-0"> {/* Removed padding as it's in container */}
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

            {/* Right Side Banner */}
            <AnimationWrapper delay={0.3} className="w-full md:w-1/4">
              <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/banner-rotativo.jpg"
                  alt="Promoción Lateral 2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </AnimationWrapper>
          </div>
        </section>

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
