import { IPaquete } from "@/types/tipos";
import ItemPaquete from "@/app/components/DataTable/ItemPaquete";
import Downloader from "../Downloader";

interface PaquetesListProps {
  paquetes: IPaquete[];
}

const PaquetesList: React.FC<PaquetesListProps> = ({ paquetes }) => {
  const datos: any[] = []
  paquetes.map((paquete: any) => {
    let volumen_m3: number = 0
    let volumen_p2: number = 0
    
    if(paquete.espesorPaquete?.tamanio &&  paquete.anchoPaquete?.tamanio && paquete.largoPaquete?.tamanio ) {
      volumen_m3 = ( paquete.espesorPaquete?.tamanio * paquete.anchoPaquete?.tamanio * paquete.largoPaquete?.tamanio ) / 1000000000
      volumen_p2 = volumen_m3 * 423.77
    }
    
    datos.push(
      {
        id: paquete.id,
        espesor: paquete.espesorPaquete.tamanio,
        largo: paquete.largoPaquete.tamanio,
        ancho: paquete.anchoPaquete.tamanio,
        cantidad: paquete.cantidad,
        volumen_m3: volumen_m3,
        volumen_p2: volumen_p2,
        estado: paquete.estado.nombre,
        tipo: paquete.tipo.descripcion,
        calidad: paquete.calidad.descripcion
      }
    )
  })

  return (
    <div className="overflow-x-auto">
      <Downloader datos={datos} />      
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Espesor</th>
            <th>Ancho</th>
            <th>Largo</th>
            <th>Cantidad</th>
            <th>Volumen m3</th>
            <th>Volumen p2</th>
            <th>Estado</th>
            <th>Tipo</th>
            <th>Calidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          { paquetes.map((paquete) => <ItemPaquete key={paquete.id} paquete={paquete} /> )}
        </tbody>
      </table>
    </div>
  );
};



export default PaquetesList;