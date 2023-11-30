import prisma from "@/db/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { getAserraderoId } from "@/utils/getAserraderoId";

export async function GET(request, { params }) {
  const largoId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);

  try {
    const largo = await prisma.largo.findUnique({
      where: { AND: [{ id: largoId }, { aserraderoId: aserraderoId }] },
    });
    return NextResponse.json({ largo });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request, { params }) {
  const largoId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);
  
  try {
    const largo = await prisma.largo.deleteMany({
      where: { AND: [{ id: largoId }, { aserraderoId: aserraderoId }] },
    });
    return NextResponse.json({ largo });
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(request, { params }) {
  const largoId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);
  try {
    const data = await request.json();
    const largo = await prisma.largo.update({
      where: { id: largoId },
      data,
    });
    return NextResponse.json({ largo });
  } catch (error) {
    console.log(error);
  }
}
