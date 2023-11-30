"use client"

import { FiEdit } from "react-icons/fi";
import { ICalidad } from "@/types/tipos";
import { FormEventHandler, useState } from "react";
import { editCalidad } from "@/utils/calidadesFunctions";
import Modal from "../Modal/Modal";
import { useRouter } from "next/navigation";

interface EditCalidadProps {
    calidad: ICalidad;
}

const EditCalidad: React.FC<EditCalidadProps> = ({ calidad }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [calidadToEdit, setCalidadToEdit] = useState<ICalidad>(calidad);

  const handleSubmitEditCalidad: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editCalidad(calidadToEdit);
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleChange = (nombre: string) => {
    setCalidadToEdit({...calidadToEdit, nombre: nombre });
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
          <h3 className="font-bold text-lg">Editar Calidad</h3>
          <div className="modal-action">
            <input
              value={calidadToEdit.nombre}
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

export default EditCalidad;
