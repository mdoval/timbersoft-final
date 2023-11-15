import { NextResponse } from "next/server";

export async function GET(request) {
    const remitos = [{id:1, numero: "12312312"},{id:2, numero: "3434343434"}]
    
    return NextResponse.json({remitos})
}