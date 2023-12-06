"use client";

import ModalLg from "@/app/components/Modal/ModalLg";
import { IRemito } from "@/types/tipos";
import { FormEventHandler, useState } from "react";
import SelectProveedores from "../Controls/SelectProveedores";
import SelectDestinos from "../Controls/SelectDestinos";
import SelectTransportistas from "../Controls/SelectTransportistas";
import InputFecha from "../Controls/InputFecha";
import InputNumber from "../Controls/InputNumber";
import { addRemito } from "@/utils/remitosFunctions";
import { useRouter } from "next/navigation";
import InputText from "../Controls/InputText";

export function AddIngresoMP() {
  const router = useRouter()
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
    factura: ""
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
    //console.log(newRemito);
    const remitoAgregado = await addRemito(newRemito)
    console.log(remitoAgregado)
    //setNewCalidad({nombr/e: ""})*/
    setModalOpen(false)
    router.refresh()
  }

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
              <div className="flex space-x-10 w-full">
                {/* Fecha de remito /*/}
                <InputFecha
                  placeHolder="Ingrese Fecha"
                  title="Fecha de Remito"
                  value={newRemito.fechaIngreso}
                  onChange={(nuevoValor) =>
                    setNewRemito({ ...newRemito, fechaIngreso: nuevoValor })
                  }
                />
                {/* Numero de remito /*/}
                <InputNumber
                  value={newRemito.remito}
                  onChange={(nuevoValor) =>
                    setNewRemito({ ...newRemito, remito: nuevoValor })
                  }
                  title="Numero de Remito"
                  placeHolder="Ingrese numero"
                />
              </div>

              <div className="flex w-full space-x-10">
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
                {/* Proveedor */}
                <SelectTransportistas
                  transportistaId={newRemito.transportistaId}
                  onSelectionChange={(e) =>
                    setNewRemito({
                      ...newRemito,
                      transportistaId: Number(e.target.value),
                    })
                  }
                />
              </div>

              <div className="flex space-x-10 w-full">
                {/* Tarifa /*/}
                <InputNumber
                  value={newRemito.tarifa}
                  onChange={(nuevoValor) =>
                    setNewRemito({ ...newRemito, tarifa: nuevoValor })
                  }
                  title="Tarifa"
                  placeHolder="Ingrese Tarifa"
                />

                {/* Flete /*/}
                <InputNumber
                  value={newRemito.flete}
                  onChange={(nuevoValor) =>
                    setNewRemito({ ...newRemito, flete: nuevoValor })
                  }
                  title="Flete"
                  placeHolder="Ingrese Flete"
                />

                <InputText  
                  value={newRemito.factura}
                  onChange={(nuevoValor) => setNewRemito({...newRemito, factura: nuevoValor})}
                  title="Factura"
                  placeHolder="Ingreso Factura"
                />
              </div>
              <br />
              <div>
                <button type="submit" className="btn btn-">
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </form>
      </ModalLg>
    </div>
  );
}
