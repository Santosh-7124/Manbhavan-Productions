import React from "react";
import Logo from "/Navbar Logo.png";

function Navbar() {
  return (
    <header>
      <img src={Logo} alt="Manbhavan Productions Logo" />
      <nav>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Work</a>
        <a href="#">Service</a>
      </nav>
      <a href="#" className="navbar-button">
        <p>Let’s Talk</p>
      </a>
    </header>
  );
}

export default Navbar;
