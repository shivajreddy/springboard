import { NavLink } from "react-router-dom"
import './Nav.css'

function Nav() {
  return (
    <nav className='Nav'>
      <NavLink className="Nav-Link" to="/">Home</NavLink>
      <NavLink className="Nav-Link" to="/soda">Soda</NavLink>
      <NavLink className="Nav-Link" to="/chips">Chips</NavLink>
      <NavLink className="Nav-Link" to="/chicken">Chicken</NavLink>
    </nav>
  )
}

export default Nav