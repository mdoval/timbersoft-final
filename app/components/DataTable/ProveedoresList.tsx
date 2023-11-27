import { IProveedor } from "@/types/tipos";
import ItemProveedor from "@/app/components/DataTable/ItemProveedor";

interface ProveedoresListProps {
  proveedores: IProveedor[];
}

const ProveedoresList: React.FC<ProveedoresListProps> = ({ proveedores }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Proveedor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { proveedores.map((proveedor) => <ItemProveedor key={proveedor.id} proveedor={proveedor} /> )}
        </tbody>
      </table>
    </div>
  );
};

export default ProveedoresList;
