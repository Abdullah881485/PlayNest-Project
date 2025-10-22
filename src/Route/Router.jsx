import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root/Root";
import Home from "../Layout/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import MyProfile from "../Layout/MyProfile/MyProfile";
import Purchases from "../Layout/Purchases/Purchases";

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
      {
        path: "/myProfile",
        Component: MyProfile,
      },
      {
        path: "/purchases",
        Component: Purchases,
      },
      {
        path: "/*",
        element: <h1>error 400000004</h1>,
      },
    ],
  },
]);

export default router;
