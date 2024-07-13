import { NextResponse } from "next/server";
import { prisma } from '@/app/libs/prisma';
import { NextRequest, NextResponse as NextResponseType } from 'next/server';

// Define the interface for the user data
interface User {
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  direccion: string;
  dni: string;
}

export async function GET(): Promise<NextResponseType> {
  try {
    const dataTodo = await prisma.usuario.findMany();

    return NextResponse.json({
      message: "registro encontrado",
      status: 200,
      data: dataTodo
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error al obtener registros",
      status: 500,
      
    });
  }
}

export async function POST(request: NextRequest): Promise<NextResponseType> {
  try {
    const { nombre, apellido, correo, telefono, direccion, dni }: User = await request.json();

    const datoCreado = await prisma.usuario.create({
      data: {
        nombre,
        apellido,
        correo,
        telefono,
        direccion,
        dni
      }
    });

    return NextResponse.json({
      message: "registro creado",
      status: 200,
      data: datoCreado
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error al crear el registro",
      status: 500,
    });
  }
}

