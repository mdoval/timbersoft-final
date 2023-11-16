'use client'

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react'
import { CiViewTable } from "react-icons/ci";
import Link from "next/link";

export function SideBarTablas() {
  const [hidden, setHidden] = useState(true)

  const handleHidden = () => {
    setHidden(!hidden)
  }

  return (
    <div className="sidebar_menu">
      <div className="sidebar_item" onClick={handleHidden}>
        <div className="w-full flex">
          <CiViewTable className="sidebar_icons" />
          <span className="w-11/12">Tablas</span>
          {hidden ? <IoIosArrowBack className="sidebar_icons" />: <IoIosArrowDown className="sidebar_icons" />}
        </div>
      </div>
      <div className="sidebar_submenu" hidden={hidden}>
        <Link href="/dashboard/proveedores" className="sidebar_subitem">Proveedores</Link>
        <div className="sidebar_subitem">Destinos</div>
        <div className="sidebar_subitem">Categorias</div>
        <div className="sidebar_subitem">Transportista</div>
        <div className="sidebar_subitem">Calidad</div>
        <div className="sidebar_subitem">Largos</div>
      </div>
    </div>
  );
}
