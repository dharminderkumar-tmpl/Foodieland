import React from "react";
const dummyData = [
  {
    id: 1,
    title: "Mixed Tropical Fruit Salad with Superfood Boosts",
    image: "/Assets/vegSalad.png",
  },
  {
    id: 2,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    image: "/Assets/beef.png",
  },
  {
    id: 3,
    title: "Chicken Meatballs with Cream Cheese",
    image: "/Assets/beef.png",
  },
  {
    id: 4,
    title: "Healthy Japanese Fried Rice with Asparagus",
    image: "/Assets/beef.png",
  },
];


const LikeRecipe = () => {
  return (
    <div className="mainrecipe1">
      {" "}
      <div className="recipe1">
        <div className="recipetitle1">
          <h1>You may like these recipes</h1>
          {/* <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p> */}
        </div>{" "}
        <div className="recipeCards1">
          {dummyData.map((data) => (
            <div className="card1" key={data.id}>
              <img src={data.image} alt="salad" />

              <p className="card_name1">{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LikeRecipe;
