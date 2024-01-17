"use client";

import React, { ChangeEvent, FC, useState } from "react";
import RemitosSinFacturaList from "../DataTable/RemitosSinFacturaList";

interface FacturaFormProps {
  remitos: [];
}

const FacturaForm: FC<FacturaFormProps> = ({ remitos }) => {
  const [factura, setFactura] = useState<string>("");
  //console.log(remitos);

  const handleChangeFactura = (event: ChangeEvent<HTMLInputElement>) => {
    setFactura(event.target.value);
  };

  function handleBotonDisabled(): boolean | undefined {
    if (!factura) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex space-x-4 items-center w-full">
        <span>Ingrese el numero de Factura</span>
        <label className="form-control w-full max-w-xs">
          <input
            value={factura}
            onChange={handleChangeFactura}
            type="text"
            placeholder="Nro. de Factura"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <button
          className="btn btn-primary w-1/6"
          disabled={handleBotonDisabled() ? true : false}
        >
          Agregar Remitos
        </button>
        </div>
        <div className="w-full p-4 h-full">
            <RemitosSinFacturaList remitos={remitos} />
        </div>        
    </div>
  );
};

export default FacturaForm;
