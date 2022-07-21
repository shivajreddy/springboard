import React from "react";
import { NavLink } from "react-router-dom";
import "styles/Nav.css";

function Nav() {
  return (
    // List of nav items
    <div className="Nav">
      <NavLink to="/colors">Colors</NavLink>
    </div>
  );
}

export default Nav;
