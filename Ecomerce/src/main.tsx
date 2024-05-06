import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import NewProduct from "./pages/NewProduct.tsx";
import DetailProduct from "./components/DetailProduct.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/new",
    element: <NewProduct />,
  },
  {
    path: "/product/:categoryId/:productId",
    element: <DetailProduct></DetailProduct>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
