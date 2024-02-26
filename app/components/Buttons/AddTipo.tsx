"use client";

import { ChangeEvent, FormEventHandler, useState } from "react";
import Modal from "@/app/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { addTipo } from "@/utils/tiposFunctions";
import { ITipo } from "@/types/tipos";

export function AddTipo() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTipo, setNewTipo] = useState<ITipo>({
    catalogo: "",
    descripcion: "",
  });
  const [botonHabilitado, setBotonHabilitado] = useState(false);

  const handleSubmitNewTipo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      await addTipo(newTipo);
      setNewTipo({ catalogo: "", descripcion: "" });
      setModalOpen(false);
      router.refresh();
    } catch (error) {
      console.log("No se pudo guardar Tipo");
    }
  };

  const handleChangeCatalogo = (e: ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setNewTipo({ ...newTipo, catalogo: valor });
    setBotonHabilitado(valor.trim() !== "");
  };

  const handleChangeDescripcion = (e: ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setNewTipo({ ...newTipo, descripcion: valor });
    setBotonHabilitado(valor.trim() !== "");
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
        Crear Tipo
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTipo}>
          <div className="modal-action">
            <div className="flex flex-col space-y-5 w-full">
              <h3 className="font-bold text-lg">Agregar Tipo</h3>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Ingrese Catalogo</span>
                </div>
                <input
                  value={newTipo.catalogo}
                  onChange={handleChangeCatalogo}
                  type="text"
                  placeholder="Catalogo"
                  className="input input-bordered w-full"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Ingrese Descripcion</span>
                </div>
                <input
                  value={newTipo.descripcion}
                  onChange={handleChangeDescripcion}                  
                  type="text"
                  placeholder="Descripcion"
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
