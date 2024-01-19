"use client";

import React, { ChangeEvent, FC, useState } from "react";
import ViewRemito from "../Buttons/ViewRemito";
import AddFactura from "../Buttons/AddFactura";

interface FacturaFormProps {
  remitos: [];
}

const FacturaForm: FC<FacturaFormProps> = ({ remitos }) => {
  const [factura, setFactura] = useState<string>("");
  const [visibleBtnFactura, setVisiableBtnFactura] = useState<boolean>(false)
  const [seleccionados, setSeleccionados] = useState<boolean[]>(new Array(remitos.length).fill(false));

  const handleChangeFactura = (event: ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value
    setFactura(valor);
    setVisiableBtnFactura(valor!=='')
  };

  const manejarCambioCheckbox = (index: number) => {
    const nuevosSeleccionados = [...seleccionados];
    nuevosSeleccionados[index] = !nuevosSeleccionados[index];
    setSeleccionados(nuevosSeleccionados);
  };

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
        <AddFactura disable={visibleBtnFactura} />
      </div>
      <div className="w-full p-4 h-full">
        {/*<RemitosSinFacturaList remitos={remitos} />*/}

        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Nro. Remito</th>
              <th>Proveedor</th>
              <th>Destino</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {remitos.map((remito: any, index) => {
              return (
                <tr key={remito.id}>
                  <th>
                    <input
                      type="checkbox"
                      id={`checkbox-${remito.id}`}
                      checked={seleccionados[index]}
                      onChange={() => manejarCambioCheckbox(index)}
                    />
                  </th>
                  <td>{remito.remito}</td>
                  <td>{remito.proveedor.nombre}</td>
                  <td>{remito.destino.nombre}</td>
                  <td><ViewRemito remitoId={remito.id} /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacturaForm;
