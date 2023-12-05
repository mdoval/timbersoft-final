"use client";

import ModalLg from "@/app/components/Modal/ModalLg";
import { IRemito } from "@/types/tipos";
import { FormEventHandler, useState, useEffect } from "react";
import SelectProveedores from "../Controls/SelectProveedores";
import SelectDestinos from "../Controls/SelectDestinos";

export function AddIngresoMP() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newRemito, setNewRemito] = useState<IRemito>({
    id: 1,
    fechaIngreso: obtenerFechaFormateada(),
    remito: 0,
    proveedorId: 0,
    transportistaId: 0,
    destinoId: 0,
    tarifa: 0,
    flete: 0,
  });

  function obtenerFechaFormateada(): string {
    let fechaActual = new Date();
    let año = fechaActual.getFullYear();
    let mes = (fechaActual.getMonth() + 1).toString().padStart(2, "0"); // Agregar cero inicial si es necesario
    let dia = fechaActual.getDate().toString().padStart(2, "0"); // Agregar cero inicial si es necesario
    let fechaFormateada = `${año}-${mes}-${dia}`;
    return fechaFormateada;
  }

  const handleSubmitNewRemito: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    console.log(newRemito);
    /*await addCalidad(newCalidad)
    console.log(newCalidad)
    setNewCalidad({nombr/e: ""})*/
    //setModalOpen(false);
    //router.refresh()*/
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
        Crear Calidad
      </button>
      <ModalLg modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewRemito}>
          <h3 className="font-bold text-lg">Ingreso de Materia Prima</h3>
          <div className="modal-action">
            <div className="w-full flex flex-col">
              <div className="flex w-full">
                {/* Fecha de remito /*/}
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Fecha de Ingreso</span>
                  </div>
                  <input
                    value={newRemito.fechaIngreso}
                    onChange={(e) =>
                      setNewRemito({
                        ...newRemito,
                        fechaIngreso: e.target.value,
                      })
                    }
                    type="date"
                    placeholder="Fecha de Ingreso"
                    className="input input-bordered w-1/2"
                  />
                  <div className="label hidden">
                    <span className="label-text-alt">Error</span>
                  </div>
                </label>

                {/* Fecha de remito /*/}
                <label className="form-control w-full max-w-md">
                  <div className="label">
                    <span className="label-text">Numero de Remito</span>
                  </div>
                  <input
                    value={newRemito.remito}
                    onChange={(e) =>
                      setNewRemito({
                        ...newRemito,
                        remito: parseInt(e.target.value),
                      })
                    }
                    type="number"
                    placeholder="Fecha de Ingreso"
                    className="input input-bordered w-1/2"
                  />
                  <div className="label hidden">
                    <span className="label-text-alt">Error</span>
                  </div>
                </label>
              </div>
              <div className="flex w-full">
                {/* Proveedor */}
                <SelectProveedores
                  proveedorId={newRemito.proveedorId}
                  onSelectionChange={(e) =>
                    setNewRemito({
                      ...newRemito,
                      proveedorId: Number(e.target.value),
                    })
                  }
                />
                {/* Proveedor */}
                <SelectDestinos
                  destinoId={newRemito.destinoId}
                  onSelectionChange={(e) =>
                    setNewRemito({
                      ...newRemito,
                      destinoId: Number(e.target.value),
                    })
                  }
                />
              </div>
              <br />
              <div>
                <button type="submit" className="btn btn-">
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </form>
      </ModalLg>
    </div>
  );
}
