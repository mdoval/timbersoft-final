import prisma from "@/db/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { getAserraderoId } from "@/utils/getAserraderoId";

export async function GET(request, { params }) {
  const destinoId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);

  try {
    const destino = await prisma.destino.findUnique({
      where: { AND: [{ id: destinoId }, { aserraderoId: aserraderoId }] },
    });
    return NextResponse.json({ destino });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request, { params }) {
  const destinoId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);
  
  try {
    const destino = await prisma.destino.deleteMany({
      where: { AND: [{ id: destinoId }, { aserraderoId: aserraderoId }] },
    });
    return NextResponse.json({ destino });
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(request, { params }) {
  const destinoId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);
  try {
    const data = await request.json();
    const destino = await prisma.destino.update({
      where: { id: destinoId },
      data,
    });
    return NextResponse.json({ destino });
  } catch (error) {
    console.log(error);
  }
}
