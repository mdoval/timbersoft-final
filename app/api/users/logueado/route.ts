import prisma from "@/db/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  const emailLogueado = session?.user?.email as string
  try {
   const usuario = await prisma.user.findUnique({
    where: { email: emailLogueado},
    include: {
      aserradero: true
    }
   })
    //console.log(usuario)
    return NextResponse.json(usuario);
  } catch (error) {
    console.log(error);
  }
}