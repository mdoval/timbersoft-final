import { IPaquete } from "@/types/tipos";
import ItemPaquete from "@/app/components/DataTable/ItemPaquete";

interface PaquetesListProps {
  paquetes: IPaquete[];
}

const PaquetesList: React.FC<PaquetesListProps> = ({ paquetes }) => {
  return (
    <div className="overflow-x-auto">
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