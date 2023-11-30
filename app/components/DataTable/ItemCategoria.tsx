import { ICategoria } from "@/types/tipos"
import EditCategoria from "../Buttons/EditCategoria";
import DeleteCategoria from "../Buttons/DeleteCategoria";

interface CategoriaProps {
    proveedor: ICategoria
}

const ItemCategoria: React.FC<CategoriaProps> = ({proveedor}) => {
  return (
    <tr className="hover" >
      <td>{proveedor.nombre}</td>
      <td className="flex gap-2"> 
        <EditCategoria proveedor={proveedor} />
        <DeleteCategoria proveedor={proveedor} />
      </td>
    </tr>
  )
}

export default ItemCategoria;
