"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const images = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.1.png-Ff3CuwvCMbfPIvM2sICEmPRwxqTlD8.jpeg",
    alt: "Diseño moderno con amplios ventanales y área social exterior",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.1.png-tJjHGFK5NdWfmfVCYCi0gYXYs3dxnq.jpeg",
    alt: "Casa moderna con piscina infinity y amplias áreas verdes",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5%20%281%29.png-Ui7iF87MDIQ2kiRaHreoQpSTkY42uA.jpeg",
    alt: "Fachada principal con diseño contemporáneo y garaje triple",
  },
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Cambia la imagen cada 5 segundos

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[600px]">
      {images.map((image, index) => (
        <div
          key={image.url}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.url || "/placeholder.svg"}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
            className="brightness-[0.85]"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">CONSTRUYENDO TU VISIÓN</h1>
          <p className="text-2xl mb-8">INGENIERÍA & CONSTRUCCIÓN</p>
          <Button asChild>
            <Link href="/contacto">Solicitar Presupuesto</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

