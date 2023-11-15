import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function POST( request ) {
    try {
        const data = await request.json()
        const proveedor = await prisma.proveedor.create(({data: data}))
        return NextResponse.json(proveedor)
    } catch (error) {
        console.log(error)
    }
}