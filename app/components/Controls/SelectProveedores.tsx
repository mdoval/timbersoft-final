"use client";

import { IProveedor } from "@/types/tipos";
import { useEffect, useState } from "react";

interface SelectProveedoresProps {
  proveedorId: number;
  onSelectionChange: (event: React.ChangeEventHandler<HTMLSelectElement>) => void
}

const SelectProveedores: React.FC<SelectProveedoresProps> = ({
  proveedorId, onSelectionChange
}) => {
  const [proveedores, setProveedores] = useState<IProveedor[]>([]);

  useEffect(() => {
    const url = `${process.env.siteUrl}/api/proveedores`;

    fetch(url, {
      cache: "no-store",
    })
      .then((response) => response.json())
      .then((data) => setProveedores(data))
      .catch((error) => console.error("Error al obtener proveedores:", error));
  }, []); // El segundo argumento vacío asegura que la llamada a la API solo se realice una vez al montar el componente

  /*const handleChange = () => {
    console.log(proveedor);
  };
*/
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">Seleccione un Proveedor</span>
      </div>
      <select className="select select-bordered" value={proveedorId} onChange={onSelectionChange}>
        {proveedores.map((proveedor) => {
          return (
            <option key={proveedor.id} value={proveedor.id}>
              {proveedor.nombre}
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
export default SelectProveedores