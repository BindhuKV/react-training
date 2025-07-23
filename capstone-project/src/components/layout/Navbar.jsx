import { Link } from 'react-router-dom'
import { useRecipeContext } from '../../context/RecipeContext'
import '../../css/layout/Navbar.css'

function Navbar() {
  const { favorites } = useRecipeContext()
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">Recipe Finder</h2>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="nav-link">Search</Link>
          </li>
          <li className="nav-item">
            <Link to="/favorites" className="nav-link">
              Favorites {favorites.length > 0 && <span className="badge">{favorites.length}</span>}
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar