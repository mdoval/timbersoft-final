"use client"

import { FiEdit } from "react-icons/fi";
import { ILargo } from "@/types/tipos";
import { FormEventHandler, useState } from "react";
import { editLargo } from "@/utils/largosFunctions";
import Modal from "../Modal/Modal";
import { useRouter } from "next/navigation";

interface editLargoProps {
    largo: ILargo;
}

const EditLargo: React.FC<editLargoProps> = ({ largo }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [largoToEdit, setLargoToEdit] = useState<ILargo>(largo);

  const handleSubmiteditLargo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editLargo(largoToEdit);
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleChange = (tamanio: string) => {
    setLargoToEdit({...largoToEdit, tamanio: parseFloat(tamanio) });
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
        <form onSubmit={handleSubmiteditLargo}>
          <h3 className="font-bold text-lg">Editar Largo</h3>
          <div className="modal-action">
            <input
              value={largoToEdit.tamanio}
              onChange={e => handleChange(e.target.value)}
              type="number"
              placeholder="Tamaño"
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

export default EditLargo;
