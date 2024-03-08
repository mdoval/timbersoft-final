"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export function TopBarAccount({ user }) {
  const [hidden, setHidden] = useState(true);
  const imgUrl = `${process.env.siteUrl}${user.avatar}`;

  const handleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <div>
      <div className="dashboard_topbar_imagen" onClick={handleHidden}>
        <Image
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src={imgUrl}
          alt={user.email}
          width={50}
          height={50}
        />
      </div>
      <div className="dashboard_topbar_menucuenta" hidden={hidden}>
        <div
          className="m-2 p-2 font-bold hover:bg-gray-400"
          onClick={() => handleHidden()}
        >
          <Link href={"/dashboard/user/profile"}>{user.email}</Link>
        </div>
        <div className="m-2 p-2 hover:bg-gray-400" onClick={() => signOut()}>
          Cerrar Sesion
        </div>
      </div>
    </div>
  );
}
