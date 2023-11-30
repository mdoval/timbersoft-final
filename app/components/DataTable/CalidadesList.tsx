import { ICalidad } from "@/types/tipos";
import ItemCalidad from "@/app/components/DataTable/ItemCalidad";

interface CalidadesListProps {
  calidades: ICalidad[];
}

const CategoriasList: React.FC<CalidadesListProps> = ({ calidades }) => {
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
          { calidades.map((calidad) => <ItemCalidad key={calidad.id} calidad={calidad} /> )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriasList;