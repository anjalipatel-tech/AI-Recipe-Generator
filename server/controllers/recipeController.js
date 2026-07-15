const fs = require("fs");
const Recipe = require("../models/Recipe");
const generateRecipe = require("../services/aiService");

const getRecipe = async (req, res) => {
  try {
    const base64Image = req.file.buffer.toString("base64");

    const result = await generateRecipe(base64Image);

    res.json({
  success: true,
  recipe: result,
});

  }catch (error) {
  console.error("Recipe Error:", error);

  res.status(500).json({
    success: false,
    message: error.message,
    error: error.stack,
  });
}
};

const saveRecipe = async (req, res) => {
  try {
const recipe = new Recipe({
  ...req.body,
  recipeType: "ai",
});
    await recipe.save();

    res.status(201).json({
      success: true,
      message: "Recipe Saved Successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to Save Recipe",
    });
  }
};
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({
  recipeType: "ai",
}).sort({ createdAt: -1 });

    res.json({
      success: true,
      recipes,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to Fetch Recipes",
    });
  }
};
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    res.json({
      success: true,
      recipe,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Recipe Not Found",
    });
  }
};
const deleteRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Recipe Deleted Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to Delete Recipe",
    });
  }
};
module.exports = {
  getRecipe,
  saveRecipe,
  getAllRecipes,
  getRecipeById,
  deleteRecipe,
};