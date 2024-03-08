"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export function AccountMenu({ user }) {
  const [visible, setVisible] = useState(true);
  const imgUrl = `${process.env.siteUrl}${user.avatar}`
  
  //console.log(user)

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <ul className="bg-red-200">
      <li>
        <div className="menu_header" onClick={handleVisible}>
          <Image
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white "
            src={imgUrl}
            alt={user.email}
          />
        </div>
        <ul hidden={visible}>
          <li className="menu_item">
            <Link href={"/dashboard/user/profile"}>{user.email}</Link>
          </li>
          <li className="menu_item" onClick={() => signOut()}>
            Cerrar Sesion
          </li>
        </ul>
      </li>
    </ul>
  );
}
