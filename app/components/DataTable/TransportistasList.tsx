import { ITransportista } from "@/types/tipos";
import ItemTransportista from "@/app/components/DataTable/ItemTransportista";

interface CalidadesListProps {
  transportistas: ITransportista[];
}

const CategoriasList: React.FC<CalidadesListProps> = ({ transportistas }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Calidad</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { transportistas.map((transportista) => <ItemTransportista key={transportista.id} transportista={transportista} /> )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriasList;