import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/index.jsx";
import Products from "./routes/Products/index.jsx";
import Promo from "./routes/Promo/component.jsx";
import Login from "./routes/Login/index.jsx";
import Profile from "./routes/Profile/index.jsx";
import Orders from "./routes/Orders/index.jsx";
import { UserProvider } from "../Context /creatConext.jsx";
import DetailedInfo from "./routes/DetailedInfo/index.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/promo",
        element: <Promo />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: ":id",
        element: <DetailedInfo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
