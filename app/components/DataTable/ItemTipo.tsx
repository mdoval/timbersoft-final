import { ITipo } from "@/types/tipos"
import EditTipo from "../Buttons/EditTipo"
import DeleteTipo from "../Buttons/DeleteTipo"

interface TipoProps {
    tipo: ITipo
}

const ItemTipo: React.FC<TipoProps> = ({tipo}) => {
  return (
    <tr className="hover" >
      <td>{tipo.catalogo}</td>
      <td>{tipo.descripcion}</td>
      <td className="flex gap-2"> 
        <EditTipo tipo={tipo} />
        <DeleteTipo tipo={tipo} />
      </td>
    </tr>
  )
}

export default ItemTipo;
