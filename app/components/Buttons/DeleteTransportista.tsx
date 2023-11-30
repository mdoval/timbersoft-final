'use client'

import { ITransportista } from "@/types/tipos";
import { FiDelete } from "react-icons/fi";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { deleteTransportista } from "@/utils/transportistasFunctions";
import { useRouter } from "next/navigation";

interface EditTransportistaProps {
  transportista: ITransportista;
}

const DeleteTransportista: React.FC<EditTransportistaProps> = ({ transportista }) => {
  const router = useRouter()
  const [openModalDelete, setOpenModalDelete] = useState(false)

  const handleDeleteCategoria = async (id: number | undefined) => {
    await deleteTransportista(transportista)
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
            <h2 className="font-bold">{transportista.nombre}</h2>
            <div className="modal-action">
                <button className="btn" onClick={() => handleDeleteCategoria(transportista.id) }>Si</button>
            </div>
        </Modal>      
    </div>
  );
};

export default DeleteTransportista;
