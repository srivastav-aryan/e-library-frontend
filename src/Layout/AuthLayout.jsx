import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../features/auth/authSlice";
import { Outlet, Navigate } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";

function AuthLayout() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (isAuthenticated) {
    return <Navigate to={"/dashboard/home"} replace />;
  }
  return (
    <>
      <AuthHeader />
      <Outlet />
    </>
  );
}

export default AuthLayout;
