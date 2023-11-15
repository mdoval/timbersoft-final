'use client'

import { useState } from 'react'
import { signOut } from "next-auth/react";

export function TopBarAccount({user}) {
    const [hidden, setHidden] = useState(true)

    const handleHidden = () => {
        setHidden(!hidden)
    }

    return (
        <div>
            <div className="dashboard_topbar_imagen" onClick={handleHidden}>
                <img className="h-12 w-12 rounded-full ring-2 ring-white mr-8" src={user.image} alt={user.email} />
            </div>
            <div className="dashboard_topbar_menucuenta" hidden={hidden}>
                <div className='m-2 p-2 font-bold hover:bg-gray-400'>{user.email}</div>
                <div className='m-2 p-2 hover:bg-gray-400' onClick={() => signOut()}>Cerrar Sesion</div>
            </div>
        </div>
    )        
} 
