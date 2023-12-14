"use client";

import { FiEdit } from "react-icons/fi";
import { ICalidad } from "@/types/tipos";
import { ChangeEvent, FormEventHandler, useState } from "react";
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
  const [botonHabilitado, setBotonHabilitado] = useState(false);

  const handleSubmitEditCalidad: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    try {
      await editCalidad(calidadToEdit);
      setOpenModalEdit(false);
      router.refresh();  
    } catch( error ) {
      console.log("Error al guardar proveedor")
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setCalidadToEdit({ ...calidadToEdit, nombre: valor });
    setBotonHabilitado(valor.trim() !== "");
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
        <div className="modal-action">
            <div className="flex flex-col space-y-5 w-full">
              <h3 className="font-bold text-lg">Editar Calidad</h3>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    Ingrese descripcion de calidad
                  </span>
                </div>

            <input
              value={calidadToEdit.nombre}
              onChange={handleChange}
              type="text"
              placeholder="Nombre de calidad"
              className="input input-bordered w-full"
            />
              </label>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!botonHabilitado}
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditCalidad;
