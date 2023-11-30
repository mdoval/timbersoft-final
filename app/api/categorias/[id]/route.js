import prisma from "@/db/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { getAserraderoId } from "@/utils/getAserraderoId";

export async function GET(request, { params }) {
  const categoriaId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);

  try {
    const categoria = await prisma.categoria.findUnique({
      where: { AND: [{ id: categoriaId }, { aserraderoId: aserraderoId }] },
    });
    return NextResponse.json({ categoria });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request, { params }) {
  const categoriaId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);
  
  try {
    const categoria = await prisma.categoria.deleteMany({
      where: { AND: [{ id: categoriaId }, { aserraderoId: aserraderoId }] },
    });
    return NextResponse.json({ categoria });
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(request, { params }) {
  const categoriaId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);
  try {
    const data = await request.json();
    const categoria = await prisma.categoria.update({
      where: { id: categoriaId },
      data,
    });
    return NextResponse.json({ categoria });
  } catch (error) {
    console.log(error);
  }
}
