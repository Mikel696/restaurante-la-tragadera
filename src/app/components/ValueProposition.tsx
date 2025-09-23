import React from 'react';
import { FaLeaf, FaPepperHot, FaDrumstickBite } from 'react-icons/fa'; // Example icons

const ValueProposition = () => {
  return (
    <section className="container mx-auto py-12 text-center">
      <h2 className="text-4xl md:text-5xl font-anton text-brand-dark mb-12">
        PERROS, HAMBURGUESAS Y PICADAS CON ESTILO
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
          <FaLeaf className="text-brand-primary text-5xl mb-4" />
          <h3 className="text-xl font-bold text-brand-dark mb-2">Ingredientes Frescos</h3>
          <p className="text-gray-700">Seleccionamos solo lo mejor para tu plato.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
          <FaPepperHot className="text-brand-primary text-5xl mb-4" />
          <h3 className="text-xl font-bold text-brand-dark mb-2">Salsas de la Casa</h3>
          <p className="text-gray-700">Recetas únicas que te encantarán.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
          <FaDrumstickBite className="text-brand-primary text-5xl mb-4" />
          <h3 className="text-xl font-bold text-brand-dark mb-2">Grandes Porciones</h3>
          <p className="text-gray-700">Para que nadie se quede con hambre.</p>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
