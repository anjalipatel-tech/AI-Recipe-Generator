import {
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlinePhone,
} from "react-icons/hi2";
import { FaUtensils } from "react-icons/fa";
import { LuBookHeart, LuLogOut } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

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

      {/* Login / Logout */}
      {user ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <span
            style={{
              fontWeight: "600",
              color: "#ff6b35",
            }}
          >
            👤 {user.name}
          </span>

          <button
            className="login-btn"
            onClick={handleLogout}
          >
            <LuLogOut />
            Logout
          </button>
        </div>
      ) : (
        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>
      )}

    </nav>
  );
}

export default Navbar;