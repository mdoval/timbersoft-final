"use client";

import { ICategoria } from "@/types/tipos";
import { ChangeEvent, useEffect, useState } from "react";

interface SelectCategoriasProps {
  value: number;
  onChange: (newValue: number) => void;
}

const SelectCategorias: React.FC<SelectCategoriasProps> = ({ value, onChange}) => {
  const [categorias, setCategorias] = useState<ICategoria[]>([]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value
    // Aquí podrías realizar alguna validación adicional si es necesario
    onChange(parseInt(newValue));
  };

  useEffect(() => {
    const url = `${process.env.siteUrl}/api/categorias`;

    fetch(url, {
      cache: "no-store",
    })
      .then((response) => response.json())
      .then((data) => setCategorias(data))
      .catch((error) => console.error("Error al obtener destinos:", error));
  }, []); // El segundo argumento vacío asegura que la llamada a la API solo se realice una vez al montar el componente

  return (
    <label className="form-control w-full max-w-sm">
      <div className="label">
        <span className="label-text">Seleccione Categoria</span>
      </div>
      <select className="select select-bordered" value={value} onChange={handleChange} >
        {categorias.map((categoria) => {
          return (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nombre}
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

export default SelectCategorias