import { getTransportistas } from "@/utils/getTransportistas";
import TransportistasList from "@/app/components/DataTable/TransportistasList";
import { AddTransportista } from "@/app/components/Buttons/AddTransportista";

export default async function TransportistasPage() {
  const transportistas = await getTransportistas();

  return (
    <div className="w-full h-full flex flex-col bg-white shadow-lg" >
      <h1 className="p-3">Transportistas</h1>
      <div className="p-2">
        <AddTransportista />
      </div>
      <div>
        <TransportistasList transportistas={transportistas} />
      </div>
    </div>
  );
}