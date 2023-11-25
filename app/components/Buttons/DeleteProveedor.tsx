'use client'

import { IProveedor } from "@/types/proveedor";
import { FiDelete } from "react-icons/fi";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { deleteProveedor } from "@/utils/proveedoresFunctions";
import { useRouter } from "next/navigation";

interface EditProveedorProps {
  proveedor: IProveedor;
}

const DeleteProveedor: React.FC<EditProveedorProps> = ({ proveedor }) => {
  const router = useRouter()
  const [openModalDelete, setOpenModalDelete] = useState(false)

  const handleDeleteProveedor = async (id: number | undefined) => {
    await deleteProveedor(proveedor)
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
            <h2 className="font-bold">{proveedor.nombre}</h2>
            <div className="modal-action">
                <button className="btn" onClick={() => handleDeleteProveedor(proveedor.id) }>Si</button>
            </div>
        </Modal>      
    </div>
  );
};

export default DeleteProveedor;
