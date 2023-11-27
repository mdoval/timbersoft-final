import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function POST( request ) {
    try {
        const data = await request.json()
        const user = await prisma.user.create(({data: data}))
        return NextResponse.json(user)
    } catch (error) {
        console.log(error)
    }
}