"use client"

import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Puedes usar cualquier icono de hamburguesa y cerrar

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative md:hidden z-50"> {/* Ocultar en pantallas medianas y grandes y establecer z-index alto */}
      <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
          <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Inicio</a>
          <a href="/sobre-nosotros" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sobre Nosotros</a>
          <a href="/servicios" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Servicios</a>
          <a href="/proyectos" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Proyectos</a>
          <a href="/contacto" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contacto</a>
        </div>
      )}
    </div>
  );
}