'use client';

import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-12 bg-brand-primary text-brand-dark text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-anton mb-6">¿LISTO PARA EL PROPIO SABOR?</h2>
        <Button size="lg" className="bg-brand-dark text-brand-primary hover:bg-brand-dark/90 text-lg px-8 py-6 rounded-full shadow-lg">
          <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer">Pide por WhatsApp</a>
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
