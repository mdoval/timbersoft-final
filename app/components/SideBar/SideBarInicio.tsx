import { IoHomeOutline } from "react-icons/io5";

export function SideBarInicio() {
    return(
        <div className="sidebar_menu">
        <div className="sidebar_item">
          <div className="w-full flex">
            <IoHomeOutline className="sidebar_icons" />
            <span>Inicio</span>
          </div>
        </div>
      </div>
    )
}