import { ILargo } from "@/types/tipos";
import ItemLargo from "@/app/components/DataTable/ItemLargo";

interface LargosListProps {
  largos: ILargo[];
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
          { largos.map((largo) => <ItemLargo key={largo.id} largo={largo} /> )}
        </tbody>
      </table>
    </div>
  );
};

export default LargosList;