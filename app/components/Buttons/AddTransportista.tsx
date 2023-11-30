'use client'

import { FormEventHandler, useState } from "react";
import Modal from "@/app/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { addTransportista } from "@/utils/transportistasFunctions";
import { ITransportista } from "@/types/tipos";

export function AddTransportista() {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTransportista, setNewTransportista] = useState<ITransportista>({nombre: ""})

  const handleSubmitNewCategoria: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await addTransportista(newTransportista)
    console.log(newTransportista)
    setNewTransportista({nombre: ""})
    setModalOpen(false)
    router.refresh()
  }

  const handleChange = (nombre: string) => {
    setNewTransportista({nombre: nombre})
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Crear Transportista</button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewCategoria}>
            <h3 className="font-bold text-lg">Agregar Transportista</h3>
            <div className="modal-action">
              <input
                value={newTransportista.nombre}
                onChange={e => handleChange(e.target.value)}
                type="text"
                placeholder="Nombre de transportista"
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