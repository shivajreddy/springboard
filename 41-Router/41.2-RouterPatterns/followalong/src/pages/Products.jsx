import React from 'react';
import { NavLink } from "react-router-dom";

function Products() {
  return (
    <div>
      <h1>All Products:</h1>
      <NavLink to="/product/1">Prodcut1</NavLink>
      <NavLink to="/product/2">Prodcut2</NavLink>
    </div>
  )
}

export default Products