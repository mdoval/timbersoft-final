"use client";

import { useState } from "react";
import { CreateButton } from "@/app/components/Buttons/CreateButton";
import { Modal } from "@/app/components/Modal/Modal";
import { SubmitButton } from "@/app/components/Buttons/SubmitButton";
import { CancelButton } from "@/app/components/Buttons/CancelButton";
import { useRouter } from 'next/navigation'

const form = {
  data: {
    nombre: "",
  },
};

export function CreateProveedorForm() {
  const [modalVisible, setModalVisible] = useState(true);
  const [formulario, setFormulario] = useState(form);
  const router = useRouter()

  const handleClickOpenCloseForm = () => {
    setModalVisible(!modalVisible);
  };

  const handleSubmit = async (e) => {
    try {
      const res = await fetch("http://localhost:3000/api/proveedores/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formulario.data),
      });
      //console.log(res);
      router.refresh()
      handleClickOpenCloseForm();
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      data: {
        ...formulario.data,
        [name]: value,
      },
    });
  };

  return (
    <>
      <CreateButton
        text={"Crear Proveedor"}
        onclick={handleClickOpenCloseForm}
      />
      <Modal
        hidden={modalVisible}
        oncancel={handleClickOpenCloseForm}
        titulo="Crear Proveedor"
      >
        <form action={handleSubmit}>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            name="nombre"
            type="text"
            placeholder="Jane"
            value={formulario.data.nombre}
            onChange={handleOnChange}
          />
          <div className="bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <SubmitButton text="Cargar" />
            <CancelButton text="Cancel" onclick={handleClickOpenCloseForm} />
          </div>
        </form>
      </Modal>
    </>
  );
}