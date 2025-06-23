import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import RegisterPage from "./Pages/RegisterPage";
import MainLayout from "./Layout/MainLayout";
import AuthLayout from "./Layout/AuthLayout";
import About from "./Pages/About";
import DashboardHomePage from "./Pages/dashboard pages/DashboardHomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    // errorElement
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />
      }
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

  {
    path: "/dashboard",
    element: <MainLayout />,
    
    children: [
      {
        path: "home",
        element:<DashboardHomePage />
      }
    ]
  }
]);
