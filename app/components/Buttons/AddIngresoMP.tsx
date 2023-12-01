"use client";

import ModalLg from "@/app/components/Modal/ModalLg";
import { IRemito } from "@/types/tipos";
import { FormEventHandler, useState } from "react";


export function AddIngresoMP() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newRemito, setNewRemito] = useState<IRemito>({id:1,fechaIngreso: obtenerFechaFormateada() })

  function obtenerFechaFormateada(): string {
    let fechaActual = new Date();
    let año = fechaActual.getFullYear();
    let mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Agregar cero inicial si es necesario
    let dia = fechaActual.getDate().toString().padStart(2, '0'); // Agregar cero inicial si es necesario
    let fechaFormateada = `${año}-${mes}-${dia}`;
    return fechaFormateada;
}
  const handleSubmitNewRemito: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    /*await addCalidad(newCalidad)
    console.log(newCalidad)
    setNewCalidad({nombre: ""})*/
    setModalOpen(false)
    //router.refresh()*/
  }
  
  const handleChange = (fecha: string) => {
    //console.log(fecha)    
    setNewRemito({fechaIngreso: fecha})
  }


  return (
    <div>
      <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
        Crear Calidad
      </button>
      <ModalLg modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewRemito}>
          <h3 className="font-bold text-lg">Agregar Remito</h3>
          <div className="modal-action">
          <input
                value={newRemito.fechaIngreso}
                onChange={e => handleChange(e.target.value)}
                type="date"
                placeholder="Tamaño"
                className="input input-bordered w-full"
              />
            <br />
            <button type="submit" className="btn btn-">
              Guardar
            </button>
          </div>
        </form>
      </ModalLg>
    </div>
  );
}
