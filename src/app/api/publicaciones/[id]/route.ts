import { NextResponse } from "next/server";
import { prisma } from '@/app/libs/prisma';
import { NextRequest, NextResponse as NextResponseType } from 'next/server';

interface Params {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: Params): Promise<NextResponseType> {
  try {
    const registroEncontrado = await prisma.publicacion.findUnique({
      where: {
        idPublicacion: Number(params.id),
      },
    });

    return NextResponse.json({
      data: registroEncontrado
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error al obtener la publicación",
      status: 500,

    });
  }
}

export async function PUT(request: NextRequest, { params }: Params): Promise<NextResponseType> {
  try {
    const data = await request.json();
    const PublicacionUpdate = await prisma.publicacion.update({
      where: {
        idPublicacion: Number(params.id)
      },
      data: data
    });

    return NextResponse.json({
      message: "Publicación actualizada",
      taskUpdate: PublicacionUpdate
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error al actualizar la publicación",
      status: 500,

    });
  }
}

export async function DELETE(request: NextRequest, { params }: Params): Promise<NextResponseType> {
  try {
    const data = await prisma.publicacion.delete({
      where: {
        idPublicacion: Number(params.id)
      }
    });

    return NextResponse.json({
      message: `Publicacion eliminada ${params.id}`
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error al eliminar la publicación",
      status: 500,

    });
  }
}
