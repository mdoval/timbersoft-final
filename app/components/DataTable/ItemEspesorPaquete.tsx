import { IEspesorPaquete } from "@/types/tipos"
import EditEspesorPaquete from "../Buttons/EditEspesorPaquete"
import DeleteEspesorPaquete from "../Buttons/DeleteEspesorPaquete"

interface AnchoPaqueteProps {
    espesor: IEspesorPaquete
}

const ItemAnchoPaquete: React.FC<AnchoPaqueteProps> = ({espesor}) => {
  return (
    <tr className="hover" >
      <td>{espesor.tamanio}</td>
      <td className="flex gap-2"> 
        <EditEspesorPaquete espesor={espesor} />
        <DeleteEspesorPaquete espesor={espesor} />
      </td>
    </tr>
  )
}

export default ItemAnchoPaquete;
