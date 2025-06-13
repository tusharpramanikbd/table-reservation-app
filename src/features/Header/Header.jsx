import React from "react";
import headerImg from "../../assets/restauranfood.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="header-text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </div>
        <div className="header-img">
          <img src={headerImg} alt="header-img" />
        </div>
      </div>
    </header>
  );
};

export default Header;
