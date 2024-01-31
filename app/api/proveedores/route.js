import prisma from "@/db/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { isUserAllow } from "@/utils/usersFunctions";

export async function GET( request ) {
    const session = await getServerSession(authOptions);    
    const userEmail = session.user.email

    //const allow = await isUserAllow(userEmail, 1)

    let proveedoresDelAserradero = []
    try {
        const user = await prisma.user.findUnique({
            where: { email: userEmail },
            include: {
              aserradero: {
                include: { proveedores: true },
              },
            },
          });
          
          if (user) {
            proveedoresDelAserradero = user.aserradero?.proveedores;
            //console.log("Proveedores asociados al aserradero del usuario:", proveedoresDelAserradero);
          } else {
            console.log("Usuario no encontrado");
          }

        return NextResponse.json(proveedoresDelAserradero)        
    } catch (error) {
        console.log(error)
    }
}