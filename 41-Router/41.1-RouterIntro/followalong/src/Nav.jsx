import React from 'react'
import { Link } from "react-router-dom";
import './Nav.css'


function Nav() {
  return (
    <div className="Nav">

      <Link className='Nav-Link' to="/">Home</Link>
      <Link className='Nav-Link' to="/about">about</Link>
      <Link className='Nav-Link' to="/pricing">Pricing</Link>
      {/* <NavLink className='Nav-Link' to="/user">user</NavLink> */}
      <Link className='Nav-Link' to="/contact" reloadDocument>contact</Link>

    </div>
  )
}

export default Nav