'use client'

import { ICategoria } from "@/types/tipos";
import { FiDelete } from "react-icons/fi";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { deleteCategoria } from "@/utils/categoriasFunctions";
import { useRouter } from "next/navigation";

interface EditCategoriaProps {
  categoria: ICategoria;
}

const DeleteCategoria: React.FC<EditCategoriaProps> = ({ categoria }) => {
  const router = useRouter()
  const [openModalDelete, setOpenModalDelete] = useState(false)

  const handleDeleteCategoria = async (id: number | undefined) => {
    await deleteCategoria(categoria)
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
            <h1 className="text-2xl">Esta Seguro que desea eliminar esta tarea?</h1>
            <h2 className="font-bold">{categoria.nombre}</h2>
            <div className="modal-action">
                <button className="btn" onClick={() => handleDeleteCategoria(categoria.id) }>Si</button>
            </div>
        </Modal>      
    </div>
  );
};

export default DeleteCategoria;
