import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Eduardo Vargas & Cia
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-yellow-400">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/sobre-nosotros" className="hover:text-yellow-400">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link href="/servicios" className="hover:text-yellow-400">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/proyectos" className="hover:text-yellow-400">
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-yellow-400">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header

