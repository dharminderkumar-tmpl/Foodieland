import React, { useState } from "react";

const dummyData = [
  {
    id: 1,
    image: "/Assets/breakfast.png",
    title: "Breakfast",
    background:
      "linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%)",
  },
  {
    id: 2,
    image: "/Assets/vegan.png",
    title: "Vegan",
    background:
      "linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%)",
  },
  {
    id: 3,
    image: "/Assets/meat.png",
    title: "Meat",
    background:
      "linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%)",
  },
  {
    id: 4,
    image: "/Assets/dessert.png",
    title: "Dessert",
    background:
      "linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%)",
  },
  {
    id: 5,
    image: "/Assets/lunch.png",
    title: "Lunch",
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)",
  },
  {
    id: 6,
    image: "/Assets/chocolate.png",
    title: "Chocolate",
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)",
  },
];

const Categories = () => {
  return (
    <div className="maincategories">
      <div className="categories">
        <h1>Categories</h1>
        <button>
          <b>View All Categories</b>
        </button>
      </div>
      <div className="catImg">
        {dummyData.map((category) => (
          <div
            key={category.id}
            className={`Img${category.id}`}
            style={{ backgroundImage: category.background }}
          >
            <img src={category.image} alt={category.title} />
            <p>{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
