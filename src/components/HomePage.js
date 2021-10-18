import React from "react";
import { useState, useEffect } from "react";
import RecipeContainers from "./RecipeContainers";

const HomePage = () => {
  const APP_ID = "6b67d371";
  const APP_KEY = "1a739bc03d10134d7e179bb0b2ee951d";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getLocalRecipes = () => {
      if (localStorage.getItem("search") === null) {
        localStorage.setItem("search", JSON.stringify([]));
      } else {
        let localSearch = JSON.parse(localStorage.getItem("search"));
        setSearch(localSearch);
      }
    };
    getLocalRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  useEffect(() => {
    localStorage.setItem("search", JSON.stringify(search));
  }, [search]);

  return (
    <>
      <header className="title">Recipe finder</header>
      <p className="caption">Are you looking for a dish recipe?</p>
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          placeholder="Search any dish"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-btn" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>

      <div className="recipe">
        {recipes.map((recipe) => (
          <RecipeContainers
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            type={recipe.recipe.cuisineType}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
