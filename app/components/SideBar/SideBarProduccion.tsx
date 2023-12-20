"use client";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { LuAxe } from "react-icons/lu";
import Link from "next/link";

export function SideBarProduccion() {
  const [hidden, setHidden] = useState(true);

  const handleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <div className="sidebar_menu">
      <div className="sidebar_item" onClick={handleHidden}>
        <div className="w-full flex">
          <LuAxe className="sidebar_icons" />
          <span className="w-11/12">Produccion</span>
          {hidden ? (
            <IoIosArrowBack className="sidebar_icons" />
          ) : (
            <IoIosArrowDown className="sidebar_icons" />
          )}
        </div>
      </div>
      <div className={`sidebar_submenu ${hidden ? "hidden" : ""}`} >
        <Link href="/dashboard/ingresomp" className="sidebar_subitem">
          Ingreso de MP
        </Link>
        <Link href="/dashboard/factura" className="sidebar_subitem">
          Registrar Factura
        </Link>
        <div className="sidebar_subitem">Consumo MP</div>
        <div className="sidebar_subitem">Alta de Produccion</div>
        <div className="sidebar_subitem">Clasificacion</div>
        <div className="sidebar_subitem">Despacho</div>
        <div className="sidebar_subitem">Ajustes de Stock</div>
      </div>
    </div>
  );
}
