const express = require("express");
const cors = require("cors");
require("dotenv").config();

const uploadRoutes = require("./routes/uploadRoutes");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/upload", uploadRoutes);
app.use("/api/recipe", recipeRoutes);

app.get("/", (req, res) => {
  res.send("RecipeAI Backend Running 🚀");
});

module.exports = app;