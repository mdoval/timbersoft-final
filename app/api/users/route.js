import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function GET( request ) {
    try {
        const users = await prisma.user.findMany()
        return NextResponse.json(users)        
    } catch (error) {
        console.log(error)
    }
}