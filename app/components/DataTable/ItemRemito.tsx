import { IRemito } from "@/types/tipos"
//import EditCalidad from "../Buttons/EditCalidad"
//import DeleteCalidad from "../Buttons/DeleteCalidad"

interface RemitoProps {
    remito: IRemito
}

const formatoFecha = (fechaOriginal: Date) => {
  const fecha: Date = new Date(fechaOriginal)
  const dia:number = fecha.getDate()
  const mes:number = fecha.getMonth() + 1; // Los meses en JavaScript son indexados desde 0
  const anio:number = fecha.getFullYear();  
  const fechaFormateada:string = `${dia < 10 ? '0' : ''}${dia}-${mes < 10 ? '0' : ''}${mes}-${anio}`;
  return fechaFormateada
}

const ItemRemito: React.FC<RemitoProps> = ({remito}) => {
  //console.log(remito)
  return (
    <tr className="hover" >
      <td>{remito.id}</td>
      <td>{formatoFecha(remito.fechaIngreso)}</td>
      <td>{remito.remito}</td>
      <td>{remito.proveedor.nombre}</td>
      <td>{remito.transportista.nombre}</td>
      <td>{remito.destino.nombre}</td>
      <td>{remito.factura}</td>
      <td className="flex gap-2"> 
        {/*<EditCalidad calidad={calidad} />*/}
        {/*<DeleteCalidad calidad={calidad} />*/}
      </td>
    </tr>
  )
}

export default ItemRemito;