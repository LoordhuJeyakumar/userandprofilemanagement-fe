import React from "react";
import { Link, NavLink } from "react-router-dom";

function SideNavbar({ closeSidebar }) {
  return (
    <aside className="left-sidebar ">
      <div className="brand-logo d-flex align-items-center justify-content-between">
        <div className="w-100 d-flex justify-content-center">
          <Link to={"/dashboard"} className="text-nowrap logo-img ms-0 ms-md-1">
            <lord-icon
              src="https://cdn.lordicon.com/xcxzayqr.json"
              trigger="loop"
              delay="2000"
              stroke="bold"
              state="hover-looking-around"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
          </Link>
        </div>
        <div
          className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
          id="sidebarCollapse"
          onClick={closeSidebar}
        >
          {/* Close icon */}
          <i className="fa fa-close" aria-hidden="true"></i>
        </div>
      </div>
      {/*   <!-- Sidebar scroll--> */}

      <div className="simplebar-wrapper" style={{ margin: " 0px -16px" }}>
        {/*   <!-- Sidebar navigation--> */}
        <nav className="sidebar-nav">
          <ul id="sidebarnav" className="mb-0 in">
            {/*   <!-- ============================= -->
            <!-- Home -->
            <!-- ============================= --> */}
            <li className="nav-small-cap text-center">
              <span className="hide-menu text-center">
                User Management System
              </span>
              <hr />
            </li>
            <li className="sidebar-item ">
              <NavLink
                className="sidebar-link sidebar-link primary-hover-bg "
                aria-expanded="false"
                to={"/dashboard"}
              >
                <span className="aside-icon p-2 bg-light-primary rounded-1">
                  <i className="bi bi-columns-gap"></i>
                </span>
                <span className="hide-menu ps-1">Dashboard</span>
              </NavLink>
            </li>

            {/*   <!-- ============================= -->
            <!-- UI Componenst -->
            <!-- ============================= --> */}
            <li className="nav-small-cap text-center">
              <span className=" text-center">Profile</span>
              <hr className="m-0" />
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link sidebar-link primary-hover-bg"
                aria-expanded="false"
                to={"/profile"}
              >
                <span className="aside-icon p-2 bg-light-primary rounded-1">
                  <i className="bi bi-person-lines-fill"></i>
                </span>
                <span className="hide-menu ps-1">Profile Details</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link sidebar-link primary-hover-bg"
                aria-expanded="false"
                to={"/edit-profile"}
              >
                <span className="aside-icon p-2 bg-light-primary rounded-1">
                  <i className="bi bi-pencil-square"></i>
                </span>
                <span className="hide-menu ps-1">Edit Profile</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default SideNavbar;
