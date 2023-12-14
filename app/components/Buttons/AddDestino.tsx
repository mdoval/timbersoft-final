"use client";

import { ChangeEvent, FormEventHandler, useState } from "react";
import Modal from "@/app/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { addDestino } from "@/utils/destinosFunctions";
import { IDestino } from "@/types/tipos";

export function AddDestino() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newDestino, setNewDestino] = useState<IDestino>({ nombre: "" });
  const [botonHabilitado, setBotonHabilitado] = useState(false);

  const handleSubmitnewDestino: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    try {
      await addDestino(newDestino);
      setNewDestino({ nombre: "" });
      setModalOpen(false);
      router.refresh();
    } catch (error) {
      console.log("No se pudo guardar el Destino");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setNewDestino({ nombre: valor });
    setBotonHabilitado(valor.trim() !== "");
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
        Crear Destino
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitnewDestino}>
          <div className="modal-action">
            <div className="flex flex-col space-y-5 w-full">
              <h3 className="font-bold text-lg">Agregar Destino</h3>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Ingrese nombde de destino</span>
                </div>
                <input
                  value={newDestino.nombre}
                  onChange={handleChange}
                  type="text"
                  placeholder="Nombre de destino"
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
