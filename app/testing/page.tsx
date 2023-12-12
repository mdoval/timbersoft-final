"use client";

import { ICategoria } from "@/types/tipos";
import { useState, FC } from "react";

export default function TestingPage() {
  const [valorForm, setValorForm] = useState<number>(0);

  const handleClick = () => {
    alert(valorForm);
  };

  return (
    <div className="flex flex-col space-y-5">
      <h1>Testing</h1>
      <button className="btn btn-primary w-1/4" onClick={handleClick}>
        Click
      </button>
      <MiSelect value={valorForm} />
    </div>
  );
}

interface MiSelectProps {
  value: number;
}

const MiSelect: FC<MiSelectProps> = ({ value }) => {
  const [valor, setValor] = useState<number>(value);

  const categorias: ICategoria[] = [
    { id: 0, nombre: "Categoria 1" },
    { id: 1, nombre: "Categoria 2" },
    { id: 2, nombre: "Categoria 3" },
  ];

  return (
    <select
      className="select select-bordered w-full max-w-xs"
      value={valor}
      defaultValue={valor}
      onChange={(e) => setValor(Number(e.target.value))}
    >
      {categorias.map((categoria, index) => {
        return (
          <option key={index} value={categoria.id}>
            {categoria.nombre}
          </option>
        );
      })}
    </select>
  );
};
