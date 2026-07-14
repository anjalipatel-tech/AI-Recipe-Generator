import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="about">

      <div className="footer-container">

        {/* Logo */}
        <div className="footer-about">
          <h2>🍽️ RecipeAI</h2>

          <p>
            Upload a food image and let AI generate
            delicious recipes with ingredients,
            cooking steps and nutrition facts.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Recipes</li>
            <li>Upload</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact" id="contact">
          <h3>Contact</h3>

          <p>Email : support@recipeai.com</p>
          <p>Phone : +91 9876543210</p>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaGithub />
          </div>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 RecipeAI | All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;