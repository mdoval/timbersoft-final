import { getCategorias } from "@/utils/getCategorias";
import CategoriasList from "@/app/components/DataTable/CategoriasList";
import { AddCategoria } from "@/app/components/Buttons/AddCategoria";

export default async function ProveedoresPage() {
  const categorias = await getCategorias();

  return (
    <div className="w-full h-full flex flex-col bg-white shadow-lg" >
      <h1 className="p-3">Categorias</h1>
      <div className="p-2">
        <AddCategoria />
      </div>
      <div>
        <CategoriasList categorias={categorias} />
      </div>
    </div>
  );
}