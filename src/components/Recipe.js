import React from "react";
import Ingredients from "./Ingredients";
import "./Recipe.css";

const APP_ID = "6b67d371";
const APP_KEY = "1a739bc03d10134d7e179bb0b2ee951d";

class Recipe extends React.Component {
  state = {
    activeRecipe: [],
  };

  componentDidMount = async () => {
    try {
      const recipeName = this.props.location.state.title;
      const req = await fetch(
        `https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const result = await req.json();
      this.setState({ activeRecipe: result.hits[0].recipe });
      // console.log(this.state.activeRecipe);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const myRecipe = this.state.activeRecipe;

    return (
      <div className="selected-container">
        <div className="active-recipe">
          <img className="activeRecipe-img" src={myRecipe.image} alt="" />
          <h1 className="selected-recipe-name">{myRecipe.label}</h1>
          <p className="meal-type">{myRecipe.mealType}</p>
        </div>
        <div className="recipe-ingredients">
          {
            <Ingredients
              ingredients={myRecipe.ingredients}
              url={myRecipe.url}
              mealType={myRecipe.mealType}
            />
          }
        </div>
      </div>
    );
  }
}

export default Recipe;
