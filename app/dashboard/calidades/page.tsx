import { getCalidades } from "@/utils/getCalidades";
import CalidadesList from "@/app/components/DataTable/CalidadesList";
import { AddCalidad } from "@/app/components/Buttons/AddCalidad";

export default async function ProveedoresPage() {
  const calidades = await getCalidades();

  return (
    <div className="w-full h-full flex flex-col bg-white shadow-lg" >
      <h1 className="p-3">Calidades</h1>
      <div className="p-2">
        <AddCalidad />
      </div>
      <div>
        <CalidadesList calidades={calidades} />
      </div>
    </div>
  );
}