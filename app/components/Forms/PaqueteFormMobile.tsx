"use client";

import { ICalidad, IPaquete, ITipo } from "@/types/tipos";
import addPaquete from "@/utils/paquetesFunctions";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FC, useRef, useState } from "react";

interface PaqueteFormProps {
  calidades: ICalidad[];
  tipos: ITipo[];
}

const PaqueteFormMobile: FC<PaqueteFormProps> = ({ calidades, tipos }) => {
  const router = useRouter();
  const [paquete, setPaquete] = useState<IPaquete>({
    espesor: 0,
    largo: 0,
    ancho: 0,
    cantidad: 0,
    calidad: undefined,
    tipo: undefined,
  });
  const [calidad, setCalidad] = useState<ICalidad>(calidades[0]);
  const [tipo, setTipo] = useState<ITipo>(tipos[0]);
  const inputEspesorRef = useRef<HTMLInputElement>(null);
  const inputAnchoRef = useRef<HTMLInputElement>(null);
  const inputLargoRef = useRef<HTMLInputElement>(null);
  const inputCantidadRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleClickEspesor = () => {
    if (inputEspesorRef.current) {
      inputEspesorRef.current.select();
    }
  };

  const handleClickAncho = () => {
    if (inputAnchoRef.current) {
      inputAnchoRef.current.select();
    }
  };

  const handleClickLargo = () => {
    if (inputLargoRef.current) {
      inputLargoRef.current.select();
    }
  };

  const handleClickCantidad = () => {
    if (inputCantidadRef.current) {
      inputCantidadRef.current.select();
    }
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
    setLoading(true);
    const newPaquete: IPaquete = {
      espesor: paquete.espesor,
      ancho: paquete.ancho,
      largo: paquete.largo,
      cantidad: paquete.cantidad,
      calidadId: calidad.id,
      tipoId: tipo.id,
      estadoId: 1,
    };
    try {
      const remitoGuardado = await addPaquete(newPaquete);
      console.log(remitoGuardado)
      setPaquete({
        espesor: 0,
        largo: 0,
        ancho: 0,
        cantidad: 0,
        calidad: undefined,
        tipo: undefined,
      });
      router.refresh();
      router.push("/mobile/cargapaquetes/cargar");
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  const handleCalidadChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const tipoEncontrado = calidades.find(
      (calidad) => calidad.id === Number(e.target.value)
    ) as ICalidad;
    setCalidad(tipoEncontrado);
  };

  const handleTipoChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const tipoEncontrado = tipos.find(
      (tipo) => tipo.id === Number(e.target.value)
    ) as ITipo;
    setTipo(tipoEncontrado);
  };

  return (
    <div className="w-full flex flex-col items-center space-y-4">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-1xl font-bold">Espesor</span>
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
          <span className="label-text text-1xl font-bold">Ancho</span>
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
          <span className="label-text text-1xl font-bold">Largo</span>
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
          <span className="label-text text-1xl font-bold">Cantidad</span>
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

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-1xl font-bold">Calidad</span>
        </div>
        <select
          className="select select-bordered"
          defaultValue={calidad.id}
          onChange={handleCalidadChange}
        >
          {calidades.map((calidad) => {
            return (
              <option key={calidad.id} value={calidad.id}>
                {calidad.nombre}
              </option>
            );
          })}
        </select>
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-1xl font-bold">Tipos</span>
        </div>
        <select
          className="select select-bordered"
          defaultValue={tipo.id}
          onChange={handleTipoChange}
        >
          {tipos.map((tipo) => {
            return (
              <option key={tipo.id} value={tipo.id}>
                {tipo.catalogo}
              </option>
            );
          })}
        </select>
      </label>

      <div>
        <button
          className="btn btn-wide btn-primary m-2"
          onClick={handleCargarPaquete}
        >
          Guardar
        </button>
      </div>

      <dialog
        id="my_modal_1"
        className={`modal ${loading ?  "modal-open" : ""}`}
      >
        <div className="modal-box text-center">
          <span className="loading loading-spinner loading-lg mt-10 mb-10"></span>
        </div>
      </dialog>
    </div>
  );
};

export default PaqueteFormMobile;
