import { ILargo } from "@/types/tipos"
import EditLargo from "../Buttons/EditLargo"
import DeleteLargo from "../Buttons/DeleteLargo"

interface CalidadProps {
    largo: ILargo
}

const ItemLargo: React.FC<CalidadProps> = ({largo}) => {
  return (
    <tr className="hover" >
      <td>{largo.tamanio}</td>
      <td className="flex gap-2"> 
        <EditLargo largo={largo} />
        <DeleteLargo largo={largo} />
      </td>
    </tr>
  )
}

export default ItemLargo;
