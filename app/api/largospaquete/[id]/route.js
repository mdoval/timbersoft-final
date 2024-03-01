import prisma from "@/db/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { getAserraderoId } from "@/utils/getAserraderoId";

export async function GET(request, { params }) {
  const largosPaqueteId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);

  try {
    const largoPaquete = await prisma.largoPaquete.findUnique({
      where: { AND: [{ id: largosPaqueteId }, { aserraderoId: aserraderoId }] },
    });
    return NextResponse.json({ calidad });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request, { params }) {
  const largosPaqueteId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);
  
  try {
    const largosPaquete = await prisma.largoPaquete.deleteMany({
      where: { AND: [{ id: largosPaqueteId }, { aserraderoId: aserraderoId }] },
    });
    return NextResponse.json({ largosPaquete });
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(request, { params }) {
  const largosPaqueteId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);
  try {
    const data = await request.json();
    const largoPaquete = await prisma.largoPaquete.update({
      where: { id: largosPaqueteId },
      data,
    });
    return NextResponse.json({ largoPaquete });
  } catch (error) {
    console.log(error);
  }
}
