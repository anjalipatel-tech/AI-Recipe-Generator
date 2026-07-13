import { FaUtensils } from "react-icons/fa";

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
        <li>Home</li>
        <li>Upload</li>
        <li>Recipes</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/* Login Button */}
      <button className="login-btn">Login</button>
    </nav>
  );
}

export default Navbar;