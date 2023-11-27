import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const userEmail = params.email;
  try {
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request, { params }) {
  const userEmail = params.email;
  try {
    const user = await prisma.user.deleteMany({
      where: { email: userEmail },
    });
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(request, { params }) {
  const userEmail = params.email;
  try {
    const data = await request.json();
    const user = await prisma.user.update({
      where: { 
        email: userEmail
      }, 
      data 
    });
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
