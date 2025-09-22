import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Import icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Subsección 1: Contacto y Dirección */}
        <div className="text-center md:text-left">
          <h3 className="text-primary text-xl font-bold mb-2">Contacto</h3>
          <p className="text-sm">Dirección: Carrera 20 Este # 31-13 Sur, Hogares Soacha</p>
          {/* Add other contact info if needed, e.g., phone, email */}
        </div>

        {/* Subsección 2: Redes Sociales */}
        <div className="text-center">
          <h3 className="text-primary text-xl font-bold mb-2">Síguenos</h3>
          <div className="flex justify-center space-x-4">
            <Link href="https://www.facebook.com/latragadera.soacha/" target="_blank" rel="noopener noreferrer" className="text-light hover:text-primary transition-colors">
              <FaFacebookF size={24} />
            </Link>
            <Link href="https://www.instagram.com/latragaderasoacha/?hl=es" target="_blank" rel="noopener noreferrer" className="text-light hover:text-primary transition-colors">
              <FaInstagram size={24} />
            </Link>
            <Link href="https://wa.me/573148342452" target="_blank" rel="noopener noreferrer" className="text-light hover:text-primary transition-colors">
              <FaWhatsapp size={24} />
            </Link>
          </div>
        </div>

        {/* Subsección 3: Logo/Slogan */}
        <div className="text-center md:text-right">
          <h3 className="text-primary text-3xl font-anton font-bold leading-none">La Tragadera</h3>
          <p className="text-light text-sm mt-1">El propio sabor</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm text-gray-400">
        <p>&copy; {currentYear} La Tragadera. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
