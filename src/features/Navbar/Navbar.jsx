import React from "react";
import logo from "../../assets/Logo.svg";
import basket from "../../assets/Basket.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Reservations</a>
        </li>
        <li>
          <a href="/" className="order-online-link">
            Order Online
          </a>
        </li>
        <li>
          <img src={basket} alt="basket" className="basket-icon" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
