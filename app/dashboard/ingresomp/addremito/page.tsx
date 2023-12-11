"use client";

import AddRollo from "@/app/components/Buttons/AddRollo";
import InputFecha from "@/app/components/Controls/InputFecha";
import InputNumber from "@/app/components/Controls/InputNumber";
import InputText from "@/app/components/Controls/InputText";
import SelectDestinos from "@/app/components/Controls/SelectDestinos";
import SelectProveedores from "@/app/components/Controls/SelectProveedores";
import SelectTransportistas from "@/app/components/Controls/SelectTransportistas";
import RollosList from "@/app/components/DataTable/RollosList";
import { IRemito, IRollo } from "@/types/tipos";
import addRemitoRollos from "@/utils/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddRemito() {
  const router = useRouter();
  const [newRemito, setNewRemito] = useState<IRemito>({
    fechaIngreso: new Date(),
    remito: 0,
    proveedorId: 0,
    transportistaId: 0,
    destinoId: 0,
    tarifa: 0,
    flete: 0,
    factura: "",
  });
  const [fecha, setFecha] = useState(obtenerFechaFormateada())

  const [rollos, setRollos] = useState<IRollo[]>([]);

  function obtenerFechaFormateada(): string {
    let fechaActual = new Date();
    let año = fechaActual.getFullYear();
    let mes = (fechaActual.getMonth() + 1).toString().padStart(2, "0"); // Agregar cero inicial si es necesario
    let dia = fechaActual.getDate().toString().padStart(2, "0"); // Agregar cero inicial si es necesario
    let fechaFormateada = `${año}-${mes}-${dia}`;
    return fechaFormateada;
  }

  const handleGuardar = async () => {
    setNewRemito({...newRemito, fechaIngreso: new Date(fecha)})
    const remitoGuardado = await addRemitoRollos(newRemito, rollos)
    console.log(remitoGuardado)
    router.push("/dashboard/ingresomp/")
    router.refresh()
  };

  const handleAddRollo = (nuevoRollo: IRollo) => {
    rollos.push(nuevoRollo);
    setRollos(rollos);
    router.refresh();
  };

  return (
    <div className="bg-white p-2 shadow-xl h-full">
      <h3 className="font-bold text-lg">Ingreso de Materia Prima</h3>
      <div className="modal-action">
        <div className="w-full flex flex-col">
          <div className="flex space-x-10 w-full">
            {/* Fecha de remito /*/}
            <InputFecha
              placeHolder="Ingrese Fecha"
              title="Fecha de Remito"              
              value={fecha}
              onChange={(nuevoValor) => setFecha( nuevoValor )}              
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
              onChange={(nuevoValor) =>
                setNewRemito({ ...newRemito, factura: nuevoValor })
              }
              title="Factura"
              placeHolder="Ingreso Factura"
            />
          </div>
          <br />
          <div className="w-full flex flex-row-reverse">
            <AddRollo addRollo={handleAddRollo} />
          </div>
          <div className="w-full h-80 mt-4 border mb-3">
            <RollosList rollos={rollos} />
          </div>
          <div className="w-full flex flex-row-reverse">
            <button className="btn btn-success mr-10 w-1/6" onClick={handleGuardar}>Guardar</button>
          </div>

        </div>
      </div>
    </div>
  );
}
