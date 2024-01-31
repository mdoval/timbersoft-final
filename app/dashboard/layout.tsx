import { MainNavBar } from "@/app/components/MainBar/MainNavBar";
import { SideBar } from "../components/SideBar/SideBar";
import TopBar from "@/app/components/TopBar/TopBar";
import { getUsuarioLogueado } from "@/utils/getUsuarioLogueado";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <section className="dashboard_main">
      <div className="dashboard_sidebar">
        <div className="dashboard_header">
          <span>TimberSoft</span>
        </div>
        <SideBar />
      </div>
      <div className="dashboard_center">
        <div className="dashboard_topbar">
          <TopBar />
        </div>
        <div className="dashboard_children">{children}</div>
      </div>
    </section>
  );
}