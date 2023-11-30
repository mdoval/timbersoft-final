'use client'

import { FormEventHandler, useState } from "react";
import Modal from "@/app/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { addCalidad } from "@/utils/calidadesFunctions";
import { ICalidad } from "@/types/tipos";

export function AddCalidad() {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newCalidad, setNewCalidad] = useState<ICalidad>({nombre: ""})

  const handleSubmitNewCategoria: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await addCalidad(newCalidad)
    console.log(newCalidad)
    setNewCalidad({nombre: ""})
    setModalOpen(false)
    router.refresh()
  }

  const handleChange = (nombre: string) => {
    setNewCalidad({nombre: nombre})
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Crear Calidad</button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewCategoria}>
            <h3 className="font-bold text-lg">Agregar Categoria</h3>
            <div className="modal-action">
              <input
                value={newCalidad.nombre}
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