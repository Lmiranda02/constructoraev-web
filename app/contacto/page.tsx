"use client"

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
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prevState) => ({ ...prevState, tipoProyecto: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSuccessMessage("")
    setErrorMessage("")
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.nombre,
          email: formData.email,
          phone: formData.telefono,
          projectType: formData.tipoProyecto,
          message: formData.mensaje,
        }),
      })
      if (response.ok) {
        setSuccessMessage("Formulario enviado exitosamente.")
        setFormData({ nombre: "", email: "", telefono: "", tipoProyecto: "", mensaje: "" })
      } else {
        const errorData = await response.json()
        setErrorMessage(errorData.error || "Error al enviar el formulario.")
      }
    } catch (error) {
      setErrorMessage("Error al enviar el formulario.")
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Contáctenos</h1>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
            <Input id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
            <Input id="telefono" name="telefono" type="tel" value={formData.telefono} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="tipoProyecto" className="block text-sm font-medium text-gray-700">Tipo de Proyecto</label>
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
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">Mensaje</label>
            <Textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} rows={4} required />
          </div>
          {successMessage && <div className="text-blue-500 mb-4">{successMessage}</div>}
          {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
          <Button type="submit" className="w-full">Enviar Mensaje</Button>
        </form>
      </div>
    </div>
  )
}

