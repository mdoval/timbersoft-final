import RemitoForm from "@/app/components/Forms/RemitoForm";
import {
  ICalidad,
  ICategoria,
  IDestino,
  ILargo,
  IProveedor,
  ITransportista,
} from "@/types/tipos";
import { getCalidades } from "@/utils/getCalidades";
import { getCategorias } from "@/utils/getCategorias";
import { getDestinos } from "@/utils/getDestinos";
import { getLargos } from "@/utils/getLargos";
import { getProveedores } from "@/utils/getProveedores";
import { getTransportistas } from "@/utils/getTransportistas";

export default async function CargarRemito() {
  const proveedores: IProveedor[] = await getProveedores();
  const destinos: IDestino[] = await getDestinos();
  const transportistas: ITransportista[] = await getTransportistas();
  const categorias: ICategoria[] = await getCategorias();
  const largos: ILargo[] = await getLargos();
  const calidades: ICalidad[] = await getCalidades();

  return (
    <div className="bg-white p-2 shadow-xl h-full p-5 flex flex-col">
      <h3 className="font-bold text-lg">Ingreso de Materia Prima</h3>
      <br />
      <RemitoForm
        proveedores={proveedores}
        destinos={destinos}
        transportistas={transportistas}
        categorias={categorias}        
        largos={largos}
        calidades={calidades}
      />
    </div>
  );
}
