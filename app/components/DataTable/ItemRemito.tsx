import { IRemito } from "@/types/tipos"
//import EditCalidad from "../Buttons/EditCalidad"
//import DeleteCalidad from "../Buttons/DeleteCalidad"

interface RemitoProps {
    remito: IRemito
}

const ItemRemito: React.FC<RemitoProps> = ({remito}) => {
  return (
    <tr className="hover" >
      <td>{remito.id}</td>
      <td>{remito.fechaIngreso.toString()}</td>
      <td>{remito.remito}</td>
      <td>{remito.proveedorId}</td>
      <td>{remito.transportistaId}</td>
      <td>{remito.destinoId}</td>
      <td>{remito.factura}</td>
      <td className="flex gap-2"> 
        {/*<EditCalidad calidad={calidad} />*/}
        {/*<DeleteCalidad calidad={calidad} />*/}
      </td>
    </tr>
  )
}

export default ItemRemito;