"use client"

import { FiEdit } from "react-icons/fi";
import { IProveedor } from "@/types/proveedor";
import { FormEventHandler, useState } from "react";
import { editProveedor } from "@/utils/proveedoresFunctions";
import Modal from "../Modal/Modal";
import { useRouter } from "next/navigation";

interface EditProveedorProps {
  proveedor: IProveedor;
}

const EditProveedor: React.FC<EditProveedorProps> = ({ proveedor }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [proveedorToEdit, setProveedorToEdit] = useState<IProveedor>(proveedor);

  const handleSubmitEditProveedor: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log(proveedorToEdit)
    await editProveedor(proveedorToEdit);
    //setProveedorToEdit()
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleChange = (nombre: string) => {
    setProveedorToEdit({...proveedorToEdit, nombre: nombre });
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
        <form onSubmit={handleSubmitEditProveedor}>
          <h3 className="font-bold text-lg">Editar Proveedor</h3>
          <div className="modal-action">
            <input
              value={proveedorToEdit.nombre}
              onChange={e => handleChange(e.target.value)}
              type="text"
              placeholder="Nombre del proveedor"
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

export default EditProveedor;
