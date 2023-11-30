"use client"

import { FiEdit } from "react-icons/fi";
import { ITransportista } from "@/types/tipos";
import { FormEventHandler, useState } from "react";
import { editTransportista } from "@/utils/transportistasFunctions";
import Modal from "../Modal/Modal";
import { useRouter } from "next/navigation";

interface EditCalidadProps {
    transportista: ITransportista;
}

const EditTransportista: React.FC<EditCalidadProps> = ({ transportista }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [transportistaToEdit, setTransportistaToEdit] = useState<ITransportista>(transportista);

  const handleSubmitEditCalidad: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTransportista(transportistaToEdit);
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleChange = (nombre: string) => {
    setTransportistaToEdit({...transportistaToEdit, nombre: nombre });
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
        <form onSubmit={handleSubmitEditCalidad}>
          <h3 className="font-bold text-lg">Editar Transportista</h3>
          <div className="modal-action">
            <input
              value={transportistaToEdit.nombre}
              onChange={e => handleChange(e.target.value)}
              type="text"
              placeholder="Nombre de calidad"
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

export default EditTransportista;
