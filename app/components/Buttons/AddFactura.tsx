'use client'

import React, { useState } from "react";
import ModalLg from "../Modal/ModalLg";

interface Props {
    disable: boolean
}

const AddFactura = ({disable}: Props) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const handleModalOpen = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <div>
    <button
      className="btn btn-primary"
      disabled={!disable}
      onClick={handleModalOpen}
    >Agregar Remitos
    </button>
    <ModalLg modalOpen={modalVisible} setModalOpen={handleModalOpen}> 
      <ul>
        <li></li>
      </ul>
    </ModalLg>
    </div>
  );
};

export default AddFactura;
