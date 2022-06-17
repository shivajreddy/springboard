import React from 'react';
import { NavLink } from "react-router-dom";
import './Nav.css';

function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/product">Products</NavLink>
    </nav>
  )
}

export default Nav