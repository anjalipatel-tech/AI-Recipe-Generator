const fs = require("fs");
const generateRecipe = require("../services/aiService");

const getRecipe = async (req, res) => {
  try {
    const image = fs.readFileSync(req.file.path).toString("base64");

    const recipe = await generateRecipe(image);

    res.json({
      success: true,
      recipe,
    });

  } catch (error) {
    console.error(error.response?.data || error);

    res.status(500).json({
      success: false,
      message: "Recipe Generation Failed",
    });
  }
};

module.exports = { getRecipe };