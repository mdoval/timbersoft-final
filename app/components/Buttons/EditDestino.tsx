"use client";

import { FiEdit } from "react-icons/fi";
import { IDestino } from "@/types/tipos";
import { ChangeEvent, FormEventHandler, useState } from "react";
import { editDestino } from "@/utils/destinosFunctions";
import Modal from "../Modal/Modal";
import { useRouter } from "next/navigation";

interface EditDestinoProps {
  destino: IDestino;
}

const EditDestino: React.FC<EditDestinoProps> = ({ destino }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [destinoToEdit, setDestinoToEdit] = useState<IDestino>(destino);
  const [botonHabilitado, setBotonHabilitado] = useState(false);

  const handleSubmitEditDestino: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    try {
      await editDestino(destinoToEdit);
      setOpenModalEdit(false);
      router.refresh();
    } catch (error) {
      console.log("Error al guardar destino ");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setDestinoToEdit({ ...destinoToEdit, nombre: valor });
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
        <form onSubmit={handleSubmitEditDestino}>
          <div className="modal-action">
            <div className="flex flex-col space-y-5 w-full">
              <h3 className="font-bold text-lg">Editar Destino</h3>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    Ingrese el nombre del destino
                  </span>
                </div>

                <input
                  value={destinoToEdit.nombre}
                  onChange={handleChange}
                  type="text"
                  placeholder="Nombre de categoria"
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

export default EditDestino;
