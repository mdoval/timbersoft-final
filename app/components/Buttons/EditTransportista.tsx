"use client";

import { FiEdit } from "react-icons/fi";
import { ITransportista } from "@/types/tipos";
import { ChangeEvent, FormEventHandler, useState } from "react";
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
  const [botonHabilitado, setBotonHabilitado] = useState(false);

  const handleSubmitEditCalidad: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    try {
      await editTransportista(transportistaToEdit);
      setOpenModalEdit(false);
      router.refresh();
    } catch (error) {
      console.log("Error al guardar proveedor");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setTransportistaToEdit({ ...transportistaToEdit, nombre: valor });
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
              <h3 className="font-bold text-lg">Editar Transportista</h3>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    Ingrese el nombre de su Transportista
                  </span>
                </div>

                <input
                  value={transportistaToEdit.nombre}
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

export default EditTransportista;