import { IProveedor } from "@/types/proveedor"
import EditProveedor from "../Buttons/EditProveedor";
import DeleteProveedor from "../Buttons/DeleteProveedor";

interface ProveedorProps {
    proveedor: IProveedor
}

const ItemProveedor: React.FC<ProveedorProps> = ({proveedor}) => {
  return (
    <tr className="hover" >
      <td>{proveedor.nombre}</td>
      <td className="flex gap-2"> 
        <EditProveedor proveedor={proveedor} />
        <DeleteProveedor proveedor={proveedor} />
      </td>
    </tr>
  )
}

export default ItemProveedor;
