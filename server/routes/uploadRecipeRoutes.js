const express = require("express");
const multer = require("multer");
const {
  uploadRecipe,
  getUploadedRecipes,
} = require("../controllers/uploadRecipeController");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Upload Recipe
router.post("/", upload.single("image"), uploadRecipe);
router.get("/all", getUploadedRecipes);

module.exports = router;