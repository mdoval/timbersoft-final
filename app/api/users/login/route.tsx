import { NextResponse } from "next/server"
import prisma from "@/db/prisma";

export async function POST(req: Request) {
    const data = await req.json()
    const usuario = await prisma.user.findUnique({
        where: {
          email: data.email,
          password: data.password,  // Compara la contraseña también
        },
        include: {
          aserradero: true,
        },
      });

      if(usuario) return NextResponse.json({ id: usuario.id, name: usuario.name, email: usuario.email, image: usuario.avatar })
      else return NextResponse.json(null)
    
}