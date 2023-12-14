"use client";

import { ChangeEvent, FormEventHandler, useState } from "react";
import Modal from "@/app/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { addProveedor } from "@/utils/proveedoresFunctions";
import { IProveedor } from "@/types/tipos";
import ErrorMessageSpan from "../ErrorMessageSpan";

interface ErroresState {
  proveedor?: string;
}

export function AddProveedor() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newProveedor, setNewProveedor] = useState<IProveedor>({ nombre: "" });
  const [botonHabilitado, setBotonHabilitado] = useState(false);
  /* manejo de errores */

  const handleSubmitNewProveedor: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    try {
      await addProveedor(newProveedor);
      setNewProveedor({ nombre: "" });
      setModalOpen(false);
      router.refresh();
    } catch (error) {
      console.log("No se pudo guardar el proveedor");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setNewProveedor({nombre: valor});
    setBotonHabilitado(valor.trim() !== '')
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
        Crear Provedor
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewProveedor}>
          <div className="modal-action">
            <div className="flex flex-col space-y-5 w-full">
              <h3 className="font-bold text-lg">Agregar Proveedor</h3>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    Ingrese el nombre de su proveedor
                  </span>
                </div>
                <input
                  value={newProveedor.nombre}
                  onChange={handleChange}
                  type="text"
                  placeholder="Nombre de proveedor"
                  className="input input-bordered w-full"
                />
              </label>
              <button type="submit" className="btn btn-primary" disabled={!botonHabilitado} >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
