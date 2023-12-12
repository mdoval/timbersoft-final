import RemitosList from "@/app/components/DataTable/RemitosList";
import { getRemitos } from "@/utils/getRemitos";
import Link from "next/link";

export default async function IngresoMateriaPrima() {
  const remitos = await getRemitos();
    
  return (
    <div className="w-full h-full flex flex-col bg-white shadow-lg p-5 spa">
      <h1>Ingreso de materia prima</h1>
      <div className="p-2">
        <Link className="btn btn-primary w-1/4" href="/dashboard/ingresomp/cargarremito">
          Cargar Remito
        </Link>
      </div>
      <div>
        <RemitosList remitos={remitos} />
      </div>
    </div>
  );
}
