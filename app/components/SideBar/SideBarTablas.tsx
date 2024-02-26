"use client";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { CiViewTable } from "react-icons/ci";
import Link from "next/link";

export function SideBarTablas() {
  const [hidden, setHidden] = useState(true);

  const handleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <div className="sidebar_menu">
      <div className="sidebar_item" onClick={handleHidden}>
        <div className="w-full flex">
          <CiViewTable className="sidebar_icons" />
          <span className="w-11/12">Tablas</span>
          {hidden ? (
            <IoIosArrowBack className="sidebar_icons" />
          ) : (
            <IoIosArrowDown className="sidebar_icons" />
          )}
        </div>
      </div>
      <div className={`sidebar_submenu ${hidden ? "hidden" : ""}`} >
        <div className="flex flex-col">
          <Link href="/dashboard/proveedores" className="sidebar_subitem">
            Proveedores
          </Link>
          <Link href="/dashboard/destinos" className="sidebar_subitem">
            Destinos
          </Link>
          <Link href="/dashboard/categorias" className="sidebar_subitem">
            Categorias
          </Link>
          <Link href="/dashboard/calidades" className="sidebar_subitem">
            Calidades
          </Link>
          <Link href="/dashboard/transportistas" className="sidebar_subitem">
            Transportistas
          </Link>
          <Link href="/dashboard/largos" className="sidebar_subitem">
            Largos
          </Link>
          <Link href="/dashboard/tipos" className="sidebar_subitem">
            Tipos
          </Link>
        </div>
      </div>
    </div>
  );
}
