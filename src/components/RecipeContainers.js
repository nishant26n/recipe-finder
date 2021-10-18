import React, { useEffect } from "react";
import "./RecipeContainer.css";
import image_not_found from "../Image/image_not_found.png";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const RecipeContainers = ({ title, calories, type, image }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div data-aos="fade-up" className="container">
      <img
        className="recipe-img"
        src={image}
        alt=""
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = image_not_found;
        }}
      />
      <h1 className="recipe-name">{title}</h1>
      <p className="recipe-type">{type}</p>
      <p className="calories">Calories: {calories}</p>
      <Link to={{ pathname: `recipe/${title}`, state: { title } }}>
        <button className="recipe-btn">Get recipe</button>
      </Link>
    </div>
  );
};

export default RecipeContainers;
