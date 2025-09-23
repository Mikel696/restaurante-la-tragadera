'use client';

import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Assuming react-icons is installed
import Link from 'next/link';

const FloatingWhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Button appears after 1 second

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const messageTimer = setTimeout(() => {
        setShowMessage(true);
      }, 2000); // Message appears 2 seconds after button is visible
      const hideMessageTimer = setTimeout(() => {
        setShowMessage(false);
      }, 7000); // Message hides after 5 seconds

      return () => {
        clearTimeout(messageTimer);
        clearTimeout(hideMessageTimer);
      };
    }
  }, [isVisible]);

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {showMessage && (
        <div className="absolute bottom-full right-0 mb-2 p-3 bg-white rounded-lg shadow-lg text-sm text-gray-800 whitespace-nowrap transform translate-x-[-10%]">
          Hola, ¿quieres comer algo delicioso hoy?
          <div className="absolute bottom-0 right-4 w-3 h-3 bg-white transform rotate-45 translate-y-1/2"></div>
        </div>
      )}
      <Link href="https://wa.me/573148342452" target="_blank" rel="noopener noreferrer" passHref>
        <div
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center justify-center"
          aria-label="Chatear por WhatsApp"
        >
          <FaWhatsapp size={30} />
        </div>
      </Link>
    </div>
  );
};

export default FloatingWhatsAppButton;
