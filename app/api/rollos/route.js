import prisma from "@/db/prisma";

export async function GET() {
  let rollos = [];

  try {
    rollos = await prisma.rollo.findMany({
      include: {
        aserradero: {
          select: { nombre: true },
        },
        largo: {
            select: { tamanio: true }
        },
        categoria: {
            select: { nombre: true }
        },
      },
    });
  } catch (error) {
    console.error("Error al obtener Rollos:", error);
  } finally {
    await prisma.$disconnect(); // Cierra la conexión a la base de datos cuando hayas terminado
  }

  return Response.json(rollos);
}
