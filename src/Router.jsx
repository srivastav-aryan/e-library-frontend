import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import RegisterPage from "./Pages/RegisterPage";
import MainLayout from "./Layout/MainLayout";
import AuthLayout from "./Layout/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    // errorElement
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);
