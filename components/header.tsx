"use client"

import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow z-50"> {/* Cambiar el fondo a gris oscuro y el texto a blanco */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">ConstructoraEV</Link> {/* Cambiar el texto a blanco */}
        </div>
        <nav className="hidden md:flex space-x-4"> {/* Mostrar solo en pantallas medianas y grandes */}
          <Link href="/" className="text-white hover:text-yellow-400">Inicio</Link>
          <Link href="/sobre-nosotros" className="text-white hover:text-yellow-400">Sobre Nosotros</Link>
          <Link href="/servicios" className="text-white hover:text-yellow-400">Servicios</Link>
          <Link href="/proyectos" className="text-white hover:text-yellow-400">Proyectos</Link>
          <Link href="/contacto" className="text-white hover:text-yellow-400">Contacto</Link>
        </nav>
        <HamburgerMenu /> {/* Mostrar solo en dispositivos móviles */}
      </div>
    </header>
  );
}

