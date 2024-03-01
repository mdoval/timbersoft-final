import prisma from "@/db/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { getAserraderoId } from "@/utils/getAserraderoId";

export async function GET(request, { params }) {
  const anchoPaqueteId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);

  try {
    const anchoPaquete = await prisma.anchoPaquete.findUnique({
      where: { AND: [{ id: anchoPaqueteId }, { aserraderoId: aserraderoId }] },
    });
    return NextResponse.json({ calidad });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request, { params }) {
  const anchoPaqueteId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);
  
  try {
    const anchoPaquete = await prisma.anchoPaquete.deleteMany({
      where: { AND: [{ id: anchoPaqueteId }, { aserraderoId: aserraderoId }] },
    });
    return NextResponse.json({ anchoPaquete });
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(request, { params }) {
  const anchoPaqueteId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);
  try {
    const data = await request.json();
    const anchoPaquete = await prisma.anchoPaquete.update({
      where: { id: anchoPaqueteId },
      data,
    });
    return NextResponse.json({ anchoPaquete });
  } catch (error) {
    console.log(error);
  }
}
