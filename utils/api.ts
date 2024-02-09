import { IRemito, IRollo, IRolloUI } from "@/types/tipos";
import { addRollo } from "./rollosFunctions";

export default async function addRemitoRollos (remito:IRemito, rollos: IRolloUI[]) {
    const data = await fetch(`${process.env.siteUrl}/api/remitos/add`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(remito)
    })
    const newRemito = await data.json() 

    console.log(rollos)
    
    rollos.map(async (rollo: IRolloUI) => {
        console.log(rollo)
        const newRollo: IRollo = {
            categoriaId: rollo.categoria?.id,
            largoId: rollo.largo?.id,
            toneladas: rollo.toneladas,
            unidades: rollo.unidades,
            precio: rollo.precio,
            importe: rollo.importe,
            remitoId: newRemito.id,
        }                
        const rolloGuardado = await addRollo(newRollo)
    })
    return(JSON.stringify(newRemito))
}