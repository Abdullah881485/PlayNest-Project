import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root/Root";
import Home from "../Layout/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import MyProfile from "../Layout/MyProfile/MyProfile";
import Purchases from "../Layout/Purchases/Purchases";
import ToyDetails from "../Layout/ToyDetails/ToyDetails";
import Forgot from "../components/Forgot Password/Forgot";
import PrivateRoute from "./PrivateRoute";
import Loader from "../components/Loader/Loader";
import ErrorPage from "../components/ErrorPage/ErrorPage";
// import { useState } from "react";

// const [details, setDetails] = useState();

// const handleViewDetails = () => {

// }

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <Loader></Loader>,
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
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/purchases",
        element: (
          <PrivateRoute>
            <Purchases></Purchases>
          </PrivateRoute>
        ),
      },
      {
        path: "/toyDetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/Data/toy.json"),
      },
      {
        path: "/forgotPass",
        Component: Forgot,
      },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
