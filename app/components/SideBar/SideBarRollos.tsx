import { GiWoodPile } from "react-icons/gi";

export function SideBarRollos() {
  return (
    <div className="sidebar_menu">
      <div className="sidebar_item">
        <div className="w-full flex">
          <GiWoodPile className="sidebar_icons" />
          <span>Rollos</span>
        </div>
      </div>
    </div>
  );
}
