import prisma from "@/db/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { getAserraderoId } from "@/utils/getAserraderoId";
import { getSession } from "next-auth/react";

export async function POST(req: NextRequest ) {
    const session = await getServerSession(authOptions); 
    const userEmail = session?.user?.email
    const aserraderoId = await getAserraderoId(userEmail)

    try {        
        const data = await req.json()
        Object.assign(data, {aserraderoId: aserraderoId})
        const proveedor = await prisma.proveedor.create(({data: data}))
        return NextResponse.json(proveedor)
    } catch (error) {
        console.log(error)
    }
}