import { SidebarProvider } from "@/components/ui/sidebar";
import AppsideBar from "../components/app-sidebar";
import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header";
import BreadcrumbComponent from "../components/BreadcrumbComponent";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../features/auth/authSlice";

function MainLayout() {
  const isAuthenticated = useSelector(selectIsAuthenticated);


  if (!isAuthenticated) {
    return <Navigate to={"/auth/login"} replace/>
  }
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
