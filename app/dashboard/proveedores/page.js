"use client";

import { CreateButton } from "@/app/components/Buttons/CreateButton"
import { CancelButton } from "@/app/components/Buttons/CancelButton"
import { SubmitButton } from "@/app/components/Buttons/SubmitButton"
import { SimpleDataTable } from "@/app/components/DataTable/SimpleDataTable"
import { Modal } from "@/app/components/Modal/Modal";
import { useState } from "react";
import { NextResponse } from "next/server";

const form = 
{
  data: {
    nombre: "" 
  }
}

const guardarProveedor = async (formulario)  => {
  console.log(formulario)
  
  const res = await fetch('http://localhost:3000/api/proveedores/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formulario.data),
  })
 
  const data = await res.json()
  return NextResponse.json(data)
}

export default function ProveedoresPage() {
  const [modalVisible, setModalVisible] = useState(true);
  const [formulario, setFormulario] = useState(form)

  const handleClickOpenCloseForm = () => {
    setModalVisible(!modalVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await guardarProveedor(formulario)
      console.log(res)
      handleClickOpenCloseForm()
    } catch(err) {
      console.log(err)
    }
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setFormulario({
      data: {
        ...formulario.data,
        [name] : value
      }
    })
  }

  return (
    <div className="bg-white h-5/6 p-4">
      <div>
        <CreateButton text="Crear Proveedor" onclick={handleClickOpenCloseForm} />
      </div>
      <div className="mt-4">
        <SimpleDataTable />
      </div>
      <Modal
        hidden={modalVisible}
        oncancel={handleClickOpenCloseForm}
        titulo="Crear Proveedor"
      >
        <form>
          <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name" name="nombre" type="text" placeholder="Jane" value={formulario.data.nombre} onChange={handleOnChange}
          />
          <div className="bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <SubmitButton text="Cargar" onclick={handleSubmit} />
            <CancelButton text="Cancel" onclick={handleClickOpenCloseForm} /> 
          </div>
        </form>
      </Modal>
    </div>
  );
}
