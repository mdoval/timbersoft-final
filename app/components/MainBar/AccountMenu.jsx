'use client'

import { useState } from "react"
import { signOut } from "next-auth/react";

export function AccountMenu({user}) {
    const [visible, setVisible] = useState(true)
    //console.log(user)

    const handleVisible = () => {
        setVisible(!visible)
    }

    return (
        <ul className="bg-red-200">
            <li>
                <div className="menu_header" onClick={handleVisible}>
                    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white " src={user.image} alt={user.email} />
                </div>
                <ul hidden={visible}>
                    <li className="menu_item">{user.email}</li>
                    <li className="menu_item" onClick={() => signOut()}>Cerrar Sesion</li>
                </ul>
            </li>
        </ul>
    )        
} 