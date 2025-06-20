import { NavLink } from 'react-router-dom'
import '../css/Navigation.css'

const Navigation = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <NavLink to="/user/1">User 1</NavLink>
  </nav>
)

export default Navigation