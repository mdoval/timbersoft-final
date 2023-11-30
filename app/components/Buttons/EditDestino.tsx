"use client"

import { FiEdit } from "react-icons/fi";
import { IDestino } from "@/types/tipos";
import { FormEventHandler, useState } from "react";
import { editCategoria } from "@/utils/categoriasFunctions";
import Modal from "../Modal/Modal";
import { useRouter } from "next/navigation";

interface EditDestinoProps {
    destino: IDestino;
}

const EditDestino: React.FC<EditDestinoProps> = ({ destino }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [destinoToEdit, setDestinoToEdit] = useState<IDestino>(destino);

  const handleSubmitEditDestino: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editCategoria(destinoToEdit);
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleChange = (nombre: string) => {
    setDestinoToEdit({...destinoToEdit, nombre: nombre });
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
          <h3 className="font-bold text-lg">Editar Destino</h3>
          <div className="modal-action">
            <input
              value={destinoToEdit.nombre}
              onChange={e => handleChange(e.target.value)}
              type="text"
              placeholder="Nombre de categoria"
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn">
              Guardar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditDestino;
