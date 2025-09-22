'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const banners = [
  { id: 1, src: '/images/banner-principal.jpg', alt: 'Banner Principal' },
  { id: 2, src: '/images/banner-largo-horizontal-promo.jpg', alt: 'Promoción Especial' },
  { id: 3, src: '/images/banner-promocion.jpg', alt: 'Oferta del Día' },
  { id: 4, src: '/images/banner-rotativo.jpg', alt: 'Banner Rotativo 1' },
  { id: 5, src: '/images/banner-rotativo2.jpg', alt: 'Banner Rotativo 2' },
];

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={banners[currentIndex].src}
            alt={banners[currentIndex].alt}
            layout="fill"
            objectFit="cover"
            priority // Load the first banner image with high priority
          />
        </motion.div>
      </AnimatePresence>
      {/* Navigation dots (optional) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
