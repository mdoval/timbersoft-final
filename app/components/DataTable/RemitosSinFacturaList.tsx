"use client";

import { getRemitosSinFactura } from "@/utils/getRemitosSinFactura";
import { FC, useEffect, useState } from "react";
import ItemRemitoSinFactura from "./ItemRemitoSinFactura";

interface Props {
    remitos: []
}

const RemitosSinFacturaList: FC<Props> = ({remitos}) => {
  const [datos, setDatos ] = useState(remitos);

  return <div className="w-full">
    {remitos.map((remito) => {
        return <ItemRemitoSinFactura remito={remito} />
    })}
  </div>
};

export default RemitosSinFacturaList;
