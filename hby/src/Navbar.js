import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
      <ul>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/know" className="link">
            Know More
          </Link>
        </li>
        <li>
          <Link to="/projects" className="link">
            Projects
          </Link>
        </li>
      </ul>
  );
};

export default Navbar;
