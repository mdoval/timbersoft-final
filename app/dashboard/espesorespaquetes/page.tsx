import { getEspesoresPaquete } from "@/utils/getEspesoresPaquete";
import EspesoresPaquetesList from "@/app/components/DataTable/EspesoresPaquetesList";
import { AddEspesorPaquete } from "@/app/components/Buttons/AddEspesorPaquete";

export default async function TransportistasPage() {
  const espesores = await getEspesoresPaquete();

  return (
    <div className="w-full h-full flex flex-col bg-white shadow-lg" >
      <h1 className="p-3">Largos</h1>
      <div className="p-2">
        <AddEspesorPaquete />
      </div>
      <div>
        <EspesoresPaquetesList espesores={espesores} />
      </div>
    </div>
  );
}