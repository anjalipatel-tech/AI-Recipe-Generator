import {
  FaRobot,
  FaLeaf,
  FaClock,
  FaHeart,
} from "react-icons/fa";

function Features() {
  return (
    <section className="features">

      <h2>Why Choose RecipeAI?</h2>

      <p className="feature-subtitle">
        Smart features that make cooking easier and faster.
      </p>

      <div className="feature-grid">

        <div className="feature-card">
          <FaRobot className="feature-icon" />
          <h3>AI Powered</h3>
          <p>Generate recipes instantly using Artificial Intelligence.</p>
        </div>

        <div className="feature-card">
          <FaLeaf className="feature-icon" />
          <h3>Nutrition Facts</h3>
          <p>Know calories, protein, carbs and fats of your meal.</p>
        </div>

        <div className="feature-card">
          <FaClock className="feature-icon" />
          <h3>Cooking Time</h3>
          <p>Get estimated cooking time for every recipe.</p>
        </div>

        <div className="feature-card">
          <FaHeart className="feature-icon" />
          <h3>Save Favorites</h3>
          <p>Save your favorite recipes and access them anytime.</p>
        </div>

      </div>

    </section>
  );
}

export default Features;