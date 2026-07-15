const express = require("express");
const multer = require("multer");

const {
  getRecipe,
  saveRecipe,
  getAllRecipes,
  deleteRecipe,
} = require("../controllers/recipeController");

const router = express.Router();

// ✅ Railway Friendly
const upload = multer({
  storage: multer.memoryStorage(),
});

// Generate Recipe
router.post("/", upload.single("image"), getRecipe);

// Save Recipe
router.post("/save", saveRecipe);

// Get All Recipes
router.get("/all", getAllRecipes);

// Delete Recipe
router.delete("/:id", deleteRecipe);

module.exports = router;