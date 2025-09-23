'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const promotionalImages = [
  '/images/banner-largo-horizontal-promo.jpg',
  '/images/banner-promocion.jpg',
  '/images/banner-rotativo2.jpg',
];

const PromotionalCarousel = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-12">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {promotionalImages.map((src, index) => (
            <CarouselItem key={index}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative w-full h-64 min-h-0">
                    <Image
                      src={src}
                      alt={`Promoción ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-auto object-cover"
                      sizes="100vw" // Since it's a carousel item, it takes full width of its container
                      quality={80}
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
    </section>
  );
};

export default PromotionalCarousel;
