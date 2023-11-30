import { IDestino } from "@/types/tipos"
import EditDestino from "../Buttons/EditDestino";
import DeleteDestino from "../Buttons/DeleteDestino";

interface DestinoProps {
    destino: IDestino
}

const ItemDestino: React.FC<DestinoProps> = ({destino}) => {
  return (
    <tr className="hover" >
      <td>{destino.nombre}</td>
      <td className="flex gap-2"> 
        <EditDestino destino={destino} />
        <DeleteDestino destino={destino} />
      </td>
    </tr>
  )
}

export default ItemDestino;
