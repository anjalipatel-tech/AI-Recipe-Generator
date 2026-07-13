const fs = require("fs");
require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateRecipe(imagePath) {
  const imageBytes = fs.readFileSync(imagePath);

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",

    contents: [
      {
        inlineData: {
          data: imageBytes.toString("base64"),
          mimeType: "image/jpeg",
        },
      },

      {
        text: `
You are a professional chef.

Look at this food image.

Return ONLY valid JSON.

{
  "name":"",
  "time":"",
  "calories":"",
  "difficulty":"",
  "ingredients":[],
  "steps":[]
}
`,
      },
    ],
  });

  return response.text;
}

module.exports = generateRecipe;