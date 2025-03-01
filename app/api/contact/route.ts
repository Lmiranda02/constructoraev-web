import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Contact from '@/models/Contact';
import validator from 'validator';
import rateLimit from 'express-rate-limit';
import csrf from 'csurf';

// Configuración de rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limite de 100 peticiones por IP
  message: 'Too many requests, please try again later.',
});

// Configuración de CSRF
const csrfProtection = csrf({ cookie: true });

export async function POST(req: NextRequest) {
  await connectToDatabase();

  const { name, email, phone, projectType, message } = await req.json();

  // Validaciones
  if (!name || !validator.isLength(name, { min: 1, max: 100 })) {
    return NextResponse.json({ error: 'Nombre es requerido y debe tener entre 1 y 100 caracteres.' }, { status: 400 });
  }
  if (!email || !validator.isEmail(email)) {
    return NextResponse.json({ error: 'Email es requerido y debe ser válido.' }, { status: 400 });
  }
  if (!phone || !validator.isMobilePhone(phone, 'any')) {
    return NextResponse.json({ error: 'Teléfono es requerido y debe ser válido.' }, { status: 400 });
  }
  if (!projectType || !validator.isLength(projectType, { min: 1, max: 100 })) {
    return NextResponse.json({ error: 'Tipo de proyecto es requerido y debe tener entre 1 y 100 caracteres.' }, { status: 400 });
  }
  if (!message || !validator.isLength(message, { min: 1, max: 500 })) {
    return NextResponse.json({ error: 'Mensaje es requerido y debe tener entre 1 y 500 caracteres.' }, { status: 400 });
  }

  try {
    const newContact = new Contact({ name, email, phone, projectType, message });
    await newContact.save();
    return NextResponse.json({ message: 'Formulario enviado exitosamente.' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al guardar el contacto.' }, { status: 500 });
  }
}