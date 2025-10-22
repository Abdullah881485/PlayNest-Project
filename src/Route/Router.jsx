import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root/Root";
import Home from "../Layout/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/Data/toy.json"),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
