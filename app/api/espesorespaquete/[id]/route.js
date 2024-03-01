import prisma from "@/db/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { getAserraderoId } from "@/utils/getAserraderoId";

export async function GET(request, { params }) {
  const espesoresPaqueteId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);

  try {
    const espesorPaquete = await prisma.espesorPaquete.findUnique({
      where: { AND: [{ id: espesoresPaqueteId }, { aserraderoId: aserraderoId }] },
    });
    return NextResponse.json({ calidad });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request, { params }) {
  const espesoresPaqueteId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);
  
  try {
    const espesorPaquete = await prisma.espesorPaquete.deleteMany({
      where: { AND: [{ id: espesoresPaqueteId }, { aserraderoId: aserraderoId }] },
    });
    return NextResponse.json({ espesorPaquete });
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(request, { params }) {
  const espesoresPaqueteId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);
  try {
    const data = await request.json();
    const espesorPaquete = await prisma.espesorPaquete.update({
      where: { id: espesoresPaqueteId },
      data,
    });
    return NextResponse.json({ espesorPaquete });
  } catch (error) {
    console.log(error);
  }
}
