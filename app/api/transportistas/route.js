import prisma from "@/db/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { isUserAllow } from "@/utils/usersFunctions";

export async function GET( request ) {
    const session = await getServerSession(authOptions);    
    const userEmail = session.user.email
    //const allow = await isUserAllow(userEmail, 1)

    let transportistasDelAserradero = []
    
    try {
        const user = await prisma.user.findUnique({
            where: { email: userEmail },
            include: {
              aserradero: {
                include: { transportistas: true },
              },
            },
          });

          if (user) {
            transportistasDelAserradero = user.aserradero?.transportistas;
            //console.log("Proveedores asociados al aserradero del usuario:", proveedoresDelAserradero);
          } else {
            console.log("Usuario no encontrado");
          }

        return NextResponse.json(transportistasDelAserradero)        
    } catch (error) {
        console.log(error)
    }
}