"use client";

import { ChangeEvent, FormEventHandler, useState } from "react";
import Modal from "@/app/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { addTransportista } from "@/utils/transportistasFunctions";
import { ITransportista } from "@/types/tipos";

export function AddTransportista() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTransportista, setNewTransportista] = useState<ITransportista>({
    nombre: "",
  });
  const [botonHabilitado, setBotonHabilitado] = useState(false);

  const handleSubmitNewCategoria: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    try {
      await addTransportista(newTransportista);
      setNewTransportista({ nombre: "" });
      setModalOpen(false);
      router.refresh();
    } catch (error) {
      console.log("No se pudo guardar el Proveedor");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setNewTransportista({ nombre: valor });
    setBotonHabilitado(valor.trim() !== "");
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
        Crear Transportista
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewCategoria}>
          <div className="modal-action">
            <div className="flex flex-col space-y-5 w-full">
              <h3 className="font-bold text-lg">Agregar Transportista</h3>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    Ingrese el nombre de su transportista
                  </span>
                </div>
                <input
                  value={newTransportista.nombre}
                  onChange={handleChange}
                  type="text"
                  placeholder="Nombre de transportista"
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
