import { IPaquete } from "@/types/tipos"
//import EditCalidad from "../Buttons/EditCalidad"
//import DeleteCalidad from "../Buttons/DeleteCalidad"

interface ItemProps {
    paquete: IPaquete
}

const ItemPaquete: React.FC<ItemProps> = ({paquete}) => {
  //console.log(remito)}

  const volumen_m3 = ( paquete.espesor * paquete.ancho * paquete.largo ) / 1000000000
  const volumen_p2 = volumen_m3 * 423.77

  return (
    <tr className="hover" >
      <td>{paquete.id}</td>
      <td>{paquete.espesor}</td>
      <td>{paquete.ancho}</td>
      <td>{paquete.largo}</td>
      <td>{paquete.cantidad}</td>
      <td>{volumen_m3}</td>
      <td>{volumen_p2}</td>
      <td>{paquete.estado?.descripcion}</td>
      <td>{paquete.tipo?.catalogo}</td>
      <td>{paquete.calidad?.nombre}</td>
      <td className="flex gap-2">Accion</td>
    </tr>
  )
}

export default ItemPaquete;