import React from "react";

const IngredientsandRecipe = () => {
  return (
    <div className="ingredientsandrecipemaindiv">
      <div className="mainDish">
        <div className="Ingredients">
          <h1>Ingredients</h1>
          <div className="leftmainDish">
            <h2>For main dish</h2>
            <div className="radio">
              <input type="radio" id="first" name="" value="" />
              <label for="first">Lorem ipsum dolor sit amet</label>
            </div>
            <div className="radio">
              <input type="radio" id="second" name="" value="" />
              <label for="second">Lorem ipsum dolor sit amet</label>
            </div>
            <div className="radio">
              <input type="radio" id="third" name="" value="" />
              <label for="third">Lorem ipsum dolor sit amet</label>
            </div>
            <div className="radio">
              <input type="radio" id="fourth" name="" value="" />
              <label for="fourth">Lorem ipsum dolor sit amet</label>
            </div>
          </div>
          <div className="leftmainDish">
            <h2>For sauce recipe</h2>
            <div className="radio">
              <input type="radio" id="first" name="" value="" />
              <label for="first">Lorem ipsum dolor sit amet</label>
            </div>
            <div className="radio">
              <input type="radio" id="second" name="" value="" />
              <label for="second">Lorem ipsum dolor sit amet</label>
            </div>
            <div className="radio">
              <input type="radio" id="third" name="" value="" />
              <label for="third">Lorem ipsum dolor sit amet</label>
            </div>
          </div>
        </div>
        <div className="RecipeRight">
          <h1>Other Recipe</h1>
          <div className="rightRecipeDishmain">
            <div className="rightRecipeDish">
              <img src={"/Assets/meatballs.png"} alt="salad" />
              <h2>Chicken Meatball with Creamy Cheese..</h2>
            </div>
            <div className="rightRecipeDish">
              <img src={"/Assets/tacoMeat.png"} alt="salad" />
              <h2>The Creamiest Creamy Chicken an..</h2>
            </div>
            <div className="rightRecipeDish">
              <img src={"/Assets/potChicken.png"} alt="salad" />
              <h2>The Best Easy One Pot Chicken and Rice..</h2>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default IngredientsandRecipe;
