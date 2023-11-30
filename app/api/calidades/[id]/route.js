import prisma from "@/db/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { getAserraderoId } from "@/utils/getAserraderoId";

export async function GET(request, { params }) {
  const calidadId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);

  try {
    const calidad = await prisma.calidad.findUnique({
      where: { AND: [{ id: calidadId }, { aserraderoId: aserraderoId }] },
    });
    return NextResponse.json({ calidad });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request, { params }) {
  const calidadId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);
  
  try {
    const calidad = await prisma.calidad.deleteMany({
      where: { AND: [{ id: calidadId }, { aserraderoId: aserraderoId }] },
    });
    return NextResponse.json({ calidad });
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(request, { params }) {
  const calidadId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);
  try {
    const data = await request.json();
    const calidad = await prisma.calidad.update({
      where: { id: calidadId },
      data,
    });
    return NextResponse.json({ calidad });
  } catch (error) {
    console.log(error);
  }
}
