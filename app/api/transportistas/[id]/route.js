import prisma from "@/db/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { getAserraderoId } from "@/utils/getAserraderoId";

export async function GET(request, { params }) {
  const transportistaId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);

  try {
    const transportista = await prisma.transportista.findUnique({
      where: { AND: [{ id: transportistaId }, { aserraderoId: aserraderoId }] },
    });
    return NextResponse.json({ transportista });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request, { params }) {
  const transportistaId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);
  
  try {
    const transportista = await prisma.transportista.deleteMany({
      where: { AND: [{ id: transportistaId }, { aserraderoId: aserraderoId }] },
    });
    return NextResponse.json({ transportista });
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(request, { params }) {
  const transportistaId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);
  try {
    const data = await request.json();
    const transportista = await prisma.transportista.update({
      where: { id: transportistaId },
      data,
    });
    return NextResponse.json({ transportista });
  } catch (error) {
    console.log(error);
  }
}
