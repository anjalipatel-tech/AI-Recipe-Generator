import { FaUtensils } from "react-icons/fa";
import {
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlinePhone,
} from "react-icons/hi2";
import { LuBookHeart } from "react-icons/lu";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="logo">
        <FaUtensils />
        <span>RecipeAI</span>
      </Link>

      {/* Navigation */}
      <ul className="nav-links">

        <li>
          <Link to="/">
            <HiOutlineHome />
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link to="/myrecipes">
            <LuBookHeart />
            <span>My Recipes</span>
          </Link>
        </li>

        <li>
          <Link to="/">
            <HiOutlineInformationCircle />
            <span>About</span>
          </Link>
        </li>

        <li>
          <Link to="/">
            <HiOutlinePhone />
            <span>Contact</span>
          </Link>
        </li>

      </ul>

      <button className="login-btn">
        Login
      </button>

    </nav>
  );
}

export default Navbar;