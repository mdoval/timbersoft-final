import prisma from "@/db/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { isUserAllow } from "@/utils/usersFunctions";

export async function GET(request) {
    const session = await getServerSession(authOptions);    
    const userEmail = session.user.email

    //const allow = await isUserAllow(userEmail, 1)

    let paquetesDelAserradero = []
    try {
        const user = await prisma.user.findUnique({
            where: { email: userEmail },
            include: {
                aserradero: {
                    include: { 
                        paquetes: {
                            include: {
                                estado: true,
                                calidad: true,
                                tipo: true,
                            }
                        }
                    },
                },
            },
        })
    
        if(user) {
            paquetesDelAserradero = user.aserradero?.paquetes
            //console.log(remitosDelAserradero)
        } else {
            console.log("Usuario no encontrado")
        }
        return NextResponse.json(paquetesDelAserradero)
    } catch (error) {
        console.log(error)
    }
}