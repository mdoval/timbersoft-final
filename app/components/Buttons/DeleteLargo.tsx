'use client'

import { ILargo } from "@/types/tipos";
import { FiDelete } from "react-icons/fi";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { deleteLargo } from "@/utils/largosFunctions";
import { useRouter } from "next/navigation";

interface EditLargoProps {
  largo: ILargo;
}

const DeleteLargo: React.FC<EditLargoProps> = ({ largo }) => {
  const router = useRouter()
  const [openModalDelete, setOpenModalDelete] = useState(false)

  const handleDeleteCategoria = async (id: number | undefined) => {
    await deleteLargo(largo)
    setOpenModalDelete(false)
    router.refresh()
  }

  return (
    <div>
      <FiDelete 
        onClick={() => setOpenModalDelete(true)} 
        cursor="pointer" 
        className="text-red-400" 
        size={25} 
      />

      <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
            <h1 className="text-2xl">Esta Seguro que desea eliminar este Largo?</h1>
            <h2 className="font-bold">{largo.tamanio}</h2>
            <div className="modal-action">
                <button className="btn" onClick={() => handleDeleteCategoria(largo.id) }>Si</button>
            </div>
        </Modal>      
    </div>
  );
};

export default DeleteLargo
