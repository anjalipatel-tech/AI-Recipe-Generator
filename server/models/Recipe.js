const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    time: String,

    calories: String,

    difficulty: String,

    ingredients: [String],

    steps: [String],
    recipeType: {
  type: String,
  enum: ["ai", "user"],
  default: "user",
},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recipe", recipeSchema);