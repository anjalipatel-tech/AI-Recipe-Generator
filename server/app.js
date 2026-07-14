const express = require("express");
const cors = require("cors");
require("dotenv").config();

const uploadRoutes = require("./routes/uploadRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const uploadRecipeRoutes = require("./routes/uploadRecipeRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);

app.use("/api/upload", uploadRoutes);
app.use("/api/recipe", recipeRoutes);
app.use("/api/upload-recipe", uploadRecipeRoutes);

app.get("/", (req, res) => {
  res.send("RecipeAI Backend Running 🚀");
});

module.exports = app;