import Link from "next/link";
import React from "react";

export default function PaqueteCargado() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center space-y-8 h-1/3">
        <h1 className="font-bold">Paquete Cargado con Exito</h1>
        <Link href="/mobile/cargapaquetes/cargar" className="btn btn-primary w-10/12 h-1/3 text-2xl ">
          Nuevo Paquete
        </Link>
      </div>
    </div>
  );
}
