import prisma from "@/db/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export async function GET(request, {params}) {
    const session = await getServerSession(authOptions);    
    const userEmail = session.user.email
    //const userEmail = "martindoval@gmail.com"
    //console.log(params)

    let remito = {}
    try {
        const user = await prisma.user.findUnique({
            where: { 
                email: userEmail, 
            },
            include: {
                aserradero: {
                    include: { 
                        remitos: {
                            where: {
                                id: parseInt(params.id) 
                            },
                            include: {
                                rollos:{
                                    include: {
                                        categoria: true,
                                        largo: true,
                                        calidad: true
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
            remito = user.aserradero?.remitos[0]
        } else {
            console.log("Usuario no encontrado")
        }
        return NextResponse.json(remito)
    } catch (error) {
        console.log(error)
    }
}