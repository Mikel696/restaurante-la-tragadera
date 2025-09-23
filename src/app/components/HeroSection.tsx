'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const heroImages = [
  '/images/hamburguesa.jpg',
  '/images/churrasco.jpg',
  '/images/hotdog.jpg',
  '/images/Picada.png',
];

const HeroSection = () => {
  return (
    <section className="relative w-full h-[450px] md:h-[600px] bg-dark overflow-hidden">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {heroImages.map((src, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative h-full w-full">
                <Image
                  src={src}
                  alt={`La Tragadera - Imagen ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  priority={index === 0} // Only load the first image with high priority
                  quality={80}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Optional: Carousel navigation arrows if desired */}
        {/* <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" /> */}
      </Carousel>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50 flex flex-col items-center justify-center p-4 z-10">
        <h1 className="text-brand-light text-4xl md:text-6xl font-anton text-center leading-tight mb-4 text-shadow-heavy">
          PORQUE EL HAMBRE NO SE NEGOCIA
        </h1>
        <p className="text-brand-light text-lg md:text-xl font-montserrat text-center mb-8 text-shadow-heavy">
          Los sabores que amas, a la puerta de tu casa.
        </p>
        {/* CTA Button */}
        <Link href="https://wa.me/573148342452" passHref legacyBehavior>
          <Button
            size="lg"
            className="bg-brand-primary text-brand-dark font-bold py-3 px-6 rounded-lg text-lg hover:scale-105 transition-transform"
          >
            Pide por WhatsApp
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
