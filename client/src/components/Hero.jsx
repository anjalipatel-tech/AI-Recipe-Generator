import { useNavigate } from "react-router-dom";
import heroVideo from "../assets/hero-video.mp4";

function Hero() {
  const navigate = useNavigate();

  const handleUploadRecipe = () => {
    navigate("/upload-recipe");
  };

  const handleGenerateRecipe = () => {
    const uploadSection = document.querySelector(".upload-section");

    if (uploadSection) {
      uploadSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
  Turn Your <span>Food Image</span>
  <br />
  Into a Delicious Recipe
</h1>

<div className="hero-badge">
    <span className="badge-icon">🍲</span>
    AI Powered Recipe Generator
</div>

        <p>
          Upload a food image and let AI generate the complete recipe
          with ingredients, cooking steps, nutrition facts and cooking time.
        </p>

        <div className="hero-buttons">
          <button
            className="upload-btn"
            onClick={handleGenerateRecipe}
          >
            🚀 Generate Recipe
          </button>

          <button
            className="explore-btn"
            onClick={handleUploadRecipe}
          >
            📤 Upload Your Recipe
          </button>
        </div>
      </div>

     <div className="hero-image">

  <div className="hero-video-frame">

    <video
      className="hero-video"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={heroVideo} type="video/mp4" />
    </video>

  </div>

</div>
    </section>
  );
}

export default Hero;