import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Root;
