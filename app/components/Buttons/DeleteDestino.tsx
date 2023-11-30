'use client'

import { IDestino } from "@/types/tipos";
import { FiDelete } from "react-icons/fi";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { deleteDestino } from "@/utils/destinosFunctions";
import { useRouter } from "next/navigation";

interface EditDestinoProps {
  destino: IDestino;
}

const DeleteDestino: React.FC<EditDestinoProps> = ({ destino }) => {
  const router = useRouter()
  const [openModalDelete, setOpenModalDelete] = useState(false)

  const handledeleteDestino = async (id: number | undefined) => {
    await deleteDestino(destino)
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
            <h1 className="text-2xl">Esta Seguro que desea eliminar este Destino?</h1>
            <h2 className="font-bold">{destino.nombre}</h2>
            <div className="modal-action">
                <button className="btn" onClick={() => handledeleteDestino(destino.id) }>Si</button>
            </div>
        </Modal>      
    </div>
  );
};

export default DeleteDestino;
