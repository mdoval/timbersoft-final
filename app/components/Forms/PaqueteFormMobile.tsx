"use client";

import {
  IAnchoPaquete,
  ICalidad,
  IEspesorPaquete,
  ILargoPaquete,
  IPaquete,
  ITipo,
} from "@/types/tipos";
import addPaquete from "@/utils/paquetesFunctions";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FC, FormEvent, useRef, useState } from "react";

interface PaqueteFormProps {
  calidades: ICalidad[];
  tipos: ITipo[];
  largos: ILargoPaquete[];
  anchos: IAnchoPaquete[];
  espesores: IEspesorPaquete[];
}

const PaqueteFormMobile: FC<PaqueteFormProps> = ({
  calidades,
  tipos,
  largos,
  anchos,
  espesores,
}) => {
  const router = useRouter();
  const [paquete, setPaquete] = useState<IPaquete>({
    espesorPaquete: undefined,
    largoPaquete: undefined,
    anchoPaquete: undefined,
    cantidad: 0,
    calidad: undefined,
    tipo: undefined,
  });
  const [calidad, setCalidad] = useState<ICalidad>(calidades[0]);
  const [tipo, setTipo] = useState<ITipo>(tipos[0]);
  const [ancho, setAncho] = useState<IAnchoPaquete>(anchos[0]);
  const [largo, setLargo] = useState<ILargoPaquete>(largos[0]);
  const [espesor, setEspesor] = useState<IEspesorPaquete>(espesores[0]);
  const inputCantidadRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [guardado, setGuardado] = useState<boolean>(false);

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

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true); // Set loading to true when the request starts

    try {
      const newPaquete: IPaquete = {
        espesorPaqueteId: espesor.id,
        anchoPaqueteId: ancho.id,
        largoPaqueteId: largo.id,
        cantidad: paquete.cantidad,
        calidadId: calidad.id,
        tipoId: tipo.id,
        estadoId: 1,
      };
      const paqueteGuardado = await addPaquete(newPaquete);

      //console.log(paqueteGuardado)
    } catch (error) {
      console.error(error);
    } finally {
      /*
      setPaquete({
        espesorPaquete: undefined,
        largoPaquete: undefined,
        anchoPaquete: undefined,
        cantidad: 0,
        calidad: undefined,
        tipo: undefined,
      });
      setEspesor(espesores[0]);
      setLargo(largos[0]);
      setAncho(anchos[0]);
      setCalidad(calidades[0]);
      setTipo(tipos[0]);
      setLoading(false); // Set loading to false when the request completes
      */
      router.refresh()
      router.push("/mobile/cargapaquetes/paquetecargado")
    }
  }

  const handleCalidadChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const tipoEncontrado = calidades.find(
      (calidad) => calidad.id === Number(e.target.value)
    ) as ICalidad;
    setCalidad(tipoEncontrado);
  };

  const handleLargoChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const tipoEncontrado = largos.find(
      (largo) => largo.id === Number(e.target.value)
    ) as ILargoPaquete;
    setLargo(tipoEncontrado);
  };

  const handleAnchoChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const tipoEncontrado = anchos.find(
      (ancho) => ancho.id === Number(e.target.value)
    ) as IAnchoPaquete;
    setAncho(tipoEncontrado);
  };

  const handleEspesorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const tipoEncontrado = espesores.find(
      (espesor) => espesor.id === Number(e.target.value)
    ) as IEspesorPaquete;
    setEspesor(tipoEncontrado);
  };

  const handleTipoChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const tipoEncontrado = tipos.find(
      (tipo) => tipo.id === Number(e.target.value)
    ) as ITipo;
    setTipo(tipoEncontrado);
  };

  const handleCerrarGuardado = () => {
    setGuardado(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="w-full flex flex-col items-center space-y-4">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-1xl font-bold">Ancho</span>
          </div>
          <select
            className="select select-bordered"
            //defaultValue={ancho?.id}
            value={ancho?.id}
            onChange={handleAnchoChange}
          >
            {anchos.map((ancho) => {
              return (
                <option key={ancho.id} value={ancho.id}>
                  {ancho.tamanio}
                </option>
              );
            })}
          </select>
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-1xl font-bold">Largo</span>
          </div>
          <select
            className="select select-bordered"
            //defaultValue={largo?.id}
            onChange={handleLargoChange}
            value={largo?.id}
          >
            {largos.map((largo) => {
              return (
                <option key={largo.id} value={largo.id}>
                  {largo.tamanio}
                </option>
              );
            })}
          </select>
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-1xl font-bold">Espesor</span>
          </div>
          <select
            className="select select-bordered"
            //defaultValue={espesor?.id}
            value={espesor?.id}
            onChange={handleEspesorChange}
          >
            {espesores.map((espesor) => {
              return (
                <option key={espesor.id} value={espesor.id}>
                  {espesor.tamanio}
                </option>
              );
            })}
          </select>
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
            //defaultValue={calidad?.id}
            value={calidad?.id}
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
            //defaultValue={tipo?.id}
            value={tipo?.id}
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
            type="submit"
            className="btn btn-wide btn-primary m-2"
            //onClick={onSubmit}
          >
            Guardar
          </button>
        </div>

        <dialog
          id="my_modal_1"
          className={`modal ${loading ? "modal-open" : ""}`}
        >
          <div className="modal-box text-center">
            <span className="loading loading-spinner loading-lg mt-10 mb-10"></span>
          </div>
        </dialog>

        <dialog
          id="my_modal_1"
          className={`modal ${guardado ? "modal-open" : ""}`}
        >
          <div className="modal-box text-center">
            <div>
                {/* if there is a button in form, it will close the modal */}
                <button className="btn" onClick={handleCerrarGuardado}>Paquete Guardado</button>
            </div>
          </div>
        </dialog>
      </div>
    </form>
  );
};

export default PaqueteFormMobile;
