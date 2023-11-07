'use client'

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export function BotonLogout() {
    const { data: session } = useSession();

    if(session) {
        return <button className="boton1" onClick={() => signOut()}>Logout</button>
    } else {
        return <p>Usuario deslogueado</p>
    }
}