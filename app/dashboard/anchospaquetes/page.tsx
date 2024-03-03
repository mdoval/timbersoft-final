import { getAnchosPaquete } from "@/utils/getAnchosPaquete";
import { AddAnchoPaquete } from "@/app/components/Buttons/AddAnchoPaquete";
import AnchosPaqueteList from "@/app/components/DataTable/AnchosPaquetesList";

export default async function TransportistasPage() {
  const anchos = await getAnchosPaquete();

  return (
    <div className="w-full h-full flex flex-col bg-white shadow-lg" >
      <h1 className="p-3">Anchos</h1>
      <div className="p-2">
        <AddAnchoPaquete />
      </div>
      <div>
        <AnchosPaqueteList anchos={anchos} />
      </div>
    </div>
  );
}