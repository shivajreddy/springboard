import React from "react";
import { Link } from "react-router-dom";
import "styles/Nav.css";

function Nav() {
  return (
    // List of nav items
    <div className="Nav">
      <Link to="/homepage">HomePage</Link>
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link>
    </div>
  );
}

export default Nav;
