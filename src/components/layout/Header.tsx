'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa'; // For mobile toggle icons

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-brand-dark shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/" className="text-2xl font-bold text-white hover:text-brand-yellow transition-colors">
            La Tragadera
          </Link>
        </div>

        {/* Desktop Navigation and WhatsApp Button */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-2">
              <NavigationMenuItem>
                <Link href="#/" legacyBehavior passHref>
                  <NavigationMenuLink className="text-gray-300 hover:text-brand-yellow transition-colors px-3 py-2 rounded-md">
                    Inicio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#menu" legacyBehavior passHref>
                  <NavigationMenuLink className="text-gray-300 hover:text-brand-yellow transition-colors px-3 py-2 rounded-md">
                    Menú
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#promos" legacyBehavior passHref>
                  <NavigationMenuLink className="text-gray-300 hover:text-brand-yellow transition-colors px-3 py-2 rounded-md">
                    Promos
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#contacto" legacyBehavior passHref>
                  <NavigationMenuLink className="text-gray-300 hover:text-brand-yellow transition-colors px-3 py-2 rounded-md">
                    Contacto
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button variant="default" size="default" className="bg-green-500 hover:bg-green-600 text-white">
            Pide por WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <Button variant="default" size="sm" className="bg-green-500 hover:bg-green-600 text-white">
            WhatsApp
          </Button>
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-dark">
          <NavigationMenu className="w-full"> {/* Ensure NavigationMenu takes full width in mobile */}
            <NavigationMenuList className="flex flex-col px-6 pt-2 pb-4 space-y-2">
              <NavigationMenuItem>
                <Link href="#/" legacyBehavior passHref>
                  <NavigationMenuLink className="text-gray-300 hover:text-brand-yellow transition-colors block py-2 px-3 rounded-md w-full text-left">
                    Inicio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#menu" legacyBehavior passHref>
                  <NavigationMenuLink className="text-gray-300 hover:text-brand-yellow transition-colors block py-2 px-3 rounded-md w-full text-left">
                    Menú
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#promos" legacyBehavior passHref>
                  <NavigationMenuLink className="text-gray-300 hover:text-brand-yellow transition-colors block py-2 px-3 rounded-md w-full text-left">
                    Promos
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#contacto" legacyBehavior passHref>
                  <NavigationMenuLink className="text-gray-300 hover:text-brand-yellow transition-colors block py-2 px-3 rounded-md w-full text-left">
                    Contacto
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="default" size="default" className="bg-green-500 hover:bg-green-600 text-white w-full">
                  Pide por WhatsApp
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </header>
  );
};

export default Header;
