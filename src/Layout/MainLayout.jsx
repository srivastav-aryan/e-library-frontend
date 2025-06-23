import { SidebarProvider } from "@/components/ui/sidebar";
import AppsideBar from "../components/app-sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import BreadcrumbComponent from "../components/Breadcrumb";

function MainLayout() {
  return (
    <>
      <SidebarProvider>
        <AppsideBar />
        <Header />
        <div className="mt-[70px] w-full">
          <BreadcrumbComponent />
          <Outlet />
        </div>
      </SidebarProvider>
    </>
  );
}

export default MainLayout;
