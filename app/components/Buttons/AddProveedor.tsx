'use client'

import { FormEventHandler, useState } from "react";
import Modal from "@/app/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { addProveedor } from "@/utils/proveedoresFunctions";
import { IProveedor } from "@/types/proveedor";

export function AddProveedor() {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newProveedor, setNewProveedor] = useState<IProveedor>({nombre: ""})

  const handleSubmitNewProveedor: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await addProveedor(newProveedor)
    console.log(newProveedor)
    setNewProveedor({nombre: ""})
    setModalOpen(false)
    router.refresh()
  }

  const handleChange = (nombre: string) => {
    setNewProveedor({nombre: nombre})
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Crear Provedor</button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <form onSubmit={handleSubmitNewProveedor}>
          <h3 className="font-bold text-lg">Agregar Proveedor</h3>
          <div className="modal-action">
            <input
              value={newProveedor.nombre}
              onChange={e => handleChange(e.target.value)}
              type="text"
              placeholder="Nombre de proveedor"
              className="input input-bordered w-full"
            />
            <br />
            <button type="submit" className="btn btn-">Guardar</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
