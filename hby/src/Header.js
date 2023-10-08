
import React from "react";
import "./Header.css"; 
import sun from '../../images/sun1.webp';


const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img
          src= {sun} 
          alt="NASA Logo"
          className="header-logo"
        />
        <h1 className="header-title">NASA Heliophysics Citizen Science Projects</h1>
        <p className="header-description">
          Join us in exploring the solar universe and contributing to real science!
        </p>
      </div>
    </header>
  );
};

export default Header;
