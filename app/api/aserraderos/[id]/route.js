import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const aserraderoId = parseInt(params.id);
  try {
    const aserradero = await prisma.aserradero.findUnique({
      where: { id: aserraderoId },
    });
    return NextResponse.json({ aserradero });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request, { params }) {
  const aserraderoId = parseInt(params.id);
  try {
    const aserradero = await prisma.aserradero.deleteMany({
      where: { id: aserraderoId },
    });
    return NextResponse.json({ aserradero });
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(request, { params }) {
  const aserraderoId = parseInt(params.id);
  try {
    const data = await request.json();
    const aserradero = await prisma.aserradero.update({
      where: { 
        id: aserraderoId
      }, 
      data 
    });
    return NextResponse.json({ aserradero });
  } catch (error) {
    console.log(error);
  }
}
