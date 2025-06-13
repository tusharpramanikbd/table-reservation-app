import React from "react";
import "./Footer.css";
import logo from "../../assets/Logo.svg";

function Footer() {
  return (
    <footer className="footer-bg">
      <div className="footer-container">
        <div className="footer-content">
          <img src={logo} alt="logo" />
          <div>
            <h3
              style={{
                marginBottom: "16px",
              }}
            >
              Contact
            </h3>
            <p>123 Main Street, New York, USA</p>
            <p>1234567890</p>
            <p>example@email.com</p>
          </div>
        </div>
        <p>© {new Date().getFullYear()} Little Lemon</p>
      </div>
    </footer>
  );
}

export default Footer;
