"use client";

import { IPaquete } from "@/types/tipos";
import React, { ChangeEvent, MouseEvent, useRef, useState } from "react";

const PaqueteFormMobile = () => {
  const [paquete, setPaquete] = useState<IPaquete>({
    espesor: 0,
    largo: 0,
    ancho: 0,
    cantidad: 0,
  });
  const inputEspesorRef = useRef<HTMLInputElement>(null);
  const inputAnchoRef = useRef<HTMLInputElement>(null);
  const inputLargoRef = useRef<HTMLInputElement>(null);
  const inputCantidadRef = useRef<HTMLInputElement>(null);

  const handleClickEspesor = () => {
    if (inputEspesorRef.current) { inputEspesorRef.current.select();}    
  };

  const handleClickAncho = () => {
    if (inputAnchoRef.current) { inputAnchoRef.current.select();}    
  };

  const handleClickLargo = () => {
    if (inputLargoRef.current) { inputLargoRef.current.select();}    
  };

  const handleClickCantidad = () => {
    if (inputCantidadRef.current) { inputCantidadRef.current.select();}    
  };


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const propertyName = e.target.name;
    const value = e.target.value;

    if (!isNaN(parseFloat(value)) && isFinite(parseInt(value, 10))) {
      // Actualiza el paquete con la nueva propiedad y valor
      setPaquete((prevPaquete) => ({
        ...prevPaquete,
        [propertyName]: parseInt(value, 10), // Parsea el valor como entero (base 10)
      }));
    } else {
      console.log("El valor no es un número válido");
    }
  };

  const handleCargarPaquete = async () => {
    
  }

  return (
    <div className="w-full flex flex-col items-center space-y-4">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-2xl font-bold">Espesor</span>
        </div>
        <input
          inputMode="tel"
          type="number"
          name="espesor"
          value={paquete?.espesor}
          onChange={handleChange}
          ref={inputEspesorRef}
          onClick={handleClickEspesor}
          placeholder="Ingrese aqui"
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-2xl font-bold">Ancho</span>
        </div>
        <input
          inputMode="tel"
          type="number"
          name="ancho"
          value={paquete?.ancho}
          onChange={handleChange}
          ref={inputAnchoRef}
          onClick={handleClickAncho}
          placeholder="Ingrese aqui"
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-2xl font-bold">Largo</span>
        </div>
        <input
          inputMode="tel"
          type="number"
          name="largo"
          value={paquete?.largo}
          onChange={handleChange}
          ref={inputLargoRef}
          onClick={handleClickLargo}
          placeholder="Ingrese aqui"
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-2xl font-bold">Cantidad</span>
        </div>
        <input
          inputMode="tel"
          type="number"
          name="cantidad"
          value={paquete?.cantidad}
          onChange={handleChange}
          ref={inputCantidadRef}
          onClick={handleClickCantidad}
          placeholder="Ingrese aqui"
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <div>
        <button className="btn btn-wide btn-primary m-4">Guardar</button>
      </div>
    </div>
  );
};

export default PaqueteFormMobile;
