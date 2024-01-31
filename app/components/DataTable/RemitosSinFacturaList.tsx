"use client";

import { getRemitosSinFactura } from "@/utils/getRemitosSinFactura";
import { FC, useEffect, useState } from "react";
import ItemRemitoSinFactura from "@/app/components/DataTable";
import { remito } from "@prisma/client";

interface Props {
  remitos: Array<remito>;
}

const RemitosSinFacturaList: FC<Props> = ({ remitos }) => {
  const [datos, setDatos] = useState(remitos);
  const [checkboxes, setCheckboxes] = useState()

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {remitos.map((remito: remito) => {
              return <ItemRemitoSinFactura key={remito.id} remito={remito} checkboxes={checkboxes} />;
            })}
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={() => console.log(checkboxes)}>Prueba</button>
      </div>
    </div>
  );
};

export default RemitosSinFacturaList;
