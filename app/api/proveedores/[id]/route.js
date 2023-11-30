import prisma from "@/db/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { getAserraderoId } from "@/utils/getAserraderoId";

export async function GET(request, { params }) {
  const proveedorId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);

  try {
    const proveedor = await prisma.proveedor.findUnique({
      where: { AND: [{ id: proveedorId }, { aserraderoId: aserraderoId }] },
    });
    return NextResponse.json({ proveedor });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request, { params }) {
  const proveedorId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);
  
  try {
    const proveedor = await prisma.proveedor.deleteMany({
      where: { AND: [{ id: proveedorId }, { aserraderoId: aserraderoId }] },
    });
    return NextResponse.json({ proveedor });
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(request, { params }) {
  const proveedorId = parseInt(params.id);
  const session = await getServerSession(authOptions);
  const userEmail = session.user.email;
  const aserraderoId = await getAserraderoId(userEmail);
  console.log(proveedorId)
  console.log(aserraderoId)
  try {
    const data = await request.json();
    const proveedor = await prisma.proveedor.update({
      where: { id: proveedorId },
      data,
    });
    return NextResponse.json({ proveedor });
  } catch (error) {
    console.log(error);
  }
}
