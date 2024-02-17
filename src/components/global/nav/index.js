import React from "react";
import "./nav.css";
const NavBar = () => {
  return (
    <div className="fcontainer">
      <div className="logo">Logo</div>
      <input class="menu-btn" type="checkbox" id="menu-btn" />

      <ul className="nav">
        <li className="home navlinks">Home</li>
        <li className="services navlinks">Services</li>
        <li className="joinus navlinks">Join Us</li>
        <li className="blog navlinks">Blog</li>
        <li className="aboutus navlinks">About Us</li>
        <li className="cocreate">
          <img src="/handshake.png" alt="handshake" className="handshake" />
          <span>CREATE WITH US</span>
        </li>
      </ul>
      <label class="menu-icon" for="menu-btn">
        <span class="navicon"></span>
      </label>
    </div>
  );
};

export default NavBar;
