"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoProyecto: "",
    mensaje: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prevState) => ({ ...prevState, tipoProyecto: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí normalmente enviarías los datos del formulario a tu backend
    console.log("Formulario enviado:", formData)
    // Reiniciar formulario después del envío
    setFormData({ nombre: "", email: "", telefono: "", tipoProyecto: "", mensaje: "" })
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Contáctenos</h1>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <Input id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
              Teléfono
            </label>
            <Input id="telefono" name="telefono" type="tel" value={formData.telefono} onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="tipoProyecto" className="block text-sm font-medium text-gray-700">
              Tipo de Proyecto
            </label>
            <Select onValueChange={handleSelectChange} value={formData.tipoProyecto}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccione un tipo de proyecto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="educacional">Educacional</SelectItem>
                <SelectItem value="residencial">Residencial</SelectItem>
                <SelectItem value="comercial">Comercial</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <Textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} rows={4} required />
          </div>

          <Button type="submit" className="w-full">
            Enviar Mensaje
          </Button>
        </form>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">Visítenos</h2>
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <p className="mb-2">
            <strong>Dirección:</strong> [Dirección de EDUARDO VARGAS & CIA. LTDA.]
          </p>
          <p className="mb-2">
            <strong>Teléfono:</strong> [Número de teléfono]
          </p>
          <p className="mb-2">
            <strong>Email:</strong> info@eduardovargas.cl
          </p>
          <p>
            <strong>Horario:</strong> Lunes a Viernes: 8:30 AM - 6:00 PM
          </p>
        </div>
      </div>
    </div>
  )
}

