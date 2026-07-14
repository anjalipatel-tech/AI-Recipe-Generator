import { useEffect, useState } from "react";
import "./Recipe.css";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
  const data = localStorage.getItem("recipe");

  if (!data) return;

  const parsed = JSON.parse(data);

  // If recipe came from AI (string)
  if (typeof parsed === "string") {
    let text = parsed
      .replace(/```json/g, "")
      .replace(/```/g, "");

    setRecipe(JSON.parse(text));
  }
  // If recipe came from MongoDB (object)
  else {
    setRecipe(parsed);
  }

  const img = localStorage.getItem("recipeImage");

  if (img) {
    setImage(img);
  }
}, []);
  const handleSaveRecipe = async () => {
    try {
      await api.post("/recipe/save", {
        ...recipe,
        image: localStorage.getItem("recipeImage"),
      });

      alert("✅ Recipe Saved Successfully");
    } catch (error) {
      console.log(error);

      alert("❌ Failed to Save Recipe");
    }
  };

  if (!recipe) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div className="recipe-page">

      <div className="recipe-details-card">

        <img
          src={image}
          alt="Food"
          className="recipe-image"
        />

        <h1>{recipe.name}</h1>

        <div className="recipe-info">

          <span>⏱ {recipe.time}</span>

          <span>🔥 {recipe.calories}</span>

          <span>⭐ {recipe.difficulty}</span>

        </div>

        <h2>🥕 Ingredients</h2>

        <ul>

          {recipe.ingredients.map((item, index) => (

            <li key={index}>🥕 {item}</li>

          ))}

        </ul>

        <h2>👨‍🍳 Instructions</h2>

        <ol>

          {recipe.steps.map((step, index) => (

            <li key={index}>🍳 {step}</li>

          ))}

        </ol>

        <button
          className="save-btn"
          onClick={handleSaveRecipe}
        >
          ❤️ Save Recipe
        </button>

      </div>

    </div>
  );
}

export default Recipe;