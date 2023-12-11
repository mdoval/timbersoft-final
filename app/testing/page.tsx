'use client'

import { ICategoria, IRolloNew } from "@/types/tipos";
import { FC } from "react";

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
      <SelectTesting categorias={categorias} onChange={(categoriaSeleccionad) => handleChangeCategoria(categoriaSeleccionad)} />
    </div>
  );
}

interface SelectProps {
  categorias: ICategoria[] 
  onChange: (categoria: ICategoria) => void
}

const SelectTesting: FC<SelectProps> = ({categorias, onChange}) => {
  const handleChange = (id: number) => {
    try {
      const cat: ICategoria | undefined = categorias.find((categoria) => categoria.id === id)
      if(cat != undefined) { 
        onChange(cat) 
      }
      //console.log(JSON.stringify(cat))
   } catch(error) {
      console.log("Error al seleccionar categoria")
   }
  }

  return (
    <select className="select select-bordered w-full max-w-xs" onChange={(e) => handleChange(Number(e.target.value))} >
      {categorias.map((categoria) => {
        return <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
      })}  
    </select>
  );
};
