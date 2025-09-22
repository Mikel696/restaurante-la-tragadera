'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = (
    <>
      <Link href="/" className="text-gray-300 hover:text-brand-yellow transition-colors block py-2 md:py-0">
        Inicio
      </Link>
      <Link href="/menu" className="text-gray-300 hover:text-brand-yellow transition-colors block py-2 md:py-0">
        Menú
      </Link>
      <Link href="/contacto" className="text-gray-300 hover:text-brand-yellow transition-colors block py-2 md:py-0">
        Contacto
      </Link>
    </>
  );

  return (
    <header className="bg-brand-dark shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/" className="text-2xl font-bold text-white hover:text-brand-yellow transition-colors">
            La Tragadera
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark">
          <div className="px-6 pt-2 pb-4 flex flex-col space-y-2">
            {navLinks}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;