const Recipe = require("../models/Recipe");

const uploadRecipe = async (req, res) => {
  try {
    const {
      name,
      time,
      calories,
      difficulty,
      ingredients,
      steps,
    } = req.body;

    // Image URL
    const image = `http://localhost:5000/uploads/${req.file.filename}`;

    const recipe = new Recipe({
      name,
      image,
      time,
      calories,
      difficulty,

      // Convert JSON strings back to arrays
      ingredients: JSON.parse(ingredients),
      steps: JSON.parse(steps),
      recipeType: "user",
    });

    await recipe.save();

    res.status(201).json({
      success: true,
      message: "Recipe Uploaded Successfully",
      recipe,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Upload Failed",
    });
  }
};
const getUploadedRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({
      recipeType: "user",
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      recipes,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to Fetch Uploaded Recipes",
    });
  }
};

module.exports = {
  uploadRecipe,
  getUploadedRecipes,
};