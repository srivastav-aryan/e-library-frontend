import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router.jsx";
import "./index.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { store } from "./Store/store.js";
import { Provider } from "react-redux";
import { loadAuthInfoFromLocalStorage } from "./utils/authUtils.js";

const queryClient = new QueryClient();

loadAuthInfoFromLocalStorage()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
