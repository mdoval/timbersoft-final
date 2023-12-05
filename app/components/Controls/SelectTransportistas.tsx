"use client";

import { ITransportista } from "@/types/tipos";
import { ChangeEvent, useEffect, useState } from "react";

interface SelectTransportistasProps {
  transportistaId: number;
  onSelectionChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const SelectTransportistas: React.FC<SelectTransportistasProps> = ({
  transportistaId, onSelectionChange
}) => {
  const [transportistas, setTransportistas] = useState<ITransportista[]>([]);

  useEffect(() => {
    const url = `${process.env.siteUrl}/api/transportistas`;

    fetch(url, {
      cache: "no-store",
    })
      .then((response) => response.json())
      .then((data) => setTransportistas(data))
      .catch((error) => console.error("Error al obtener transportistas:", error));
  }, []); // El segundo argumento vacío asegura que la llamada a la API solo se realice una vez al montar el componente

  return (
    <label className="form-control w-full max-w-md">
      <div className="label">
        <span className="label-text">Seleccione un Transportista</span>
      </div>
      <select className="select select-bordered" value={transportistaId} onChange={onSelectionChange} >
        {transportistas.map((transportista) => {
          return (
            <option key={transportista.id} value={transportista.id}>
              {transportista.nombre}
            </option>
          );
        })}
      </select>
      <div className="label hidden">
        <span className="label-text-alt">Alt label</span>
      </div>
    </label>
  );
};

export default SelectTransportistas