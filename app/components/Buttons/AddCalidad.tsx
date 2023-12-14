"use client";

import { ChangeEvent, FormEventHandler, useState } from "react";
import Modal from "@/app/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { addCalidad } from "@/utils/calidadesFunctions";
import { ICalidad } from "@/types/tipos";

export function AddCalidad() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newCalidad, setNewCalidad] = useState<ICalidad>({ nombre: "" });
  const [botonHabilitado, setBotonHabilitado] = useState(false);

  const handleSubmitNewCategoria: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    try {
      await addCalidad(newCalidad);
      setNewCalidad({ nombre: "" });
      setModalOpen(false);
      router.refresh();
    } catch (error) {
      console.log("No se pudo guardar Categoria");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setNewCalidad({ nombre: valor });
    setBotonHabilitado(valor.trim() !== "");
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
        Crear Calidad
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewCategoria}>
          <div className="modal-action">
            <div className="flex flex-col space-y-5 w-full">
              <h3 className="font-bold text-lg">Agregar Calidad</h3>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    Ingrese descripcion de Calidad
                  </span>
                </div>
                <input
                  value={newCalidad.nombre}
                  onChange={handleChange}
                  type="text"
                  placeholder="Nombre de Categoria"
                  className="input input-bordered w-full"
                />
              </label>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!botonHabilitado}
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
