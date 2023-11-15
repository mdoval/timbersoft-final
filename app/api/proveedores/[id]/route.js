import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const proveedorId = parseInt(params.id);
  try {
    const proveedor = await prisma.proveedor.findUnique({
      where: { id: proveedorId },
    });
    return NextResponse.json({ proveedor });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request, { params }) {
  const proveedorId = parseInt(params.id);
  try {
    const proveedor = await prisma.proveedor.deleteMany({
      where: { id: proveedorId },
    });
    return NextResponse.json({ proveedor });
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(request, { params }) {
  const proveedorId = parseInt(params.id);
  try {
    const data = await request.json();
    const proveedor = await prisma.proveedor.update({
      where: { 
        id: proveedorId
      }, 
      data: { data }     
    });
    return NextResponse.json({ proveedor });
  } catch (error) {
    console.log(error);
  }
}
