import EtiquetaImprimible from "@/app/components/Imprimibles/EtiquetaImprimible";
import PrintService from "@/app/components/Imprimibles/PrintService";
import { getPaquetes } from "@/utils/getPaquetes";
import React from "react";

const EtiquetasPage = async () => {
  const paquetes = await getPaquetes();

  return (
    <div className="w-full h-full flex flex-col bg-white shadow-lg p-5 spa">
      <h1>Imprimir Etiquetas</h1>
      <br />
      <div className="h-full w-full">
        <PrintService>
          <EtiquetaImprimible />
        </PrintService>
      </div>
    </div>
  );
};

export default EtiquetasPage;
