import { NextResponse } from "next/server";
import { prisma } from '@/app/libs/prisma';
import { NextRequest, NextResponse as NextResponseType } from 'next/server';
import { log } from "console";

// Define the interface for the user data
interface Publicacion {
    titulo: string;
    descripcion: string;
    precio: number;
    estado: number; // (1)activo
    departamento: string;
    ciudad: string;
    coordenadas: string;
    direccion: string;
    tipoPublicacionid: number;
    tipoPropiedadid : number;
  }

const stopWords = new Set([
'el', 'los', 'que', 'si', 'no', 'la', 'de', 'y', 'en', 'a', 'con', 'para', 'por', 'las', 'un', 'una'
]);

export async function GET(request: NextRequest): Promise<NextResponse> {
    try {
      // Extraer parámetros de consulta
      const { searchParams } = request.nextUrl;
      const query = searchParams.get('search') || ''; // Obtener el parámetro 'search' o una cadena vacía si no está presente
  
      // Separar el parámetro en palabras y filtrar stop words
      const words = query
        .toLowerCase()
        .split(/\s+/) // Separar por espacios
        .filter(word => !stopWords.has(word)); // Filtrar palabras irrelevantes
  
      if (words.length === 0) {
        return NextResponse.json({
          message: "No se proporcionaron palabras para buscar",
          status: 400
        });
      }
  
      // Crear una consulta para cada palabra
      const searchQueries = words.map(word => ({
        OR: [
          { titulo: { contains: word} },
          { descripcion: { contains: word} },
          { ciudad: { contains: word} },
          { departamento: { contains: word} }
        ]
      }));
  
      // Realizar la consulta en Prisma
      const dataTodo = await prisma.publicacion.findMany({
        where: {
          OR: searchQueries
        }
      });
  
      // Eliminar duplicados si hay resultados duplicados
      const uniqueResults = Array.from(new Set(dataTodo.map(pub => pub.idPublicacion)))
        .map(id => dataTodo.find(pub => pub.idPublicacion === id));
  
      console.log(uniqueResults); // Opcional: para depuración
  
      return NextResponse.json({
        message: "Registros encontrados",
        status: 200,
        data: uniqueResults
      });
    } catch (error: any) {
      console.error(error); // Opcional: para depuración
  
      return NextResponse.json({
        message: "Error al obtener registros",
        status: 500,
        error: error.message // Incluir mensaje de error para depuración
      });
    }
  }


export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
      const { titulo, descripcion, precio, estado, departamento, ciudad, coordenadas, direccion, tipoPublicacionid, tipoPropiedadid }: Publicacion = await request.json();
  
      // Verificar que el tipoPublicacionid existe
      const tipoPublicacionExistente = await prisma.tipoPublicacion.findUnique({
        where: { idTipoPublicacion: tipoPublicacionid },
      });
      
      // Verificar que el tipoid existe
      const tipoPropiedadExistente = await prisma.tipoPropiedad.findUnique({
        where: { idTipoPropiedad: tipoPropiedadid },
      });
  
      if (!tipoPublicacionExistente && !tipoPropiedadExistente) {
        return NextResponse.json({
          message: "El tipo de publicación especificado no existe",
          status: 400,
        });
      }
  
      const datoCreado = await prisma.publicacion.create({
        data: {
          titulo,
          descripcion,
          precio,
          estado,
          departamento,
          ciudad,
          coordenadas,
          direccion,
          tipoPublicacion: {
            connect: { idTipoPublicacion: tipoPublicacionid }
          },
          tipoPropiedad: {
            connect: { idTipoPropiedad: tipoPropiedadid }
          }
        }
      });
  
      return NextResponse.json({
        message: "Registro creado",
        status: 200,
        data: datoCreado
      });
    } catch (error: any) {
      console.error(error);
      return NextResponse.json({
        message: "Error al crear el registro",
        status: 500,
        error: error.message,
      });
    }
  }
  
  