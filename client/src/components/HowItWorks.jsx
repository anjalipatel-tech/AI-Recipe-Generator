import { FaCloudUploadAlt, FaRobot, FaUtensils } from "react-icons/fa";

function HowItWorks() {
  return (
    <section className="how-it-works">

      <h2>How It Works</h2>

      <p className="how-subtitle">
        It's as easy as 1 - 2 - 3
      </p>

      <div className="steps">

        <div className="step-card">
          <FaCloudUploadAlt className="step-icon" />
          <h3>Upload Image</h3>
          <p>Choose a food image from your device.</p>
        </div>

        <div className="step-card">
          <FaRobot className="step-icon" />
          <h3>AI Analysis</h3>
          <p>AI detects the food and identifies ingredients.</p>
        </div>

        <div className="step-card">
          <FaUtensils className="step-icon" />
          <h3>Get Recipe</h3>
          <p>Receive a complete recipe with nutrition facts.</p>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;