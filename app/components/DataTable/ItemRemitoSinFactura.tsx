import { IRemito } from "@/types/tipos";
import React, { FC } from "react";

interface ItemRemitoSinFacturaProps {
  remito: [];
}

const ItemRemitoSinFactura: FC<ItemRemitoSinFacturaProps> = ({ remito }) => {
  console.log(remito)
  return (
    <div>
      <div className="w-full flex space-x-5">
        <div>
          <input type="checkbox" className="checkbox" />
        </div>
        <div>
          <b>Remito Numero:</b> 1123234234
        </div>
        <div>
          <b>Fecha Ingreso:</b> 20/12/2023
        </div>
        <div>
          <b>Proveedor:</b>Juan Perez
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-right">
          <div className="w-1/2 flex flex-row space-x-5 m-1  items-center ">
            <div>CAT 1</div>
            <div>Premium</div>
            <div>22,50</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemRemitoSinFactura;
