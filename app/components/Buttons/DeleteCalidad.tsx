'use client'

import { ICalidad } from "@/types/tipos";
import { FiDelete } from "react-icons/fi";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { deleteCalidad } from "@/utils/calidadesFunctions";
import { useRouter } from "next/navigation";

interface EditCategoriaProps {
  calidad: ICalidad;
}

const DeleteCalidad: React.FC<EditCategoriaProps> = ({ calidad }) => {
  const router = useRouter()
  const [openModalDelete, setOpenModalDelete] = useState(false)

  const handleDeleteCategoria = async (id: number | undefined) => {
    await deleteCalidad(calidad)
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
            <h1 className="text-2xl">Esta Seguro que desea eliminar esta Calidad?</h1>
            <h2 className="font-bold">{calidad.nombre}</h2>
            <div className="modal-action">
                <button className="btn" onClick={() => handleDeleteCategoria(calidad.id) }>Si</button>
            </div>
        </Modal>      
    </div>
  );
};

export default DeleteCalidad;
