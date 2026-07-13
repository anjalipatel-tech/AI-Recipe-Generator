import { useNavigate } from "react-router-dom";

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
          Turn Your Food Image <br />
          Into a Delicious Recipe 🍲
        </h1>

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
        🍕
      </div>
    </section>
  );
}

export default Hero;