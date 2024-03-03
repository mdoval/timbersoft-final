import { IAnchoPaquete } from "@/types/tipos"
import EditAnchoPaquete from "../Buttons/EditAnchoPaquete"
import DeleteAnchoPaquete from "../Buttons/DeleteAnchoPaquete"

interface AnchoPaqueteProps {
    ancho: IAnchoPaquete
}

const ItemAnchoPaquete: React.FC<AnchoPaqueteProps> = ({ancho}) => {
  return (
    <tr className="hover" >
      <td>{ancho.tamanio}</td>
      <td className="flex gap-2"> 
        <EditAnchoPaquete ancho={ancho} />
        <DeleteAnchoPaquete ancho={ancho} />
      </td>
    </tr>
  )
}

export default ItemAnchoPaquete;
