import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export async function GET( request ) {
    const session = await getServerSession(authOptions);    
    //console.log("Mi Session "+JSON.stringify(session))
    console.log(session.user.email)
    try {
        const proveedores = await prisma.proveedor.findMany()
        return NextResponse.json(proveedores)        
    } catch (error) {
        console.log(error)
    }
}