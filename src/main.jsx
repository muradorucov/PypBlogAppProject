import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/site/Root";
const router = createBrowserRouter(ROUTES);
import { ROUTES } from "./routes";

ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
