// Removed: import { menuItems } from '@/data/menu';
// Removed: import AnimationWrapper from '@/components/ui/AnimationWrapper';
// Removed: import Image from 'next/image';
// Removed: import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// Removed: import { Button } from "@/components/ui/button";

import Image from 'next/image';
import MenuSection from "@/app/components/MenuSection"; // New import

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-brand-light py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-brand-dark mb-12">Nuestro Menú</h1>
        <MenuSection /> {/* New component usage */}

        {/* Galería de la Carta */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center text-brand-dark mb-8">Nuestra Carta</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/carta-precios1.jpg"
                alt="Carta de precios - página 1"
                width={800}
                height={1200}
                layout="responsive"
              />
            </div>
            <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/carta-precios2.jpg"
                alt="Carta de precios - página 2"
                width={800}
                height={1200}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}