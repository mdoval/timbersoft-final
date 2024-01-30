import { NextResponse } from "next/server"
import prisma from "@/db/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function POST(req: Request) {
    const data = await req.json()
   
    try {
        const newEmpresa = await prisma.aserradero.create({data: {nombre: data.empresa}})
        const newUsuario = await prisma.user.create({data: {email: data.email, name: data.nombre, aserraderoId: newEmpresa.id, password: data.password}})
        return NextResponse.json(newUsuario)
    } catch( error ) {
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
              //console.log('Este correo ya se encuentra registrado')
              throw new Error(`Error en la creacion del usuario: Correo Duplicado`).name = "Email Duplicado";
            }
        }
    }
}   