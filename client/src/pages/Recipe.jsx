import { useEffect, useState } from "react";
import "./Recipe.css";

function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("recipe");

    if (data) {
      let text = JSON.parse(data);

      // Remove markdown if AI returns ```json
      text = text.replace(/```json/g, "");
      text = text.replace(/```/g, "");

      const json = JSON.parse(text);

      setRecipe(json);
      const img = localStorage.getItem("uploadedImage");

      if (img) {
        setImage(img);
      }
    }
  }, []);

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

            <li key={index}>{item}</li>

          ))}

        </ul>

        <h2>👨‍🍳 Instructions</h2>

        <ol>

          {recipe.steps.map((step, index) => (

            <li key={index}>{step}</li>

          ))}

        </ol>

        <button className="save-btn">
          ❤️ Save Recipe
        </button>

      </div>

    </div>
  );
}

export default Recipe;