import { SideBarInicio } from "./SideBarInicio";
import { SideBarRollos } from "./SideBarRollos";
import { SideBarTablas } from "./SideBarTablas";

export function SideBar() {
  return (
    <div className="sidebar">
      <SideBarInicio />
      <SideBarTablas />
      <SideBarRollos />
    </div>
  );
}
