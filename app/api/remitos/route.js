import prisma from "@/db/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { isUserAllow } from "@/utils/usersFunctions";

export async function GET(request) {
    const session = await getServerSession(authOptions);    
    const userEmail = session.user.email

    //const allow = await isUserAllow(userEmail, 1)

    let remitosDelAserradero = []
    try {
        const user = await prisma.user.findUnique({
            where: { email: userEmail },
            include: {
                aserradero: {
                    include: { 
                        remitos: {
                            include: {
                                rollos: {
                                    include: {
                                        categoria: true,
                                        largo: true
                                    }
                                },
                                proveedor: true,
                                transportista: true,
                                destino: true,
                            }
                        }
                    },
                },
            },
        })
    
        if(user) {
            remitosDelAserradero = user.aserradero?.remitos
            //console.log(remitosDelAserradero)
        } else {
            console.log("Usuario no encontrado")
        }
        return NextResponse.json(remitosDelAserradero)
    } catch (error) {
        console.log(error)
    }
}