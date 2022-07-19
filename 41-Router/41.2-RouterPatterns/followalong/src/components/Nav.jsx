import React from "react";
import { NavLink } from "react-router-dom";
import "styles/Nav.css";

function Nav() {
  return (
    // List of nav items
    <div className="Nav">
      <NavLink to="/homepage">HomePage</NavLink>
      <NavLink to="/page1">Page1</NavLink>
      <NavLink to="/page2">Page2</NavLink>
    </div>
  );
}

export default Nav;
