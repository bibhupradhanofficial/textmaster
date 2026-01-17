import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";

export default function Navbar(props) {
  let location = useLocation();

  return (
    <nav
      className={`navbar navbar-expand-lg glass-navbar navbar-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/" style={{ fontSize: '1.5rem', letterSpacing: '1px' }}>
          <img
            src={logo}
            alt="Logo"
            height="30px"
            className="d-inline-block align-text-top ms-2 me-2"
          />
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/" ? "active fw-bold" : ""}`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/use-cases" ? "active fw-bold" : ""}`}
                to="/use-cases"
              >
                Use Cases
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/about" ? "active fw-bold" : ""}`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/contact" ? "active fw-bold" : ""}`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div
            className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"
              } mx-4`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
              id="flexSwitchCheckDefault"
              style={{ cursor: 'pointer' }}
            />
            <label
              className="form-check-label fw-bold"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "light"
                ? "Enable Dark Mode"
                : "Disable Dark Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };

Navbar.defaultProps = { title: "Set title here" };
