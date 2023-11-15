import prisma from "@/db/prisma";

export async function POST( request ) {
    try {
        const data = await request.json()
        const remito = await prisma.remito.create(({data: data}))
    } catch (error) {
        console.log(error)
    }
}