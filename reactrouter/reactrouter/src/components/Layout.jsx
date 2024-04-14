import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./fotter/Footer";

function Layout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
export default Layout;
