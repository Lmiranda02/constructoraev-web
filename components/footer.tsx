import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">EDUARDO VARGAS & CIA. LTDA.</h3>
          <p className="mb-4">Ingeniería & Construcción</p>
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
        <div>
          <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-2">
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
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contáctenos</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:info@eduardovargas.cl" className="hover:text-yellow-400">
                info@eduardovargas.cl
              </a>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <a href="tel:+56912345678" className="hover:text-yellow-400">
                +56 9 1234 5678
              </a>
            </li>
            <li className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Dirección de la Empresa, Ciudad, Chile</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-800 py-4 text-center">
        <p>&copy; 2023 EDUARDO VARGAS & CIA. LTDA. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer

