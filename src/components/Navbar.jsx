import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container-fluid container" id="nav-fluid">
        <Link className="navbar-brand" to="/">
          <img className="logo" src="images/antlers.png"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Bicycles
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/road">
                    Road
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/mountain">
                    Mountain
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/urban">
                    Urban
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/gravel">
                    Gravel
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/ebike">
                    e-bike
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="#">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Log in
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
