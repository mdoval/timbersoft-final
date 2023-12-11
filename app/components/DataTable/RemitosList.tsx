import { IRemito } from "@/types/tipos";
import ItemRemito from "@/app/components/DataTable/ItemRemito";

interface RemitosListProps {
  remitos: IRemito[];
}

const RemitosList: React.FC<RemitosListProps> = ({ remitos }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Fecha</th>
            <th>Nro. de Remito</th>
            <th>Proveedor</th>
            <th>Transportista</th>
            <th>Destino</th>
            <th>Factura</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { remitos.map((remito) => <ItemRemito key={remito.id} remito={remito} /> )}
        </tbody>
      </table>
    </div>
  );
};

export default RemitosList;