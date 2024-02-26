import prisma from "@/db/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { getAserraderoId } from "@/utils/getAserraderoId";

export async function GET(request, { params }) {
  const tipoId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);

  try {
    const tipo = await prisma.tipo.findUnique({
      where: { AND: [{ id: tipoId }, { aserraderoId: aserraderoId }] },
    });
    return NextResponse.json({ tipo });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request, { params }) {
  const tipoId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);
  
  try {
    const tipo = await prisma.tipo.deleteMany({
      where: { AND: [{ id: tipoId }, { aserraderoId: aserraderoId }] },
    });
    return NextResponse.json({ tipo });
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(request, { params }) {
  const tipoId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);
  try {
    const data = await request.json();
    const tipo = await prisma.tipo.update({
      where: { id: tipoId },
      data,
    });
    return NextResponse.json({ tipo });
  } catch (error) {
    console.log(error);
  }
}
