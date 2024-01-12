'use client'

import React, { FC, useState } from 'react'
import ModalLg from '../Modal/ModalLg'

interface Props {
    remito: any
}

const ViewRemito: FC<Props> = ({remito}) => {
    console.log(remito)
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    const handleModalOpen = () => {
        setModalOpen(!modalOpen)        
    }

  return (
    <div>
        <button className='btn btn-primary' onClick={handleModalOpen}>Ver Remito</button>
        <ModalLg modalOpen={modalOpen} setModalOpen={handleModalOpen}>
            <h1>Detalle de remito</h1>
            <h2>{remito}</h2>
        </ModalLg>
    </div>
  )
}

export default ViewRemito