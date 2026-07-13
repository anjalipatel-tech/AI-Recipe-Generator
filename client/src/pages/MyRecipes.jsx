import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./MyRecipes.css";

function MyRecipes() {
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await api.get("/recipe/all");
            setRecipes(response.data.recipes);
        } catch (error) {
            console.log(error);
            alert("Failed to load recipes");
        }
    };

    const handleViewRecipe = (recipe) => {
        localStorage.setItem("recipe", JSON.stringify(recipe));
        localStorage.setItem("recipeImage", recipe.image);

        navigate("/recipe");
    };
    const handleDeleteRecipe = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this recipe?"
        );

        if (!confirmDelete) return;

        try {
            await api.delete(`/recipe/${id}`);

            setRecipes((prevRecipes) =>
                prevRecipes.filter((recipe) => recipe._id !== id)
            );

            alert("✅ Recipe Deleted Successfully");
        } catch (error) {
            console.log(error);

            alert("❌ Failed to Delete Recipe");
        }
    };

    return (
        <div className="my-recipes-page">
            <h1>🍽 My Saved Recipes</h1>

            {recipes.length === 0 ? (
                <h2 style={{ textAlign: "center" }}>
                    No Saved Recipes Found
                </h2>
            ) : (
                <div className="recipes-grid">
                    {recipes.map((recipe) => (
                        <div className="recipe-card" key={recipe._id}>
                            <img
                                src={recipe.image}
                                alt={recipe.name}
                            />

                            <h2>{recipe.name}</h2>

                            <p>⏱ {recipe.time}</p>

                            <p>🔥 {recipe.calories}</p>

                            <button
                                onClick={() => handleViewRecipe(recipe)}
                            >
                                👁 View Recipe
                            </button>

                            <button
                                className="delete-btn"
                                onClick={() => handleDeleteRecipe(recipe._id)}
                            >
                                🗑 Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MyRecipes;