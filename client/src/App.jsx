import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import MyRecipes from "./pages/MyRecipes";
import UploadRecipe from "./pages/UploadRecipe";

import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/recipe" element={<Recipe />} />

        <Route path="/myrecipes" element={<MyRecipes />} />

        <Route path="/upload-recipe" element={<UploadRecipe />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;