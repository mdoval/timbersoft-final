import { ICalidad } from "@/types/tipos"
import EditCalidad from "../Buttons/EditCalidad"
import DeleteCalidad from "../Buttons/DeleteCalidad"

interface CalidadProps {
    calidad: ICalidad
}

const ItemCalidad: React.FC<CalidadProps> = ({calidad}) => {
  return (
    <tr className="hover" >
      <td>{calidad.nombre}</td>
      <td className="flex gap-2"> 
        <EditCalidad calidad={calidad} />
        <DeleteCalidad calidad={calidad} />
      </td>
    </tr>
  )
}

export default ItemCalidad;
