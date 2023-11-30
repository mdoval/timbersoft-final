import { ITransportista } from "@/types/tipos"
import EditTransportista from "../Buttons/EditTransportista";
import DeleteTransportista from "../Buttons/DeleteTransportista";

interface TransportistaProps {
    transportista: ITransportista
}

const ItemTransportista: React.FC<TransportistaProps> = ({transportista}) => {
  return (
    <tr className="hover" >
      <td>{transportista.nombre}</td>
      <td className="flex gap-2"> 
        <EditTransportista transportista={transportista} />
        <DeleteTransportista transportista={transportista} />
      </td>
    </tr>
  )
}

export default ItemTransportista;
