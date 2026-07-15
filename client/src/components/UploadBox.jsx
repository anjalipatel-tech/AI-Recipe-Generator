import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function UploadBox() {
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null); const navigate = useNavigate();

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedFile(file);

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);

      // Save Base64 image
      localStorage.setItem("uploadedImage", reader.result);
    };

    reader.readAsDataURL(file);
  };
  const handleGenerateRecipe = async () => {
    if (!selectedFile) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await api.post("/recipe", formData);

      console.log(response.data);

      localStorage.setItem(
        "recipe",
        JSON.stringify(response.data.recipe)
      );

      localStorage.setItem(
  "recipeImage",
  localStorage.getItem("uploadedImage")
);

      navigate("/recipe");

    } catch (error) {
      console.error(error);
      alert("Recipe Generation Failed");
    }
  };

  return (
    <section className="upload-section">

      <h2>Upload Your Food Image</h2>

      <p>
        Drag & Drop your image here or click below.
      </p>

      <div className="upload-box">

        {image ? (
          <img
            src={image}
            alt="preview"
            className="preview-image"
          />
        ) : (
          <>
            <FaCloudUploadAlt className="upload-icon" />

            <h3>Drop Image Here</h3>

            <p>Supports JPG, PNG and JPEG</p>
          </>
        )}

        <label className="upload-label">
          Select Image

          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImage}
          />
        </label>

        {image && (
          <button
            className="generate-btn"
            onClick={handleGenerateRecipe}
          >
            Generate Recipe
          </button>
        )}

      </div>

    </section>
  );
}

export default UploadBox;