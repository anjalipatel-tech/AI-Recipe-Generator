import { useEffect, useState } from "react";
import "./UploadRecipe.css";
import api from "../services/api";
import { useNavigate } from "react-router-dom";


function UploadRecipe() {
    const [image, setImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [calories, setCalories] = useState("");
    const [difficulty, setDifficulty] = useState("Easy");

    const [ingredients, setIngredients] = useState([""]);
    const [steps, setSteps] = useState([""]);

    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUploadedRecipes();
    }, []);

    const fetchUploadedRecipes = async () => {
        try {
            const response = await api.get("/upload-recipe/all");

            setRecipes(response.data.recipes);
        } catch (error) {
            console.log(error);
        }
    };

    const handleImage = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        setSelectedFile(file);

        const imageURL = URL.createObjectURL(file);
        setImage(imageURL);
    };
    const addIngredient = () => {
        setIngredients([...ingredients, ""]);
    };
    const removeIngredient = (index) => {
        if (ingredients.length === 1) return;

        const list = [...ingredients];
        list.splice(index, 1);
        setIngredients(list);
    };

    const handleIngredientChange = (index, value) => {
        const list = [...ingredients];
        list[index] = value;
        setIngredients(list);
    };

    const addStep = () => {
        setSteps([...steps, ""]);
    };
    const removeStep = (index) => {
        if (steps.length === 1) return;

        const list = [...steps];
        list.splice(index, 1);
        setSteps(list);
    };

    const handleStepChange = (index, value) => {
        const list = [...steps];
        list[index] = value;
        setSteps(list);
    };
    const handlePublishRecipe = async () => {
        try {
            if (!selectedFile) {
                alert("Please select a recipe image");
                return;
            }

            if (!name.trim()) {
                alert("Please enter recipe name");
                return;
            }

            const formData = new FormData();

            formData.append("image", selectedFile);
            formData.append("name", name);
            formData.append("time", time);
            formData.append("calories", calories);
            formData.append("difficulty", difficulty);
            formData.append("ingredients", JSON.stringify(ingredients));
            formData.append("steps", JSON.stringify(steps));

            const response = await api.post(
                "/upload-recipe",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            if (response.data.success) {
                alert("✅ Recipe Published Successfully");

                fetchUploadedRecipes();

                setImage(null);
                setSelectedFile(null);

                setName("");
                setTime("");
                setCalories("");
                setDifficulty("Easy");

                setIngredients([""]);
                setSteps([""]);
            }

        } catch (error) {
            console.log(error);

            alert("❌ Failed to Publish Recipe");
        }
    };
    const handleViewRecipe = (recipe) => {
        localStorage.setItem("recipe", JSON.stringify(recipe));
        localStorage.setItem("recipeImage", recipe.image);

        navigate("/recipe");
    };

    return (
        <div className="upload-recipe-page">

            <div className="upload-recipe-card">

                <h1>📤 Upload Your Recipe</h1>

                <p>Share your own delicious recipe with everyone.</p>

                {/* Image Upload */}

                <div className="form-group">

                    <label>Recipe Image</label>

                    {image && (
                        <img
                            src={image}
                            alt="Preview"
                            className="recipe-preview"
                        />
                    )}

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImage}
                    />

                </div>

                {/* Recipe Name */}

                <div className="form-group">

                    <label>Recipe Name</label>

                    <input
                        type="text"
                        placeholder="Enter recipe name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                {/* Cooking Time */}

                <div className="form-group">

                    <label>Cooking Time</label>

                    <input
                        type="text"
                        placeholder="Example: 30 Minutes"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />

                </div>

                {/* Calories */}

                <div className="form-group">

                    <label>Calories</label>

                    <input
                        type="text"
                        placeholder="Example: 350 kcal"
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                    />

                </div>

                {/* Difficulty */}

                <div className="form-group">
                    <label>Difficulty</label>

                    <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                    >
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>

                {/* Ingredients */}

                <div className="form-group">

                    <label>🥕 Ingredients</label>

                    {ingredients.map((item, index) => (

                        <div className="dynamic-input" key={index}>

                            <input
                                type="text"
                                placeholder={`Ingredient ${index + 1}`}
                                value={item}
                                onChange={(e) =>
                                    handleIngredientChange(index, e.target.value)
                                }
                            />

                            <button
                                type="button"
                                className="delete-small-btn"
                                onClick={() => removeIngredient(index)}
                            >
                                🗑
                            </button>

                        </div>

                    ))}

                    <button
                        type="button"
                        className="add-btn"
                        onClick={addIngredient}
                    >
                        ➕ Add Ingredient
                    </button>

                </div>

                {/* Instructions */}

                <div className="form-group">

                    <label>👨‍🍳 Instructions</label>

                    {steps.map((step, index) => (

                        <div className="dynamic-input" key={index}>

                            <textarea
                                rows="3"
                                placeholder={`Step ${index + 1}`}
                                value={step}
                                onChange={(e) =>
                                    handleStepChange(index, e.target.value)
                                }
                            />

                            <button
                                type="button"
                                className="delete-small-btn"
                                onClick={() => removeStep(index)}
                            >
                                🗑
                            </button>

                        </div>

                    ))}
                    <button
                        type="button"
                        className="add-btn"
                        onClick={addStep}
                    >
                        ➕ Add Step
                    </button>

                </div>

                <button
                    className="publish-btn"
                    onClick={handlePublishRecipe}
                >
                    📤 Publish Recipe
                </button>
                <hr style={{ margin: "50px 0" }} />

                <h2 className="uploaded-title">🌍 Uploaded Recipes</h2>

                <div className="recipes-grid">

                    {recipes.length === 0 ? (

                        <p>No recipes uploaded yet.</p>

                    ) : (

                        recipes.map((recipe) => (

                            <div className="recipe-card" key={recipe._id}>

                                <img
                                    src={recipe.image}
                                    alt={recipe.name}
                                    className="uploaded-image"
                                />

                                <h3>{recipe.name}</h3>

                                <p>⏱ {recipe.time}</p>

                                <p>🔥 {recipe.calories}</p>

                                <button
                                    className="view-btn"
                                    onClick={() => handleViewRecipe(recipe)}
                                >
                                    👁 View Recipe
                                </button>

                            </div>

                        ))

                    )}

                </div>

            </div>

        </div>
    );
}

export default UploadRecipe;