import FacturaForm from "@/app/components/Forms/FacturaForm";
import { getRemitosSinFactura } from "@/utils/getRemitosSinFactura";
import React from "react";

const FacturaPage = async () => {
  const remitos = await getRemitosSinFactura()

  return (
    <div className="w-full h-full flex flex-col bg-white shadow-lg p-5 spa">
      <h1>Registrar Factura</h1>
      <br />
      <div className="h-full w-full">
        <FacturaForm remitos={remitos} />
      </div>
    </div>
  );
};

export default FacturaPage;
