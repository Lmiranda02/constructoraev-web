"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const proyectos = [
  {
    id: 1,
    titulo: "Colegio Moderno",
    categoria: "Educacional",
    imagen: "/placeholder.svg?height=300&width=400&text=Colegio+Moderno",
  },
  {
    id: 2,
    titulo: "Edificio Residencial Los Alamos",
    categoria: "Residencial",
    imagen: "/placeholder.svg?height=300&width=400&text=Edificio+Residencial",
  },
  {
    id: 3,
    titulo: "Centro Comercial Plaza Mayor",
    categoria: "Comercial",
    imagen: "/placeholder.svg?height=300&width=400&text=Centro+Comercial",
  },
  {
    id: 4,
    titulo: "Gimnasio Olímpico",
    categoria: "Deportivo",
    imagen: "/placeholder.svg?height=300&width=400&text=Gimnasio+Olímpico",
  },
  {
    id: 5,
    titulo: "Restauración Edificio Histórico",
    categoria: "Restauración",
    imagen: "/placeholder.svg?height=300&width=400&text=Edificio+Histórico",
  },
  {
    id: 6,
    titulo: "Complejo Industrial Tecnológico",
    categoria: "Industrial",
    imagen: "/placeholder.svg?height=300&width=400&text=Complejo+Industrial",
  },
]

const categorias = ["Todos", "Educacional", "Residencial", "Comercial", "Deportivo", "Restauración", "Industrial"]

export default function ProyectosPage() {
  const [filtro, setFiltro] = useState("Todos")

  const proyectosFiltrados =
    filtro === "Todos" ? proyectos : proyectos.filter((proyecto) => proyecto.categoria === filtro)

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Nuestros Proyectos</h1>

      <div className="mb-8 flex flex-wrap justify-center gap-4">
        {categorias.map((categoria) => (
          <Button
            key={categoria}
            onClick={() => setFiltro(categoria)}
            variant={filtro === categoria ? "default" : "outline"}
          >
            {categoria}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectosFiltrados.map((proyecto) => (
          <div key={proyecto.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48">
              <Image
                src={proyecto.imagen || "/placeholder.svg"}
                alt={proyecto.titulo}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{proyecto.titulo}</h2>
              <p className="text-gray-600 mb-4">{proyecto.categoria}</p>
              <Button variant="outline">Ver Detalles</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

