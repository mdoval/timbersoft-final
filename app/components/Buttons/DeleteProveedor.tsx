"use client";

import { IProveedor } from "@/types/tipos";
import { FiDelete } from "react-icons/fi";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { deleteProveedor } from "@/utils/proveedoresFunctions";
import { useRouter } from "next/navigation";

interface EditProveedorProps {
  proveedor: IProveedor;
}

const DeleteProveedor: React.FC<EditProveedorProps> = ({ proveedor }) => {
  const router = useRouter();
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const handleDeleteProveedor = async (id: number | undefined) => {
    await deleteProveedor(proveedor);
    setOpenModalDelete(false);
    router.refresh();
  };

  return (
    <div>
      <FiDelete
        onClick={() => setOpenModalDelete(true)}
        cursor="pointer"
        className="text-red-400"
        size={25}
      />

      <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
        <div className="modal-action">
          <div className="flex flex-col space-y-5 w-full">
            <h1 className="text-2xl">
              Esta Seguro que desea eliminar este Proveedor?
            </h1>
            <h2 className="font-bold">{proveedor.nombre}</h2>
            <div className="w-full flex flex-row-reverse">
              <button
                className="btn btn-primary w-1/3 mr-3"
                onClick={() => setOpenModalDelete(false)}
              >
                No
              </button>
              <button
                className="btn btn-primary w-1/3 mr-3"
                onClick={() => handleDeleteProveedor(proveedor.id)}
              >
                Si
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteProveedor;
