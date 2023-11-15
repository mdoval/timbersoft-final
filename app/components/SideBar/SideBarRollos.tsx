import Link from "next/link";
import { GiWoodPile } from "react-icons/gi";

export function SideBarRollos() {
  return (
    <div className="sidebar_menu">
      <div className="sidebar_item">
        <div className="w-full flex">
          <GiWoodPile className="sidebar_icons" />
          <Link href="/dashboard/rollos">Rollos</Link>
        </div>
      </div>
    </div>
  );
}
