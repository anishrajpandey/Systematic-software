import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="fcontainer">
      <h2 className="logo">Logo</h2>
      <input className="menu-btn" type="checkbox" id="menu-btn" />

      <ul className="nav">
        <Link style={{ textDecoration: "none" }} to="/">
          <li className="home navlinks">Home</li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/about">
          <li className="aboutus navlinks">About Us</li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/services">
          <li className="services navlinks">Services</li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/career">
          <li className="joinus navlinks">Join Us</li>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/contact">
          <li className="contact navlinks">Contact</li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cocreate">
          <li className="cocreate">
            <img src="/handshake.png" alt="handshake" className="handshake" />
            <div>CREATE WITH US</div>
          </li>
        </Link>
      </ul>
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
    </div>
  );
};

export default NavBar;
