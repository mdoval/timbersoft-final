import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";

export function SideBarInicio() {
    return(
        <div className="sidebar_menu">
        <div className="sidebar_item">
          <div className="w-full flex">
            <IoHomeOutline className="sidebar_icons" />
            <Link href="/dashboard">Inicio</Link>
          </div>
        </div>
      </div>
    )
}