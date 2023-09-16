import React from "react";
import DirectionsRecipePage from "./DirectionsRecipePage";
const IngredientsandRecipe = ({ dataFromAPI }) => {
  return (
    <div className="ingredientsandrecipemaindiv">
      <div className="mainDish">
        <div className="Ingredients">
          <h1>Ingredients</h1>
          <div className="leftmainDish">
            <h2>{dataFromAPI?.ingredients?.title}</h2>
            {dataFromAPI?.ingredients?.map((section, index) => (
              <div key={index}>
                <span>{section.title}</span>
                <ul className="mingredient">
                  {section?.ingredients?.map((ingredient, ingredientIndex) => (
                    <li key={ingredientIndex} className="leftmainDish">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <DirectionsRecipePage dataFromAPI={dataFromAPI} />
        </div>
        <div className="RecipeRight">
          <div className="RecipeRightUpper">
            <h1>Other Recipe</h1>
            <div className="rightRecipeDishmain">
              <div className="rightRecipeDish">
                <img src={"/Assets/meatballs.png"} alt="salad" />
                <h2>
                  Chicken Meatball with Creamy Cheese Chicken Meatball with
                  Creamy Cheese Chicken Meatball with Creamy Cheese
                </h2>
              </div>
              <div className="rightRecipeDish">
                <img src={"/Assets/meatballs.png"} alt="salad" />
                <h2>
                  The Creamiest Creamy Chicken an The Creamiest Creamy Chicken
                  an The Creamiest Creamy Chicken an{" "}
                </h2>
              </div>
              <div className="rightRecipeDish">
                <img src={"/Assets/potChicken.png"} alt="salad" />
                <h2>
                  The Best Easy One Pot Chicken and Rice The Best Easy One Pot
                  Chicken and Rice..The Best Easy One Pot Chicken and Rice..
                </h2>
              </div>
            </div>
          </div>

          <div className="adimage">
            <div className="adtext">
              <h2>Don't forget to eat healthy</h2>
            </div>
            <div className="advertise">
              <img src="/Assets/advertise.png" />
            </div>
            <div className="weblink">www.foodieland.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientsandRecipe;
