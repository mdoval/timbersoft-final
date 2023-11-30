'use client'

import { FormEventHandler, useState } from "react";
import Modal from "@/app/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { addCategoria } from "@/utils/categoriasFunctions";
import { ICategoria } from "@/types/tipos";

export function AddCategoria() {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newCategoria, setNewCategoria] = useState<ICategoria>({nombre: ""})

  const handleSubmitNewCategoria: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await addCategoria(newCategoria)
    console.log(newCategoria)
    setNewCategoria({nombre: ""})
    setModalOpen(false)
    router.refresh()
  }

  const handleChange = (nombre: string) => {
    setNewCategoria({nombre: nombre})
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Crear Provedor</button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <form onSubmit={handleSubmitNewCategoria}>
          <h3 className="font-bold text-lg">Agregar Categoria</h3>
          <div className="modal-action">
            <input
              value={newCategoria.nombre}
              onChange={e => handleChange(e.target.value)}
              type="text"
              placeholder="Nombre de Categoria"
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