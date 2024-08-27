import React, { useState } from "react";
import NavbarDashboard from "../components/NavbarDashboard";
import { Outlet } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";
import Footer from "../components/Footer";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div
      className={
        sidebarOpen ? "page-wrapper show-sidebar mini-sidebar" : "page-wrapper "
      }
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin6"
      data-sidebartype={!sidebarOpen ? "full" : "mini-sidebar"}
      data-sidebar-position="fixed"
      data-header-position="fixed"
    >
      <SideNavbar closeSidebar={closeSidebar} />
      <div className="body-wrapper">
        <div className="container-fluid">
          <NavbarDashboard openSidebar={openSidebar} />
          <Outlet />
          <Footer />
        </div>
      </div>
      <div className="dark-transparent sidebartoggler"></div>
    </div>
  );
}

export default DashboardLayout;
