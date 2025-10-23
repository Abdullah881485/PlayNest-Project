import React from "react";
import Header from "../../components/Header/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

const Root = () => {
  const { state } = useNavigation();
  return (
    <div>
      <Header></Header>
      <main>{state == "loading" ? <Loader></Loader> : <Outlet></Outlet>}</main>
      <Footer></Footer>
    </div>
  );
};

export default Root;
