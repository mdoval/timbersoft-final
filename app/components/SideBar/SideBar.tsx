import { SideBarInicio } from "./SideBarInicio";
import { SideBarProduccion } from "./SideBarProduccion";
import { SideBarRollos } from "./SideBarRollos";
import { SideBarTablas } from "./SideBarTablas";

export function SideBar() {
  return (
    <div className="sidebar">
      <SideBarInicio />
      <SideBarTablas />
      <SideBarRollos />
      <SideBarProduccion />
    </div>
  );
}