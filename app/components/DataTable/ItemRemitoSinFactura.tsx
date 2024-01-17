'use client'

import React, { FC, useState } from "react";
import ViewRemito from "../Buttons/ViewRemito";
import { remito } from "@prisma/client";

interface ItemRemitoSinFacturaProps {
  remito: remito | any;
  checkboxes: any
}

const ItemRemitoSinFactura: FC<ItemRemitoSinFacturaProps> = ({ remito, checkboxes }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    console.log(`Chequeado ? ${isChecked}`)
  };

  return (
    <tr>
      <th>
        <input type="checkbox" id={checkboxes} className="checkbox" checked={isChecked} onChange={handleOnChange} />
      </th>
      <td>{remito.remito}</td>
      <td>{remito.fechaIngreso.toString()}</td>
      <td>{remito.proveedor.nombre}</td>
      <td>
        <ViewRemito remitoId={remito.id} />
      </td>
    </tr>
  );
};

export default ItemRemitoSinFactura;
