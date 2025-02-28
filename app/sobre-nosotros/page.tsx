import Image from "next/image"

export default function SobreNosotrosPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Sobre EDUARDO VARGAS & CIA. LTDA.</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
          <p className="mb-4">
            EDUARDO VARGAS & CIA. LTDA. se ha consolidado como una empresa líder en ingeniería y construcción en Chile.
            Nuestra trayectoria se ha caracterizado por un compromiso inquebrantable con la calidad, la innovación y la
            satisfacción del cliente.
          </p>
          <p>
            Con años de experiencia en el sector, hemos completado con éxito numerosos proyectos, desde construcciones
            educativas y residenciales hasta grandes desarrollos comerciales e industriales. Nuestro equipo de
            profesionales altamente calificados aporta experiencia y dedicación a cada proyecto que emprendemos.
          </p>
        </div>
        <div className="relative h-64 md:h-full">
          <Image
            src="/placeholder.svg?height=400&width=600&text=Nuestro+Equipo"
            alt="Equipo de EDUARDO VARGAS & CIA. LTDA."
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              titulo: "Calidad",
              descripcion:
                "Nos comprometemos a ofrecer la más alta calidad en todos nuestros proyectos, utilizando los mejores materiales y técnicas de construcción.",
            },
            {
              titulo: "Innovación",
              descripcion:
                "Nos mantenemos a la vanguardia de la tecnología de construcción y las prácticas de construcción sostenible.",
            },
            {
              titulo: "Integridad",
              descripcion:
                "Conducimos nuestro negocio con honestidad, transparencia y prácticas éticas en todas nuestras interacciones.",
            },
          ].map((valor, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{valor.titulo}</h3>
              <p>{valor.descripcion}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center">Nuestras Especialidades</h2>
        <ul className="list-disc list-inside max-w-2xl mx-auto">
          <li>Construcción de Colegios y Gimnasios</li>
          <li>Edificios de Viviendas Sociales y de Alto Estándar</li>
          <li>Estructuras Metálicas Pesadas y Semipesadas</li>
          <li>Restaurantes y Locales Comerciales</li>
          <li>Obras de Pavimentación</li>
          <li>Piscinas y Estanques de Hormigón Armado</li>
          <li>Obras en Madera Laminada Encolada MLE</li>
          <li>Sistemas especializados: METALCOM, SIP, Losa Colaborante PV6</li>
        </ul>
      </div>
    </div>
  )
}

