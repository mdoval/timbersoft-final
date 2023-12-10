import { IRemito, IRollo } from "@/types/tipos";

export default async function addRemitoRollos (remito:IRemito, rollos: IRollo[]) {
    const newRemito = await fetch(`${process.env.siteUrl}/api/remitos/add`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(remito)
    })
//    console.log(remito)
//    console.log(rollos)
    return(JSON.stringify(newRemito))
}