'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[450px] bg-dark overflow-hidden">
      <Image
        src="/images/banner-principal.jpg"
        alt="Porque el hambre no se negocia"
        layout="fill"
        objectFit="cover"
        priority // Load with high priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-brand-light text-4xl md:text-6xl font-anton text-center leading-tight mb-8 text-shadow-heavy">
          PORQUE EL HAMBRE NO SE NEGOCIA
        </h1>
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
