"use client";

import { ILargoPaquete } from "@/types/tipos";
import { FiDelete } from "react-icons/fi";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { deleteLargoPaquete } from "@/utils/largosPaqueteFunctions";
import { useRouter } from "next/navigation";

interface EditEspesorProps {
  espesor: ILargoPaquete;
}

const DeleteLargoPaquete: React.FC<EditEspesorProps> = ({ espesor }) => {
  const router = useRouter();
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const handleDeleteEspesor = async (id: number | undefined) => {
    await deleteLargoPaquete(espesor);
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
              Esta Seguro que desea eliminar este Largo?
            </h1>
            <h2 className="font-bold">{espesor.tamanio}</h2>
            <div className="w-full flex flex-row-reverse">
              <button
                className="btn btn-primary w-1/3 mr-3"
                onClick={() => setOpenModalDelete(false)}
              >
                No
              </button>
              <button
                className="btn btn-primary w-1/3 mr-3"
                onClick={() => handleDeleteEspesor(espesor.id)}
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

export default DeleteLargoPaquete;
