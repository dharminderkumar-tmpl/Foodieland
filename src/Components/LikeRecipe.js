import React from "react";
// import cheeseBurger from '../Assets/cheeseBurger.png';
const LikeRecipe = () => {
  return (
    <div className="mainrecipe1">    <div className="recipe1">
      <div className="recipetitle1">
        <h1>You may like these recipes</h1>
        {/* <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p> */}
      </div>{" "}
      <div className="recipeCards1">
        <div className="card1">
          <img src={"/Assets/vegSalad.png"} alt="salad" />
          <p className="card_name1">
            Mixed Tropical Fruit Salad with Superfood Boosts
          </p>
        </div>
        <div className="card1">
          <img src={"/Assets/beef.png"} alt="salad" />
          <p className="card_name1">Big and Juicy Wagyu Beef Cheeseburger</p>
        </div>
        <div className="card1">
          <img src={"/Assets/friedRice.png"} alt="salad" />
          <p className="card_name1">
            Healthy Japanese Fried Rice with Asparagus
          </p>
        </div>
        <div className="card1">
          <img src={"/Assets/tacoMeat.png"} alt="salad" />
          <p className="card_name1">Cauliflower Walnut Vegetarian Taco Meat</p>
        </div>
      </div>
    </div></div>

  );
};

export default LikeRecipe;
