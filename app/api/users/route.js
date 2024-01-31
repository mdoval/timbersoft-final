import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { getUsuarioLogueado } from "@/utils/getUsuarioLogueado";

export async function GET( request ) {
    //const session = await getServerSession(authOptions);    
    const usr = await getUsuarioLogueado()
    const aserraderoId = usr.aserraderoId
    //console.log(usr)
    //console.log("Mi Session "+JSON.stringify(session))
    
    let users = []

    try {
        users = await prisma.user.findMany({
            where: {
                aserraderoId: aserraderoId
            }
        })
        return NextResponse.json(users)        
    } catch (error) {
        console.log(error)
    }
}