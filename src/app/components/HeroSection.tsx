'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { promociones } from '@/lib/data'; // Import promociones

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promociones.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen bg-dark overflow-hidden">
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
            src={promociones[currentIndex].imagenUrl}
            alt={promociones[currentIndex].titulo}
            layout="fill"
            objectFit="cover"
            priority // Load the first banner image with high priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-light text-4xl md:text-6xl font-anton text-center leading-tight">
              {promociones[currentIndex].titulo}
            </h1>
            {/* CTA Button */}
            <a href="https://wa.me/573148342452" target="_blank" rel="noopener noreferrer" className="absolute bottom-10 bg-primary text-dark font-bold py-3 px-6 rounded-lg text-lg hover:scale-105 transition-transform">
              Pide por WhatsApp
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {promociones.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;