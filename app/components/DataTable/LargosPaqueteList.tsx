import { ILargoPaquete } from "@/types/tipos";
import ItemLargoPaquete from "@/app/components/DataTable/ItemLargoPaquete";

interface LargosListProps {
  largos: ILargoPaquete[];
}

const LargosList: React.FC<LargosListProps> = ({ largos }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Tamaño</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { largos.map((largo) => <ItemLargoPaquete key={largo.id} largo={largo} /> )}
        </tbody>
      </table>
    </div>
  );
};

export default LargosList;