import prisma from "@/db/prisma";
import { getUsuarioLogueado } from "@/utils/getUsuarioLogueado";
import { NextResponse } from "next/server";

export async function POST( request ) {    
    const userLogueado = await getUsuarioLogueado()
    try {
        let data = await request.json()
        data = {...data, aserraderoId: userLogueado.aserraderoId, avatar: 'http://localhost:3000/images/noimage.jpg'}
        const user = await prisma.user.create(({data: data}))
        return NextResponse.json(user)
    } catch (error) {
        console.log(error)
    }
}