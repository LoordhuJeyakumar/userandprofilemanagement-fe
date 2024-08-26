import React from "react";
import { NavLink } from "react-router-dom";

function NavbarHome() {
  return (
    <header className="home-page mx-auto mt-3">
      <nav className="navbar p-2 navbar-expand-lg">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav    ">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/">
                Register &nbsp;
                <i className="fa fa-user-plus" aria-hidden="true"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login &nbsp;
                <i className="fa fa-sign-in" aria-hidden="true"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About &nbsp;
                <i className="fa fa-info-circle" aria-hidden="true"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavbarHome;
