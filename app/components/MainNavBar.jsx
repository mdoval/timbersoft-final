'use client'

import Link from "next/link";
import { signOut } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { useState } from "react";

export async function MainNavBar() {
  const [userMenuVisible, setUserMenuVisible] = useState(true)
  const { user } = await getServerSession(authOptions);

  return (
    <ul className="w-full bg-gray-700 text-white flex p-3">
      <li className="m-3"><Link href="/dashboard/rollos">Rollos</Link></li>
      <li className="m-3">Categorias</li>
      <li className="m-3">Destinos</li>
      <li className="w-full">
        <div className="w-full flex flex-row-reverse">
          <div className="relative inline-block text-left">
            <div className="mr-10">
              <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white cursor-pointer" src={user.image} alt="{user.handle}" onClick={() => console.log("Hola")} />
            </div>
            <div className="absolute z-50 mt-2 w-52 bg-white border rounded-md shadow-lg right-0">
              <div className="py-1">
                <span className="block px-4 py-2  text-gray-900 hover:bg-gray-200">{user.email}</span>
                <button hidden={userMenuVisible} className="block px-4 py-2 text-gray-900 hover:bg-gray-200 w-full" onClick={() => signOut()}>Cerrar Sesion</button>                
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  )
}
