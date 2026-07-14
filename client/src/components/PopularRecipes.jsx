import { useNavigate } from "react-router-dom";
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
    difficulty: "Easy",
    ingredients: [
      "1 Pizza Dough",
      "1/2 Cup Tomato Sauce",
      "200g Mozzarella Cheese",
      "Fresh Basil Leaves",
      "1 tbsp Olive Oil",
      "Salt",
      "Oregano"
    ],
    steps: [
      "Preheat the oven to 220°C.",
      "Spread tomato sauce evenly on the pizza dough.",
      "Add mozzarella cheese on top.",
      "Bake for 15–18 minutes until golden.",
      "Garnish with basil leaves and oregano.",
      "Drizzle olive oil before serving."
    ]
  },
  {
    id: 2,
    name: "Cheese Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000",
    rating: "4.8",
    time: "18 min",
    calories: "540 kcal",
    difficulty: "Easy",
    ingredients: [
      "2 Burger Buns",
      "1 Chicken/Vegetable Patty",
      "2 Cheese Slices",
      "Lettuce",
      "Tomato",
      "Onion",
      "Mayonnaise",
      "Tomato Ketchup"
    ],
    steps: [
      "Toast the burger buns.",
      "Cook the patty until golden brown.",
      "Place lettuce on the bun.",
      "Add the patty and cheese slice.",
      "Add tomato and onion slices.",
      "Spread mayonnaise and ketchup.",
      "Cover with the top bun and serve."
    ]
  },
  {
    id: 3,
    name: "Italian Pasta",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1000",
    rating: "4.7",
    time: "30 min",
    calories: "390 kcal",
    difficulty: "Medium",
    ingredients: [
      "250g Pasta",
      "2 tbsp Olive Oil",
      "4 Garlic Cloves",
      "1 Cup Tomato Sauce",
      "Italian Herbs",
      "Parmesan Cheese",
      "Salt",
      "Black Pepper"
    ],
    steps: [
      "Boil pasta until al dente.",
      "Heat olive oil in a pan.",
      "Saute garlic until fragrant.",
      "Add tomato sauce and herbs.",
      "Mix cooked pasta into the sauce.",
      "Sprinkle parmesan cheese.",
      "Serve hot."
    ]
  },
  {
    id: 4,
    name: "Healthy Salad",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000",
    rating: "4.9",
    time: "12 min",
    calories: "210 kcal",
    difficulty: "Easy",
    ingredients: [
      "Lettuce",
      "Cucumber",
      "Tomatoes",
      "Carrot",
      "Sweet Corn",
      "Olive Oil",
      "Lemon Juice",
      "Salt",
      "Black Pepper"
    ],
    steps: [
      "Wash all vegetables properly.",
      "Chop lettuce, cucumber and tomatoes.",
      "Grate carrot.",
      "Mix everything in a bowl.",
      "Add sweet corn.",
      "Season with salt, pepper and lemon juice.",
      "Drizzle olive oil and serve."
    ]
  },
  {
    id: 5,
    name: "Butter Chicken",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=1000",
    rating: "4.9",
    time: "40 min",
    calories: "610 kcal",
    difficulty: "Medium",
    ingredients: [
      "500g Chicken",
      "2 tbsp Butter",
      "1 Cup Tomato Puree",
      "Fresh Cream",
      "Ginger Garlic Paste",
      "Red Chili Powder",
      "Garam Masala",
      "Salt",
      "Coriander Leaves"
    ],
    steps: [
      "Marinate chicken with spices.",
      "Cook chicken until golden.",
      "Prepare butter tomato gravy.",
      "Add cooked chicken to gravy.",
      "Cook for 10 minutes.",
      "Add fresh cream.",
      "Garnish with coriander leaves and serve with naan."
    ]
  },
  {
    id: 6,
    name: "Chicken Biryani",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=1000&auto=format&fit=crop",
    rating: "4.8",
    time: "45 min",
    calories: "650 kcal",
    difficulty: "Hard",
    ingredients: [
      "500g Chicken",
      "2 Cups Basmati Rice",
      "2 Onions",
      "2 Tomatoes",
      "1 Cup Yogurt",
      "Ginger Garlic Paste",
      "Biryani Masala",
      "Mint Leaves",
      "Coriander Leaves",
      "Saffron Milk",
      "Oil",
      "Salt"
    ],
    steps: [
      "Wash and soak basmati rice for 30 minutes.",
      "Marinate chicken with yogurt and spices.",
      "Cook onions until golden brown.",
      "Add tomatoes and marinated chicken.",
      "Cook until chicken becomes tender.",
      "Boil rice until 70% cooked.",
      "Layer rice and chicken in a pot.",
      "Add saffron milk and fried onions.",
      "Cover and cook on low flame for 20 minutes.",
      "Serve hot with raita."
    ]
  },
  {
    id: 7,
    name: "Paneer Tikka",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=1000",
    rating: "4.8",
    time: "35 min",
    calories: "430 kcal",
    difficulty: "Medium",
    ingredients: [
      "250g Paneer",
      "Capsicum",
      "Onion",
      "Yogurt",
      "Red Chili Powder",
      "Turmeric",
      "Garam Masala",
      "Lemon Juice",
      "Oil",
      "Salt"
    ],
    steps: [
      "Prepare marinade using yogurt and spices.",
      "Cut paneer and vegetables into cubes.",
      "Mix everything with the marinade.",
      "Keep aside for 20 minutes.",
      "Arrange on skewers.",
      "Grill for 15 minutes.",
      "Brush with butter.",
      "Serve with green chutney."
    ]
  },
  {
    id: 8,
    name: "Momos",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=1000&auto=format&fit=crop",
    rating: "4.7",
    time: "20 min",
    calories: "310 kcal",
    difficulty: "Medium",
    ingredients: [
      "Momo Wrappers",
      "Chicken/Vegetable Filling",
      "Onion",
      "Garlic",
      "Ginger",
      "Soy Sauce",
      "Black Pepper",
      "Salt"
    ],
    steps: [
      "Prepare the filling.",
      "Place filling inside wrappers.",
      "Fold and seal properly.",
      "Heat water in a steamer.",
      "Steam momos for 12 minutes.",
      "Prepare spicy momo chutney.",
      "Serve hot."
    ]
  },
  {
    id: 9,
    name: "Tacos",
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=1000",
    rating: "4.8",
    time: "18 min",
    calories: "330 kcal",
    difficulty: "Easy",
    ingredients: [
      "Taco Shells",
      "Chicken/Beans",
      "Cheese",
      "Lettuce",
      "Tomato",
      "Onion",
      "Sour Cream",
      "Taco Seasoning"
    ],
    steps: [
      "Cook chicken with taco seasoning.",
      "Warm taco shells.",
      "Fill shells with lettuce.",
      "Add cooked chicken.",
      "Add tomatoes and onions.",
      "Sprinkle cheese.",
      "Top with sour cream.",
      "Serve immediately."
    ]
  },
  {
    id: 10,
    name: "Fried Rice",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=1000",
    rating: "4.7",
    time: "20 min",
    calories: "410 kcal",
    difficulty: "Easy",
    ingredients: [
      "2 Cups Cooked Rice",
      "Carrot",
      "Capsicum",
      "Beans",
      "Spring Onion",
      "Soy Sauce",
      "Black Pepper",
      "Oil",
      "Salt"
    ],
    steps: [
      "Heat oil in a wok.",
      "Stir fry vegetables.",
      "Add cooked rice.",
      "Pour soy sauce.",
      "Mix everything well.",
      "Add pepper and salt.",
      "Garnish with spring onion.",
      "Serve hot."
    ]
  },
  {
    id: 11,
    name: "Noodles",
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=1000",
    rating: "4.8",
    time: "22 min",
    calories: "390 kcal",
    difficulty: "Easy",
    ingredients: [
      "200g Noodles",
      "1 Carrot",
      "1 Capsicum",
      "1 Onion",
      "Spring Onion",
      "2 tbsp Soy Sauce",
      "1 tbsp Chili Sauce",
      "Black Pepper",
      "Oil",
      "Salt"
    ],
    steps: [
      "Boil noodles until soft.",
      "Drain and keep aside.",
      "Heat oil in a wok.",
      "Stir fry onion and vegetables.",
      "Add soy sauce and chili sauce.",
      "Add boiled noodles.",
      "Mix everything well.",
      "Garnish with spring onion.",
      "Serve hot."
    ]
  },
  {
    id: 12,
    name: "Sandwich",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=1000",
    rating: "4.6",
    time: "10 min",
    calories: "280 kcal",
    difficulty: "Easy",
    ingredients: [
      "4 Bread Slices",
      "Butter",
      "Tomato",
      "Cucumber",
      "Onion",
      "Cheese Slice",
      "Mayonnaise",
      "Black Pepper",
      "Salt"
    ],
    steps: [
      "Apply butter on bread slices.",
      "Spread mayonnaise evenly.",
      "Arrange tomato, cucumber and onion slices.",
      "Place cheese slice on top.",
      "Sprinkle salt and pepper.",
      "Cover with another bread slice.",
      "Toast if desired.",
      "Cut into halves and serve."
    ]
  },
  {
    id: 13,
    name: "Pancakes",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=1000",
    rating: "4.9",
    time: "15 min",
    calories: "360 kcal",
    difficulty: "Easy",
    ingredients: [
      "1 Cup Flour",
      "1 Egg",
      "1 Cup Milk",
      "2 tbsp Sugar",
      "1 tsp Baking Powder",
      "Butter",
      "Vanilla Essence",
      "Maple Syrup"
    ],
    steps: [
      "Mix flour, sugar and baking powder.",
      "Add egg and milk.",
      "Mix until smooth batter forms.",
      "Heat butter on a pan.",
      "Pour batter and cook both sides.",
      "Stack pancakes.",
      "Pour maple syrup.",
      "Serve warm."
    ]
  },
  {
    id: 14,
    name: "Chocolate Donut",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1000",
    rating: "4.8",
    time: "12 min",
    calories: "420 kcal",
    difficulty: "Medium",
    ingredients: [
      "2 Cups Flour",
      "Yeast",
      "Milk",
      "Butter",
      "Sugar",
      "Chocolate",
      "Sprinkles",
      "Oil"
    ],
    steps: [
      "Prepare soft dough.",
      "Rest dough for one hour.",
      "Cut donut shapes.",
      "Deep fry until golden.",
      "Melt chocolate.",
      "Dip donuts in chocolate.",
      "Decorate with sprinkles.",
      "Serve fresh."
    ]
  },
  {
    id: 15,
    name: "Ice Cream",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1000",
    rating: "4.9",
    time: "5 min",
    calories: "300 kcal",
    difficulty: "Easy",
    ingredients: [
      "2 Cups Fresh Cream",
      "1 Cup Condensed Milk",
      "Vanilla Essence",
      "Chocolate Chips",
      "Dry Fruits"
    ],
    steps: [
      "Whip fresh cream.",
      "Add condensed milk.",
      "Mix vanilla essence.",
      "Fold gently.",
      "Add chocolate chips.",
      "Freeze for 6 hours.",
      "Garnish with dry fruits.",
      "Serve chilled."
    ]
  },
  {
    id: 16,
    name: "Brownie",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1000",
    rating: "4.9",
    time: "25 min",
    calories: "480 kcal",
    difficulty: "Medium",
    ingredients: [
      "1 Cup Dark Chocolate",
      "1/2 Cup Butter",
      "1 Cup Sugar",
      "2 Eggs",
      "1 Cup Flour",
      "1 tsp Vanilla Essence",
      "1/4 tsp Salt",
      "Chocolate Chips"
    ],
    steps: [
      "Preheat oven to 180°C.",
      "Melt butter and chocolate together.",
      "Mix sugar and eggs until smooth.",
      "Add melted chocolate mixture.",
      "Fold in flour and vanilla.",
      "Pour batter into baking tray.",
      "Bake for 25 minutes.",
      "Cool, cut into squares and serve."
    ]
  },
  {
    id: 17,
    name: "Caesar Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1000",
    rating: "4.7",
    time: "15 min",
    calories: "220 kcal",
    difficulty: "Easy",
    ingredients: [
      "Lettuce",
      "Croutons",
      "Parmesan Cheese",
      "Caesar Dressing",
      "Grilled Chicken",
      "Black Pepper",
      "Salt"
    ],
    steps: [
      "Wash and chop lettuce.",
      "Grill chicken and slice it.",
      "Mix lettuce with dressing.",
      "Add croutons.",
      "Add grilled chicken.",
      "Sprinkle parmesan cheese.",
      "Season with pepper.",
      "Serve immediately."
    ]
  },
  {
    id: 18,
    name: "Ramen",
    image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=1000",
    rating: "4.8",
    time: "30 min",
    calories: "520 kcal",
    difficulty: "Medium",
    ingredients: [
      "Ramen Noodles",
      "Chicken Broth",
      "Boiled Egg",
      "Spring Onion",
      "Soy Sauce",
      "Garlic",
      "Ginger",
      "Mushrooms"
    ],
    steps: [
      "Boil ramen noodles.",
      "Prepare chicken broth.",
      "Add garlic and ginger.",
      "Mix soy sauce.",
      "Add mushrooms.",
      "Place noodles in bowl.",
      "Pour hot broth.",
      "Top with boiled egg and spring onion."
    ]
  },
  {
    id: 19,
    name: "Spring Rolls",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1000&auto=format&fit=crop",
    rating: "4.7",
    time: "18 min",
    calories: "290 kcal",
    difficulty: "Medium",
    ingredients: [
      "Spring Roll Sheets",
      "Cabbage",
      "Carrot",
      "Capsicum",
      "Soy Sauce",
      "Black Pepper",
      "Oil",
      "Salt"
    ],
    steps: [
      "Prepare vegetable filling.",
      "Cook vegetables lightly.",
      "Fill spring roll sheets.",
      "Roll tightly.",
      "Seal edges with flour paste.",
      "Deep fry until crispy.",
      "Drain excess oil.",
      "Serve with chili sauce."
    ]
  },
  {
    id: 20,
    name: "Sushi",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1000",
    rating: "4.9",
    time: "25 min",
    calories: "340 kcal",
    difficulty: "Hard",
    ingredients: [
      "Sushi Rice",
      "Nori Sheets",
      "Salmon",
      "Cucumber",
      "Avocado",
      "Soy Sauce",
      "Wasabi",
      "Pickled Ginger"
    ],
    steps: [
      "Cook sushi rice.",
      "Spread rice on nori sheet.",
      "Add salmon, cucumber and avocado.",
      "Roll tightly using bamboo mat.",
      "Cut into equal pieces.",
      "Arrange on serving plate.",
      "Serve with soy sauce, wasabi and ginger."
    ]
  },
];

function PopularRecipes() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

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

              <button
  className="popular-btn"
  onClick={() => {
    localStorage.setItem(
      "recipe",
      JSON.stringify(recipe)
    );

    localStorage.setItem(
      "recipeImage",
      recipe.image
    );

    navigate("/recipe");
  }}
>
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