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
    const registroEncontrado = await prisma.usuario.findUnique({
      where: {
        idUsuario: Number(params.id),
      },
    });

    return NextResponse.json({
      data: registroEncontrado
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error al obtener el registro",
      status: 500,

    });
  }
}

export async function PUT(request: NextRequest, { params }: Params): Promise<NextResponseType> {
  try {
    const data = await request.json();
    const UsuarioUpdate = await prisma.usuario.update({
      where: {
        idUsuario: Number(params.id)
      },
      data: data
    });

    return NextResponse.json({
      message: "task updated",
      taskUpdate: UsuarioUpdate
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error al actualizar el registro",
      status: 500,

    });
  }
}

export async function DELETE(request: NextRequest, { params }: Params): Promise<NextResponseType> {
  try {
    const data = await prisma.usuario.delete({
      where: {
        idUsuario: Number(params.id)
      }
    });

    return NextResponse.json({
      message: `tarea eliminada ${params.id}`
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error al eliminar el registro",
      status: 500,

    });
  }
}
