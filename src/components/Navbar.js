import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu } from "react-icons/fi";
import logo from "../images/logo.png";

export default function Navbar(props) {
  let location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className={`navbar navbar-expand-lg navbar-custom sticky-top`}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <motion.img
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            src={logo}
            alt="Logo"
            height="35"
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
          <FiMenu size={24} color={props.mode === 'dark' ? 'white' : 'black'} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            {['Home', 'Use Cases', 'About', 'Contact'].map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
              return (
                <li className="nav-item" key={item}>
                  <Link
                    className={`nav-link ${location.pathname === path ? "active" : ""}`}
                    to={path}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
          
          <div className="d-flex align-items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ rotate: 15 }}
              className="theme-toggle"
              onClick={props.toggleMode}
              aria-label="Toggle Theme"
            >
              {props.mode === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };
Navbar.defaultProps = { title: "Set title here" };
