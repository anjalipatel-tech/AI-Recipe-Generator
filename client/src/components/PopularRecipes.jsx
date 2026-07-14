import { useState } from "react";
import {
  FaStar,
  FaClock,
  FaFire,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "./PopularRecipes.css";

const recipes = [
  {
    id: 1,
    name: "Margherita Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1000",
    rating: "4.9",
    time: "25 min",
    calories: "420 kcal",
  },
  {
    id: 2,
    name: "Cheese Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000",
    rating: "4.8",
    time: "18 min",
    calories: "540 kcal",
  },
  {
    id: 3,
    name: "Italian Pasta",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1000",
    rating: "4.7",
    time: "30 min",
    calories: "390 kcal",
  },
  {
    id: 4,
    name: "Healthy Salad",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000",
    rating: "4.9",
    time: "12 min",
    calories: "210 kcal",
  },
  {
    id: 5,
    name: "Butter Chicken",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=1000",
    rating: "4.9",
    time: "40 min",
    calories: "610 kcal",
  },
  {
    id: 6,
    name: "Chicken Biryani",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=1000&auto=format&fit=crop",
    rating: "4.8",
    time: "45 min",
    calories: "650 kcal",
  },
  {
    id: 7,
    name: "Paneer Tikka",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=1000",
    rating: "4.8",
    time: "35 min",
    calories: "430 kcal",
  },
  {
    id: 8,
    name: "Momos",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=1000&auto=format&fit=crop",
    rating: "4.7",
    time: "20 min",
    calories: "310 kcal",
  },
  {
    id: 9,
    name: "Tacos",
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=1000",
    rating: "4.8",
    time: "18 min",
    calories: "330 kcal",
  },
  {
    id: 10,
    name: "Fried Rice",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=1000",
    rating: "4.7",
    time: "20 min",
    calories: "410 kcal",
  },
  {
    id: 11,
    name: "Noodles",
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=1000",
    rating: "4.8",
    time: "22 min",
    calories: "390 kcal",
  },
  {
    id: 12,
    name: "Sandwich",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=1000",
    rating: "4.6",
    time: "10 min",
    calories: "280 kcal",
  },
  {
    id: 13,
    name: "Pancakes",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=1000",
    rating: "4.9",
    time: "15 min",
    calories: "360 kcal",
  },
  {
    id: 14,
    name: "Chocolate Donut",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1000",
    rating: "4.8",
    time: "12 min",
    calories: "420 kcal",
  },
  {
    id: 15,
    name: "Ice Cream",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1000",
    rating: "4.9",
    time: "5 min",
    calories: "300 kcal",
  },
  {
    id: 16,
    name: "Brownie",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1000",
    rating: "4.9",
    time: "25 min",
    calories: "480 kcal",
  },
  {
    id: 17,
    name: "Caesar Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1000",
    rating: "4.7",
    time: "15 min",
    calories: "220 kcal",
  },
  {
    id: 18,
    name: "Ramen",
    image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=1000",
    rating: "4.8",
    time: "30 min",
    calories: "520 kcal",
  },
  {
    id: 19,
    name: "Spring Rolls",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1000&auto=format&fit=crop",
    rating: "4.7",
    time: "18 min",
    calories: "290 kcal",
  },
  {
    id: 20,
    name: "Sushi",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1000",
    rating: "4.9",
    time: "25 min",
    calories: "340 kcal",
  },
];

function PopularRecipes() {
  const [page, setPage] = useState(0);

const recipesPerPage = 4;

const totalPages = Math.ceil(recipes.length / recipesPerPage);

const visibleRecipes = recipes.slice(
  page * recipesPerPage,
  page * recipesPerPage + recipesPerPage
);
  return (
    <section className="popular-section">

      <span className="popular-tag">
        TRENDING RECIPES
      </span>

      <h2 className="popular-heading">
        🔥 Popular Recipes
      </h2>

      <p className="popular-description">
        Discover the most loved recipes crafted by
        our AI and loved by thousands of food lovers.
      </p>
      <div className="popular-slider-header">

  <button
    className="popular-arrow"
    onClick={() =>
      setPage((prev) =>
        prev === 0 ? totalPages - 1 : prev - 1
      )
    }
  >
    ❮
  </button>

  <button
    className="popular-arrow"
    onClick={() =>
      setPage((prev) =>
        prev === totalPages - 1 ? 0 : prev + 1
      )
    }
  >
    ❯
  </button>

</div>

      <div className="popular-grid">

        {visibleRecipes.map((recipe) => (

          <div className="popular-card" key={recipe.id}>

            <div className="popular-image-box">

              <img
                src={recipe.image}
                alt={recipe.name}
                className="popular-image"
              />

              <span className="popular-rating">
                <FaStar />
                {recipe.rating}
              </span>

            </div>

            <div className="popular-content">

              <h3>{recipe.name}</h3>

              <div className="popular-info">

                <span>
                  <FaClock />
                  {recipe.time}
                </span>

                <span>
                  <FaFire />
                  {recipe.calories}
                </span>

              </div>

              <button className="popular-btn">

                View Recipe

                <FaArrowRight />

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default PopularRecipes;