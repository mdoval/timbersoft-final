import { ICategoria } from "@/types/tipos"
import EditCategoria from "../Buttons/EditCategoria";
import DeleteCategoria from "../Buttons/DeleteCategoria";

interface CategoriaProps {
    categoria: ICategoria
}

const ItemCategoria: React.FC<CategoriaProps> = ({categoria}) => {
  return (
    <tr className="hover" >
      <td>{categoria.nombre}</td>
      <td className="flex gap-2"> 
        <EditCategoria categoria={categoria} />
        <DeleteCategoria categoria={categoria} />
      </td>
    </tr>
  )
}

export default ItemCategoria;
