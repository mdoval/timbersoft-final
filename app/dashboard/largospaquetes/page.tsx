import { getLargosPaquete } from "@/utils/getLargosPaquete";
import LargosPaqueteList from "@/app/components/DataTable/LargosPaqueteList";
import { AddLargoPaquete } from "@/app/components/Buttons/AddLargoPaquete";

export default async function TransportistasPage() {
  const largos = await getLargosPaquete();

  return (
    <div className="w-full h-full flex flex-col bg-white shadow-lg" >
      <h1 className="p-3">Largos</h1>
      <div className="p-2">
        <AddLargoPaquete />
      </div>
      <div>
        <LargosPaqueteList largos={largos} />
      </div>
    </div>
  );
}