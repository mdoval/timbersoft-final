'use client'

import Link from "next/link";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";

export function SideBarAdmin() {
    const [hidden, setHidden] = useState(true);
  
    const handleHidden = () => {
      setHidden(!hidden);
    };
  
    return (
      <div className="sidebar_menu">
        <div className="sidebar_item" onClick={handleHidden}>
          <div className="w-full flex">
            <MdAdminPanelSettings className="sidebar_icons" />
            <span className="w-11/12">Administracion</span>
            {hidden ? (
              <IoIosArrowBack className="sidebar_icons" />
            ) : (
              <IoIosArrowDown className="sidebar_icons" />
            )}
          </div>
        </div>
        <div className={`sidebar_submenu ${hidden ? "hidden" : ""}`} >
          <Link href="/dashboard/users" className="sidebar_subitem">
            Usuarios
          </Link>
          <Link href="/dashboard/config" className="sidebar_subitem">
            Configuracion
          </Link>
        </div>
      </div>
    );
  }
  