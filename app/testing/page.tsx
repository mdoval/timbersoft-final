'use client'

import { ICategoria, IRolloNew } from "@/types/tipos";
import { FC } from "react";
import SelectCategoriasNew from "../components/Controls/SelectCategoriasNew";

export default async function TestingPage() {
  const categorias: ICategoria[] = [
    { id: 0, nombre: "Categoria 1" },
    { id: 1, nombre: "Categoria 2" },
    { id: 2, nombre: "Categoria 3" },
    { id: 3, nombre: "Categoria 4" },
  ];

  let rollo: IRolloNew | undefined = undefined;
  
  try {
    const cat: ICategoria = categorias.find(
      (categoria) => categoria.id === 3
    ) as ICategoria;
    rollo = { id: 0, categoria: cat };
  } catch (error) {
    console.log("No se pudo realizar la accion");
  }
  
  const handleChangeCategoria = (cat: ICategoria) => {
    console.log(cat)
  }

  return (
    <div className="flex flex-col space-y-5">
      <h1>Testing</h1>
      <span>{JSON.stringify(rollo)}</span>
      <SelectCategoriasNew categorias={categorias} onChange={(categoriaSeleccionad) => handleChangeCategoria(categoriaSeleccionad)} />
    </div>
  );
}