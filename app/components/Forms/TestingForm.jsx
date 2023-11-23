'use client'

import { Modal } from '@/app/components/Modal/Modal'
import { TestButton } from "@/app/components/Buttons/TestButton"
import { useState } from 'react'

export function TestingForm() {
    const [hidden, setHidden] = useState(true)

    const handleClick = () => {
        setHidden(!hidden)
    }

    return(
        <>
            <TestButton text={"Boton de Testeo"} onclick={handleClick} />
            <Modal hidden={hidden} titulo ={"Esto es una prueba de Modal como parametro"} />
        </>
    )
}