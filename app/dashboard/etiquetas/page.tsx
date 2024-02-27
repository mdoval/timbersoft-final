import PaquetesList from "@/app/components/DataTable/PaquetesList";
import { getPaquetes } from "@/utils/getPaquetes";
import React from "react";

const EtiquetasPage = async () => {
  const paquetes = await getPaquetes();

  return (
    <div className="w-full h-full flex flex-col bg-white shadow-lg p-5 spa">
      <h1>Remitos</h1>
      <br />
      <div className="h-full w-full">
        <PaquetesList paquetes={paquetes} />
      </div>
    </div>
  );
};

export default EtiquetasPage;
