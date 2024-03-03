"use client";

import { FiEdit } from "react-icons/fi";
import { IEspesorPaquete } from "@/types/tipos";
import { ChangeEvent, FormEventHandler, useState } from "react";
import Modal from "../Modal/Modal";
import { useRouter } from "next/navigation";
import { editEspesorPaquete } from "@/utils/espesoresPaqueteFunctions";

interface editEspesorProps {
  espesor: IEspesorPaquete;
}

const EditEspesorPaquete: React.FC<editEspesorProps> = ({ espesor }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [espesorToEdit, setespesorToEdit] = useState<IEspesorPaquete>(espesor);
  const [botonHabilitado, setBotonHabilitado] = useState(false);

  const handleSubmitEditEspesor: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    try {
      await editEspesorPaquete(espesorToEdit);
      setOpenModalEdit(false);
      router.refresh();
    } catch (error) {
      console.log("Error al guardar espesor");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setespesorToEdit({ ...espesorToEdit, tamanio: parseFloat(valor) });
    setBotonHabilitado(valor.trim() !== "");
  };

  return (
    <div>
      <FiEdit
        onClick={() => setOpenModalEdit(true)}
        cursor="pointer"
        className="text-blue-400"
        size={25}
      />

      <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
        <form onSubmit={handleSubmitEditEspesor}>
        <div className="modal-action">
            <div className="flex flex-col space-y-5 w-full">
              <h3 className="font-bold text-lg">Editar Largo</h3>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    Ingrese el Tamaño
                  </span>
                </div>

            <input
              value={espesorToEdit.tamanio}
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
};

export default EditEspesorPaquete;
