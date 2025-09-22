import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p>&copy; {currentYear} La Tragadera. Todos los derechos reservados.</p>
          <p className="text-sm text-gray-400">Diseñado y desarrollado por tu Ingeniero de Software experto.</p>
        </div>
        <div className="flex mt-4 md:mt-0">
          {/* Placeholder for social media icons */}
          <Link href="#" className="mx-2 text-gray-300 hover:text-brand-yellow transition-colors">
            Facebook
          </Link>
          <Link href="#" className="mx-2 text-gray-300 hover:text-brand-yellow transition-colors">
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
