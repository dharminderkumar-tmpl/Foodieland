import React from "react";

const RecipeSectionFirst = () => {
  return (
    <div className="MainRecipeSectionFirst">
      <h1>Health Japanese Fried Rice</h1>
      <div className="recipemain">
        <div className="recipeImg">
          <img src={"/Assets/recipebanner.png"} alt="recipe banner" />
        </div>
        <div className="nutrientInfo">
          <h3>Nutrition Information</h3>
          <div className="nuts">
            <div className="nutrient">
              <h4>Calories</h4>
              <p>291.19KCal</p>
            </div>
            <div className="nutrient">
              <h4>Total Fat</h4>
              <p>10.7g</p>
            </div>
            <div className="nutrient">
              <h4>Protein</h4>
              <p>7.9g</p>
            </div>
            <div className="nutrient">
              <h4>Carbohydrate</h4>
              <p>22.3g</p>
            </div>
            <div className="nutrient">
              <h4>Cholesterol</h4>
              <p>37.4mg</p>
            </div>
          </div>
          
        </div>
      </div>
      <div className="recipeText">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  );
};

export default RecipeSectionFirst;
