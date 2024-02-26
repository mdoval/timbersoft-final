import { ITipo } from "@/types/tipos";
import ItemTipo from "@/app/components/DataTable/ItemTipo";

interface TiposListProps {
  tipos: ITipo[];
}

const TiposList: React.FC<TiposListProps> = ({ tipos }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Catalogo</th>
            <th>Descripcion</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { tipos.map((tipo) => <ItemTipo key={tipo.id} tipo={tipo} /> )}
        </tbody>
      </table>
    </div>
  );
};

export default TiposList;