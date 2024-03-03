import prisma from "@/db/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { getAserraderoId } from "@/utils/getAserraderoId";

export async function POST(req) {
    const session = await getServerSession(authOptions);
    const userEmail = session.user.email;
    const aserraderoId = await getAserraderoId(userEmail);

    try {
        const data = await req.json();
        Object.assign(data, { aserraderoId: aserraderoId });
        Object.assign(data, { userId: 1 });
        //console.log(data)
        const paquete = await prisma.paquete.create({ data: data });
        return NextResponse.json(paquete);
    } catch (error) {
      console.log(error);
    }
}