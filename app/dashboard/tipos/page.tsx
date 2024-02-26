import { getTipos } from "@/utils/getTipos";
import TiposList from "@/app/components/DataTable/TiposList";
import { AddTipo } from "@/app/components/Buttons/AddTipo";

export default async function TiposPage() {
  const tipos = await getTipos();

  return (
    <div className="w-full h-full flex flex-col bg-white shadow-lg" >
      <h1 className="p-3">Tipos</h1>
      <div className="p-2">
        <AddTipo />
      </div>
      <div>
        <TiposList tipos={tipos} />
      </div>
    </div>
  );
}