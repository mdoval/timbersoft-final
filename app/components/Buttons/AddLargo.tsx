'use client'

import { FormEventHandler, useState } from "react";
import Modal from "@/app/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { addLargo } from "@/utils/largosFunctions";
import { ILargo } from "@/types/tipos";

export function AddLargo() {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newLargo, setNewLargo] = useState<ILargo>({tamanio: 0})

  const handleSubmitNewCategoria: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await addLargo(newLargo)
    console.log(newLargo)
    setNewLargo({tamanio: 0})
    setModalOpen(false)
    router.refresh()
  }

  const handleChange = (tamanio: string) => {
    setNewLargo({tamanio: parseFloat(tamanio)})
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Crear Largo</button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewCategoria}>
            <h3 className="font-bold text-lg">Agregar Categoria</h3>
            <div className="modal-action">
              <input
                value={newLargo.tamanio}
                onChange={e => handleChange(e.target.value)}
                type="number"
                placeholder="Tamaño"
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