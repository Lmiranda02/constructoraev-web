import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Building, Home, Wrench, PaintBucket, Truck, HardHat } from "lucide-react"

const servicios = [
  {
    titulo: "Construcción de Colegios",
    descripcion: "Diseñamos y construimos instalaciones educativas modernas y funcionales.",
    icono: Building,
  },
  {
    titulo: "Construcción de Gimnasios",
    descripcion: "Creamos espacios deportivos de alta calidad para diversas necesidades.",
    icono: Building,
  },
  {
    titulo: "Construcción de Edificios de Viviendas Sociales",
    descripcion: "Desarrollamos proyectos de vivienda accesibles y de calidad.",
    icono: Home,
  },
  {
    titulo: "Construcción de Viviendas de Alto Estándar",
    descripcion: "Edificamos residencias exclusivas con los más altos estándares de calidad.",
    icono: Home,
  },
  {
    titulo: "Construcción de Estructuras Metálicas",
    descripcion: "Especializados en estructuras metálicas pesadas y semipesadas.",
    icono: Wrench,
  },
  {
    titulo: "Construcción de Restaurantes y Locales Comerciales",
    descripcion: "Creamos espacios comerciales atractivos y funcionales.",
    icono: PaintBucket,
  },
  {
    titulo: "Obras de Pavimentación",
    descripcion: "Realizamos trabajos de pavimentación de alta calidad para diversos proyectos.",
    icono: Truck,
  },
  {
    titulo: "Piscinas y Estanques de Hormigón Armado",
    descripcion: "Construimos piscinas y estanques duraderos y de diseño personalizado.",
    icono: HardHat,
  },
  {
    titulo: "Obras en Madera Laminada Encolada MLE",
    descripcion: "Trabajamos con madera laminada para estructuras únicas y sostenibles.",
    icono: Wrench,
  },
]

export default function ServiciosPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Nuestros Servicios</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicios.map((servicio, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <servicio.icono className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">{servicio.titulo}</h2>
            <p className="mb-4">{servicio.descripcion}</p>
            <Button asChild>
              <Link href="/contacto">Solicitar Presupuesto</Link>
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Servicios Adicionales</h2>
        <ul className="list-disc list-inside text-left max-w-2xl mx-auto mb-8">
          <li>Losa Colaborante PV6</li>
          <li>Hormigón Celular Hebel o similar</li>
          <li>Ladrillo Princesa (Arenado) Armado</li>
          <li>Sistema METALCOM</li>
          <li>Sistema SIP (Panel Liviano U.S.A.)</li>
        </ul>
        <p className="mb-8">
          Ofrecemos una amplia gama de servicios especializados para satisfacer todas sus necesidades de construcción.
        </p>
        <Button size="lg" asChild>
          <Link href="/contacto">Contáctenos para más información</Link>
        </Button>
      </div>
    </div>
  )
}

