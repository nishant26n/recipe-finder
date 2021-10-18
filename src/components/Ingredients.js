import React, { useState, useEffect } from "react";
import "./Ingredients.css";
import Loader from "./Loader";

const Ingredients = ({ ingredients, url }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div data-aos="fade-left" className="ingredients">
          <h2 className="ingredient-title">Ingredients</h2>
          <ul className="ingredient-list">
            {ingredients &&
              ingredients.map((ingredient, i) => {
                return (
                  <li className="ingredient-list-step" key={i}>
                    {ingredient.text}
                  </li>
                );
              })}
          </ul>

          <button className="full-recipe-btn" onClick={() => window.open(url)}>
            See full recipe
          </button>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Ingredients;
