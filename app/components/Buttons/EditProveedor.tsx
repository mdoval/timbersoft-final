"use client";

import { FiEdit } from "react-icons/fi";
import { IProveedor } from "@/types/tipos";
import { ChangeEvent, FormEventHandler, useState } from "react";
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
  const [botonHabilitado, setBotonHabilitado] = useState(false);

  const handleSubmitEditProveedor: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    //console.log(proveedorToEdit)
    await editProveedor(proveedorToEdit);
    //setProveedorToEdit()
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setProveedorToEdit({ ...proveedorToEdit, nombre: valor });
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
        <form onSubmit={handleSubmitEditProveedor}>
          <div className="modal-action">
            <div className="flex flex-col space-y-5 w-full">
              <h3 className="font-bold text-lg">Editar Proveedor</h3>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    Ingrese el nombre de su proveedor
                  </span>
                </div>

                <input
                  value={proveedorToEdit.nombre}
                  onChange={handleChange}
                  type="text"
                  placeholder="Nombre del proveedor"
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

export default EditProveedor;
