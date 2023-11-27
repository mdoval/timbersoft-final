import { getAllProveedoresToken } from "@/utils/getAllProveedoresToken";
import ProveedoresList from "@/app/components/DataTable/ProveedoresList";
import { AddProveedor } from "@/app/components/Buttons/AddProveedor";

export default async function ProveedoresPage() {
  const proveedores = await getAllProveedoresToken();

  return (
    <div className="w-full h-full flex flex-col bg-white shadow-lg" >
      <h1 className="p-3">Proveedores</h1>
      <div className="p-2">
        <AddProveedor />
      </div>
      <div>
        <ProveedoresList proveedores={proveedores} />
      </div>
    </div>
  );
}