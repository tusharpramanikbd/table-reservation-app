import React from "react";
import headerImg from "../../assets/restauranfood.jpg";
import "./Header.css";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router";
import { routes } from "../../constants/routes";

const Header = () => {
  const navigate = useNavigate();

  const handleReservationRedirect = () => {
    navigate(routes.RESERVATION);
  };

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
          <Button
            title="Reserve a Table"
            customStyles={{
              marginTop: "16px",
            }}
            onClick={handleReservationRedirect}
          />
        </div>
        <div className="header-img">
          <img src={headerImg} alt="header-img" />
        </div>
      </div>
    </header>
  );
};

export default Header;
