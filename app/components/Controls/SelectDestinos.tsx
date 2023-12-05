"use client";

import { IDestino } from "@/types/tipos";
import { ChangeEvent, useEffect, useState } from "react";

interface SelectDestinosProps {
  destinoId: number;
  onSelectionChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const SelectDestinos: React.FC<SelectDestinosProps> = ({
  destinoId, onSelectionChange
}) => {
  const [destinos, setDestinos] = useState<IDestino[]>([]);

  useEffect(() => {
    const url = `${process.env.siteUrl}/api/destinos`;

    fetch(url, {
      cache: "no-store",
    })
      .then((response) => response.json())
      .then((data) => setDestinos(data))
      .catch((error) => console.error("Error al obtener destinos:", error));
  }, []); // El segundo argumento vacío asegura que la llamada a la API solo se realice una vez al montar el componente

  return (
    <label className="form-control w-full max-w-md">
      <div className="label">
        <span className="label-text">Seleccione un Destino</span>
      </div>
      <select className="select select-bordered" value={destinoId} onChange={onSelectionChange} >
        {destinos.map((destino) => {
          return (
            <option key={destino.id} value={destino.id}>
              {destino.nombre}
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

export default SelectDestinos