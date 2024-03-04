import { IPaquete } from "@/types/tipos"
//import EditCalidad from "../Buttons/EditCalidad"
//import DeleteCalidad from "../Buttons/DeleteCalidad"

interface ItemProps {
    paquete: IPaquete
}

const ItemPaquete: React.FC<ItemProps> = ({paquete}) => {
  //console.log(paquete)

  let volumen_m3: number = 0
  let volumen_p2: number = 0
  
  if(paquete.espesorPaquete?.tamanio &&  paquete.anchoPaquete?.tamanio && paquete.largoPaquete?.tamanio ) {
    volumen_m3 = ( paquete.espesorPaquete?.tamanio * paquete.anchoPaquete?.tamanio * paquete.largoPaquete?.tamanio ) / 1000000000
    volumen_p2 = volumen_m3 * 423.77
  }
  

  return (
    <tr className="hover" >
      <td>{paquete.id}</td>
      <td>{paquete.espesorPaquete?.tamanio}</td>
      <td>{paquete.anchoPaquete?.tamanio}</td>
      <td>{paquete.largoPaquete?.tamanio}</td>
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