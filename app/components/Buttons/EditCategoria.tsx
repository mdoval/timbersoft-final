"use client"

import { FiEdit } from "react-icons/fi";
import { ICategoria } from "@/types/tipos";
import { FormEventHandler, useState } from "react";
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

  const handleSubmitEditCategoria: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    //console.log(proveedorToEdit)
    await editCategoria(categoriaToEdit);
    //setProveedorToEdit()
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleChange = (nombre: string) => {
    setCategoriaToEdit({...categoriaToEdit, nombre: nombre });
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
          <h3 className="font-bold text-lg">Editar Categoria</h3>
          <div className="modal-action">
            <input
              value={categoriaToEdit.nombre}
              onChange={e => handleChange(e.target.value)}
              type="text"
              placeholder="Nombre de categoria"
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

export default EditCategoria;
