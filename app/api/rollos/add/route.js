import prisma from "@/db/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { getAserraderoId } from "@/utils/getAserraderoId";

export async function POST( request ) {
    const session = await getServerSession(authOptions);  
    const userEmail = session.user.email
    const aserraderoId = await getAserraderoId(userEmail)

    try {        
        const data = await request.json()
        Object.assign(data, {aserraderoId: aserraderoId})
        const rollo = await prisma.rollo.create(({data: data}))
        return NextResponse.json(rollo)
    } catch (error) {
        console.log(error)
    }
}