"use client";

import { FiEdit } from "react-icons/fi";
import { ICategoria } from "@/types/tipos";
import { ChangeEvent, FormEventHandler, useState } from "react";
import { editCategoria } from "@/utils/categoriasFunctions";
import Modal from "../Modal/Modal";
import { useRouter } from "next/navigation";

interface EditCategoriaProps {
  categoria: ICategoria;
}

const EditCategoria: React.FC<EditCategoriaProps> = ({ categoria }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [categoriaToEdit, setCategoriaToEdit] = useState<ICategoria>(categoria);
  const [botonHabilitado, setBotonHabilitado] = useState(false);

  const handleSubmitEditCategoria: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    try {
      await editCategoria(categoriaToEdit);
      setOpenModalEdit(false);
      router.refresh();
    } catch (error) {
      console.log("Error al guardar categoria");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setCategoriaToEdit({ ...categoriaToEdit, nombre: valor });
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
        <form onSubmit={handleSubmitEditCategoria}>
          <div className="modal-action">
            <div className="flex flex-col space-y-5 w-full">
              <h3 className="font-bold text-lg">Editar Categoria</h3>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    Ingrese descripcion de categoria
                  </span>
                </div>

                <input
                  value={categoriaToEdit.nombre}
                  onChange={handleChange}
                  type="text"
                  placeholder="Nombre de categoria"
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

export default EditCategoria;
