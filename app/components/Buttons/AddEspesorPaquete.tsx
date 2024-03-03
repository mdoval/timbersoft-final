"use client";

import { ChangeEvent, FormEventHandler, useState } from "react";
import Modal from "@/app/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { addEspesorPaquete } from "@/utils/espesoresPaqueteFunctions";
import { IEspesorPaquete } from "@/types/tipos";

export function AddEspesorPaquete() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newEspesor, setNewEspesor] = useState<IEspesorPaquete>({ tamanio: 0 });
  const [botonHabilitado, setBotonHabilitado] = useState(false);

  const handleSubmitNewCategoria: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    try {
      await addEspesorPaquete(newEspesor);
      setNewEspesor({ tamanio: 0 });
      setModalOpen(false);
      router.refresh();
    } catch (error) {
      console.log("No se pudo guardar el Espesor");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setNewEspesor({ tamanio: parseFloat(valor) });
    setBotonHabilitado(valor.trim() !== "");
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
        Crear Ancho
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewCategoria}>
          <div className="modal-action">
            <div className="flex flex-col space-y-5 w-full">
              <h3 className="font-bold text-lg">Agregar Espesor Paquete</h3>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    Ingrese el tamaño
                  </span>
                </div>
                <input
                  value={newEspesor.tamanio}
                  onChange={handleChange}
                  type="number"
                  placeholder="Tamaño"
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
