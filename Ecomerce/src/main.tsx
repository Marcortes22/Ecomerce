import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import DetailProduct from "./pages/DetailProduct.tsx";
import NewProductPage from "./pages/NewProductPage.tsx";
import UpdateProduct from "./components/UpdateProduct.tsx";
import { Auth0Provider } from "@auth0/auth0-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/new",
    element: <NewProductPage />,
  },
  {
    path: "/product/:categoryId/:productId",
    element: <DetailProduct></DetailProduct>,
  },
  {
    path: "/UpdateProduct/:categoryId/:productId",
    element: <UpdateProduct></UpdateProduct>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-wmfazgltayvx3oij.us.auth0.com"
      clientId="eNDPJtutTVyXv3UnsFin6p04UkkqAsFP"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
