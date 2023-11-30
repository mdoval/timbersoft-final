import { ICategoria } from "@/types/tipos";
import ItemCategoria from "@/app/components/DataTable/ItemCategoria";

interface CategoriasListProps {
  categorias: ICategoria[];
}

const CategoriasList: React.FC<CategoriasListProps> = ({ categorias }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { categorias.map((categoria) => <ItemCategoria key={categoria.id} categoria={categoria} /> )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriasList;
