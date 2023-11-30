import { IDestino } from "@/types/tipos";
import ItemDestino from "@/app/components/DataTable/ItemDestino";

interface DestinosListProps {
  destinos: IDestino[];
}

const DestinosList: React.FC<DestinosListProps> = ({ destinos }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Destino</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { destinos.map((destino) => <ItemDestino key={destino.id} destino={destino} /> )}
        </tbody>
      </table>
    </div>
  );
};

export default DestinosList;
