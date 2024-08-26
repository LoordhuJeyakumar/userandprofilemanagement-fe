import React from "react";
import { Link } from "react-router-dom";

function SideNavbar({ closeSidebar }) {
  return (
    <>
      {/*  <!-- Sidebar Start --> */}
      <aside className="left-sidebar">
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <div className="w-100 d-flex justify-content-center">
            <Link
              to={"/dashboard"}
              className="text-nowrap logo-img ms-0 ms-md-1"
            >
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
          <div
            className="simplebar-content-wrapper"
            tabIndex="0"
            role="region"
            aria-label="scrollable content"
            style={{ height: "100%", overflow: "hidden" }}
          >
            {/*   <!-- Sidebar navigation--> */}
            <nav className="sidebar-nav">
              <ul id="sidebarnav" className="mb-0 in">
                {/*   <!-- ============================= -->
            <!-- Home -->
            <!-- ============================= --> */}
                <li className="nav-small-cap text-center">
                  <i className="ti ti-dots nav-small-cap-icon fs-5"></i>
                  <span className="hide-menu text-center">
                    User Management System
                  </span>
                </li>
                <li className="sidebar-item selected">
                  <a
                    className="sidebar-link sidebar-link primary-hover-bg active"
                    href="./index.html"
                    aria-expanded="false"
                  >
                    <span className="aside-icon p-2 bg-light-primary rounded-1">
                      <i className="ti ti-layout-dashboard fs-7"></i>
                    </span>
                    <span className="hide-menu ps-1">Dashboard</span>
                  </a>
                </li>

                {/*   <!-- ============================= -->
            <!-- UI Componenst -->
            <!-- ============================= --> */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-5"></i>
                  <span className="hide-menu">Profile</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link sidebar-link primary-hover-bg"
                    href="./ui-buttons.html"
                    aria-expanded="false"
                  >
                    <span className="aside-icon p-2 bg-light-primary rounded-1">
                      <i className="ti ti-article fs-7"></i>
                    </span>
                    <span className="hide-menu ps-1">Buttons</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link sidebar-link primary-hover-bg"
                    href="./ui-alerts.html"
                    aria-expanded="false"
                  >
                    <span className="aside-icon p-2 bg-light-primary rounded-1">
                      <i className="ti ti-alert-circle fs-7"></i>
                    </span>
                    <span className="hide-menu ps-1">Alerts</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link sidebar-link primary-hover-bg"
                    href="./ui-card.html"
                    aria-expanded="false"
                  >
                    <span className="aside-icon p-2 bg-light-primary rounded-1">
                      <i className="ti ti-cards fs-7"></i>
                    </span>
                    <span className="hide-menu ps-1">Card</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/*   <!-- End Sidebar scroll--> */}
      </aside>
      {/*    <!--  Sidebar End -->
    <!--  Main wrapper --> */}
    </>
  );
}

export default SideNavbar;
