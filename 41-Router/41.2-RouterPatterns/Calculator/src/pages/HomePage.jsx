import React from "react";
import "styles/HomePage.css";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <h1>Home</h1>
      <ul>
        <li>
          <NavLink to="/add/5/7">Add Test 5,7</NavLink>
        </li>
        <li>
          <NavLink to="/subtract/5/7">Subtract Test 5,7</NavLink>
        </li>
        <li>
          <NavLink to="/multiply/5/7">Multiply Test 5,7</NavLink>
        </li>
        <li>
          <NavLink to="/divide/5/7">Divide Test 5,7</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
