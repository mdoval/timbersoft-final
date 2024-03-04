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
        const cantidadPaquetes = data.cantidadPaquetes
        delete data.cantidadPaquetes
        //console.log(cantidadPaquetes)
        //console.log(data)
        Object.assign(data, { aserraderoId: aserraderoId });
        Object.assign(data, { userId: 1 });
        for (let i = 0; i < cantidadPaquetes; i++) {
          const paquete = await prisma.paquete.create({ data: data });
        }
        return NextResponse.json({message: `${cantidadPaquetes} Paquetes Creados`});
    } catch (error) {
      console.log(error);
    }
}