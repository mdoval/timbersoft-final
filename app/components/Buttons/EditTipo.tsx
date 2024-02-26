"use client";

import { FiEdit } from "react-icons/fi";
import { ITipo } from "@/types/tipos";
import { ChangeEvent, FormEventHandler, useState } from "react";
import { editTipo } from "@/utils/tiposFunctions";
import Modal from "../Modal/Modal";
import { useRouter } from "next/navigation";

interface EditTipoProps {
  tipo: ITipo;
}

const EditTipo: React.FC<EditTipoProps> = ({ tipo }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [tipoToEdit, setTipoToEdit] = useState<ITipo>(tipo);
  const [botonHabilitado, setBotonHabilitado] = useState(false);

  const handleSubmitEditTipo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      await editTipo(tipoToEdit);
      setOpenModalEdit(false);
      router.refresh();
    } catch (error) {
      console.log("Error al guardar Tipo");
    }
  };

  const handleChangeCatalogo = (e: ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setTipoToEdit({ ...tipoToEdit, catalogo: valor });
    setBotonHabilitado(valor.trim() !== "");
  };

  const handleChangeDescripcion = (e: ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setTipoToEdit({ ...tipoToEdit, descripcion: valor });
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
        <form onSubmit={handleSubmitEditTipo}>
          <div className="modal-action">
            <div className="flex flex-col space-y-5 w-full">
              <h3 className="font-bold text-lg">Editar Tipo</h3>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Ingrese Catalogo</span>
                </div>

                <input
                  value={tipoToEdit.catalogo}
                  onChange={handleChangeCatalogo}
                  type="text"
                  placeholder="Catalogo"
                  className="input input-bordered w-full"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Ingrese Descripcion</span>
                </div>

                <input
                  value={tipoToEdit.descripcion}
                  onChange={handleChangeDescripcion}
                  type="text"
                  placeholder="Catalogo"
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

export default EditTipo;
