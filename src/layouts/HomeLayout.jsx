import React from "react";
import { Outlet } from "react-router-dom";
import NavbarHome from "../components/NavbarHome";
import Footer from "../components/Footer";

function HomeLayout() {
  return (
    <div>
      <NavbarHome />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomeLayout;
