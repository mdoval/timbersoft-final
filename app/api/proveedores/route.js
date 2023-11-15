import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function GET( request ) {
    try {
        const proveedores = await prisma.proveedor.findMany()
        return NextResponse.json(proveedores)        
    } catch (error) {
        console.log(error)
    }
}