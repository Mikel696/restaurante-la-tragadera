import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GiMeat, GiChiliPepper, GiFullPizza } from 'react-icons/gi'; // Placeholder icons

const ValueProposition = () => {
  return (
    <section className="container mx-auto py-12 px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="bg-zinc-900 text-white p-6 flex flex-col items-center text-center border-none shadow-lg">
          <GiMeat className="text-brand-primary text-5xl mb-4" />
          <CardHeader>
            <CardTitle className="text-2xl font-yanone mb-2">Ingredientes de Calidad</CardTitle>
            <CardDescription className="text-gray-300 font-roboto-slab">
              Carne 100% artesanal y productos frescos para el mejor sabor.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-zinc-900 text-white p-6 flex flex-col items-center text-center border-none shadow-lg">
          <GiChiliPepper className="text-brand-primary text-5xl mb-4" />
          <CardHeader>
            <CardTitle className="text-2xl font-yanone mb-2">El Propio Sabor</CardTitle>
            <CardDescription className="text-gray-300 font-roboto-slab">
              Combinaciones únicas y salsas de la casa que no encontrarás en otro lugar.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-zinc-900 text-white p-6 flex flex-col items-center text-center border-none shadow-lg">
          <GiFullPizza className="text-brand-primary text-5xl mb-4" />
          <CardHeader>
            <CardTitle className="text-2xl font-yanone mb-2">Combos A Lo Grande</CardTitle>
            <CardDescription className="text-gray-300 font-roboto-slab">
              Porciones generosas pensadas para calmar el hambre de verdad.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};

export default ValueProposition;