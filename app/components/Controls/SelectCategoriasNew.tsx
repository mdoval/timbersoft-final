'use client'

import { ICategoria } from "@/types/tipos";
import { FC } from "react";

interface SelectProps {
    categorias: ICategoria[] 
    onChange: (categoria: ICategoria) => void
  }
  
  const SelectCategoriasNew: FC<SelectProps> = ({categorias, onChange}) => {
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
  
  export default SelectCategoriasNew