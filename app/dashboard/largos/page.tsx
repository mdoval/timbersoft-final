import { getLargos } from "@/utils/getLargos";
import LargosList from "@/app/components/DataTable/LargosList";
import { AddLargo } from "@/app/components/Buttons/AddLargo";

export default async function LargosPage() {
  const largos = await getLargos();

  return (
    <div className="w-full h-full flex flex-col bg-white shadow-lg" >
      <h1 className="p-3">Largos</h1>
      <div className="p-2">
        <AddLargo />
      </div>
      <div>
        <LargosList largos={largos} />
      </div>
    </div>
  );
}