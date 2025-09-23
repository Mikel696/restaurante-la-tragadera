'use client';

import Image from 'next/image';
import { promociones } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PromotionsSection = () => {
  return (
    <section id="promos" className="container mx-auto py-12">
      <h2 className="text-4xl md:text-5xl font-anton text-center text-brand-dark mb-8">NUESTRAS PROMOS BRUTALES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {promociones.map((promo) => (
          <Card key={promo.id} className="flex flex-col h-full overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={promo.imagenUrl}
                alt={promo.titulo}
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-brand-dark">{promo.titulo}</CardTitle>
              <CardDescription className="text-gray-600">{promo.descripcion}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow"></CardContent>
            <CardFooter className="flex justify-end items-center mt-4">
              <span className="text-2xl font-bold text-brand-primary">{promo.precio}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PromotionsSection;
