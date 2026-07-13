import { FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <FaUtensils />
        <span>RecipeAI</span>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <a href="#upload">Upload</a>
        </li>

        <li>
          <a href="#recipes">Recipes</a>
        </li>

        <li>
          <Link to="/myrecipes">My Recipes</Link>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

      {/* Login Button */}
      <button className="login-btn">
        Login
      </button>

    </nav>
  );
}

export default Navbar;