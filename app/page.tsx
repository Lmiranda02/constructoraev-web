import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroCarousel from "@/components/hero-carousel"

export default function Home() {
  return (
    <div>
      <HeroCarousel />

      {/* Sección Sobre Nosotros */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre la Empresa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                Constructora Eduardo Vargas & Cia. Ltda. es una empresa líder en ingeniería y construcción,
                especializada en una amplia gama de proyectos. Nos destacamos por nuestra experiencia en la construcción
                de colegios, gimnasios, edificios de viviendas sociales y de alto estándar, así como en estructuras
                metálicas y obras especializadas.
              </p>
              <p>
                Nuestro compromiso con la calidad y la innovación nos ha posicionado como una de las empresas más
                confiables en el sector de la construcción en Chile.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative w-64 h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-8MnKnVDZH9f1NQHMzZOvBPqaDOoDAA.png"
                  alt="Logo Eduardo Vargas & Cia"
                  layout="fill"
                  objectFit="contain"
                  className="drop-shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vista previa de Servicios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Construcción de Colegios", "Construcción de Viviendas", "Estructuras Metálicas"].map(
              (servicio, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">{servicio}</h3>
                  <p className="mb-4">
                    Ofrecemos servicios de construcción de alta calidad, adaptados a las necesidades específicas de cada
                    proyecto.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/servicios">Más Información</Link>
                  </Button>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { nombre: "Colegio Moderno", tipo: "Educacional" },
              { nombre: "Edificio Residencial", tipo: "Viviendas" },
              { nombre: "Centro Comercial", tipo: "Comercial" },
            ].map((proyecto, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=${proyecto.nombre}`}
                    alt={proyecto.nombre}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{proyecto.nombre}</h3>
                  <p className="mb-4">Proyecto {proyecto.tipo}</p>
                  <Button variant="outline" asChild>
                    <Link href="/proyectos">Ver Detalles</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Llamada a la Acción */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Comenzar su Proyecto?</h2>
          <p className="mb-8">Contáctenos hoy para una consulta gratuita y presupuesto.</p>
          <Button size="lg" asChild>
            <Link href="/contacto">Contáctenos</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

