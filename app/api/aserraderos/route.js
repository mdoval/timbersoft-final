import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function GET( request ) {
    try {
        const aserraderos = await prisma.aserradero.findMany()
        return NextResponse.json(aserraderos)        
    } catch (error) {
        console.log(error)
    }
}