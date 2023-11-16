"use client";

import { CreateButton } from "@/app/components/Buttons/CreateButton";
import { SimpleDataTable } from "@/app/components/DataTable/SimpleDataTable";
import { Modal } from "@/app/components/Modal/Modal";
import { useState } from "react";

export default function ProveedoresPage() {
  const [modalVisible, setModalVisible] = useState(true);

  const handleClick = () => {
    console.log("Hola");
    setModalVisible(!modalVisible);
  };

  return (
    <div className="bg-white h-5/6 p-4">
      <div>
        <CreateButton text="Crear Proveedor" onclick={handleClick} />
      </div>
      <div className="mt-4">
        <SimpleDataTable />
      </div>
      <Modal
        hidden={modalVisible}
        oncancel={handleClick}
        titulo="Crear Proveedor"
      >
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name" type="text" placeholder="Jane"
          />
      </Modal>
    </div>
  );
}
