import React from "react";
import ReactDOM from "react-dom/client";
import ContextProvider from "./context/ContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

const router = createBrowserRouter(ROUTES);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </ContextProvider>
);
