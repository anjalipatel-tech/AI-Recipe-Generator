const axios = require("axios");
require("dotenv").config();

async function generateRecipe(base64Image) {
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "google/gemini-2.5-flash",

        // IMPORTANT
        max_tokens: 1000,

        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `
Analyze the food image carefully.

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
              {
                type: "image_url",
                image_url: {
                  url: `data:image/jpeg;base64,${base64Image}`,
                },
              },
            ],
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:5173",
          "X-Title": "Recipe AI",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(
      "OpenRouter Error:",
      error.response?.data || error.message
    );
    throw error;
  }
}

module.exports = generateRecipe;