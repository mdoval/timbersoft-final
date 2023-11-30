'use client'

import { FormEventHandler, useState } from "react";
import Modal from "@/app/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { addDestino } from "@/utils/destinosFunctions";
import { IDestino } from "@/types/tipos";

export function AddDestino() {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newDestino, setNewDestino] = useState<IDestino>({nombre: ""})

  const handleSubmitnewDestino: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await addDestino(newDestino)
    console.log(newDestino)
    setNewDestino({nombre: ""})
    setModalOpen(false)
    router.refresh()
  }

  const handleChange = (nombre: string) => {
    setNewDestino({nombre: nombre})
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Crear Destino</button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitnewDestino}>
            <h3 className="font-bold text-lg">Agregar Destino</h3>
            <div className="modal-action">
              <input
                value={newDestino.nombre}
                onChange={e => handleChange(e.target.value)}
                type="text"
                placeholder="Nombre de destino"
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