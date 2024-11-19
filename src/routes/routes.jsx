import { lazy } from "react";
import Hoidap from "../pages/Hoidap";
import Tochuc from "../pages/Tochuc";
import Lienhe from "../pages/Lienhe";
import HeaderLienhe from "../layouts/HeaderLienhe";

//---------------------------
// imports
//---------------------------
const Home = lazy(() => import("@pages/Home"));
const Login = lazy(() => import("@pages/Login"));

//---------------------------
// exports
//---------------------------
export const routes_here = [
  {
    path: "/",
    element: <Home />,
    isPrivate: false,
  },
  {
    path: "/login",
    element: <Login />,
    isPrivate: false,
  },
  {
    path: "/hoidap",
    element: <Hoidap />,
    isPrivate: false,
  },
  {
    path: "/tochuc",
    element: <Tochuc />,
    isPrivate: false,
  },
  {
    path: "/lienhe",
    element: <Lienhe />,
    isPrivate: false,
  },
  //routes in objects
];
