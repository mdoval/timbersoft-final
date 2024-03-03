import { ILargoPaquete } from "@/types/tipos"
import EditLargoPaquete from "../Buttons/EditLargo"
import DeleteLargoPaquete from "../Buttons/DeleteLargo"

interface CalidadProps {
    largo: ILargoPaquete
}

const ItemLargoPaquete: React.FC<CalidadProps> = ({largo}) => {
  return (
    <tr className="hover" >
      <td>{largo.tamanio}</td>
      <td className="flex gap-2"> 
        <EditLargoPaquete largo={largo} />
        <DeleteLargoPaquete largo={largo} />
      </td>
    </tr>
  )
}

export default ItemLargoPaquete;
