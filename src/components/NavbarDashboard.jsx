import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/userService";

function NavbarDashboard({ openSidebar }) {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  const handleLogout = () => {
    logout();
    navigate("/login  ");
  };
  return (
    <header className="app-header">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <ul className="navbar-nav">
          <li className="nav-item d-block d-xl-none">
            <button
              className="nav-link sidebartoggler nav-icon-hover "
              onClick={openSidebar}
            >
              {/* Menu Icon */}
              <i className="bi bi-menu-button-wide"></i>
            </button>
          </li>
        </ul>

        <div
          className="navbar-collapse justify-content-end px-0 "
          id="navbarNav"
        >
          <h3 className="text-center w-100">
            Welcome Back, {user.username}! &nbsp;
          </h3>

          <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
            <li className="nav-item dropdown">
              <button
                className="btn btn-secondary btn-sm btn-rounded d-flex align-items-center me-3 fw-bold "
                onClick={handleLogout}
              >
                Logout &nbsp; <i className="bi bi-box-arrow-right"></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavbarDashboard;
