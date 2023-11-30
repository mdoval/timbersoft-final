import { getDestinos } from "@/utils/getDestinos";
import DestinosList from "@/app/components/DataTable/DestinosList";
import { AddDestino } from "@/app/components/Buttons/AddDestino";

export default async function DestinosPage() {
  const destinos = await getDestinos();

  return (
    <div className="w-full h-full flex flex-col bg-white shadow-lg" >
      <h1 className="p-3">Destinos</h1>
      <div className="p-2">
        <AddDestino />
      </div>
      <div>
        <DestinosList destinos={destinos} />
      </div>
    </div>
  );
}