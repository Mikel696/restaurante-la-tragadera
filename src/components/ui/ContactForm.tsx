'use client';

import React, { useState } from 'react';
import Button from './Button';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to an API endpoint.
    console.log({ name, email, message });
    setStatus('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
    // Clear form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-brand-dark text-xs font-bold mb-2" htmlFor="grid-first-name">
            Nombre
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-brand-dark border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Tu Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-brand-dark text-xs font-bold mb-2" htmlFor="grid-email">
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-brand-dark border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email"
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-brand-dark text-xs font-bold mb-2" htmlFor="grid-message">
            Mensaje
          </label>
          <textarea
            className=" no-resize appearance-none block w-full bg-gray-200 text-brand-dark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="grid-message"
            placeholder="Escribe tu mensaje aquí..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <Button type="submit">
          Enviar Mensaje
        </Button>
      </div>
      {status && <p className="mt-4 text-green-600">{status}</p>}
    </form>
  );
};

export default ContactForm;
