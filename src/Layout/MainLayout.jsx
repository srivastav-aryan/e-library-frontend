import { SidebarProvider } from "@/components/ui/sidebar";
import AppsideBar from "../components/app-sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  return (
    <>
      <SidebarProvider>
        <AppsideBar />
        <div>
          <Header />
          <Outlet />
        </div>
      </SidebarProvider>
    </>
  );
}

export default MainLayout;
