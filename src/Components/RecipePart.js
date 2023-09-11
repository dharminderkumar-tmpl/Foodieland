import React from "react";
const recipePart = () => {
  const dummyData = [
    {
      id: 1,
      title: "Chicken Meatballs with Cream Cheese",
      image: "/Assets/meatballs.png",
    },
    {
      id: 2,
      title: "Chicken Meatballs with Cream Cheese",
      image: "/Assets/cheeseBurger.png",
    },
    {
        id: 3,
        title: "Chicken Meatballs with Cream Cheese",
        image: "/Assets/meatballs.png",
      },
      {
        id: 4,
        title: "Chicken Meatballs with Cream Cheese",
        image: "/Assets/cheeseBurger.png",
      },
      {
        id: 5,
        title: "Chicken Meatballs with Cream Cheese",
        image: "/Assets/meatballs.png",
      },
      {
        id: 6,
        title: "Chicken Meatballs with Cream Cheese",
        image: "/Assets/meatballs.png",

      },
  ];

  return (
    <div className="recipe">
      <div className="recipetitle">
        <h1>Simple and tasty recipes</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>

        <div className="recipeCards">
          {dummyData.map((data) => (
            <div className="card" key={data.id}>
              <img src={data.image} alt="salad" />

              <p className="card_name">{data.title}</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default recipePart;
